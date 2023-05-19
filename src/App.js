import { useContext, useEffect } from "react";
import { SearchBox } from "./Components/SearchBox/SearchBox";
import { NotesContext } from "./context/NotesContext";
import { ModalDelete } from "./Components/ModalDelete/ModalDelete";
import s from "./App.module.scss";
import { Notes } from "./Components/Notes/Notes";

function App() {
  const { handleShowList, isModalOpen } = useContext(NotesContext);

  useEffect(() => {
    handleShowList();
  }, [handleShowList]);

  return (
    <div className={s.container}>
      <SearchBox />
      <Notes/>
      {isModalOpen && <ModalDelete />}
    </div>
  );
}

export default App;
