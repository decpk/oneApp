import { call, put, select } from "redux-saga/effects";
import { fileExplorerActions } from "../../components/FileExplorer/fileExplorerSlice";

async function readCurrentDirectoryHelper(path: string[]) {
  const [homePath, ...rest] = path;
  const fileExplorerFolderData = await (window as any)?.electronAPI?.readdir(
    // TODO: ADD SEPARATOR AS PER THE OS
    homePath || "/" + rest.join("/")
  );
  return fileExplorerFolderData;
}

export function* readCurrentDirectory(): any {
  const path = yield select((state) => state.fileExplorer.path);
  const fileExplorerFolderData = yield call(readCurrentDirectoryHelper, path);
  const { dirData } = fileExplorerFolderData?.data ?? {};
  if (dirData) {
    yield put(
      fileExplorerActions.setDirData({
        fileExplorerFolderData: dirData,
      })
    );
  }
}
