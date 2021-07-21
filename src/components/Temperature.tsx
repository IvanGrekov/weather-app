import React from 'react';
import { Text } from 'native-base';

import { styleVariables } from '../helpers/styleHelper';

interface Props {
  value: number;
  isHeading?: boolean;
  isNight?: boolean;
}

export const Temperature = ({ value, isHeading = false, isNight = false }: Props) => {
  const temp = value.toFixed(0);
  const fontSize = isHeading ? 70 : styleVariables.defaultFontSize;
  const opacity = isNight ? styleVariables.fontOpacity : 1;

  return (
    <Text
      fontSize={fontSize}
      color={styleVariables.fontColor}
      opacity={opacity}>{`${temp}\u00B0`}</Text>
  );
};
