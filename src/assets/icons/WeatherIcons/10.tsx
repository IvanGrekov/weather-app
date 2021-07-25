import React from 'react';
import { Image } from 'native-base';
import { useTheme } from 'native-base';

interface Props {
  width?: number;
  height?: number;
}

export const RainyDayIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Image
      source={require('../../../images/10d.png')}
      alt="Logo"
      width={width || weatherIconSize}
      height={height || weatherIconSize}
    />
  );
};

export const RainyNightIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Image
      source={require('../../../images/10n.png')}
      alt="Logo"
      width={width || weatherIconSize}
      height={height || weatherIconSize}
    />
  );
};
