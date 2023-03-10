import { call, put, take, takeEvery } from "redux-saga/effects";
import reduxConstants from "../../constants/redux.constants";
import { fileExplorerSaga } from "./fileExplorer.saga";
import { fileExplorerActions } from "../components/FileExplorer/fileExplorerSlice";

// WATCHER SAGA
export default function* rootSaga(): any {
  yield takeEvery(
    reduxConstants.FILE_EXPLORER.GET_ALL_PATHS,
    fileExplorerSaga.getAllFileExplorerPaths
  );

  yield takeEvery(
    reduxConstants.FILE_EXPLORER.READ_CURRENT_DIRECTORY,
    fileExplorerSaga.readCurrentDirectory
  );
}

// WATCHER SAGA => ACTIONS => WORKER SAGA
