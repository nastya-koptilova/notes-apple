import { useContext, useEffect } from "react";
import { SearchBox } from "./Components/SearchBox/SearchBox";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Workspace } from "./Components/Workspace/Workspace";
import { NotesContext } from "./context/NotesContext";
import { ModalDelete } from "./Components/ModalDelete/ModalDelete";
import s from "./App.module.scss";

function App() {
  const { handleShowList, isModalOpen } = useContext(NotesContext);

  useEffect(() => {
    handleShowList();
  }, [handleShowList]);

  return (
    <div className={s.container}>
      <SearchBox />
      <Sidebar />
      <Workspace />
      {isModalOpen && <ModalDelete />}
    </div>
  );
}

export default App;
