import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { StyledFileExplorerToolbarWrapper } from "./FileExplorerToolbar.styles";
import { IconAsButton } from "@/atoms";

interface IFileExplorerToolbar {
  path           : string[];
  handleBackClick: () => void;
  handleForwardClick: () => void;
  forwardStack   : string [];
}

function FileExplorerToolbar(props: IFileExplorerToolbar) {
  const { path, handleBackClick, handleForwardClick, forwardStack } = props;

  return (
    <StyledFileExplorerToolbarWrapper elevation = {4}>
      
      {/* BACK BUTTON */}
      <IconAsButton onClick={handleBackClick} disabled={path.filter(Boolean).length === 1}>
        <IoMdArrowRoundBack />
      </IconAsButton>

      {/* FORWARD BUTTON */}
      <IconAsButton onClick={handleForwardClick} disabled={forwardStack.filter(Boolean).length === 0}>
        <IoMdArrowRoundForward />
      </IconAsButton>

      <div> {path.filter(Boolean).join(" - ")} </div>
    </StyledFileExplorerToolbarWrapper>
  );
}

export default FileExplorerToolbar;
