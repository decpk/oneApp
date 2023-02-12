import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import { IconAsButton } from "@/atoms";
import { ToolbarWrapper } from "../../atoms";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { StyledBreadcrumbs } from "./FileExplorerContentToolbar.styles";
import OneAppButton from "../../atoms/OneAppButton/OneAppButton";
import {CgFormatSlash} from 'react-icons/cg'

interface IFileExplorerContentToolbar {
  path: string[];
  setPath: React.Dispatch<React.SetStateAction<string[]>>;
  handleBackClick   : () => void;
  handleForwardClick: () => void;
  forwardStack      : string[];
}

function FileExplorerContentToolbar(props: IFileExplorerContentToolbar) {
  const { path, setPath, handleBackClick, handleForwardClick, forwardStack } = props;
  function handleClick(index: number) {
    const newPath = path.slice(0, index + 1 );
    setPath(newPath)
  }

  const breadcrumbs = path
    .map((pathStr, index) => (
      <OneAppButton
        key = {index}
        sx  = {{ 
          padding : "2px 6px !important",
          minWidth: "auto !important",
          color   : `${index === path.length - 1 ? 'inherit':'#777'} !important`
        }}
        disabled = {index === path.length - 1}
        onClick  = {() => handleClick(index)}
      >
        {pathStr || <CgFormatSlash />}
      </OneAppButton>
    ));

  return (
    <ToolbarWrapper>
      <StyledBreadcrumbs separator = {<HiChevronRight />} aria-label = "breadcrumb">
        {breadcrumbs}
      </StyledBreadcrumbs>
    </ToolbarWrapper>
  );
}

export default FileExplorerContentToolbar;
