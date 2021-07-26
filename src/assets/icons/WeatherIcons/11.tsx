import React from 'react';
import { Image } from 'native-base';
import { useTheme } from 'native-base';

import { WeatherIcon } from '../../../utils/Types';

export const ThunderstormDayIcon = ({ width = 0, height = 0 }: WeatherIcon) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Image
      source={require('../../../images/11d.png')}
      alt="Logo"
      width={width || weatherIconSize}
      height={height || weatherIconSize}
    />
  );
};

export const ThunderstormNightIcon = ({ width = 0, height = 0 }: WeatherIcon) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Image
      source={require('../../../images/11n.png')}
      alt="Logo"
      width={width || weatherIconSize}
      height={height || weatherIconSize}
    />
  );
};
