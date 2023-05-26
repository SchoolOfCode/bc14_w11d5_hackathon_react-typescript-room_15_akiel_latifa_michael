import { get } from "http"
import React, {useState, useEffect} from "react"
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

type searchLocationProps = {
    searchLocation: string
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

function WeatherDisplay(props:searchLocationProps){

const {searchLocation} = props

console.log(searchLocation)

// write api call here to get temperature info

// make a usestate for saving temperature info
const [WeatherDisplay, setWeatherDisplay] = useState<WeatherData | null>(null)

// put everything in a useEffect
useEffect(()=>{
async function getWeatherDisplay(){

    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=3e43337fb85b3147a6f53b4009e28316`)
    const data = await response.json()
    console.log(data)
    setWeatherDisplay(data)}
    catch(error){console.log(error)}
    //return data
}

getWeatherDisplay()
},[searchLocation])

const convertKelvinToCelsius = (temperature: number) => {
    return (temperature - 273.15).toFixed(2);
  };


return (
    <div className="WeatherDisplay_Card">
      {WeatherDisplay && WeatherDisplay.main && WeatherDisplay.weather ? (
        <div>
          <h2>{convertKelvinToCelsius(WeatherDisplay.main.temp)}°C</h2>
          <img
            src={`http://openweathermap.org/img/wn/${WeatherDisplay.weather[0].icon}.png`}
            alt={WeatherDisplay.weather[0].description}
          />
          <AdditionalInfo WeatherDisplay={WeatherDisplay} />
        </div>
      ) : (
          <p></p>
          
          )}
    </div>
  );
}




export default WeatherDisplay
