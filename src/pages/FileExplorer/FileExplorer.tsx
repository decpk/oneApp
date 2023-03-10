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
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FileExplorerInfoPanel } from "../../organisms";
import { FileExplorerFolderContent } from "../../organisms";
import reduxConstants from "../../constants/redux.constants";

function FileExplorer() {
  const dispatch = useAppDispatch();
  const { path } = useAppSelector((state) => state.fileExplorer);

  useEffect(() => {
    dispatch({ type: reduxConstants.FILE_EXPLORER.GET_ALL_PATHS });
  }, []);

  useEffect(() => {
    dispatch({ type: reduxConstants.FILE_EXPLORER.READ_CURRENT_DIRECTORY });
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
