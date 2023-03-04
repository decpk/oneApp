import styled from "styled-components";

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

export const FilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  grid-auto-rows: 100px;
  overflow: auto;
`;

export const FileExplorerInfoPanel = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 10px;
  padding: 0 0.5rem;
  border-top: 1px solid var(--border-dark);
`;
