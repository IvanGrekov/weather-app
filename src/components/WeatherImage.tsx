import React from 'react';
import { StyleSheet } from 'react-native';

import ClearNight from '../assets/icons/WeatherIcons/01n';
import ClearDay from '../assets/icons/WeatherIcons/01d';

import { theme } from '../styles/Theme';
import { Coins } from '../utils/Types';

interface Props {
  iconCode: string;
  isCurrentWeather?: boolean;
}

const icons: Coins = {
  '01n': ClearNight,
  '01d': ClearDay,
};

export const WeatherImage = ({ iconCode, isCurrentWeather = false }: Props) => {
  const Component = icons[iconCode];

  const style = isCurrentWeather ? styles.currentWeatherIcon : styles.weatherIcon;
  const { width, height } = style;

  return <Component width={width} height={height} />;
};

const { iconSizes } = theme;

const styles = StyleSheet.create({
  weatherIcon: {
    width: iconSizes.weatherIconSize,
    height: iconSizes.weatherIconSize,
  },
  currentWeatherIcon: {
    width: iconSizes.CurrentWeatheIconSize,
    height: iconSizes.CurrentWeatheIconSize,
  },
});
