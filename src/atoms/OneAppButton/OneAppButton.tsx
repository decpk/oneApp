import React from 'react'
import { Button } from "@mui/material";
import { StyledOneAppButtonWrapper } from './OneAppButton.style';

type Props = {
  label: string
  children?: React.ReactNode;
}

const OneAppButton = (props: Props) => {
  const { label, children } = props;
  return (
      <StyledOneAppButtonWrapper> { children} { label }</StyledOneAppButtonWrapper>
  )
}

export default OneAppButton