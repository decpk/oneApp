import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  StyledLoaderContentWrapper,
  StyledLoaderWrapper,
} from "./Loader.styles";

type Props = {};

const Loader = (props: Props) => {
  return (
    <StyledLoaderWrapper>
      <StyledLoaderContentWrapper>
        <CircularProgress />
        <span>Please wait...</span>
      </StyledLoaderContentWrapper>
    </StyledLoaderWrapper>
  );
};

export default Loader;
