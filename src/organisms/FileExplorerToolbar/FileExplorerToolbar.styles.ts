import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledFileExplorerToolbarWrapper = styled(Paper)`
  background-color: black !important;
  color           : #ccc !important;
  padding         : 1rem 2rem;
  display         : flex;
  align-items     : center;
  gap             : 1rem;
  box-shadow      : 0px 2px 4px -1px rgb(49 49 49 / 20%),
    0px 4px 5px 0px rgb(92 92 92 / 14%), 0px 1px 10px 0px rgb(65 65 65 / 12%) !important;
`;
