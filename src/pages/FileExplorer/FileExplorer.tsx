import { fileExplorerActions } from "../../redux/store";
import { useEffect, useState } from "react";
import { IFileExplorerProps } from "./FileExplorer.types";
import { RenderFile } from "@/molecules";
import {
  FileExplorerWrapper,
  FilesWrapper,
  StyledFileExplorerContentBox,
} from "./FileExplorer.styles";
import {
  FileExplorerContentToolbar,
  FileExplorerFolders,
  FileExplorerFolderToolbar,
} from "../../organisms";
import { IFolderPaths } from "../../interfaces/fs";
import { useAppDispatch, useAppSelector } from "../../hooks";

function FileExplorer(props: IFileExplorerProps) {
  const {} = props;

  const dispatch = useAppDispatch();
  const { path, dirData } = useAppSelector((state) => state.fileExplorer);

  useEffect(() => {
    (async () => {
      const paths: IFolderPaths = await (
        window as any
      )?.electronAPI?.getPaths();
      dispatch(
        fileExplorerActions.setFolderPaths({
          FileExplorerfolderPaths: paths,
        })
      );
      // TODO:CHANGE PATH SEPARATOR AS PER OS
      const newPath = paths?.downloads?.split("/");
      if (newPath)
        dispatch(
          fileExplorerActions.setPath({
            fileExplorerNewPath: newPath,
          })
        );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (path.length) {
        const [homePath, ...rest] = path;
        const fileExplorerFolderData = await (
          window as any
        )?.electronAPI?.readdir(
          // TODO: ADD SEPARATOR AS PER THE OS
          homePath || "/" + rest.join("/")
        );
        dispatch(
          fileExplorerActions.setDirData({
            fileExplorerFolderData,
          })
        );
      }
    })();
  }, [path]);

  return (
    <FileExplorerWrapper>
      {/* FILE EXPLORER LEFT PANEL */}
      <StyledFileExplorerContentBox>
        <FileExplorerFolderToolbar />
        <FileExplorerFolders />
      </StyledFileExplorerContentBox>

      {/* FILE EXPLORER MAIN DATA */}
      <StyledFileExplorerContentBox>
        <FileExplorerContentToolbar />
        <FilesWrapper>
          {dirData.map((o: any, index: number) => (
            <RenderFile key={index} {...o} />
          ))}
        </FilesWrapper>
      </StyledFileExplorerContentBox>
    </FileExplorerWrapper>
  );
}

export default FileExplorer;
