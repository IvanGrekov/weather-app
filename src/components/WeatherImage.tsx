import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'native-base';

import { styleVariables } from '../helpers/styleHelper';

interface Props {
  iconCode: string;
  alt: string;
}

const base_URL = 'http://openweathermap.org/img/wn/';

export const Weatherimage = ({ iconCode, alt }: Props) => {
  const url = `${base_URL}${iconCode}@2x.png`;

  return <Image source={{ uri: url }} alt={alt} style={styles.weatherIcon} />;
};

const styles = StyleSheet.create({
  weatherIcon: {
    width: styleVariables.weatherIconSize,
    height: styleVariables.weatherIconSize,
  },
});
