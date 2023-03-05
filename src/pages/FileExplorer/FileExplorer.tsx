import { fileExplorerActions } from "../../redux/store";
import React, { useEffect } from "react";
import { IFileExplorerProps } from "./FileExplorer.types";
import { RenderFile } from "@/molecules";
import {
  FileExplorerContent,
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
import { FileExplorerInfoPanel } from "../../organisms";
import { EShowItemAs } from "../../constants/FileExplorer";
import RenderFileAsList from "../../molecules/RenderFileAsList";

const RenderAs = {
  [EShowItemAs.ICON]: RenderFile,
  [EShowItemAs.LIST]: RenderFileAsList,
};

function FileExplorer(props: IFileExplorerProps) {
  const {} = props;

  const dispatch = useAppDispatch();
  const { path, dirData } = useAppSelector((state) => state.fileExplorer);
  const { showItemAs } = useAppSelector(
    (state) => state.userPreferences.fileExplorer
  );

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
      <FileExplorerContent>
        {/* FILE EXPLORER LEFT PANEL */}
        <StyledFileExplorerContentBox>
          <FileExplorerFolderToolbar />
          <FileExplorerFolders />
        </StyledFileExplorerContentBox>

        {/* FILE EXPLORER MAIN DATA */}
        <StyledFileExplorerContentBox>
          <FileExplorerContentToolbar />
          <FilesWrapper renderAs={showItemAs}>
            {dirData.map((o: any, index: number) =>
              React.createElement(RenderAs[showItemAs], {
                key: index,
                ...o,
              })
            )}
          </FilesWrapper>
        </StyledFileExplorerContentBox>
      </FileExplorerContent>
      <FileExplorerInfoPanel />
    </FileExplorerWrapper>
  );
}

export default FileExplorer;
