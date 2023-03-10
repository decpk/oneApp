import { call, put } from "redux-saga/effects";
import { fileExplorerActions } from "../../components/FileExplorer/fileExplorerSlice";

async function getAllFileExplorerPathsHelper(): Promise<
  Record<string, string>
> {
  const paths = await (window as any)?.electronAPI?.getPaths();
  return paths;
}

export function* getAllFileExplorerPaths(): any {
  const paths = yield call(getAllFileExplorerPathsHelper);
  yield put(
    fileExplorerActions.setFolderPaths({
      FileExplorerfolderPaths: paths,
    })
  );
  const downloadsPath = paths?.downloads?.split("/");
  if (downloadsPath?.length) {
    yield put(
      fileExplorerActions.setPath({
        // TODO:CHANGE PATH SEPARATOR AS PER OS
        fileExplorerNewPath: paths?.downloads?.split("/"),
      })
    );
  }
}
