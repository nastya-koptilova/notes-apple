import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./Workspace.module.scss";

export const Workspace = () => {
  const { note, handleEditNote, isReadOnly, noteId } = useContext(NotesContext);

  const [date, setDate] = useState(null);
  const [text, setText] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    if (note) {
      setDate(note.date);
      setText(note.text);
      setId(noteId);
    } else {
      setDate(null);
      setText("");
      setId(null);
    }
  }, [note, text, noteId, id]);

  const handleEditText = (event) => {
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
              key={text}
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
