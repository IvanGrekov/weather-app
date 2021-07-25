import React from 'react';
import { StyleSheet } from 'react-native';
import { List, HStack, useTheme } from 'native-base';

import { Heading } from './CustomComponents/Heading';
import { WeatherImage } from './WeatherImage';
import { Temperature } from './Temperature';
import { TempSeparator } from './TempSeparator';

import { getReadableDate } from '../helpers/dateHelper';
import { WeatherTimepoint } from '../utils/Types';
import { theme } from '../styles/Theme';

interface Props {
  item: WeatherTimepoint;
  isLast: boolean;
}

export const WeatherForecastItem = ({ item, isLast }: Props) => {
  const { dt, temp, weather } = item;
  const { max, min } = temp;
  const { icon } = weather[0];
  const { projectColors } = useTheme();

  const date = getReadableDate(new Date(dt));

  const specialStyle = StyleSheet.create({
    separator: {
      borderBottomWidth: isLast ? 0 : 1,
      borderBottomColor: projectColors.primary,
    },
  });

  return (
    <List.Item style={[styles.weatherItem, specialStyle.separator]}>
      <HStack style={styles.infoWrapper}>
        <Heading>{date}</Heading>

        <HStack alignItems="center" space={3}>
          <HStack>
            <Temperature>{max}</Temperature>
            <TempSeparator />
            <Temperature isNight={true}>{min}</Temperature>
          </HStack>

          <WeatherImage iconCode={icon} />
        </HStack>
      </HStack>
    </List.Item>
  );
};

const { paddings } = theme;

const styles = StyleSheet.create({
  weatherItem: {
    padding: paddings.appPaddings,
    paddingTop: paddings.appPaddings,
    paddingBottom: paddings.appPaddings,
  },
  infoWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
