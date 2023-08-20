import React, { useState } from "react";
import './style.css';
import { searchMovies } from "../Utils/utilities";

const NavigationBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
    handleSearch(event.target.value);
  };

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setSearchResults(results.results);
  };
  return (
    <div className="Navbar">

      <nav className="nav">
        <div>
          <h1 className="logo">
            M<span>oo</span>vie
          </h1>
        </div>
        <div className="search">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="links">
          <li><a href="">Home</a></li>
          <li> <a href="">My list</a> </li>
          <button>Sign in</button>
        </div>
      </nav>  

          {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default NavigationBar;
