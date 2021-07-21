import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

import { styleVariables } from '../helpers/styleHelper';

export const TempSeparator = () => <Text style={styles.tempSeparator}> / </Text>;

const styles = StyleSheet.create({
  tempSeparator: {
    fontSize: styleVariables.defaultFontSize,
    color: styleVariables.fontColor,

    opacity: styleVariables.fontOpacity,
  },
});
