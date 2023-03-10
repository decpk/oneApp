import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledLoaderWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--color-primary);
  }
`;

export const StyledLoaderContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
