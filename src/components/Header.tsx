import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack, HStack, Heading, Text } from 'native-base';

import LocationIcon from '../assets/icons/LocationIcon';
import { Temperature } from './Temperature';
import { TempSeparator } from './TempSeparator';
import { Weatherimage } from './WeatherImage';

import { WeatherTimepoint, ReadableLocation, CurrentWeather } from '../types';
import { styleVariables } from '../helpers/styleHelper';
import { getDayNightTemps, getWeatherStatus } from '../helpers/weatherHepler';

interface Props {
  weatherData: WeatherTimepoint[];
  location: ReadableLocation;
  currentWeather: CurrentWeather;
}

export const Header = ({ weatherData, location, currentWeather }: Props) => {
  const { day, night } = getDayNightTemps(weatherData[0]);
  const { temp } = currentWeather;
  const { main, description, icon } = getWeatherStatus(currentWeather);

  return (
    <VStack alignItems="center">
      <HStack style={styles.headingWrapper}>
        <Heading style={styles.heading}>{location}</Heading>

        <LocationIcon />
      </HStack>

      <VStack alignItems="center">
        <Temperature value={temp} isHeading={true} />

        <HStack>
          <Temperature value={day} />
          <TempSeparator />
          <Temperature value={night} isNight={true} />
        </HStack>

        <HStack alignItems="center">
          <Text style={styles.weather}>{description}</Text>
          <Weatherimage iconCode={icon} alt={main} />
        </HStack>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  headingWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    color: styleVariables.fontColor,
  },
  weather: {
    fontSize: 22,
    textTransform: 'capitalize',
    color: styleVariables.fontColor,
  },
});
