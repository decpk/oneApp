import {
  StyledFileExplorerInfoWrapper,
  StyledInfoHeading,
  StyledInfoWrapper,
} from "./FileExplorerInfo.styles";
import { FcInfo } from "react-icons/fc";
import { Tooltip } from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "../../hooks/index";

function Info() {
  const infoState = new Map<string, number>([
    ["Directories", 0],
    ["Files", 0],
    ["SymbolicLinks", 0],
    ["BlockDevices", 0],
    ["CharacterDevices", 0],
    ["FIFO", 0],
    ["Sockets", 0],
  ]);
  const { path, dirData } = useAppSelector((state) => state.fileExplorer);

  const infoMap: Map<string, number> = useMemo(() => {
    return dirData.reduce((acc: Map<string, number>, curr) => {
      if (curr.isDirectory)
        acc.set("Directories", (acc.get("Directories") ?? 0) + 1);
      else if (curr.isFile) acc.set("Files", (acc.get("Files") ?? 0) + 1);
      else if (curr.isSymbolicLink)
        acc.set("SymbolicLinks", (acc.get("SymbolicLinks") ?? 0) + 1);
      else if (curr.isBlockDevice)
        acc.set("BlockDevices", (acc.get("BlockDevices") ?? 0) + 1);
      else if (curr.isCharacterDevice)
        acc.set("CharacterDevices", (acc.get("CharacterDevices") ?? 0) + 1);
      else if (curr.isFIFO) acc.set("FIFO", (acc.get("FIFO") ?? 0) + 1);
      else if (curr.isSocket) acc.set("Sockets", (acc.get("Sockets") ?? 0) + 1);
      return acc;
    }, infoState);
  }, [dirData]);

  return (
    <StyledInfoWrapper>
      <StyledInfoHeading>{path.at(path.length - 1)}</StyledInfoHeading>
      <table>
        {[...infoMap.entries()].map(([k, v]) => {
          return (
            <tr key={k}>
              <td>{k}</td>
              <td>{v}</td>
            </tr>
          );
        })}
      </table>
    </StyledInfoWrapper>
  );
}

const FileExplorerInfo = () => {
  return (
    <Tooltip title={<Info />} arrow>
      <StyledFileExplorerInfoWrapper>
        <FcInfo />
      </StyledFileExplorerInfoWrapper>
    </Tooltip>
  );
};

export default FileExplorerInfo;
