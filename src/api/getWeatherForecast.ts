import { getCurrentLocation } from './getLocation';
import { Position } from '../types';

const base_URL = 'https://www.7timer.info/bin/api.pl';

const sendQuery = (latitude: number, longitude: number) => {
  const url = `${base_URL}?&lat=${latitude}&lon=${longitude}&product=civil&output=json`;

  return fetch(url)
    .then(response => response.json())
    .catch(console.error);
};

export const getWeatherForecast = async () => {
  try {
    const position: Position = await getCurrentLocation();

    const weatherForecast = await sendQuery(
      position.latitude,
      position.longitude,
    );

    return weatherForecast;
  } catch (error) {
    console.warn(error);
  }
};
