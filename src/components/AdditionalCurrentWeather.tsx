import React from 'react';
import { StyleSheet } from 'react-native';
import { HStack, VStack, Box } from 'native-base';

import { Text } from './CustomComponents/Text';
import WindDirectionIcon from '../assets/icons/WindDirectionIcon';
import WindCalmIcon from '../assets/icons/WindCalmIcon';
import HumidityIcon from '../assets/icons/HumidityIcon';
import VisibilityIcon from '../assets/icons/VisibilityIcon';

import { theme } from '../styles/Theme';
import { CurrentWeather as CurrentWeatherInterface } from '../utils/Types';

export const AdditionalCurrentWeather = ({
  currentWeather,
}: {
  currentWeather: CurrentWeatherInterface;
}) => {
  const { wind_deg, wind_speed, humidity, visibility } = currentWeather;
  const roundedWindSpeed = Math.round(wind_speed);

  return (
    <HStack style={styles.additionalCurrentWeather}>
      <VStack style={styles.additionalWeatherItem} space={2}>
        <Text style={styles.additionalWeatherTitle}>Ветер</Text>

        <HStack style={styles.additionalWeatherInfo}>
          <Box
            style={[
              styles.windIconWrapper,
              {
                transform: [{ rotate: `${wind_deg}deg` }],
              },
            ]}>
            {roundedWindSpeed > 0 ? <WindDirectionIcon /> : <WindCalmIcon />}
          </Box>

          <Text style={styles.textInfo}>{` ${roundedWindSpeed} м/с`}</Text>
        </HStack>
      </VStack>

      <VStack style={styles.additionalWeatherItem} space={2}>
        <Text style={styles.additionalWeatherTitle}>Влажность</Text>

        <HStack style={styles.additionalWeatherInfo}>
          <Box style={styles.windIconWrapper}>
            <HumidityIcon />
          </Box>

          <Text style={styles.textInfo}>{` ${humidity}`}</Text>
        </HStack>
      </VStack>

      <VStack style={styles.additionalWeatherItem} space={2}>
        <Text style={styles.additionalWeatherTitle}>Видимость</Text>

        <HStack style={styles.additionalWeatherInfo}>
          <Box style={styles.windIconWrapper}>
            <VisibilityIcon />
          </Box>

          <Text style={styles.textInfo}>{` ${visibility / 1000} км`}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

const { paddings, roundness, projectColors, projectFontSizes, iconSizes } = theme;

const styles = StyleSheet.create({
  additionalCurrentWeather: {
    justifyContent: 'space-between',
    padding: paddings.appPaddings,
    paddingVertical: paddings.appPaddings - 6,

    borderRadius: roundness,
    backgroundColor: projectColors.reserveBackground,
  },
  additionalWeatherItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  additionalWeatherInfo: {
    alignItems: 'center',
  },
  additionalWeatherTitle: {
    fontSize: projectFontSizes.text - 2,
    color: projectColors.accent,
  },
  textInfo: {
    fontSize: projectFontSizes.text - 3,
    color: projectColors.accent,
  },
  windIconWrapper: {
    width: iconSizes.windIconSize,
    height: iconSizes.windIconSize,
  },
});
