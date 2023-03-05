import { PayloadAction } from "@reduxjs/toolkit";
import { IUserPreferencesInitialState } from "../UserPreferences.types";
import { EShowItemAs } from "../../../../constants/FileExplorer";

interface ISetShowItemAs {
  itemType: EShowItemAs;
}

export function setShowItemAs(
  state: IUserPreferencesInitialState,
  action: PayloadAction<ISetShowItemAs>
) {
  state.fileExplorer.showItemAs = action.payload.itemType;
}
