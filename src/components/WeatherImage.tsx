import React from 'react';
import { StyleSheet } from 'react-native';

import { ClearDayIcon, ClearNightIcon } from '../assets/icons/WeatherIcons/01';
import { FewCloudyDayIcon, FewCloudyNightIcon } from '../assets/icons/WeatherIcons/02';
import CloudsIcon from '../assets/icons/WeatherIcons/03';
import ShowerRainIcon from '../assets/icons/WeatherIcons/09';
import { RainyDayIcon, RainyNightIcon } from '../assets/icons/WeatherIcons/10';
import { ThunderstormDayIcon, ThunderstormNightIcon } from '../assets/icons/WeatherIcons/11';
import SnowIcon from '../assets/icons/WeatherIcons/13';
import MistIcon from '../assets/icons/WeatherIcons/50';

import { theme } from '../styles/Theme';
import { Coins } from '../utils/Types';

interface Props {
  iconCode: string;
  isCurrentWeather?: boolean;
}

const icons: Coins = {
  '01d': ClearDayIcon,
  '01n': ClearNightIcon,
  '02d': FewCloudyDayIcon,
  '02n': FewCloudyNightIcon,
  '03d': CloudsIcon,
  '03n': CloudsIcon,
  '04d': CloudsIcon,
  '04n': CloudsIcon,
  '09d': ShowerRainIcon,
  '09n': ShowerRainIcon,
  '10d': RainyDayIcon,
  '10n': RainyNightIcon,
  '11d': ThunderstormDayIcon,
  '11n': ThunderstormNightIcon,
  '13d': SnowIcon,
  '13n': SnowIcon,
  '50d': MistIcon,
  '50n': MistIcon,
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
