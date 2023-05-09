import React, { useEffect, useState } from "react";

export const Workspace = ({ noteInfo }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [noteId, setNoteId] = useState('');

  useEffect(() => {
    if (noteInfo) {
      setTitle(noteInfo.values.bIW6hdUSjpf4oia07dRMHy);
      setDate(noteInfo.values.cVWQ5XAeDfW6pdPM4EqbTo);
      setText(noteInfo.values.ddNmkgq8jhzioSlCkmsSod);
      setNoteId(noteInfo.id);
    }
  }, [noteInfo]);

  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{text}</p>
    </div>
  );
};
