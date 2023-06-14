import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./Sidebar.module.scss";
import { SearchBox } from "../SearchBox/SearchBox";
import { GrAdd } from "react-icons/gr";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

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
          <BiPlusMedical className={s.sidebar__icon} />
        </button>
        <button
          className={s.sidebar__button}
          type="button"
          onClick={onClickDeleteNote}
          disabled={disabled}
        >
          <BsFillTrash3Fill className={s.sidebar__icon} />
        </button>
        <button
          className={s.sidebar__button}
          type="button"
          onClick={onClickEditNote}
          disabled={disabled}
        >
          <FiEdit3 className={s.sidebar__icon} />
        </button>
      </div>
      <SearchBox />
    </div>
  );
};
