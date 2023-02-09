import apps, { IApp } from "../../constants/Appbar.constants";
import React from "react";
import { StyledAppbarWrapper } from "./Appbar.styles";
import { useLocation } from "react-router-dom";
import { AppbarItem } from "../../atoms";

type Props = {};

const Appbar = (props: Props) => {
  const { pathname } = useLocation();

  return (
    <StyledAppbarWrapper>
      {apps.map((app: IApp) => {
        return (
          <AppbarItem app={app} key={app.id} isActive={pathname === app.path} />
        );
      })}
    </StyledAppbarWrapper>
  );
};

export default Appbar;
