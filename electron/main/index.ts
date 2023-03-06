import { app, BrowserWindow, shell, ipcMain, contextBridge } from "electron";
import { release } from "node:os";
import { join } from "node:path";
import * as fs from "node:fs/promises";

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = join(__dirname, "../");
process.env.DIST = join(process.env.DIST_ELECTRON, "../dist");
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, "../public")
  : process.env.DIST;

// Disable GPU Acceleration for Windows 7
if (release().startsWith("6.1")) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win: BrowserWindow | null = null;
// Here, you can also use other preload
const preload = join(__dirname, "../preload/index.js");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = join(process.env.DIST, "index.html");

async function createWindow() {
  win = new BrowserWindow({
    title: "Dev Apps",
    icon: join(process.env.PUBLIC, "favicon.ico"),
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      // nodeIntegration: true,
      contextIsolation: true,
    },
    width: 1000,
    height: 700,
  });

  win.maximize();

  if (process.env.VITE_DEV_SERVER_URL) {
    // electron-vite-vue#298
    win.loadURL(url);
    // Open devTool if the app is not packaged
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https:")) shell.openExternal(url);
    return {
      action: "deny",
    };
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") app.quit();
});

app.on("second-instance", () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});

// New window example arg: new windows url
ipcMain.handle("open-win", (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`);
  } else {
    childWindow.loadFile(indexHtml, {
      hash: arg,
    });
  }
});

ipcMain.handle("paths", async () => {
  return {
    home: app.getPath("home"),
    desktop: app.getPath("desktop"),
    documents: app.getPath("documents"),
    downloads: app.getPath("downloads"),
    music: app.getPath("music"),
    pictures: app.getPath("pictures"),
    videos: app.getPath("videos"),
    exe: app.getPath("exe"),
    appData: app.getPath("appData"),
    userData: app.getPath("userData"),
    sessionData: app.getPath("sessionData"),
    temp: app.getPath("temp"),
    // ONLY AVAILABLE FOR WINDOWS SO COMMENTING FOR NOW
    // recent     : app.getPath("recent"),
    logs: app.getPath("logs"),
    crashDumps: app.getPath("crashDumps"),
  };
});

ipcMain.handle("readdir", async (_, args) => {
  try {
    const { path } = args as any;
    const files = await fs.readdir(path, {
      withFileTypes: true,
    });

    const dirDataStat = await Promise.allSettled(
      files.map((o) => fs.stat(join(path, o.name)))
    );

    const dirData = files.map((o, i) => {
      const promiseStatResult = dirDataStat.at(i);
      const fileStat =
        promiseStatResult.status === "fulfilled" ? promiseStatResult.value : {};
      const rest = {
        isBlockDevice: o.isBlockDevice(),
        isCharacterDevice: o.isCharacterDevice(),
        isDirectory: o.isDirectory(),
        isFIFO: o.isFIFO(),
        isFile: o.isFile(),
        isSocket: o.isSocket(),
        isSymbolicLink: o.isSymbolicLink(),
      };
      return {
        ...o,
        ...rest,
        _stat: fileStat,
      };
    });
    return { data: { dirData, dirDataStat }, error: null };
  } catch (error) {
    return { data: { dirData: null, dirDataStat: null }, error };
  }
});

ipcMain.handle("openPath", async (_, args) => {
  const { path } = args as any;
  await shell.openPath(path);
});
