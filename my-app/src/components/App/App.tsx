import { useState } from 'react';
import './App.css';
import './WeatherDisplay.css'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import SearchForm from '../SearchForm/SearchForm';






function App() {
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [showWeather, setShowWeather] = useState<boolean>(false);

  const handleSearch = () => {
    console.log("handleSearch called");
    setShowWeather(true);
  };

  return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <SearchForm
          searchLocation={searchLocation}
          setSearchLocation={setSearchLocation}
          handleSearch={handleSearch}
        />
      </div>
      <div>
        <h2>Location</h2>
      </div>
      {showWeather && <WeatherDisplay searchLocation={searchLocation} />}
    </div>
  );
}

export default App;

