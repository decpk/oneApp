import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  curentPath: string[];
};

const fileExplorerSlice = createSlice({
  name        : "fileExplorer",
  initialState: {
    curentPath: ["~"],
  },
  reducers: {
    setCurrentPath(state: IState, action: PayloadAction<string[]>) {
      state.curentPath = action.payload;
    },
  },
});

// Export actions
export const { setCurrentPath } = fileExplorerSlice.actions;

// Export reducer
export default fileExplorerSlice.reducer;
