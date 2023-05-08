import React, { useEffect, useState } from "react";
import { getOneNote } from "../../services/API";

export const Workspace = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const noteInfo = await getOneNote("ddLeNcTKbcIlJdUt0wyCou");
        const { record } = noteInfo;
        setTitle(record.values.bIW6hdUSjpf4oia07dRMHy);
        setDate(record.values.cVWQ5XAeDfW6pdPM4EqbTo);
        setText(record.values.ddNmkgq8jhzioSlCkmsSod);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNote();
  }, []);

  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{text}</p>
    </div>
  );
};
