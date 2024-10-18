import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Clear any previous error
      setError(null);
      setResult(null);

      // Send the query to the backend
      const response = await axios.post('https://100.27.138.174:5000/api/query', { query });

      // Set the result in the state to display it
      setResult(response.data);
    } catch (err) {
      // Handle error responses from the server
      if (err.response) {
        // Server responded with a status code out of the 2xx range
        setError(`Error: ${err.response.data.message || 'Something went wrong with the query'}`);
      } else if (err.request) {
        // Request was made, but no response was received
        setError('No response received from the server.');
      } else {
        // Something happened in setting up the request
        setError(`Error: ${err.message}`);
      }
    }
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
