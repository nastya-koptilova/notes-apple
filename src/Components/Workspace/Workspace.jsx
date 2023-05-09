import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";

export const Workspace = () => {
  const { note } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [noteId, setNoteId] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.values.bIW6hdUSjpf4oia07dRMHy);
      setDate(note.values.cVWQ5XAeDfW6pdPM4EqbTo);
      setText(note.values.ddNmkgq8jhzioSlCkmsSod);
      setNoteId(note.id);
    }
  }, [note]);

  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{text}</p>
    </div>
  );
};
