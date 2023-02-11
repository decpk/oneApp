import React from "react";
import { FcFolder, FcFile } from "react-icons/fc";
import { AiOutlineFile } from "react-icons/ai";
import { RenderFileWrapper, StyledFileName } from "./RenderFile.styles";
import { Tooltip } from "@mui/material";

interface IRenderFile {
  isDirectory: boolean;
  isFile: boolean;
  isSymbolicLink: boolean;
  isBlockDevice: boolean;
  isCharacterDevice: boolean;
  isFIFO: boolean;
  isSocket: boolean;
  name: string;
  path: string[];
  setPath: React.Dispatch<React.SetStateAction<string[]>>;
  setForwardStack: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function RenderFile(props: IRenderFile): JSX.Element {
  const { name, path, setPath, isDirectory, setForwardStack } = props;

  function onDoubleClick() {
    if (isDirectory) setPath([...path, name]);
    setForwardStack([]);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") onDoubleClick();
  }

  return (
    <Tooltip title={name} arrow>
      <RenderFileWrapper
        key={name}
        onDoubleClick={onDoubleClick}
        onKeyDown={onKeyDown}
        name={name}
      >
        {isDirectory ? <FcFolder /> : <FcFile />}
        <StyledFileName>{name}</StyledFileName>
      </RenderFileWrapper>
    </Tooltip>
  );
}
