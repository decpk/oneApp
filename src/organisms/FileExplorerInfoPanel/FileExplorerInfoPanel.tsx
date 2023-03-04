import React from "react";
import { StyledFileExplorerInfoPanelWrapper } from "./FileExplorerInfoPanel.styles";
import { useAppSelector } from "../../hooks/index";
import { FileExplorerInfo } from "../../atoms";

type Props = {};

const FileExplorerInfoPanel = (props: Props) => {
  const { dirData } = useAppSelector((state) => state.fileExplorer);
  console.log(
    `🤞🤞🤞 ~ file: FileExplorerInfoPanel.tsx:9 ~ FileExplorerInfoPanel ~ dirData:`,
    dirData
  );
  return (
    <StyledFileExplorerInfoPanelWrapper>
      <FileExplorerInfo />
      <div>Total Files: {dirData.length}</div>
    </StyledFileExplorerInfoPanelWrapper>
  );
};

export default FileExplorerInfoPanel;
