import { WeatherTimepoint, DayNightTemps, CurrentWeather, WeatherStatus } from '../types';

export const getDayNightTemps = (data: WeatherTimepoint): DayNightTemps => {
  const { temp } = data;
  const { day, night } = temp;

  return { day, night };
};

export const getWeatherStatus = (data: CurrentWeather): WeatherStatus => {
  const { weather } = data;
  const { main, description, icon } = weather[0];

  return { main, description, icon };
};
