import React from 'react';
import { StyleSheet } from 'react-native';
import { HStack, Text } from 'native-base';

import { styleVariables } from '../helpers/styleHelper';

interface Props {
  value: number;
  isHeading?: boolean;
  dark?: boolean;
}

export const Temperature = ({ value, isHeading = false, dark = false }: Props) => {
  const temp = value.toFixed(0);
  const { defaultFontSize, fontOpacity, headingTempSize, headingSymbolSize } = styleVariables;

  const fontSize = isHeading ? headingTempSize : defaultFontSize;
  const symbolFontSize = isHeading ? headingSymbolSize : defaultFontSize;
  const opacity = dark ? fontOpacity : 1;
  const marginBottom = -(fontSize - fontSize * 0.8);

  const temperatureStyles = {
    marginBottom,
    fontSize,
    lineHeight: fontSize,
    opacity,
  };

  const symbolStyles = {
    fontSize: symbolFontSize,
    lineHeight: symbolFontSize,
    opacity,
  };

  return (
    <HStack>
      <Text style={[temperatureStyles, styles.text]}>{temp}</Text>

      <Text style={[symbolStyles, styles.text]}>{'\u00B0'}</Text>
    </HStack>
  );
};

const styles = StyleSheet.create({
  text: {
    color: styleVariables.fontColor,
  },
});
