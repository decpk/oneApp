import styled from "styled-components";
import { EShowItemAs } from "../../constants/FileExplorer";

export const FileExplorerWrapper = styled.div`
  display: grid;
  grid-template-rows: calc(100% - var(--info-panel-height)) var(
      --info-panel-height
    );
  height: 100dvh;
`;

export const FileExplorerContent = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
`;

export const StyledFileExplorerContentBox = styled.div`
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-rows: var(--toolbar-height) 1fr;
`;

export const StyledFileExplorerFoldersWrapper = styled.div``;
