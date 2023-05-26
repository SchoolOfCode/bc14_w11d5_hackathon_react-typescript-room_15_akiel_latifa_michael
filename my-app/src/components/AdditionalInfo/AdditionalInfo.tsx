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
              <p>Feels Like: {WeatherDisplay.main.feels_like}</p>
              <p>Min Temperature: {WeatherDisplay.main.temp_min}</p>
              <p>Max Temperature: {WeatherDisplay.main.temp_max}</p>
              <p>Humidity: {WeatherDisplay.main.humidity}</p>
            </div>
          )}
        </div>
      );
    }
    