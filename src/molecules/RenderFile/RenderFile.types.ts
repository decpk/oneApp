import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface IRenderFile {
  isDirectory: boolean;
  isFile: boolean;
  isSymbolicLink: boolean;
  isBlockDevice: boolean;
  isCharacterDevice: boolean;
  isFIFO: boolean;
  isSocket: boolean;
  name: string;
  setForwardStack: React.Dispatch<React.SetStateAction<string[]>>;
  fileExplorer: any;
}
