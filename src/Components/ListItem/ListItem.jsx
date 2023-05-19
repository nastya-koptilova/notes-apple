import React, { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./ListItem.module.scss";

export const ListItem = () => {
  const { notes, handleShowNote } = useContext(NotesContext);
  const onClickShowNote = (event) => {
    const noteId = event.currentTarget.getAttribute("data-id");
    console.log(noteId);
    handleShowNote(noteId);
  };
  return (
    <ul>
      {notes?.map(({id, text, date}) => {
        return (
          <li key={id} onClick={onClickShowNote} data-id={id}>
            <p>{date}</p>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
};
