import React, { useContext, useEffect, useState } from "react";
import { ListItem } from "../ListItem/ListItem";
import { NotesContext } from "../../context/NotesContext";
import s from "./Sidebar.module.scss";

export const Sidebar = () => {
  const { handleAddNote, handleDeleteButton, handleEditDisable, noteId } =
    useContext(NotesContext);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (noteId) {
      setDisabled(false);
    }
  }, [noteId]);

  const onClickAddNote = () => {
    const note = {
      text: "",
      date: `${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })} at ${new Date().toLocaleTimeString("en-US")}`,
    };
    handleAddNote(note);
  };

  const onClickDeleteNote = () => {
    handleDeleteButton();
  };

  const onClickEditNote = () => {
    handleEditDisable();
  };

  return (
    <div>
      <button type="button" onClick={onClickAddNote}>
        Add
      </button>
      <button type="button" onClick={onClickDeleteNote} disabled={disabled}>
        Delete
      </button>
      <button type="button" onClick={onClickEditNote} disabled={disabled}>
        Edit
      </button>
      <ListItem />
    </div>
  );
};
