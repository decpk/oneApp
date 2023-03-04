import { PayloadAction } from "@reduxjs/toolkit";
import { IFileExplorerInitialState } from "../FileExplorer.types";

interface IHandleForwardClickPayload {}

export function handleForwardClick(
  state: IFileExplorerInitialState,
  action: PayloadAction<IHandleForwardClickPayload>
) {
  const { path, forwardStack } = state;
  const [first, ...restForwardStack] = [...forwardStack];
  if (first) {
    state.path = [...path, first];
    state.forwardStack = [...restForwardStack];
  }
}
