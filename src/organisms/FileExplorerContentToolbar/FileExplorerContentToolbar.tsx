import { ToolbarWrapper } from "../../atoms";
import { BsList, BsGrid } from "react-icons/bs";
import { MdViewList, MdOutlineRefresh } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../../hooks/index";
import { EShowItemAs } from "../../constants/FileExplorer";
import { userPreferencesActions } from "../../redux/components/UserPreferences/UserPreferencesSlice";
import { ToggleButtonGroup } from "../../atoms";
import ToggleButton from "@mui/material/ToggleButton";
import IconAsButton from "../../atoms/IconAsButton/IconAsButton";
import { Tooltip } from "@mui/material";
import { fileExplorerActions } from "../../redux/store";
import { throttle } from "lodash";

function FileExplorerContentToolbar() {
  const dispatch = useAppDispatch();
  const { showItemAs } = useAppSelector(
    (state) => state.userPreferences.fileExplorer
  );
  const { path } = useAppSelector((state) => state.fileExplorer);

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

  async function onRefresh() {
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
  }

  return (
    <ToolbarWrapper>
      <div>
        <Tooltip title="Refresh">
          <span>
            <IconAsButton onClick={throttle(onRefresh, 4000)}>
              <MdOutlineRefresh />
            </IconAsButton>
          </span>
        </Tooltip>
      </div>
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
