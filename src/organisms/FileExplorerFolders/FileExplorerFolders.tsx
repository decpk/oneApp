import React from "react";
import { IFolderPaths } from "../../interfaces/fs";
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
import { useAppSelector } from "../../hooks";
import { useAppDispatch } from "../../hooks/index";
import { fileExplorerActions } from "../../redux/components/FileExplorer/fileExplorerSlice";

const folderIconMap: Record<keyof IFolderPaths, any> = {
  home: FcHome,
  desktop: BiDesktop,
  documents: FcDocument,
  downloads: FcDownload,
  music: FcMusic,
  pictures: FcPicture,
  videos: FcVideoCall,
  exe: BiPackage,
  appData: BiBorderNone,
  userData: BiBorderNone,
  sessionData: BiBorderNone,
  temp: FcClock,
  logs: BiBorderNone,
  crashDumps: BiTrash,
};

const ignoredPaths = [
  "appData",
  "userData",
  "sessionData",
  "temp",
  "logs",
  "crashDumps",
  "exe",
];

const FileExplorerFolders = () => {
  const { path, folderPaths } = useAppSelector((state) => state.fileExplorer);

  const dispatch = useAppDispatch();
  function setPath(fileExplorerNewPath: string[]) {
    dispatch(
      fileExplorerActions.setPath({
        fileExplorerNewPath,
      })
    );
  }

  // TODO: CHANGE SEPARATOR
  const pathAsString = path.join("/");

  function onSelectPath(selectedPath: string) {
    setPath(selectedPath.split("/"));
  }

  return (
    <StyledFoldersWrapper>
      {Object.entries(folderPaths || {})
        .filter(([pathName]) => !ignoredPaths.includes(pathName))
        .map(([k, v]: [string, string]) => {
          return (
            <OneAppButton
              key={k}
              label={k}
              isSelected={pathAsString === v}
              onClick={() => onSelectPath(v)}
            >
              {React.createElement(folderIconMap[k as keyof IFsPaths])}
            </OneAppButton>
          );
        })}
    </StyledFoldersWrapper>
  );
};

export default FileExplorerFolders;
