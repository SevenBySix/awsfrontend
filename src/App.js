import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://54.196.97.136:5000/api/query', { query })
	  .then(response => {
		console.log('Query result:', response.data);
	  })
	  .catch(error => {
		if (error.response) {
		  // The request was made, and the server responded with a status code out of the range of 2xx
		  console.error('Error response:', error.response.data);
		  alert(`Error: ${error.response.data.message}`);  // Show error message
		} else if (error.request) {
		  // The request was made, but no response was received
		  console.error('No response received:', error.request);
		} else {
		  // Something happened in setting up the request that triggered an Error
		  console.error('Error:', error.message);
		}
	  });
  };

  return (
    <div>
      <h1>SQL Query Console</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your SQL query here"
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Execute Query</button>
      </form>
      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ color: 'red' }}>
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
