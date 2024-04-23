import "./Search.css";
import { useAppDispatch } from "../../utils/hooks";
import { useState } from "react";
import { fetchCountriesByName } from "../../utils/actions";

const Search = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("name");

  const handleClick = () => {
    if (search != null && category != null && search != "" && category != "")
      dispatch(fetchCountriesByName(search, category));
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input onChange={(e) => { setSearch(e.target.value)}} type='text' placeholder='Search'/>
      </div>
      <div>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option selected value={'name'}>Name</option>
          <option value={'capital'}>Captital</option>
          <option value={'lang'}>Language</option>
        </select>
      </div>
      <div className="search-button">
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default Search;
