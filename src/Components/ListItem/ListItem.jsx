import React, { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./ListItem.module.scss";

export const ListItem = () => {
  const { notes, handleShowNote } = useContext(NotesContext);
  const onClickShowNote = (event) => {
    const noteId = event.currentTarget.getAttribute("data-id");
    console.log(noteId);
    handleShowNote(noteId);
  };
  return (
    <ul className={s.note_list}>
      {notes?.map(({ id, text, date }) => {
        const textArray = text.split("");
        const delimeter = textArray.indexOf("\n");
        let titleArray = [];
        if (delimeter > -1) {
          titleArray = textArray.slice(0, delimeter);
        } else {
          titleArray = [...textArray];
        }
        const title = titleArray.join("");
        console.log(title);
        return (
          <li
            className={s.note_item}
            key={id}
            onClick={onClickShowNote}
            data-id={id}
          >
            <p className={s.note_item__title}>{title}</p>
            <div className={s.note_item__descr}>
              <p className={s.note_item__date}>{date}</p>
              <p className={s.note_item__text}>{text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
