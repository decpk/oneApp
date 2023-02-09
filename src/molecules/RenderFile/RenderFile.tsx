import React from "react";
import { FcFolder, FcFile } from "react-icons/fc";
import { AiOutlineFile } from "react-icons/ai";
import { RenderFileWrapper, StyledFileName } from "./RenderFile.styles";

interface IRenderFile {
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
}

export default function RenderFile(props: IRenderFile): JSX.Element {
  const { name, path, setPath, isDirectory } = props;

  function onDoubleClick() {
    if (isDirectory) setPath([...path, name]);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if(e.key === "Enter") onDoubleClick();
  }

  return (
    <RenderFileWrapper
      key = {name}
      onDoubleClick = {onDoubleClick}
      onKeyDown     = {onKeyDown}
    >
      {isDirectory ? <FcFolder /> : <FcFile />}
      <StyledFileName>{name}</StyledFileName>
    </RenderFileWrapper>
  );
}
