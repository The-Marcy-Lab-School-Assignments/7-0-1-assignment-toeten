import React from 'react';
import { useState } from 'react';
import NavBar from './components/NavBar';
import GiphyTrending from './components/GifContainer';
import GifSearch from './components/GifSearch';


function App() {
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const handleSearchResults = (results) => {
    setSearchResults(results)
    setIsSearching(true)
  }
  return (
    <div className="App">
      <NavBar color='black' title="Giphy Search" />
      <header className="App-header">
        <GifSearch onSearchResults={handleSearchResults} />
        <br />
        {!isSearching ? (
          <GiphyTrending />
        ) : (
          <ul>
            {searchResults.map((gif) => (
              <li key={gif.id}>
                <img src={gif.images.fixed_height.url} alt={gif.title} />
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;

