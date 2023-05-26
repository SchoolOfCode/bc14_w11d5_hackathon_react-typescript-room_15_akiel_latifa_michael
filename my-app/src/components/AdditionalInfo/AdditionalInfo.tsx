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

  interface AdditionalInfoProps {
    WeatherDisplay: WeatherData
  }

export default function AdditionalInfo ({WeatherDisplay}:AdditionalInfoProps) {

    return (
        <div>
          {WeatherDisplay && (
            <div>
              <p>Feels Like:<br></br>{(WeatherDisplay.main.feels_like -272.15).toFixed(1)}°C</p>
              <p>Min Temperature:<br></br>{(WeatherDisplay.main.temp_min -272.15).toFixed(1)}°C</p>
              <p>Max Temperature:<br></br>{(WeatherDisplay.main.temp_max -272.15).toFixed(1)}°C</p>
              <p>Humidity:<br></br>{WeatherDisplay.main.humidity}%</p>
            </div>
          )}
        </div>
      );
    }
    