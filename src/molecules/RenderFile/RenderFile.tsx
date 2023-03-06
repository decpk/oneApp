import React from "react";
import {
  FilesWrapper,
  RenderFileWrapper,
  StyledFileName,
} from "./RenderFile.styles";
import { Tooltip } from "@mui/material";
import { getFileIcon, getFolderIcon } from "../../constants/FileIcon";
import { IRenderFile, IFile } from "./RenderFile.types";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { fileExplorerActions } from "../../redux/components/FileExplorer/fileExplorerSlice";

function RenderFile(props: IRenderFile): JSX.Element {
  const { data } = props;
  const { path } = useAppSelector((state) => state.fileExplorer);

  const dispatch = useAppDispatch();

  function onDoubleClick(fileInfo: Record<string, any>) {
    const { isDirectory, name } = fileInfo;
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
  function onKeyDown(
    e: React.KeyboardEvent<HTMLButtonElement>,
    fileInfo: Record<string, any>
  ) {
    if (e.key === "Enter") onDoubleClick(fileInfo);
  }

  return (
    <FilesWrapper>
      {data.map((o: Record<string, any>, i) => {
        const { name, isDirectory } = o;
        return (
          <Tooltip title={name} enterDelay={500} arrow>
            <RenderFileWrapper
              key={name}
              onDoubleClick={() => onDoubleClick(o)}
              onKeyDown={(e) => onKeyDown(e, o)}
              name={name}
            >
              <img
                src={(isDirectory ? getFolderIcon : getFileIcon)(
                  name.toLowerCase()
                )}
                alt="js"
              />
              <StyledFileName>{name}</StyledFileName>
            </RenderFileWrapper>
          </Tooltip>
        );
      })}
    </FilesWrapper>
  );
}

export default RenderFile;
