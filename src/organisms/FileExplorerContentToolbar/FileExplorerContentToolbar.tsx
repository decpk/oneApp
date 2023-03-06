import { ToolbarWrapper } from "../../atoms";
import { BsList, BsGrid } from "react-icons/bs";
import { MdViewList } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../../hooks/index";
import { EShowItemAs } from "../../constants/FileExplorer";
import { userPreferencesActions } from "../../redux/components/UserPreferences/UserPreferencesSlice";
import { ToggleButtonGroup } from "../../atoms";
import ToggleButton from "@mui/material/ToggleButton";

function FileExplorerContentToolbar() {
  const dispatch = useAppDispatch();
  const { showItemAs } = useAppSelector(
    (state) => state.userPreferences.fileExplorer
  );

  function changeShowItemType(
    event: React.MouseEvent<HTMLElement>,
    newShowItemType: EShowItemAs
  ) {
    if (newShowItemType) {
      dispatch(
        userPreferencesActions.setShowItemAs({
          itemType: newShowItemType,
        })
      );
    }
  }

  return (
    <ToolbarWrapper>
      <div>
        <ToggleButtonGroup onChange={changeShowItemType} value={showItemAs}>
          <ToggleButton value={EShowItemAs.LIST} aria-label="centered">
            <BsList />
          </ToggleButton>
          <ToggleButton value={EShowItemAs.GRID} aria-label="centered">
            <MdViewList />
          </ToggleButton>
          <ToggleButton value={EShowItemAs.ICON} aria-label="centered">
            <BsGrid />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </ToolbarWrapper>
  );
}

export default FileExplorerContentToolbar;
