import React from 'react';
import { Box } from 'native-base';

import { Header } from './Header';

import { WeatherTimepoint, ReadableLocation, CurrentWeather } from '../types';

interface Props {
  weatherData: WeatherTimepoint[];
  location: ReadableLocation;
  currentWeather: CurrentWeather;
}

export const Content = ({ weatherData, location, currentWeather }: Props) => {
  return (
    <Box paddingTop={30}>
      <Header weatherData={weatherData} location={location} currentWeather={currentWeather} />
    </Box>
  );
};
