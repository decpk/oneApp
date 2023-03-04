import { IFolderPaths } from "../../../interfaces/fs";

interface IFileExplorerInitialState {
    folderPaths : IFolderPaths;
    path        : string[];
    dirData     : Array<Record<string, any>>;
    forwardStack: string [];
}

export type { IFileExplorerInitialState };
