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
  paths: IFsPaths | null;
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

const ignoredPaths = ["appData", "userData", "sessionData", "temp", 'logs'] ;

const FileExplorerFolders = (props: Props) => {
  const { paths } = props;
  return (
    <StyledFoldersWrapper>
      {Object.entries(paths || {})
        .filter(([pathName]) => !ignoredPaths.includes(pathName))
        .map(([k, v]: [string, any]) => {
          return (
            <OneAppButton label = {k} key = {k}>
              {React.createElement(folderIconMap[k as keyof IFsPaths])}
            </OneAppButton>
          );
        })}
    </StyledFoldersWrapper>
  );
};

export default FileExplorerFolders;
