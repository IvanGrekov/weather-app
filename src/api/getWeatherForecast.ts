import { initialCurrentWeather, initialDailyWeather } from '../utils/InitialData';

const base_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const API_key = 'eba6f044ab4a6a8441416431c0cda1b1';
const searchParams = `?exclude=minutely,hourly&appid=${API_key}&units=metric&lang=ru`;

export const getWeatherForecast = (latitude: number, longitude: number) => {
  const url = `${base_URL}${searchParams}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.warn('Error was caught during getting weather forecast');

      console.error(error);

      return {
        timezone_offset: 0,
        current: initialCurrentWeather,
        daily: initialDailyWeather,
      };
    });
};
