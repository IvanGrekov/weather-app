import React from 'react';
import { Heading } from './CustomComponents/Heading';
import { useTheme } from 'native-base';

export const TempSeparator = () => {
  const { textOpacity } = useTheme();

  return <Heading style={{ opacity: textOpacity }}> / </Heading>;
};
