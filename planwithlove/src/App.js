import React, { useState } from "react";
import "./App.css";
import data from './data.js';
import Tours from './components/Tours.js'
function App() {
  const [tours,setTours] = useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  return (
    <div>
      <Tours tours={tours} removeTour = {removeTour}></Tours>
    </div>
  );
}

export default App;
