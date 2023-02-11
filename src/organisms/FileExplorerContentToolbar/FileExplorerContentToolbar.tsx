import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { IconAsButton } from "@/atoms";
import { ToolbarWrapper } from "../../atoms";

interface IFileExplorerContentToolbar {
  path              : string[];
  handleBackClick   : () => void;
  handleForwardClick: () => void;
  forwardStack      : string[];
}

function FileExplorerContentToolbar(props: IFileExplorerContentToolbar) {
  const { path, handleBackClick, handleForwardClick, forwardStack } = props;

  return (
    <ToolbarWrapper>
      <div> {path.filter(Boolean).join(" - ")} </div>
    </ToolbarWrapper>
  );
}

export default FileExplorerContentToolbar;
