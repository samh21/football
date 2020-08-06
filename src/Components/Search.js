import React, { useState } from 'react';
import '../Search.css';

function Search({ data, setLeague }) {
  const [searchStr, setSearchStr] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onTextChange = (e) => {
    setSearchStr(e.target.value);
    if (e.target.value.length > 0) {
      const regex = new RegExp(`^${e.target.value}`, 'i');
      setSuggestions(
        [...data]
          .sort((a, b) => {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;
          })
          .filter((value) => regex.test(value.name))
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleClick = (id, name, country) => {
    setLeague({ id, name, country });
    setSearchStr('');
    setSuggestions([]);
  };

  return (
    <div className="bg">
      <form>
        <input
          autoComplete="off"
          className="searchBox"
          type="text"
          name="search"
          placeholder="Search for a football league"
          value={searchStr}
          onChange={onTextChange}
        />
      </form>
      {suggestions.length > 0 ? (
        <ul>
          {suggestions.map((league) => (
            <li
              key={league.id}
              onClick={() =>
                handleClick(league.id, league.name, league.country)
              }
            >
              <div>
                <div> {league.name}</div>
                <div>{league.country}</div>
                <img src={league.flag} alt="" />
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Search;
