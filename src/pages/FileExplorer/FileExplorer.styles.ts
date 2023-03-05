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
  grid-template-rows: 60px 1fr;
`;

export const StyledFileExplorerFoldersWrapper = styled.div``;

export const FilesWrapper = styled.div<{ renderAs: EShowItemAs }>`
  padding: 1rem;
  overflow: auto;
  ${({ renderAs }) => {
    return renderAs === EShowItemAs.ICON
      ? `
      display: grid;
        grid-template-columns: repeat(auto-fit, 100px);
        align-items: flex-start;
        gap: 1rem;
        grid-auto-rows: 100px;
        `
      : `
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `;
  }}
`;
