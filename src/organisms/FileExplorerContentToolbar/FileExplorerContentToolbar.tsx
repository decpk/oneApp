import { ToolbarWrapper } from "../../atoms";
import { IconAsButton } from "../../atoms";
import { BsList, BsGrid } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../../hooks/index";
import { EShowItemAs } from "../../constants/FileExplorer";
import { userPreferencesActions } from "../../redux/components/UserPreferences/UserPreferencesSlice";

function FileExplorerContentToolbar() {
  const dispatch = useAppDispatch();

  function changeShowItemType(type: EShowItemAs) {
    dispatch(
      userPreferencesActions.setShowItemAs({
        itemType: type,
      })
    );
  }

  return (
    <ToolbarWrapper>
      <div>
        <IconAsButton onClick={() => changeShowItemType(EShowItemAs.LIST)}>
          <BsList />
        </IconAsButton>
        <IconAsButton onClick={() => changeShowItemType(EShowItemAs.ICON)}>
          <BsGrid />
        </IconAsButton>
      </div>
    </ToolbarWrapper>
  );
}

export default FileExplorerContentToolbar;
