import { combineReducers } from "redux";
import { createHashHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import fileExplorerSlice from "../components/fileExplorerSlice";

export const { routerMiddleware, createReduxHistory, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const reducer = combineReducers({
  router: routerReducer,
  fileExplorer: fileExplorerSlice,
});

export default reducer;
