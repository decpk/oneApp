import React from "react";
import { RenderFileWrapper, StyledFileName } from "./RenderFileAsList.styles";
import { Tooltip } from "@mui/material";
import { getFileIcon, getFolderIcon } from "../../constants/FileIcon";
import { IRenderFile } from "./RenderFileAsList.types";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { fileExplorerActions } from "../../redux/components/FileExplorer/fileExplorerSlice";

type Props = {};

const RenderFileAsList = (props: IRenderFile) => {
  const { name, isDirectory } = props;
  const { path } = useAppSelector((state) => state.fileExplorer);

  const dispatch = useAppDispatch();

  function onDoubleClick() {
    if (isDirectory) {
      dispatch(
        fileExplorerActions.setPath({
          fileExplorerNewPath: [...path, name],
        })
      );
      dispatch(fileExplorerActions.setForwardStack({ newforwardStack: [] }));
    } else {
      (window as any)?.electronAPI?.openPath([...path, name].join("/"));
    }
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") onDoubleClick();
  }

  return (
    <RenderFileWrapper
      key={name}
      onDoubleClick={onDoubleClick}
      onKeyDown={onKeyDown}
      name={name}
    >
      <img
        src={(isDirectory ? getFolderIcon : getFileIcon)(name.toLowerCase())}
        alt="js"
      />
      <StyledFileName>{name}</StyledFileName>
    </RenderFileWrapper>
  );
};

export default RenderFileAsList;
