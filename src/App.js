import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://52.91.80.7:5000/api/query', { query });
      setResult(response.data.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
      setResult(null);
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
