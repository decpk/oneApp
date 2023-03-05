import React, { useState } from "react";
import { StyledToggleButtonGroupWrapper } from "./ToggleButtonGroup.styles";

type Props = {
  children: React.ReactNode;
  onChange?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void)
    | undefined;
  value: any;
};

const ToggleButtonGroup = ({ children, onChange, value }: Props) => {
  return (
    <StyledToggleButtonGroupWrapper
      value={value}
      exclusive
      onChange={onChange}
      aria-label="text alignment"
    >
      {children}
    </StyledToggleButtonGroupWrapper>
  );
};

export default ToggleButtonGroup;
