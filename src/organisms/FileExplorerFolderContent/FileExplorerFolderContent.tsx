import { StyledFileExplorerDataWrapper } from "./FileExplorerFolderContent.styles";
import {
  RenderFile,
  RenderFileAsGrid,
  RenderFileAsList,
} from "../../molecules";
import { EShowItemAs } from "../../constants/FileExplorer";
import { useAppSelector } from "../../hooks/index";

const FileExplorerFolderContent = () => {
  const { dirData } = useAppSelector((state) => state.fileExplorer);
  const { showItemAs } = useAppSelector(
    (state) => state.userPreferences.fileExplorer
  );
  return (
    <StyledFileExplorerDataWrapper>
      {showItemAs === EShowItemAs.ICON ? <RenderFile data={dirData} /> : null}
      {showItemAs === EShowItemAs.GRID ? (
        <RenderFileAsGrid data={dirData} />
      ) : null}
      {showItemAs === EShowItemAs.LIST ? (
        <RenderFileAsList data={dirData} />
      ) : null}
    </StyledFileExplorerDataWrapper>
  );
};

export default FileExplorerFolderContent;
