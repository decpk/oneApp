import React from "react";
import { RenderFileWrapper, StyledFileName } from "./RenderFile.styles";
import { Tooltip } from "@mui/material";
import { getFileIcon, getFolderIcon } from "../../constants/FileIcon";
import { IRenderFile } from "./RenderFile.types";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { fileExplorerActions } from "../../redux/components/FileExplorer/fileExplorerSlice";

function RenderFile(props: IRenderFile): JSX.Element {
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
    <Tooltip title={name} enterDelay={500} arrow>
      <RenderFileWrapper
        key={name}
        onDoubleClick={onDoubleClick}
        onKeyDown={onKeyDown}
        name={name}
      >
        {isDirectory ? (
          <img src={getFolderIcon(name.toLowerCase())} alt="js" />
        ) : (
          <img src={getFileIcon(name.toLowerCase())} alt="js" />
        )}
        <StyledFileName>{name}</StyledFileName>
      </RenderFileWrapper>
    </Tooltip>
  );
}

export default RenderFile;
