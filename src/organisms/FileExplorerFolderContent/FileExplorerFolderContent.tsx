import React from "react";
import {
  FilesWrapper,
  StyledFileExplorerDataWrapper,
} from "./FileExplorerFolderContent.styles";
import { RenderFile, RenderFileAsList } from "../../molecules";
import { EShowItemAs } from "../../constants/FileExplorer";
import { useAppSelector } from "../../hooks/index";
import { setShowItemAs } from "../../redux/components/UserPreferences/reducer-helpers/setShowItemAs";

type Props = {};

const RenderAs = {
  [EShowItemAs.ICON]: RenderFile,
  [EShowItemAs.LIST]: RenderFileAsList,
};

const FileExplorerFolderContent = (props: Props) => {
  const { dirData } = useAppSelector((state) => state.fileExplorer);
  const { showItemAs } = useAppSelector(
    (state) => state.userPreferences.fileExplorer
  );
  return (
    <StyledFileExplorerDataWrapper>
      {showItemAs === EShowItemAs.ICON ? <RenderFile data={dirData} /> : null}
      {showItemAs === EShowItemAs.LIST ? (
        <RenderFileAsList data={dirData} />
      ) : null}
    </StyledFileExplorerDataWrapper>
  );
};

export default FileExplorerFolderContent;
