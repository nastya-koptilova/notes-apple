import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./Workspace.module.scss";

export const Workspace = () => {
  const { note, handleEditNote, isReadOnly } = useContext(NotesContext);

  const [date, setDate] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {
    if (note) {
      setDate(note.date);
      setText(note.text);
    } else {
      setDate(null);
      setText('');
    }
  }, [note, text]);

  const handleEditText = (event) => {
    setText(event.target.value);
    const note = {
      text: event.target.value,
      date: `${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })} at ${new Date().toLocaleTimeString("en-US")}`,
    };
    handleEditNote(note);
  };

  return (
    <>
      {date && (
        <div className={s.workspace}>
          <p className={s.workspace__date}>{date}</p>
          <form className={s.workspace__form}>
            <textarea
              className={s.workspace__text}
              readOnly={isReadOnly}
              defaultValue={text}
              onChange={handleEditText}
            ></textarea>
          </form>
        </div>
      )}
    </>
  );
};
