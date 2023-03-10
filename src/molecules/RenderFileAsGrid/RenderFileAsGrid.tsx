import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { fileExplorerActions } from "../../redux/store";
import { StyledAgGrid } from "./RenderFileAsGrid.styles";
import { fileExplorerColumns } from "../../constants/FileExplorer";
import { RowDoubleClickedEvent } from "ag-grid-community";

type Props = {
  data: Record<string, any>[];
};

const RenderFileAsGrid = (props: Props) => {
  const { path, dirData } = useAppSelector((state) => state.fileExplorer);
  const dispatch = useAppDispatch();

  function onRowDoubleClicked(event: RowDoubleClickedEvent<any>): void {
    const { isDirectory, name } = event.data;
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
      <StyledAgGrid
        className="ag-theme-alpine-dark"
        rowData={dirData}
        columnDefs={fileExplorerColumns}
        rowSelection="multiple"
        onRowDoubleClicked={onRowDoubleClicked}
        onSortChanged={(e) => {
          e.api.redrawRows();
        }}
      ></StyledAgGrid>
    </div>
  );
};

export default RenderFileAsGrid;
