import { contextBridge, ipcRenderer } from "electron";

const electronAPI = {
  getPaths: async () => {
    const result = await ipcRenderer.invoke("paths");
    return result;
  },
  readdir: async (path: string) => {
    const filesInfo = await ipcRenderer.invoke("readdir", {path});
    return filesInfo;
  },
  openPath: async (path: string) => {
    const response = await ipcRenderer.invoke("openPath", {path});
    return response;
  },
};

// window.electronAPI
contextBridge.exposeInMainWorld("electronAPI", electronAPI);
