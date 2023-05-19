import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Workspace } from "../Workspace/Workspace";
import s from "./Notes.module.scss";

export const Notes = () => {
  return (
    <div className={s.notes__container}>
      <Sidebar />
      <Workspace />
    </div>
  );
};
