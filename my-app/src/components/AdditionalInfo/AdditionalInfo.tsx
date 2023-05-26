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
  temperatureInfo: WeatherData;
}

function AdditionalInfo({ temperatureInfo }: AdditionalInfoProps) {
  return (
    <div>
      {temperatureInfo && (
        <div>
          <p>Feels Like: {temperatureInfo.main.feels_like}</p>
          <p>Min Temperature: {temperatureInfo.main.temp_min}</p>
          <p>Max Temperature: {temperatureInfo.main.temp_max}</p>
          <p>Humidity: {temperatureInfo.main.humidity}</p>
        </div>
      )}
    </div>
  );
}

export default AdditionalInfo;
