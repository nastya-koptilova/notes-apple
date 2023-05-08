import React from "react";

export const ListItem = ({ notes, handleShowNote }) => {
  const onClickShowNote = (event) => {
   const noteId = event.currentTarget.getAttribute('data-id');
   handleShowNote(noteId);
  }
  return (
    <ul>
      {notes.map((el) => {
        const title = el.values.bIW6hdUSjpf4oia07dRMHy;
        const text = el.values.ddNmkgq8jhzioSlCkmsSod;
        const date = el.values.cVWQ5XAeDfW6pdPM4EqbTo;
        return (
          <li key={el.id} onClick={onClickShowNote} data-id={el.id}>
            <p>{title}</p>
            <p>{date}</p>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
};
