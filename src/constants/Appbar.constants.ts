import React from "react";
import { MdUpdate } from "react-icons/md";
import { FcOpenedFolder } from "react-icons/fc";

const UpdateAllPackages = React.lazy(
  () => import("../pages/UpdateAllPackages")
);

const FileExplorer = React.lazy(() => import("../pages/FileExplorer"));

export interface IApp {
  path: string;
  Element: React.FC;
  Icon: React.FC;
  title: string;
  id: string;
  show: boolean;
}

export const ALL_APPS = {
  FileExplorer: {
    id: "fileExplorer",
    title: "File Explorer",
  },
  UpdateAllPackages: {
    id: "UpdateAllPackages",
    title: "Update all packages",
  },
};

export const allApps: Array<IApp> = [
  {
    path: "/",
    Element: FileExplorer,
    Icon: FcOpenedFolder,
    title: ALL_APPS.FileExplorer.title,
    id: ALL_APPS.FileExplorer.id,
    show: true,
  },
  {
    path: "/update-all-pkgs",
    Element: UpdateAllPackages,
    Icon: MdUpdate,
    title: ALL_APPS.UpdateAllPackages.title,
    id: ALL_APPS.UpdateAllPackages.id,
    show: false,
  },
];

const apps = allApps.filter((app) => app.show);

export default apps;
