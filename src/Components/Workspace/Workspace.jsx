import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./Workspace.module.scss";

export const Workspace = () => {
  const { note, handleEditNote, isReadOnly } = useContext(NotesContext);

  const [date, setDate] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    if (note) {
      setDate(note.date);
      setText(note.text);
    } else {
      setDate(null);
      setText(null);
    }
  }, [note]);

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
        <div>
          <p>{date}</p>
          <form>
            <textarea readOnly={isReadOnly} defaultValue={text} onChange={handleEditText}></textarea>
          </form>
        </div>
      )}
    </>
  );
};
