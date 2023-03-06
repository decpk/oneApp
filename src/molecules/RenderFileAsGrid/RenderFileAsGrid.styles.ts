import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";

export const StyledAgGrid = styled(AgGridReact)`
  --ag-background-color: #000;
  --ag-border-color: #151515;
  --ag-row-border-width: 0.5px;
  --ag-odd-row-background-color: #090909;
  --ag-row-hover-color: var(--background-color-secondary);
  --ag-header-foreground-color: #ddd;
  --ag-data-color: #ddd;
  --ag-header-background-color: #191919;
  --ag-font-size: 12px;
  --ag-grid-size: 6px;

  font-size: 12px !important;
  .ag-root-wrapper {
    border: none;
  }
`;
