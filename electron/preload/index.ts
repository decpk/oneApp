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
};

// window.electronAPI
contextBridge.exposeInMainWorld("electronAPI", electronAPI);
