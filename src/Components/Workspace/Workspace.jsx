import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";

export const Workspace = () => {
  const { note } = useContext(NotesContext);

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

  return (
    <>
      {date && (
        <div>
          <p>{date}</p>
          <p>{text}</p>
        </div>
      )}
    </>
  );
};
