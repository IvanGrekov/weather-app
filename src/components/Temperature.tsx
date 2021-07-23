import React from 'react';
import { StyleSheet } from 'react-native';
import { HStack, useTheme } from 'native-base';

import { Heading } from './Heading';
import { ExtraHeading } from './ExtraHeading';

interface Props {
  children: number;
  extra?: boolean;
  isNight?: boolean;
  style?: object;
}

export const Temperature = ({ children, extra = false, isNight = false, style = {} }: Props) => {
  const { textOpacity, projectFontSizes, lineHeights } = useTheme();

  const symbol = '\u00B0';
  const temp = children.toFixed(0);
  const opacity = isNight ? textOpacity : 1;
  const fontSize = extra ? projectFontSizes.extraHeading : projectFontSizes.heading;
  const symbolSize = extra ? fontSize * 0.7 : fontSize;
  const symbolLineHeight = (extra ? lineHeights.none : lineHeights.shorter) * symbolSize;

  const styles = StyleSheet.create({
    general: {
      opacity,
    },

    symbolStyle: {
      fontSize: symbolSize,
      lineHeight: symbolLineHeight,
      opacity,
    },
  });

  return (
    <HStack alignItems="flex-start">
      {extra ? (
        <>
          <ExtraHeading style={[styles.general, style]}>{temp}</ExtraHeading>

          <ExtraHeading style={[styles.general, styles.symbolStyle, style]}>{symbol}</ExtraHeading>
        </>
      ) : (
        <>
          <Heading style={[styles.general, style]}>{temp}</Heading>

          <Heading style={[styles.general, styles.symbolStyle, style]}>{symbol}</Heading>
        </>
      )}
    </HStack>
  );
};
