import { useContext, useEffect } from "react";
import { SearchBox } from "./Components/SearchBox/SearchBox";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Workspace } from "./Components/Workspace/Workspace";
import { NotesContext } from "./context/NotesContext";

function App() {
  const { handleShowList } = useContext(NotesContext);

  useEffect(() => {
    handleShowList();
  }, [handleShowList]);

  return (
    <div>
      <SearchBox />
      <Sidebar />
      <Workspace />
    </div>
  );
}

export default App;
