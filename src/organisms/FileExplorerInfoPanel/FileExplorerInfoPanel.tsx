import React from "react";
import { StyledFileExplorerInfoPanelWrapper } from "./FileExplorerInfoPanel.styles";
import { useAppSelector } from "../../hooks/index";

type Props = {};

const FileExplorerInfoPanel = (props: Props) => {
  const { dirData } = useAppSelector((state) => state.fileExplorer);
  console.log(
    `🤞🤞🤞 ~ file: FileExplorerInfoPanel.tsx:9 ~ FileExplorerInfoPanel ~ dirData:`,
    dirData
  );
  return (
    <StyledFileExplorerInfoPanelWrapper>
      <div>Total Files: {dirData.length}</div>
    </StyledFileExplorerInfoPanelWrapper>
  );
};

export default FileExplorerInfoPanel;
