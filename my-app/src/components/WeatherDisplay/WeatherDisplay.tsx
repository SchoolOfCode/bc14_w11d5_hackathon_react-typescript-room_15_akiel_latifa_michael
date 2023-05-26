import React, { useEffect, useState } from 'react';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

interface WeatherDisplayProps {
  searchLocation: string;
}

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

function WeatherDisplay({ searchLocation }: WeatherDisplayProps) {
  const [temperatureInfo, setTemperatureInfo] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function getTemperatureInfo() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=e0ceff881491f612bae4229b67b2a022`
        );
        const data = await response.json();
        setTemperatureInfo(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (searchLocation) {
      getTemperatureInfo();
    }
  }, [searchLocation]);
  
  const convertKelvinToCelsius = (temperature: number) => {
    return (temperature - 273.15).toFixed(2);
  };

  return (
    <div className="WeatherDisplay__Card">
      {temperatureInfo && temperatureInfo.main && temperatureInfo.weather ? (
        <div>
          <h2>{convertKelvinToCelsius(temperatureInfo.main.temp)}°C</h2>
          <img
            src={`http://openweathermap.org/img/wn/${temperatureInfo.weather[0].icon}.png`}
            alt={temperatureInfo.weather[0].description}
          />
          <AdditionalInfo temperatureInfo={temperatureInfo} />
        </div>
      ) : (
        <p>Loading...</p>
    
      )}
    </div>
  );
}

export default WeatherDisplay;
