import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  --app-bar-width: 50px;

  height               : 100%;
  display              : grid;
  grid-template-columns: var(--app-bar-width) calc(100% - var(--app-bar-width));
`;

export const StyledPageContent = styled.div`
`;
