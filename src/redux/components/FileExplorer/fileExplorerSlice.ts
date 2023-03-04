import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFileExplorerInitialData } from './getFileExplorerInitialState';
import reducers from './reducer-helpers';

const fileExplorerSlice = createSlice({
  name        : "fileExplorer",
  initialState: getFileExplorerInitialData(),
  reducers,
});

// Export actions
export const fileExplorerActions = fileExplorerSlice.actions;

// Export reducer
export default fileExplorerSlice.reducer;
