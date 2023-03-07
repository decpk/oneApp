import {
  humanFileSize,
  sortDateComparator,
  sortNumberComparator,
  sortStringComparator,
} from "../utils";
import { getFolderIcon, getFileIcon } from "../constants/FileIcon";

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
    cellRenderer: (colArgs) => {
      return colArgs.rowIndex + 1;
    },
  },
  {
    field: "name",
    minWidth: 500,
    flex: 2,
    sortable: true,
    comparator: sortStringComparator,
    cellRenderer: (colArgs) => {
      const { data } = colArgs;
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
    field: "Type",
    width: 150,
    sortable: true,
    comparator: (a, b, c, d) => {
      return sortNumberComparator(
        c.data.isDirectory ? 1 : 0,
        d.data.isDirectory ? 1 : 0
      );
    },
    cellRenderer: (colArgs) => {
      const { data } = colArgs;
      return <>{data.isDirectory ? "Folder" : "File"}</>;
    },
  },
  {
    field: "Size",
    width: 150,
    sortable: true,
    comparator: (a, b, c, d) => {
      return sortNumberComparator(c.data._stat.size, d.data._stat.size);
    },
    cellRenderer: (colArgs) => {
      const { data } = colArgs;
      return <>{humanFileSize(data._stat.size || 0)}</>;
    },
  },
  {
    field: "Last Modified on",
    width: 180,
    sortable: true,
    comparator: (a, b, c, d) => {
      return sortNumberComparator(
        c?.data?._stat.atimeMs,
        d?.data?._stat.atimeMs
      );
    },
    cellRenderer: (colArgs) => {
      const { data } = colArgs;
      return <>{data._stat.atime.toLocaleString()}</>;
    },
  },
  {
    field: "Created on",
    width: 180,
    sortable: true,
    comparator: (a, b, c, d) => {
      return sortNumberComparator(
        c?.data?._stat.atimeMs,
        d?.data?._stat.atimeMs
      );
    },
    cellRenderer: (colArgs) => {
      const { data } = colArgs;
      return <>{data._stat.birthtime.toLocaleString()}</>;
    },
  },
];
