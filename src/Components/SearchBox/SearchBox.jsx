import React, { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";

export const SearchBox = () => {
  const { handleSearchNote } = useContext(NotesContext);

  const handleSearch = ({ target }) => {
    handleSearchNote(target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter note name"
          name="name"
          // onChange={handleSearch}
        />
      </form>
    </div>
  );
};
