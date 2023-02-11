import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { IconAsButton, ToolbarWrapper } from "../../atoms";

type Props = {
  path              : string[];
  handleBackClick   : () => void;
  handleForwardClick: () => void;
  forwardStack      : string[];
};

const FileExplorerFolderToolbar = (props: Props) => {
  const { path, handleBackClick, handleForwardClick, forwardStack } = props;
  return (
    <ToolbarWrapper>
      <div style={{ display: 'flex', justifyContent: "space-between", width: "100%"}}>
        <IconAsButton
          onClick  = {handleBackClick}
          disabled = {path.filter(Boolean).length === 1}
        >
          <IoMdArrowRoundBack />
        </IconAsButton>

        Folders

        {/* FORWARD BUTTON */}
        <IconAsButton
          onClick  = {handleForwardClick}
          disabled = {forwardStack.filter(Boolean).length === 0}
        >
          <IoMdArrowRoundForward />
        </IconAsButton>
      </div>
    </ToolbarWrapper>
  );
};

export default FileExplorerFolderToolbar;
