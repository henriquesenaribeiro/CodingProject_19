import React, { useState } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="App">
      <h1>Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </div>
  );
}

export default App;