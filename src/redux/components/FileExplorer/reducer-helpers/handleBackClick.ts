import { PayloadAction } from "@reduxjs/toolkit";
import { IFileExplorerInitialState } from "../FileExplorer.types";

interface IHandleBackClickPayload {}

export function handleBackClick(
  state: IFileExplorerInitialState,
  action: PayloadAction<IHandleBackClickPayload>
) {
  const { path, forwardStack } = state;
  const pathClone = [...path];
  const lastPath = pathClone.pop();
  state.path = [...pathClone];
  if (lastPath) state.forwardStack = [lastPath, ...forwardStack];
}
