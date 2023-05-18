import React, { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";

export const ListItem = () => {
  const { notes, handleShowNote } = useContext(NotesContext);
  const onClickShowNote = (event) => {
    const noteId = event.currentTarget.getAttribute("data-id");
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
