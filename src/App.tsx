import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledAppWrapper, StyledPageContent } from "./App.styles";
import apps from "./constants/Appbar.constants";
import { Appbar } from "./organisms";
import { HistoryRouter } from "redux-first-history/rr6";
import { Loader } from "./atoms";

type IProps = {
  store: any;
  history: any;
};
function App({ store, history }: IProps) {
  return (
    <HistoryRouter history={history}>
      <StyledAppWrapper>
        <Provider store={store}>
          <Appbar />
          <StyledPageContent>
            <Routes>
              {apps.map((app) => {
                const { Element, path, title } = app;
                return (
                  <Route
                    path={path}
                    element={
                      <Suspense fallback={<Loader />}>
                        <Element />
                      </Suspense>
                    }
                    key={title}
                  />
                );
              })}
            </Routes>
          </StyledPageContent>
        </Provider>
      </StyledAppWrapper>
    </HistoryRouter>
  );
}

export default App;
