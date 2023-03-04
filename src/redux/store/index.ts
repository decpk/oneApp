import { configureStore } from "@reduxjs/toolkit";
import reducer, { routerMiddleware, createReduxHistory } from "./reducers";
import { fileExplorerActions } from '../components/FileExplorer/fileExplorerSlice';

export const store = configureStore({
  reducer,
  middleware: [routerMiddleware],
});

export const history = createReduxHistory(store);

export type IRootState   = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

    // EXPORT ALL ACTIONS
export { fileExplorerActions };
