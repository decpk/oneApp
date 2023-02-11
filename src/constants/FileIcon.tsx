import {
  getMaterialFileIcon,
  getMaterialFolderIcon,
} from "file-extension-icon-js";


export function getFileIcon(name: string) {
    return getMaterialFileIcon(name);
}

export function getFolderIcon(name: string) {
    return getMaterialFolderIcon(name);
}
