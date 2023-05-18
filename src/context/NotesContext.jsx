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

  const allItems = useLiveQuery(() => notesDB.toArray(), []);

  console.log(allItems);

  const handleShowList = () => {
    setNotes(allItems);
  };

  // const handleShowNote = (id) => {
  //   setNoteId(id);
  //   const fetchNote = async () => {
  //     try {
  //       const noteInfo = await getOneNote(id);
  //       const { record } = noteInfo;
  //       setNote(record);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchNote();
  // };

  const handleAddNote = async (note) => {
    await notesDB.add(note);
  };

  const handleDeleteNote = async (id) => {
    await notesDB.delete(id);
  };

  const handleEditNote = async (id, note) => {
    await notesDB.update(id, note);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        note,
        noteId,
        searchValue,
        handleAddNote,
        handleDeleteNote,
        handleEditNote,
        handleShowList,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
