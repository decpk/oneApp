import { EShowItemAs } from "../../../constants/FileExplorer";

interface IUserPreferencesInitialState {
  fileExplorer: {
    showItemAs: EShowItemAs;
  };
}

export type { IUserPreferencesInitialState };
