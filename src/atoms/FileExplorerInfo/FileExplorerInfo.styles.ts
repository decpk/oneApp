import styled from "styled-components";

export const StyledFileExplorerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 16px;
    width: 16px;
  }
`;

export const StyledInfoWrapper = styled.div`
  width: 200px;
  table {
    width: 100%;
  }
  td {
    text-align: left;
    padding: 2px 4px;
    &:nth-child(2) {
      text-align: right;
    }
  }
`;

export const StyledInfoHeading = styled.div`
  padding: 4px 8px;
  font-weight: bolder;
  background-color: #0d0d0d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
