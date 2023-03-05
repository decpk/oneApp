import styled from "styled-components";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const StyledToggleButtonGroupWrapper = styled(ToggleButtonGroup)`
  border: 1px solid var(--border-dark-2);
  svg {
    color: var(--color-dark);
  }

  > button {
    padding: 4px;
    border-right: 1px solid var(--border-dark-2);

    &.Mui-selected {
      background-color: var(--background-color-selected-dark);
    }
  }
`;
