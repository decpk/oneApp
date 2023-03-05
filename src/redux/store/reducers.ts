import { combineReducers } from "redux";
import { createHashHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import fileExplorerSlice from "../components/FileExplorer";
import userPreferencesSlice from "../components/UserPreferences";

export const { routerMiddleware, createReduxHistory, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const reducer = combineReducers({
  router: routerReducer,
  fileExplorer: fileExplorerSlice,
  userPreferences: userPreferencesSlice,
});

export default reducer;
