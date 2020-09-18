import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import Preview from './Preview.js';

function App() {

  const [result, setResult] = useState();

  const apiSearch = (search) => {
    fetch(`https://api.scaleserp.com/search?api_key=CE19F01DAA0E4101A7DB5B93452617BB&q=${search}&page=1&num=1`)
      .then(res => res.json())
      .then(result => setResult({
        title: result.organic_results[0].title,
        location: result.organic_results[0].rich_snippet.top.extensions[0],
        position: result.organic_results[0].rich_snippet.top.extensions[1],
        company: result.organic_results[0].rich_snippet.top.extensions[2],
        snippet: result.organic_results[0].snippet,
        displayLink: result.organic_results[0].displayed_link,
      }))
  }

  const showPreview = () => {
    if(result) {
      return <Preview 
      title={result.title} 
      location={result.location}
      position={result.position}
      company={result.company}
      snippet={result.snippet}
      displayLink={result.displayLink}
      />
    } else {
      return 
    }
  }

  return (
    <div className="App">
      <SearchForm
        apiSearch={apiSearch}
      />
      {showPreview()}
    </div>
  );
}

export default App;
