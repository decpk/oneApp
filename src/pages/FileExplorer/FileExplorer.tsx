import React, { useEffect, useState } from "react";
import { IFileExplorerProps } from "./FileExplorer.types";
import { RenderFile } from "@/molecules";
import {
  FileExplorerWrapper,
  FilesWrapper,
  StyledFileExplorerContentBox,
  StyledFileExplorerFoldersWrapper,
} from "./FileExplorer.styles";
import {
  FileExplorerContentToolbar,
  FileExplorerFolders,
  FileExplorerFolderToolbar,
} from "../../organisms";
import { ToolbarWrapper } from "../../atoms";
import { IFsPaths } from "../../interfaces/fs";

function FileExplorer(props: IFileExplorerProps) {
  const {} = props;
  const [paths, setPaths] = useState<IFsPaths | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const [dirData, setDirData] = useState<{ name: string }[]>([]);
  const [forwardStack, setForwardStack] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const paths: IFsPaths = await (window as any)?.electronAPI?.getPaths();
      setPaths(paths);
        // CHANGE PATH SEPARATOR AS PER OS
      setPath(paths.downloads.split("/"));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (path.length) {
        const allFilesInfo = await (window as any)?.electronAPI?.readdir(
          path.join("/")
        );
        setDirData(allFilesInfo);
      }
    })();
  }, [path]);

  function handleBackClick() {
    const pathClone = [...path];
    const lastPath = pathClone.pop();
    setPath([...pathClone]);
    if (lastPath) setForwardStack([lastPath, ...forwardStack]);
  }

  function handleForwardClick() {
    const [first, ...restForwardStack] = [...forwardStack];
    if (first) {
      setPath([...path, first]);
      setForwardStack([...restForwardStack]);
    }
  }

  return (
    <FileExplorerWrapper>

      <StyledFileExplorerContentBox>
        <FileExplorerFolderToolbar
          path={path}
          handleBackClick={handleBackClick}
          forwardStack={forwardStack}
          handleForwardClick={handleForwardClick}
        />
        <FileExplorerFolders paths={paths}/>
      </StyledFileExplorerContentBox>
      
      <StyledFileExplorerContentBox>
        <FileExplorerContentToolbar
          path={path}
          handleBackClick={handleBackClick}
          forwardStack={forwardStack}
          handleForwardClick={handleForwardClick}
        />
        <FilesWrapper>
          {dirData.map((o: any, index: number) => (
            <RenderFile
              key={index}
              path={path}
              setPath={setPath}
              setForwardStack={setForwardStack}
              {...o}
            />
          ))}
        </FilesWrapper>
      </StyledFileExplorerContentBox>
      
    </FileExplorerWrapper>
  );
}

export default FileExplorer;
