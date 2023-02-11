import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledOneAppButtonWrapper = styled(Button)`
  justify-content: flex-start !important;
  gap            : 0.75rem;
  color          : #ccc !important;
  text-transform : capitalize !important;
  padding-left   : 1rem !important;
  
  &.active {
    background-color: var(--background-color-selected-dark) !important;
  }

  &:hover {
    background-color: var(--background-color-secondary) !important;
  }

  svg {
    position: relative;
    height  : 20px;
    width   : 20px;
  }
`;
