import { IFolderPaths } from "../../../../interfaces/fs";
import { PayloadAction } from "@reduxjs/toolkit";
import { IFileExplorerInitialState } from "../FileExplorer.types";

interface IsetDirDataPayload {
  fileExplorerFolderData: Array<Record<string, any>>;
}

export function setDirData(
  state: IFileExplorerInitialState,
  action: PayloadAction<IsetDirDataPayload>
) {
  state.dirData = action.payload.fileExplorerFolderData;
}
