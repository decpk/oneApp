import { PayloadAction } from "@reduxjs/toolkit";
import { IFileExplorerInitialState } from "../FileExplorer.types";

interface IsetPathPayload {
  fileExplorerNewPath: string [];
}

export function setPath(
  state: IFileExplorerInitialState,
  action: PayloadAction<IsetPathPayload>
) {
  state.path = action.payload.fileExplorerNewPath;
}
