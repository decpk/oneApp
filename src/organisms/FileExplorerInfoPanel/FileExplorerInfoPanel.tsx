import React from "react";
import {
  StyledFileExplorerInfoPanelLeft,
  StyledFileExplorerInfoPanelRight,
  StyledFileExplorerInfoPanelWrapper,
} from "./FileExplorerInfoPanel.styles";
import { useAppSelector } from "../../hooks/index";
import { FileExplorerBreadcrumbs, FileExplorerInfo } from "../../atoms";
import { HiChevronRight } from "react-icons/hi";

type Props = {};

const FileExplorerInfoPanel = (props: Props) => {
  const { dirData } = useAppSelector((state) => state.fileExplorer);

  return (
    <StyledFileExplorerInfoPanelWrapper>
      <StyledFileExplorerInfoPanelLeft>
        <FileExplorerBreadcrumbs />
      </StyledFileExplorerInfoPanelLeft>
      <StyledFileExplorerInfoPanelRight>
        <FileExplorerInfo />
        <div>Total Files: {dirData.length}</div>
      </StyledFileExplorerInfoPanelRight>
    </StyledFileExplorerInfoPanelWrapper>
  );
};

export default FileExplorerInfoPanel;
