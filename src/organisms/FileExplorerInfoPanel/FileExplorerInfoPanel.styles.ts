import styled from "styled-components";

export const StyledFileExplorerInfoPanelWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0 1rem;
  border-top: 1px solid var(--border-dark);
  * {
    font-size: 12px !important;
  }
  svg {
    height: 14px;
    width: 14px;
  }
  > * {
    display: flex;
    align-items: center;
    flex: 0 0 50%;
    color: #777 !important;
  }
`;

export const StyledFileExplorerInfoPanelLeft = styled.div``;

export const StyledFileExplorerInfoPanelRight = styled.div`
  justify-content: flex-end;
  gap: 0.5rem;
`;
