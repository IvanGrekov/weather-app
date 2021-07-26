import React from 'react';
import { Image } from 'native-base';
import { useTheme } from 'native-base';

import { WeatherIcon } from '../../../utils/Types';

const SnowIcon = ({ width = 0, height = 0 }: WeatherIcon) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Image
      source={require('../../../images/13dn.png')}
      alt="Logo"
      width={width || weatherIconSize}
      height={height || weatherIconSize}
    />
  );
};

export default SnowIcon;
