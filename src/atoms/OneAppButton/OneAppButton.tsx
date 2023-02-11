import React from "react";
import { Button } from "@mui/material";
import { StyledOneAppButtonWrapper } from "./OneAppButton.style";

type Props = {
  label      : string;
  children  ?: React.ReactNode;
  isSelected?: boolean;
  onClick    ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const OneAppButton = (props: Props) => {
  const { label, children, isSelected, onClick } = props;
  return (
    <StyledOneAppButtonWrapper className={isSelected ? "active": ''} onClick={onClick}>
      {children} {label}
    </StyledOneAppButtonWrapper>
  );
};

export default OneAppButton;
