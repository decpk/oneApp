import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledToolbarWrapper = styled(Paper)`
  background-color: var(--background-color-primary) !important;
  height: var(--toolbar-height);
  border-radius: 0 !important;
  color: #ccc !important;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--border-dark);

  svg,
  image {
    height: 16px;
    width: 16px;
  }
`;
