import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-material-no-font.css";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { getFolderIcon, getFileIcon } from "../../constants/FileIcon";
import { fileExplorerActions } from "../../redux/store";

type Props = {
  data: Record<string, any>[];
};

function humanFileSize(size: number) {
  var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
}

const RenderFileAsGrid = (props: Props) => {
  const [columnDefs] = useState([
    {
      field: "#",
      width: 60,
      pinned: "left",
      suppressSizeToFit: true,
      cellRenderer: (colArgs) => {
        return colArgs.rowIndex + 1;
      },
    },
    {
      field: "name",
      minWidth: 300,
      flex: 2,
      cellRenderer: (colArgs) => {
        const { data } = colArgs;
        return (
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <img
              src={(data.isDirectory ? getFolderIcon : getFileIcon)(
                data.name.toLowerCase()
              )}
              alt="js"
              style={{
                height: "20px",
                width: "20px",
              }}
            />
            {data.name}
          </div>
        );
      },
    },
    {
      field: "size",
      width: "150px",
      cellRenderer: (colArgs) => {
        const { data } = colArgs;
        return <>{humanFileSize(data._stat.size)}</>;
      },
    },
    {
      field: "Last Modified on",
      width: "180px",
      cellRenderer: (colArgs) => {
        const { data } = colArgs;
        return <>{new Date(data._stat.atime).toLocaleString()}</>;
      },
    },
    {
      field: "Created on",
      width: "180px",
      cellRenderer: (colArgs) => {
        const { data } = colArgs;
        return <>{new Date(data._stat.birthtime).toLocaleString()}</>;
      },
    },
  ]);

  const { path, dirData } = useAppSelector((state) => state.fileExplorer);
  const dispatch = useAppDispatch();

  function onRowDoubleClicked(args) {
    const { isDirectory, name } = args.data;
    if (isDirectory) {
      dispatch(
        fileExplorerActions.setPath({
          fileExplorerNewPath: [...path, name],
        })
      );
      dispatch(fileExplorerActions.setForwardStack({ newforwardStack: [] }));
    } else {
      (window as any)?.electronAPI?.openPath([...path, name].join("/"));
    }
  }

  return (
    <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
      <AgGridReact
        className="ag-theme-alpine-dark"
        rowData={dirData}
        columnDefs={columnDefs}
        rowSelection="multiple"
        onRowDoubleClicked={onRowDoubleClicked}
      ></AgGridReact>
    </div>
  );
};

export default RenderFileAsGrid;
