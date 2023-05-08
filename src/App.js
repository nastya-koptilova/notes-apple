import { ListItem } from "./Components/ListItem/ListItem";
import { SearchBox } from "./Components/SearchBox/SearchBox";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Workspace } from "./Components/Workspace/Workspace";

function App() {
  return (
    <div>
      <SearchBox/>
      <Sidebar/>
      <ListItem/>
      <Workspace/>
    </div>
  );
}

export default App;
