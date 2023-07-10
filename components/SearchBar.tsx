"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

SearchManufacturer;
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacurer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;