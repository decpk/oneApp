import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer, { routerMiddleware, createReduxHistory } from "./reducers";
import { fileExplorerActions } from "../components/FileExplorer/fileExplorerSlice";
import rootSaga from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [routerMiddleware, sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

// EXPORT ALL ACTIONS
export { fileExplorerActions };
