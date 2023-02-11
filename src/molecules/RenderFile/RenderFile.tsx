import React from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { FcFolder, FcFile } from "react-icons/fc";
import { AiOutlineFile } from "react-icons/ai";
import { setCurrentPath } from "../../redux/components/fileExplorerSlice";
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
  fileExplorer     : any;
  setPath          : React.Dispatch<React.SetStateAction<string[]>>;
  setForwardStack  : React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentPath   : ActionCreatorWithPayload<string[], string>;
}

function RenderFile(props: IRenderFile): JSX.Element {
  const {
    name,
    path,
    setPath,
    isDirectory,
    setForwardStack,
    fileExplorer,
    setCurrentPath,
  } = props;

  
  function onDoubleClick() {
    if (isDirectory) setPath([...path, name]);
    setCurrentPath([...path, name]);
    setForwardStack([]);
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") onDoubleClick();
  }

  return (
    <RenderFileWrapper
      key           = {name}
      onDoubleClick = {onDoubleClick}
      onKeyDown     = {onKeyDown}
    >
      {isDirectory ? <FcFolder /> : <FcFile />}
      <StyledFileName>{name}</StyledFileName>
    </RenderFileWrapper>
  );
}

const mapStateToProps = (state: { fileExplorer: any }, _props: any) => ({
  fileExplorer: state.fileExplorer,
});
const mapDispatch = { setCurrentPath };

export default connect(mapStateToProps, mapDispatch)(RenderFile);
