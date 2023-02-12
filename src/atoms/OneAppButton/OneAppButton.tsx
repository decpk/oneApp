import React from "react";
import { BackdropProps, Button, SxProps, Theme } from "@mui/material";
import { StyledOneAppButtonWrapper } from "./OneAppButton.style";

type Props = {
  label     ?: string;
  children  ?: React.ReactNode;
  isSelected?: boolean;
  onClick   ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  sx        ?: SxProps<Theme> | undefined;
  disabled  ?: boolean;
};

const OneAppButton = (props: Props) => {
  const { label, children, isSelected, onClick, sx,disabled } = props;
  return (
    <StyledOneAppButtonWrapper
      className = {isSelected ? "active" : ""}
      onClick   = {onClick}
      sx        = {sx}
      disabled  = {disabled}
    >
      {children} {label}
    </StyledOneAppButtonWrapper>
  );
};

export default OneAppButton;
