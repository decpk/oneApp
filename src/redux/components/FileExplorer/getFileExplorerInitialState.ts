import { IFileExplorerInitialState } from "./FileExplorer.types";

const fileExplorerInitialState: IFileExplorerInitialState = {
  folderPaths: {},
  path: [],
  dirData: [],
  forwardStack: [],
};

export function getFileExplorerInitialData() {
  let fileExplorerState: IFileExplorerInitialState = fileExplorerInitialState;

  return fileExplorerState;
}
