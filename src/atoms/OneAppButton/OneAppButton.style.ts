import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledOneAppButtonWrapper = styled(Button)`
  justify-content: flex-start !important;
  /* align-items    : center !important; */
  gap           : 0.75rem;
  color         : #ccc !important;
  text-transform: capitalize !important;
  padding-left  : 1rem !important;

  &:hover {
    background-color: #181818 !important;
  }

  svg {
    position: relative;
    height  : 20px;
    width   : 20px;
    top     : -2px;
  }
`;
