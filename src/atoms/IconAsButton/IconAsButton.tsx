import React from "react";
import IconButton from "@mui/material/IconButton";

interface IIconAsButtonProps  {
    children : JSX.Element;
    onClick ?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export default function IconAsButton(props: IIconAsButtonProps): JSX.Element {
  const { children, onClick, disabled } = props;
  return (
    <IconButton
      onClick  = {onClick}
      size     = "small"
      disabled = {disabled}
      sx       = {{
        backgroundColor: "#333",
        borderRadius   : "4px",
        cursor         : "pointer",
        "&:hover"      : {
          backgroundColor: "#555",
        },
        "&:disabled"   :{
          backgroundColor: '#121212',
          color          : "#222",
          cursor         : "default"
        }
      }}
    >
      {children}
    </IconButton>
  );
}
