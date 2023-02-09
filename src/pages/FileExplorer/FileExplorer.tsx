import React, { useEffect, useState } from "react";
import { IFileExplorerProps } from "./FileExplorer.types";
import { FcFolder } from "react-icons/fc";
import { RenderFile } from "@/molecules";
import { FileExplorerWrapper, FilesWrapper } from "./FileExplorer.styles";

function FileExplorer(props: IFileExplorerProps) {
  const {}                    = props;
  const [path, setPath]       = useState<string[]>([]);
  const [dirData, setDirData] = useState<{ name: string }[]>([]);

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

  return (
    <FileExplorerWrapper>
      <div>path: {path}</div>
      <FilesWrapper>
      {dirData.map((o: any, index: number) => (
        <RenderFile key = {index} path = {path} setPath = {setPath} {...o} />
      ))}
      </FilesWrapper>
    </FileExplorerWrapper>
  );
}

export default FileExplorer;
