import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./Workspace.module.scss";

export const Workspace = () => {
  const { note, handleEditNote, isReadOnly } = useContext(NotesContext);

  const [date, setDate] = useState(null);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (note) {
      setDate(note.date);
      setText(note.text);
      setTitle(note.title);
    } else {
      setDate(null);
      setText('');
      setTitle('');
    }
  }, [note, text, title]);

  const handleEditText = (event) => {
    setText(event.target.value);
    const note = {
      title: title,
      text: event.target.value,
      date: `${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })} at ${new Date().toLocaleTimeString("en-US")}`,
    };
    handleEditNote(note);
  };

  const handleEditTitle = (event) => {
    setTitle(event.target.value);
    const note = {
      title: event.target.value,
      text: text,
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
            <input
              type="text"
              defaultValue={title}
              readOnly={isReadOnly}
              onChange={handleEditTitle}
            ></input>
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
