import { contextBridge, ipcRenderer } from "electron";

const electronAPI = {
  getHomePath: async () => {
    const result = await ipcRenderer.invoke("path");
    return result;
  },
  readdir: async (path: string) => {
    const filesInfo = await ipcRenderer.invoke("readdir", {path});
    return filesInfo;
  },
};

// window.electronAPI
contextBridge.exposeInMainWorld("electronAPI", electronAPI);
