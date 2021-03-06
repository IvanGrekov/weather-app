/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import { HStack, VStack, Box } from 'native-base';

import { WeatherImage } from './WeatherImage';
import { Temperature } from './Temperature';
import { Text } from './CustomComponents/Text';
import { Heading } from './CustomComponents/Heading';
import { AdditionalCurrentWeather } from './AdditionalCurrentWeather';

import { theme } from '../styles/Theme';
import { CurrentWeather as CurrentWeatherInterface } from '../utils/Types';
import { getWeatherStatus } from '../helpers/weatherHepler';
import { getDayPart } from '../helpers/dateHelper';
import { makeDescriptionShorter, makeFirstLetterCapital } from '../helpers/textHelper';

interface Props {
  currentWeather: CurrentWeatherInterface;
  time: number;
}

export const CurrentWeather = ({ currentWeather, time }: Props) => {
  const { temp, feels_like } = currentWeather;
  const { description, icon } = getWeatherStatus(currentWeather);
  const dayPart = getDayPart(new Date(time));
  const shorterDescription = makeDescriptionShorter(description);

  return (
    <VStack style={styles.currentWeather}>
      <HStack style={styles.mainInfo}>
        <VStack>
          <Box marginBottom={2}>
            <WeatherImage iconCode={icon} isCurrentWeather={true} />
          </Box>
          <Heading>{makeFirstLetterCapital(shorterDescription)}</Heading>
          <Text style={{ fontSize: 14 }}>{makeFirstLetterCapital(dayPart)}</Text>
        </VStack>

        <VStack alignItems="flex-end" space={2}>
          <Temperature extra={true}>{temp}</Temperature>

          <HStack>
            <Text style={styles.feelsLikeText}>{'Ощущается как '}</Text>
            <Temperature style={styles.feelsLikeTemp}>{feels_like}</Temperature>
          </HStack>
        </VStack>
      </HStack>

      <AdditionalCurrentWeather currentWeather={currentWeather} />
    </VStack>
  );
};

const { paddings, roundness, projectColors, fontConfig, projectFontSizes, lineHeights } = theme;

const styles = StyleSheet.create({
  currentWeather: {
    padding: paddings.appPaddings + 5,
    paddingVertical: paddings.appPaddings - 3,

    borderRadius: roundness,
    backgroundColor: projectColors.backgroundForCard,
  },
  mainInfo: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 18,
  },
  feelsLikeText: {
    fontSize: projectFontSizes.text - 2,
    lineHeight: lineHeights.shorter * projectFontSizes.text,
  },
  feelsLikeTemp: {
    fontSize: projectFontSizes.text,
    fontFamily: fontConfig.Roboto[400].normal,
    lineHeight: lineHeights.shorter * projectFontSizes.text,
  },
});
