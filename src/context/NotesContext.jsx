import React, { createContext, useState } from "react";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

export const NotesContext = createContext();

const db = new Dexie("notesDB");
db.version(1).stores({ notesDB: "++id,date,text" });

const { notesDB } = db;

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [noteId, setNoteId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filtredNotes, setFiltredNotes] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allItems = useLiveQuery(() => notesDB.toArray(), []);

  const handleShowList = () => {
    setNotes(allItems);
  };

  const handleShowNote = (id) => {
    setIsDisabled(true);
    setNoteId(Number(id));
    const note = notes.find((el) => Number(id) === el.id);
    setNote(note);
  };

  const handleAddNote = async (note) => {
    await notesDB.add(note);
  };

  const handleDeleteButton = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleDeleteNote = async (id) => {
    await notesDB.delete(id);
    setNote(null);
    setIsModalOpen(false);
  };

  const handleEditNote = async (note) => {
    setIsDisabled(false);
    await notesDB.update(noteId, note);
  };

  const handleSearchNote = (value) => {
    notesDB
      .where("text")
      .startsWithIgnoreCase(value)
      .toArray(function (notes) {
        setFiltredNotes(notes);
      });
    console.log(filtredNotes);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        note,
        noteId,
        isDisabled,
        isModalOpen,
        searchValue,
        handleAddNote,
        handleDeleteNote,
        handleEditNote,
        handleShowList,
        handleSearchNote,
        handleShowNote,
        handleDeleteButton,
        handleCloseModal
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
