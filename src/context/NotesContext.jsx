import React, { createContext, useState } from "react";
import {
  addNote,
  deleteNote,
  editNote,
  getNotes,
  getOneNote,
} from "../services/API";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [noteId, setNoteId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleShowList = () => {
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
  };

  const handleShowNote = (id) => {
    setNoteId(id);
    const fetchNote = async () => {
      try {
        const noteInfo = await getOneNote(id);
        const { record } = noteInfo;
        setNote(record);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNote();
  };

  const handleAddNote = (note) => {
    const fetchNewNote = async () => {
      try {
        const newNote = await addNote(note);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNewNote();
  };

  const handleDeleteNote = (id) => {
    const fetchDeleteNote = async () => {
      try {
        const deleteOneNote = await deleteNote(id);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDeleteNote();
    handleShowList();
  };

  const handleEditNote = (note) => {
    const fetchEditNote = async () => {
      try {
        const updateNote = await editNote(note);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEditNote();
  };

  const handleSearchNote = (query) => {
    setSearchValue(query);
  };

  const filterNotes = notes.filter((el) =>
  el.values.bIW6hdUSjpf4oia07dRMHy
    .toLowerCase()
    .includes(searchValue.toLowerCase().trim())
);

  return (
    <NotesContext.Provider
      value={{
        filterNotes,
        note,
        noteId,
        searchValue,
        handleAddNote,
        handleDeleteNote,
        handleEditNote,
        handleShowNote,
        handleShowList,
        handleSearchNote
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
