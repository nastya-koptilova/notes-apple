import React, { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import s from "./SearchBox.module.scss";

export const SearchBox = () => {
  const { handleSearchNote } = useContext(NotesContext);

  const handleSearch = ({ target }) => {
    handleSearchNote(target.value);
  };

  return (
    <div className={s.searchbox}>
      <form className={s.searchbox__form}>
        <input
          className={s.searchbox__input}
          type="text"
          placeholder="&#x1F50E;&#xFE0E; Search"
          name="name"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};
