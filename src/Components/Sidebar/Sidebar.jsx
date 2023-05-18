import React, { useContext } from "react";
import { ListItem } from "../ListItem/ListItem";
import { NotesContext } from "../../context/NotesContext";

export const Sidebar = () => {
  const { handleAddNote, handleDeleteNote, handleEditNote, handleShowList } =
    useContext(NotesContext);

  const onClickAddNote = () => {
    const note = {
      text: "",
    };
    handleAddNote(note);
  };

  const onClickDeleteNote = () => {
    handleDeleteNote(1);
  };

  const onClickEditNote = () => {
    const id = 2;
    const note = {
      text: "Arnold",
      date: "23-05-2023 4:13:00",
    };
    handleEditNote(id, note);
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
      <ListItem />
    </div>
  );
};
