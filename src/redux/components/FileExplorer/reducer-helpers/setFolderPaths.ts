import { IFolderPaths } from "../../../../interfaces/fs";
import { PayloadAction } from "@reduxjs/toolkit";
import { IFileExplorerInitialState } from "../FileExplorer.types";

interface IFolderPathsPayload {
  FileExplorerfolderPaths: IFolderPaths;
}

export function setFolderPaths(
  state: IFileExplorerInitialState,
  action: PayloadAction<IFolderPathsPayload>
) {
  state.folderPaths = action.payload.FileExplorerfolderPaths;
}
