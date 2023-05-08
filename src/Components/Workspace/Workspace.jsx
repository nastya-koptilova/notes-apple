import React, { useEffect, useState } from "react";

export const Workspace = ({ noteInfo }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (noteInfo) {
      setTitle(noteInfo.bIW6hdUSjpf4oia07dRMHy);
      setDate(noteInfo.cVWQ5XAeDfW6pdPM4EqbTo);
      setText(noteInfo.ddNmkgq8jhzioSlCkmsSod);
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
