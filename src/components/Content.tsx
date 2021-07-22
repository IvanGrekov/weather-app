import React, { useState, useEffect } from 'react';
import { Box } from 'native-base';

import { Loader } from './Loader';
import { Header } from './Header';

import { getWeatherForecast } from '../api/getWeatherForecast';
import { getCurrentLocation } from '../api/getLocation';
import { getReadableLocation } from '../api/getReadableLocation';
import { initialCurrentWeather } from '../utils/InitialData';
import { WeatherTimepoint, CurrentWeather, Position, WeatherData, Address } from '../utils/Types';

export const Content = () => {
  const [weatherData, setWheatherData] = useState<WeatherTimepoint[]>([]);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>(initialCurrentWeather);
  const [location, setLocation] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { latitude: lat, longitude: lon }: Position = await getCurrentLocation();
        const { daily, current }: WeatherData = await getWeatherForecast(lat, lon);
        const { address }: Address = await getReadableLocation(lat, lon);
        const validAddress = `${address.city}`;

        setWheatherData(daily);
        setCurrentWeather(current);
        setLocation(validAddress);
      } catch (error) {
        console.warn('Error was caught during loading data in component Content');

        console.error(error);
      }
    })();
  }, []);

  const loading = weatherData.length === 0 || location.length === 0 || currentWeather === null;

  return (
    <Box height="100%">
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Header location={location} />
        </Box>
      )}
    </Box>
  );
};
