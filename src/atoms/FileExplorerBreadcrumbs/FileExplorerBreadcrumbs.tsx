import { HiChevronRight } from "react-icons/hi";
import OneAppButton from "../OneAppButton";
import { StyledBreadcrumbs } from "./FileExplorerBreadcrumbs.styles";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { CgFormatSlash } from "react-icons/cg";
import { fileExplorerActions } from "../../redux/components/FileExplorer/fileExplorerSlice";

type Props = {};

const FileExplorerBreadcrumbs = (props: Props) => {
  const { path } = useAppSelector((state) => state.fileExplorer);
  const dispatch = useAppDispatch();

  function handleClick(index: number) {
    const fileExplorerNewPath = path.slice(0, index + 1);
    dispatch(fileExplorerActions.setPath({ fileExplorerNewPath }));
  }
  const breadcrumbs = path.map((pathStr, index) => (
    <OneAppButton
      sx={{
        padding: "2px 6px !important",
        minWidth: "auto !important",
        color: `${index === path.length - 1 ? "inherit" : "#777"} !important`,
      }}
      disabled={index === path.length - 1}
      onClick={() => handleClick(index)}
      key={index}
    >
      <>{pathStr || <CgFormatSlash />}</>
    </OneAppButton>
  ));
  return (
    <StyledBreadcrumbs separator={<HiChevronRight />} aria-label="breadcrumb">
      {breadcrumbs}
    </StyledBreadcrumbs>
  );
};

export default FileExplorerBreadcrumbs;
