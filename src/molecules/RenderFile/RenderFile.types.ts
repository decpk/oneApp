export interface IRenderFile {
  isDirectory      : boolean;
  isFile           : boolean;
  isSymbolicLink   : boolean;
  isBlockDevice    : boolean;
  isCharacterDevice: boolean;
  isFIFO           : boolean;
  isSocket         : boolean;
  name             : string;
  path             : string[];
  setPath          : React.Dispatch<React.SetStateAction<string[]>>;
  setForwardStack  : React.Dispatch<React.SetStateAction<string[]>>;
}