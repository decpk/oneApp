import React from "react";
import { ToolbarWrapper } from "../../atoms";
import { HiChevronRight } from "react-icons/hi";
import { StyledBreadcrumbs } from "./FileExplorerContentToolbar.styles";
import OneAppButton from "../../atoms/OneAppButton/OneAppButton";
import { CgFormatSlash } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { fileExplorerActions } from "../../redux/components/FileExplorer/fileExplorerSlice";

function FileExplorerContentToolbar() {
  const dispatch = useAppDispatch();
  const { path } = useAppSelector((state) => state.fileExplorer);

  function handleClick(index: number) {
    const fileExplorerNewPath = path.slice(0, index + 1);
    dispatch(fileExplorerActions.setPath({ fileExplorerNewPath }));
  }

  const breadcrumbs = path.map((pathStr, index) => (
    <OneAppButton
      sx={{
        padding: "2px 6px !important",
        minWidth: "auto !important",
        color: `${index === path.length - 1 ? "inherit" : "#777"} !important`,
      }}
      disabled={index === path.length - 1}
      onClick={() => handleClick(index)}
      key={index}
    >
      <>{pathStr || <CgFormatSlash />}</>
    </OneAppButton>
  ));

  return (
    <ToolbarWrapper>
      <StyledBreadcrumbs separator={<HiChevronRight />} aria-label="breadcrumb">
        {breadcrumbs}
      </StyledBreadcrumbs>
    </ToolbarWrapper>
  );
}

export default FileExplorerContentToolbar;
