import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFileExplorerInitialData } from "./getUserPreferencesInitialData";
import reducers from "./reducer-helpers";

const userPreferencesSlice = createSlice({
  name: "user-preferences",
  initialState: getFileExplorerInitialData(),
  reducers,
});

// Export actions
export const userPreferencesActions = userPreferencesSlice.actions;

// Export reducer
export default userPreferencesSlice.reducer;
