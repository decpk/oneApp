import React from "react";
import {
  RenderFileWrapper,
  StyledFileName,
  StyledFilesContainer,
} from "./RenderFileAsList.styles";
import { Tooltip } from "@mui/material";
import { getFileIcon, getFolderIcon } from "../../constants/FileIcon";
import { IRenderFile } from "./RenderFileAsList.types";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { fileExplorerActions } from "../../redux/components/FileExplorer/fileExplorerSlice";

type Props = {};

const RenderFileAsList = ({ data }: IRenderFile) => {
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
    <StyledFilesContainer>
      {data.map((o) => {
        const { name, isDirectory } = o;
        return (
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
        );
      })}
    </StyledFilesContainer>
  );
};

export default RenderFileAsList;
