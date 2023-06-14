import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./ListItem.module.scss";

export const ListItem = () => {
  const { notes, filtredNotes, handleShowNote } = useContext(NotesContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (filtredNotes) {
      const sortedFiltredNotes = [...filtredNotes].sort(
        (a, b) => b.update - a.update
      );
      setList(sortedFiltredNotes);
    } else if (notes) {
      const sortedNotes = [...notes].sort((a, b) => b.update - a.update);
      setList(sortedNotes);
    }
  }, [filtredNotes, notes]);

  const onClickShowNote = (event) => {
    const noteId = event.currentTarget.getAttribute("data-id");
    handleShowNote(noteId);
  };

  const todayDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={s.note_list__container}>
    <ul className={s.note_list}>
      {filtredNotes?.length > 0 || filtredNotes === null ? "" : <p>No notes</p>}
      {list?.map(({ id, text, date, shortDate }) => {
        const textArray = text.split("");
        const delimeter = textArray.indexOf("\n");
        const dateArray = date.split(" ");
        const dateDelimeter = dateArray.indexOf("at");
        let titleArray = [];
        let noteTextArray = [];
        let timeArray = dateArray.slice(dateDelimeter + 1, dateArray.length);
        let time = "";
        const dayArray = dateArray.slice(0, dateDelimeter);
        const day = dayArray.join(" ");
        if (delimeter > -1) {
          titleArray = textArray.slice(0, delimeter);
          noteTextArray = textArray.slice(delimeter, textArray.length);
        } else {
          titleArray = [...textArray];
          noteTextArray = ["No additional text"];
        }
        if (titleArray.length > 29) {
          titleArray = [...titleArray].slice(0, 25);
          titleArray = [...titleArray, "..."];
        }
        if (noteTextArray.length > 20) {
          noteTextArray = [...noteTextArray].slice(0, 17);
          noteTextArray = [...noteTextArray, "..."];
        }
        if (day === todayDate && shortDate === undefined) {
          time = timeArray.join(" ");
        } else if (shortDate) {
          time = shortDate;
        }
        if (titleArray.length < 1) {
          titleArray = ["New note"];
        }
        const title = titleArray.join("");
        const noteText = noteTextArray.join("");
        return (
          <li
            className={s.note_item}
            key={id}
            onClick={onClickShowNote}
            data-id={id}
          >
            <p className={s.note_item__title}>{title}</p>
            <div className={s.note_item__descr}>
              <p className={s.note_item__date}>{time}</p>
              <p className={s.note_item__text}>{noteText}</p>
            </div>
          </li>
        );
      })}
    </ul>
    </div>
  );
};
