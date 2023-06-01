import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./Sidebar.module.scss";
import { SearchBox } from "../SearchBox/SearchBox";

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
      shortDate: `${
        new Date().getMonth() + 1
      }/${new Date().getDate()}/${new Date().getFullYear()}`,
      update: `${new Date().getTime()}`,
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
    <div className={s.sidebar}>
      <div className={s.sidebar__button_container}>
        <button
          className={s.sidebar__button}
          type="button"
          onClick={onClickAddNote}
        >
          Add
        </button>
        <button
          className={s.sidebar__button}
          type="button"
          onClick={onClickDeleteNote}
          disabled={disabled}
        >
          Delete
        </button>
        <button
          className={s.sidebar__button}
          type="button"
          onClick={onClickEditNote}
          disabled={disabled}
        >
          Edit
        </button>
      </div>
      <SearchBox />
    </div>
  );
};
