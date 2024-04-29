import { useState, useEffect } from 'react';
import axios from 'axios';

const ParkList = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    // Fetch park data when the component mounts
    axios.get('http://localhost:3000/api/v1/parks')
      .then(response => setParks(response.data))
      .catch(error => console.error('Error fetching park data:', error));
  }, []);

  return (
    <div>
      <h1>Parks</h1>
      <ul>
        {parks.map(park => (
          <li key={park.park_id}>
            <h2>{park.park_name}</h2>
            <p>County: {park.county}</p>
            <p>Hiking Spree Challenge: {park.hiking_spree_challenge ? 'Yes' : 'No'}</p>
            <p>Website: <a href={park.park_website} target="_blank" rel="noopener noreferrer">{park.park_name} Website</a></p>
            {/* Add more park information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkList;