import React, { useEffect, useState } from "react";
import { getNotes } from "../../services/API";

export const Sidebar = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesList = await getNotes();
        const { records } = notesList;
        setNotes(records);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div>
      <ul>
        {notes.map((el) => {
          const title = el.values.bIW6hdUSjpf4oia07dRMHy;
          const text = el.values.ddNmkgq8jhzioSlCkmsSod;
          const date = el.values.cVWQ5XAeDfW6pdPM4EqbTo;
          return (
            <li key={el.id}>
              <p>{title}</p>
              <p>{date}</p>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
