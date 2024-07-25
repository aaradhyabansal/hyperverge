"use client";

import { useEffect, useState, ReactNode } from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiNightClear } from 'react-icons/wi';

interface WeatherData {
  name: string;
  weather: { main: string; description: string }[];
  main: { temp: number };
}

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [bgClass, setBgClass] = useState('bg-gray-300');
  const [weatherIcon, setWeatherIcon] = useState<ReactNode>(null);
  const city = 'Noida'; // Changed to Noida

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa455a9004dc3701b25b5ad1e324ee5a&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      if (data.weather && data.weather.length > 0) {
        updateWeatherAppearance(data.weather[0].main);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const updateWeatherAppearance = (weatherCondition: string) => {
    switch (weatherCondition.toLowerCase()) {
      case 'clear':
        setBgClass('bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg');
        setWeatherIcon(<WiDaySunny size={50} />);
        break;
      case 'clouds':
        setBgClass('bg-gradient-to-r from-gray-400 to-gray-600 shadow-md');
        setWeatherIcon(<WiCloud size={50} />);
        break;
      case 'rain':
        setBgClass('bg-gradient-to-r from-gray-700 to-blue-900 shadow-xl');
        setWeatherIcon(<WiRain size={50} />);
        break;
      case 'snow':
        setBgClass('bg-gradient-to-r from-white to-gray-300 shadow-lg');
        setWeatherIcon(<WiSnow size={50} />);
        break;
      case 'night clear':
        setBgClass('bg-gradient-to-r from-black to-blue-700 shadow-lg');
        setWeatherIcon(<WiNightClear size={50} />);
        break;
      default:
        setBgClass('bg-gradient-to-r from-gray-300 to-gray-500 shadow');
        setWeatherIcon(<WiCloud size={50} />);
    }
  };

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className={` weather-widget p-4 rounded-lg ${bgClass} flex items-center justify-between m-4 `}>
      <div>
        <h1 className="text-2xl font-bold">{weatherData.name}</h1>
        {weatherData.weather && weatherData.weather.length > 0 && (
          <>
            <p className="text-lg">{weatherData.weather[0].description}</p>
            <p className="text-lg">{Math.round(weatherData.main.temp)}°C</p>
          </>
        )}
      </div>
      <div>{weatherIcon}</div>
    </div>
  );
};

export default WeatherWidget;
