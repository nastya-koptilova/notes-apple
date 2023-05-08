import { useEffect, useState } from "react";
import { SearchBox } from "./Components/SearchBox/SearchBox";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Workspace } from "./Components/Workspace/Workspace";
import {
  addNote,
  deleteNote,
  editNote,
  getNotes,
  getOneNote,
} from "./services/API";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [noteId, setNoteId] = useState(null);

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

  // useEffect(() => {
  //   if (!noteId) {
  //     return;
  //   }
  //   handleShowNote(noteId)
  // }, [noteId]);

  const handleShowNote = (id) => {
    setNoteId(id);
    const fetchNote = async () => {
      try {
        const noteInfo = await getOneNote(id);
        const { record } = noteInfo;
        setNote(record.values);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNote();
  }

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

  return (
    <div>
      <SearchBox />
      <Sidebar
        list={notes}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        handleEditNote={handleEditNote}
        handleShowNote={handleShowNote}
      />
      <Workspace noteInfo={note} />
    </div>
  );
}

export default App;
