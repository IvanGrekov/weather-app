import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Box, List } from 'native-base';

import { WeatherForecastItem } from './WeatherForecastItem';

import { theme } from '../styles/Theme';
import { WeatherTimepoint } from '../utils/Types';

export const WeatherForecast = ({ weather }: { weather: WeatherTimepoint[] }) => {
  const renderItem = useCallback((item, index, array) => {
    const isLast = index === array.length - 1;

    return <WeatherForecastItem item={item} key={item.dt} isLast={isLast} />;
  }, []);

  return (
    <Box style={styles.listWrapper}>
      <List style={styles.weatherList}>{weather.map(renderItem)}</List>
    </Box>
  );
};

const { roundness, projectColors } = theme;

const styles = StyleSheet.create({
  listWrapper: {
    paddingVertical: 20,
  },
  weatherList: {
    paddingTop: 0,
    paddingBottom: 0,

    borderWidth: 0,
    borderRadius: roundness,
    backgroundColor: projectColors.backgroundForCard,
  },
});
