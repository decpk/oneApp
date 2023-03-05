import { IUserPreferencesInitialState } from "./UserPreferences.types";
import { EShowItemAs } from "../../../constants/FileExplorer";

const fileExplorerInitialState: IUserPreferencesInitialState = {
  fileExplorer: {
    showItemAs: EShowItemAs.ICON,
  },
};

export function getFileExplorerInitialData() {
  let fileExplorerState: IUserPreferencesInitialState =
    fileExplorerInitialState;

  return fileExplorerState;
}
