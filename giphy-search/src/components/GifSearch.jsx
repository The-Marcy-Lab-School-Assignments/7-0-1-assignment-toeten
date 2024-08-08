import React, { useState } from 'react';
import API_KEY from '../../config';
import { handleFetch } from '../utils';

function GifSearch({ onSearchResults }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault()
    const [responseData, fetchError] = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`);
    if (responseData) {
      onSearchResults(responseData.data);
    }
    if (fetchError) {
      setError(fetchError.message);
    }
  }
  return (
    <form onSubmit={handleSearch}>
      <label className="entersearch" htmlFor="searchInput">Enter a Search Term </label>
      <input 
        type="text" 
        className="form-control" 
        id="searchInput" 
        value={query}
        onChange={(event) => setQuery(event.target.value)} 
      />
      <button type="submit" className="btn btn-success">Find a Gif</button>
      {error && <p>Error: {error}</p>}
    </form>
  )
}

export default GifSearch
