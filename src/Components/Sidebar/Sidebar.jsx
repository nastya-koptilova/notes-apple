import React from "react";
import { ListItem } from "../ListItem/ListItem";

export const Sidebar = ({
  list,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  const onClickAddNote = () => {
    const note = {
      id: 1,
      title: "Art",
    };
    handleAddNote(note);
  };

  const onClickDeleteNote = () => {
    handleDeleteNote("1");
  };

  const onClickEditNote = () => {
    const note = {
      id: 1,
      title: "Art",
      text: "Arnold",
      data: "23-05-2023 4:13:00",
    };
    handleEditNote(note);
  };

  return (
    <div>
      <button type="button" onClick={onClickAddNote}>
        Add
      </button>
      <button type="button" onClick={onClickDeleteNote}>
        Delete
      </button>
      <button type="button" onClick={onClickEditNote}>
        Edit
      </button>
      <ListItem notes={list} />
    </div>
  );
};
