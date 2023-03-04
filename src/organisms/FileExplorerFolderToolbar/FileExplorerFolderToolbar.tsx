import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { IconAsButton, ToolbarWrapper } from "../../atoms";
import { useAppDispatch } from "../../hooks";
import { fileExplorerActions } from "../../redux/components/FileExplorer/fileExplorerSlice";
import { useAppSelector } from "../../hooks/index";

type Props = {};

const FileExplorerFolderToolbar = (props: Props) => {
  const { path, forwardStack } = useAppSelector((state) => state.fileExplorer);
  const dispatch = useAppDispatch();

  function handleBackClick() {
    dispatch(fileExplorerActions.handleBackClick({}));
  }

  function handleForwardClick() {
    dispatch(fileExplorerActions.handleForwardClick({}));
  }

  return (
    <ToolbarWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* BACK BUTTON */}
        <IconAsButton onClick={handleBackClick} disabled={path.length === 1}>
          <IoMdArrowRoundBack />
        </IconAsButton>
        Folders
        {/* FORWARD BUTTON */}
        <IconAsButton
          onClick={handleForwardClick}
          disabled={forwardStack.filter(Boolean).length === 0}
        >
          <IoMdArrowRoundForward />
        </IconAsButton>
      </div>
    </ToolbarWrapper>
  );
};

export default FileExplorerFolderToolbar;
