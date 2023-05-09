import React, { useContext } from "react";
import { ListItem } from "../ListItem/ListItem";
import { NotesContext } from "../../context/NotesContext";

export const Sidebar = () => {

  const {
    handleAddNote,
    handleDeleteNote,
    handleEditNote,
    handleShowList,
  } = useContext(NotesContext);

  const onClickAddNote = () => {
    const note = {
      id: 1,
      title: "Art",
    };
    handleAddNote(note);
    handleShowList();
  };

  const onClickDeleteNote = () => {
    handleDeleteNote("1");
  };

  const onClickEditNote = () => {
    const note = {
      id: 1,
      title: "Art",
      text: "Arnold",
      data: "23-05-2023 4:13:00",
    };
    handleEditNote(note);
    // handleShowList();
  };

  return (
    <div>
      <button type="button" onClick={onClickAddNote}>
        Add
      </button>
      <button type="button" onClick={onClickDeleteNote}>
        Delete
      </button>
      <button type="button" onClick={onClickEditNote}>
        Edit
      </button>
      <ListItem/>
    </div>
  );
};
