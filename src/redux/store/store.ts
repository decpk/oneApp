import { configureStore } from "@reduxjs/toolkit";
import reducer, { routerMiddleware, createReduxHistory } from "./reducers";

export const store = configureStore({
  reducer,
  middleware: [routerMiddleware],
});

export const history = createReduxHistory(store);
