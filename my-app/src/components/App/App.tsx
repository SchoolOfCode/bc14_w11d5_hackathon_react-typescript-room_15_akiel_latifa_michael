import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureInfo from '../TemperatureInfo/TemperatureInfo';




function App() {
  const [searchLocation,setSearchLocation]= useState<string>("Rome")

console.log(searchLocation)


  return (
    <div className="App">
        <div>
     <h1>Weather App</h1>
     <input type ="text" name ={searchLocation} placeholder='Type City' onChange={event=>setSearchLocation(event.target.value)}></input>
    <button>Search</button>
    </div>
    <div>
      <h2>Location</h2>
      </div>

    </div>
  );
}

export default App;
