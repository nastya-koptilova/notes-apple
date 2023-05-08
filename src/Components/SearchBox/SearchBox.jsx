import React from "react";
import { addNote, deleteNote, editNote } from "../../services/API";

export const SearchBox = () => {
  const handleAddNote = () => {
    const note = {
      id: 1,
      title: "Art",
    };
    const fetchNewNote = async () => {
      try {
        const newNote = await addNote(note);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNewNote();
  };

  const handleDeleteNote = () => {
    const fetchDeleteNote = async () => {
      try {
        const deleteOneNote = await deleteNote("1");
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDeleteNote();
  };

  const handleEditNote = () => {
    const fetchEditNote = async () => {
      const note = {
        id: 1,
        title: "Art",
        text: "Arnold",
        data: "23-05-2023 4:13:00",
      };
      try {
        const updateNote = await editNote(note);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEditNote();
  };

  return (
    <div>
      <button type="button" onClick={handleAddNote}>
        Add
      </button>
      <button type="button" onClick={handleDeleteNote}>
        Delete
      </button>
      <button type="button" onClick={handleEditNote}>
        Edit
      </button>
    </div>
  );
};
