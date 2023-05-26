import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import SearchForm from '../SearchForm/SearchForm'
// import getTemperatureInfo from '../TemperatureInfo/TemperatureInfo';




function App() {
  const [searchLocation,setSearchLocation]= useState<string>("Rome")
  const [searchInput,setSearchInput]=useState<any>()

// console.log(searchLocation)

function handleClick(){
  setSearchLocation(searchInput)
}


  return (
    <div className="App">
        <div>
     <h1>Weather App</h1>
    </div>
    <div>
      <h2>Location</h2>
       <div>
    <input
      type="text"
      value={searchInput}
      onChange={(event) => setSearchInput(event.target.value)}
      placeholder="Type City"
    />
    <button onClick={handleClick}>Search</button>
 </div>
;
      </div>
    <WeatherDisplay searchLocation={searchLocation}/>
    </div>
  );
}

export default App;

//<SearchForm searchLocation={searchLocation} setSearchLocation={setSearchLocation} />