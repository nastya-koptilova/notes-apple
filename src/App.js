import { useContext, useEffect } from "react";
import { NotesContext } from "./context/NotesContext";
import { ModalDelete } from "./Components/ModalDelete/ModalDelete";
import s from "./App.module.scss";
import { Notes } from "./Components/Notes/Notes";
import { Sidebar } from "./Components/Sidebar/Sidebar";

function App() {
  const { handleShowList, isModalOpen } = useContext(NotesContext);

  useEffect(() => {
    handleShowList();
  }, [handleShowList]);

  return (
    <div className={s.container}>
      <Sidebar />
      <Notes/>
      {isModalOpen && <ModalDelete />}
    </div>
  );
}

export default App;
