import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";

export const Workspace = () => {
  const { note } = useContext(NotesContext);

  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [noteId, setNoteId] = useState("");

  useEffect(() => {
    if (note) {
      setDate(note.values.czWO_cRCjljik0xColW7uo);
      setText(note.values.cZWQRdMCjkWPFdQ8kniCok);
      setNoteId(note.id);
    }
  }, [note]);

  return (
    <div>
      {/* <p>{date}</p>
      <p>{text}</p> */}
    </div>
  );
};
