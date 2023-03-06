import { fileExplorerActions } from "../../redux/store";
import { useEffect } from "react";
import {
  FileExplorerContent,
  FileExplorerWrapper,
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
import { FileExplorerFolderContent } from "../../organisms";

function FileExplorer() {
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
        const { dirData } = fileExplorerFolderData?.data ?? {};
        if (dirData) {
          dispatch(
            fileExplorerActions.setDirData({
              fileExplorerFolderData: dirData,
            })
          );
        }
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
          <FileExplorerFolderContent />
        </StyledFileExplorerContentBox>
      </FileExplorerContent>

      {/* FILE EXPLORER INFO PANEL */}
      <FileExplorerInfoPanel />
    </FileExplorerWrapper>
  );
}

export default FileExplorer;
