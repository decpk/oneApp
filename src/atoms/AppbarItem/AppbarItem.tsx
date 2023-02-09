import { IApp } from "../../constants/Appbar.constants";
import { StyledAppbarWrapper, StyledLink } from "./AppbarItem.styles";

type Props = {
  app: IApp;
  isActive?: boolean;
};

const AppbarItem = ({ app, isActive }: Props) => {
  const { Icon, title } = app;
  return (
    <StyledAppbarWrapper>
      <StyledLink to={app.path} className={isActive ? "is-active" : ""}>
        <Icon />
      </StyledLink>
    </StyledAppbarWrapper>
  );
};

export default AppbarItem;
