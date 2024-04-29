import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    // Fetch parks data when the component mounts
    axios.get('localhost:3000/api/v1/parks/') // Assuming your backend API endpoint is '/api/parks'
      .then(response => {
        // Set the fetched parks data in the state
        setParks(response.data);
      })
      .catch(error => {
        console.error('Error fetching parks data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts


  return (
    <div>
      <h1>Parks:</h1>
      <ul>
        {parks.map(park => (
          <li key={park.id}>
            <strong>{park.park_name}</strong> - {park.county}, {park.state}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
