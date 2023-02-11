import React from "react";
import { StyledToolbarWrapper } from "./ToolbarWrapper.styles";

type Props = {
  children: React.ReactNode;
};

const ToolbarWrapper = (props: Props) => {
  const { children } = props;
  return <StyledToolbarWrapper elevation={4}>{children}</StyledToolbarWrapper>;
};

export default ToolbarWrapper;
