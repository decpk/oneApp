import {
  humanFileSize,
  sortNumberComparator,
  sortStringComparator,
} from "../utils";
import { getFolderIcon, getFileIcon } from "../constants/FileIcon";
import { Tooltip } from "@mui/material";
import { ICellRendererParams, IRowNode } from "ag-grid-community";

export enum EShowItemAs {
  ICON = "ICON",
  LIST = "LIST",
  GRID = "GRID",
}

export const fileExplorerColumns = [
  {
    field: "#",
    width: 100,
    suppressSizeToFit: true,
    cellRenderer: (colArgs: ICellRendererParams) => colArgs.rowIndex + 1,
  },
  {
    field: "name",
    minWidth: 500,
    sortable: true,
    resizable: true,
    comparator: sortStringComparator,
    cellRenderer: (colArgs: ICellRendererParams) => {
      const { data } = colArgs;
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <Tooltip title={data.name} arrow placement="top">
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
          </Tooltip>

          <span>{data.name}</span>
        </div>
      );
    },
  },
  {
    field: "Type",
    minWidth: 100,
    sortable: true,
    resizable: true,
    comparator: (a: any, b: any, c: IRowNode, d: IRowNode) => {
      return sortNumberComparator(
        c.data.isDirectory ? 1 : 0,
        d.data.isDirectory ? 1 : 0
      );
    },
    cellRenderer: (colArgs: ICellRendererParams) => {
      const { data } = colArgs;
      return <>{data.isDirectory ? "Folder" : "File"}</>;
    },
  },
  {
    field: "Size",
    minWidth: 150,
    sortable: true,
    resizable: true,
    comparator: (a: any, b: any, c: IRowNode, d: IRowNode) => {
      return sortNumberComparator(c.data._stat.size, d.data._stat.size);
    },
    cellRenderer: (colArgs: ICellRendererParams) => {
      const { data } = colArgs;
      return <>{humanFileSize(data._stat.size || 0)}</>;
    },
  },
  {
    field: "Last Modified on",
    minWidth: 160,
    sortable: true,
    resizable: true,
    comparator: (a: any, b: any, c: IRowNode, d: IRowNode) => {
      return sortNumberComparator(
        c?.data?._stat.atimeMs,
        d?.data?._stat.atimeMs
      );
    },
    cellRenderer: (colArgs: ICellRendererParams) => {
      const { data } = colArgs;
      return <>{data._stat?.atime?.toLocaleString()}</>;
    },
  },
  {
    field: "Created on",
    minWidth: 180,
    sortable: true,
    comparator: (a: any, b: any, c: IRowNode, d: IRowNode) => {
      return sortNumberComparator(
        c?.data?._stat.atimeMs,
        d?.data?._stat.atimeMs
      );
    },
    cellRenderer: (colArgs: ICellRendererParams) => {
      const { data } = colArgs;
      return <>{data._stat?.birthtime?.toLocaleString()}</>;
    },
  },
];
