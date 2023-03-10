import { PayloadAction } from "@reduxjs/toolkit";
import { IFileExplorerInitialState } from "../FileExplorer.types";

interface IsetPathPayload {
  fileExplorerNewPath: string[];
}

export function setPath(
  state: IFileExplorerInitialState,
  action: PayloadAction<IsetPathPayload>
) {
  if (action.payload.fileExplorerNewPath.length)
    state.path = action.payload.fileExplorerNewPath;
}
