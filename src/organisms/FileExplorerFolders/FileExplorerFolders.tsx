import React from "react";
import { IFsPaths } from "../../interfaces/fs";
import { StyledFoldersWrapper } from "./FileExplorerFolders.style";
import OneAppButton from "../../atoms/OneAppButton";
import { IconType } from "react-icons/lib";
import {
  FcHome,
  FcDocument,
  FcDownload,
  FcMusic,
  FcPicture,
  FcVideoCall,
  FcFullTrash,
  FcClock,
} from "react-icons/fc";
import { BiDesktop, BiTrash, BiBorderNone, BiPackage } from "react-icons/bi";

type Props = {
  path : string[];
  paths: IFsPaths | null;
  setPath: React.Dispatch<React.SetStateAction<string[]>>;
};

const folderIconMap: Record<keyof IFsPaths, any> = {
  home       : FcHome,
  desktop    : BiDesktop,
  documents  : FcDocument,
  downloads  : FcDownload,
  music      : FcMusic,
  pictures   : FcPicture,
  videos     : FcVideoCall,
  exe        : BiPackage,
  appData    : BiBorderNone,
  userData   : BiBorderNone,
  sessionData: BiBorderNone,
  temp       : FcClock,
  logs       : BiBorderNone,
  crashDumps : BiTrash,
};

const ignoredPaths = ["appData", "userData", "sessionData", "temp", "logs", 'crashDumps', 'exe'];

const FileExplorerFolders = (props: Props) => {
  const { path, paths, setPath } = props;
  // TODO: CHANGE SEPARATOR
  const pathAsString = path.join("/");

  function onSelectPath(selectedPath: string) {
    setPath(selectedPath.split('/'))
  }

  return (
    <StyledFoldersWrapper>
      {Object.entries(paths || {})
        .filter(([pathName]) => !ignoredPaths.includes(pathName))
        .map(([k, v]: [string, string]) => {
          return (
            <OneAppButton
              key        = {k}
              label      = {k}
              isSelected = {pathAsString === v}
              onClick    = {() => onSelectPath(v)}
            >
              {React.createElement(folderIconMap[k as keyof IFsPaths])}
            </OneAppButton>
          );
        })}
    </StyledFoldersWrapper>
  );
};

export default FileExplorerFolders;
