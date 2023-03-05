import styled from "styled-components";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const StyledToggleButtonGroupWrapper = styled(ToggleButtonGroup)`
  border: 0.5px solid var(--border-dark-2);
  svg {
    color: var(--color-dark);
  }

  > button {
    padding: 4px;

    &.Mui-selected {
      background-color: var(--background-color-selected-dark);
    }

    &:hover {
      background-color: var(--background-color-secondary);
    }
  }
`;
