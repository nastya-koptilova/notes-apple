import React, { useState } from "react";

export const SearchBox = ({ handleSearchNote }) => {
    const [query, setQuery] = useState('');
  
    const handleSearch = ({ target }) => {
    handleSearchNote(target.value);
    //   setQuery(target.value);
    //   handleSearch(query);
    };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter note name"
          name="name"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};
