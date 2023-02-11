import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledToolbarWrapper = styled(Paper)`
  background-color: black !important;
  height          : 60px;
  border-radius   : 0 !important;
  color           : #ccc !important;
  padding         : 1rem;
  display         : flex;
  align-items     : center;
  gap             : 1rem;
  border-bottom   : 1px solid #181818;
`;
