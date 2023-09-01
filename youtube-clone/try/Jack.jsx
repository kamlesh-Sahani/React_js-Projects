import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

function Jack() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) {
      return;
    }

    const options = {
      method: 'GET',
      url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
      params: { q: query },
      headers: {
        'X-RapidAPI-Key': 'c476698dd1mshfe63080a09a62f4p1fef25jsnf0723d465c2e',
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setResults(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Search</h1>
        <input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </header>
      <div className="Results">
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          results.map((item) => (
            <iframe
              key={item.id}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${item.id}`}
              title={item.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ))
        )}
      </div>
    </div>
  );
}

export default Jack;
