import React from "react";
import { ToolbarWrapper } from "../../atoms";
import { HiChevronRight } from "react-icons/hi";
import { StyledBreadcrumbs } from "./FileExplorerContentToolbar.styles";
import OneAppButton from "../../atoms/OneAppButton/OneAppButton";
import { CgFormatSlash } from "react-icons/cg";

interface IFileExplorerContentToolbar {
  path              : string[];
  setPath           : React.Dispatch<React.SetStateAction<string[]>>;
  handleBackClick   : () => void;
  handleForwardClick: () => void;
  forwardStack      : string[];
}

function FileExplorerContentToolbar(props: IFileExplorerContentToolbar) {
  const { path, setPath, handleBackClick, handleForwardClick, forwardStack } = 
    props;
  function handleClick(index: number) {
    const newPath = path.slice(0, index + 1);
    setPath(newPath);
  }

  const breadcrumbs = path.map((pathStr, index) => (
    <OneAppButton
      sx={{
        padding : "2px 6px !important",
        minWidth: "auto !important",
        color   : `${index === path.length - 1 ? "inherit" : "#777"} !important`,
      }}
      disabled = {index === path.length - 1}
      onClick  = {() => handleClick(index)}
      key      = {index}
    >
      <>{pathStr || <CgFormatSlash />}</>
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
