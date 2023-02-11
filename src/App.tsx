import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledAppWrapper, StyledPageContent } from "./App.styles";
import apps from "./constants/Appbar.constants";
import { Appbar } from "./organisms";
import { HistoryRouter } from "redux-first-history/rr6";

function Loading() {
  return <h4> Loading </h4>;
}
type IProps = {
  store: any;
  history: any;
};
function App({ store, history }: IProps) {
  return (
    <StyledAppWrapper>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <StyledPageContent>
            <Appbar />
            <Routes>
              {apps.map((app) => {
                const { Element, path, title } = app;
                return (
                  <Route
                    path={path}
                    element={
                      <Suspense fallback={<Loading />}>
                        <Element />
                      </Suspense>
                    }
                    key={title}
                  />
                );
              })}
            </Routes>
          </StyledPageContent>
        </HistoryRouter>
      </Provider>
    </StyledAppWrapper>
  );
}

export default App;
