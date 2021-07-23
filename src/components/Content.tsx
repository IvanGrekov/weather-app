import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';

import { Loader } from './Loader';
import { Header } from './Header';
import { CurrentWeather } from './CurrentWeather';

import { theme } from '../styles/Theme';
import { getWeatherForecast } from '../api/getWeatherForecast';
import { getCurrentLocation } from '../api/getLocation';
import { getReadableLocation } from '../api/getReadableLocation';
import { initialCurrentWeather } from '../utils/InitialData';
import {
  WeatherTimepoint,
  CurrentWeather as CurrentWeatherInterface,
  Position,
  WeatherData,
  Address,
} from '../utils/Types';

export const Content = () => {
  const [weatherData, setWheatherData] = useState<WeatherTimepoint[]>([]);
  const [location, setLocation] = useState('');
  const [time, setTime] = useState(0);
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherInterface>(initialCurrentWeather);

  useEffect(() => {
    (async () => {
      try {
        const { latitude: lat, longitude: lon }: Position = await getCurrentLocation();
        const { daily, current, timezone_offset }: WeatherData = await getWeatherForecast(lat, lon);
        const { address }: Address = await getReadableLocation(lat, lon);
        const time = (current.dt + timezone_offset) * 1000;
        const validAddress = `${address.city}`;

        setWheatherData(daily);
        setCurrentWeather(current);
        setTime(time);
        setLocation(validAddress);
      } catch (error) {
        console.warn('Error was caught during loading data in component Content');

        console.error(error);
      }
    })();
  }, []);

  const loading = weatherData.length === 0 || location.length === 0 || currentWeather === null;

  return (
    <Box style={style.content}>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Header location={location} />

          <CurrentWeather currentWeather={currentWeather} time={time} />
        </Box>
      )}
    </Box>
  );
};

const { paddings } = theme;

const style = StyleSheet.create({
  content: {
    height: '100%',
    paddingHorizontal: paddings.appPaddings,
  },
});
