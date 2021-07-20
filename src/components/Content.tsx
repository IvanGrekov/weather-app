import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';

import { Loader } from './Loader';

import { getWeatherForecast } from '../api/getWeatherForecast';
import { WeatherData, WeatherTimepoint } from '../types';

export const Content = () => {
  const [wheatherData, setWheatherData] = useState<WeatherTimepoint[]>([]);

  useEffect(() => {
    getWeatherForecast().then((data: WeatherData) => {
      setWheatherData(data.dataseries);
    });
  }, []);

  console.log(wheatherData);

  return (
    <Box style={styles.contentBox}>
      <Loader />
    </Box>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    height: '100%',
  },
});
