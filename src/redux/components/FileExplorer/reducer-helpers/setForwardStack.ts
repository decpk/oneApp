import { PayloadAction } from "@reduxjs/toolkit";
import { IFileExplorerInitialState } from "../FileExplorer.types";

interface IsetForwardStackPayload {
  newforwardStack: string[];
}

export function setForwardStack(
  state: IFileExplorerInitialState,
  action: PayloadAction<IsetForwardStackPayload>
) {
  state.forwardStack = action.payload.newforwardStack;
}
