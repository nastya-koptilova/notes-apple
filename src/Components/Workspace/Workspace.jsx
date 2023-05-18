import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";

export const Workspace = () => {
  const { note } = useContext(NotesContext);

  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (note) {
      setDate(note.date);
      setText(note.text);
    }
  }, [note]);

  return (
    <div>
      <p>{date}</p>
      <p>{text}</p>
    </div>
  );
};
