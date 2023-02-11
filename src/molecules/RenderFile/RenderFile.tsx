import React from "react";
import { FcFolder, FcFile } from "react-icons/fc";
import { AiOutlineFile } from "react-icons/ai";
import { setCurrentPath } from "@/redux/fileExplorerSlice";
import { RenderFileWrapper, StyledFileName } from "./RenderFile.styles";
import { Tooltip } from "@mui/material";
import { getFileIcon, getFolderIcon } from "../../constants/FileIcon";
import { IRenderFile } from "./RenderFile.types";

function RenderFile(props: IRenderFile): JSX.Element {
  const { name, path, setPath, isDirectory, setForwardStack, setCurrentPath } = 
    props;

  function onDoubleClick() {
    if (isDirectory) {
      setPath([...path, name]);
      setCurrentPath([...path, name]);
      setForwardStack([]);
    } else {
      (window as any)?.electronAPI?.openPath([...path, name].join('/'));
    }
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") onDoubleClick();
  }

  return (
    <Tooltip title = {name} enterDelay = {500} arrow>
      <RenderFileWrapper
        key           = {name}
        onDoubleClick = {onDoubleClick}
        onKeyDown     = {onKeyDown}
        name          = {name}
      >
        {isDirectory ? (
          <img src = {getFolderIcon(name.toLowerCase())} alt = "js" />
        ) : (
          <img src = {getFileIcon(name.toLowerCase())} alt = "js" />
        )}
        <StyledFileName>{name}</StyledFileName>
      </RenderFileWrapper>
    </Tooltip>
  );
}

export default RenderFile;
