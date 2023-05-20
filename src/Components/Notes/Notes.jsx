import React from "react";
import { Workspace } from "../Workspace/Workspace";
import s from "./Notes.module.scss";
import { ListItem } from "../ListItem/ListItem";

export const Notes = () => {
  return (
    <div className={s.notes__container}>
      <ListItem />
      <Workspace />
    </div>
  );
};
