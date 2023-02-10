import React, { useEffect, useState } from "react";
import { IFileExplorerProps } from "./FileExplorer.types";
import { FcFolder } from "react-icons/fc";
import { RenderFile } from "@/molecules";
import { FileExplorerWrapper, FilesWrapper } from "./FileExplorer.styles";
import { FileExplorerToolbar } from "@/organisms";

function FileExplorer(props: IFileExplorerProps) {
  const {}                              = props;
  const [path, setPath]                 = useState<string[]>([]);
  const [dirData, setDirData]           = useState<{ name: string }[]>([]);
  const [forwardStack, setForwardStack] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const newPath = await (window as any)?.electronAPI?.getHomePath();
          // CHANGE PATH SEPARATOR
      setPath(newPath.split("/"));
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
    const lastPath  = pathClone.pop();
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
      <FileExplorerToolbar
        path               = {path}
        handleBackClick    = {handleBackClick}
        forwardStack       = {forwardStack}
        handleForwardClick = {handleForwardClick}
      />
      <FilesWrapper>
        {dirData.map((o: any, index: number) => (
          <RenderFile
            key             = {index}
            path            = {path}
            setPath         = {setPath}
            setForwardStack = {setForwardStack}
            {...o}
          />
        ))}
      </FilesWrapper>
    </FileExplorerWrapper>
  );
}

export default FileExplorer;
