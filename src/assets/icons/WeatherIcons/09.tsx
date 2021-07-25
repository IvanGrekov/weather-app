import React from 'react';
import { Image } from 'native-base';
import { useTheme } from 'native-base';

interface Props {
  width?: number;
  height?: number;
}

const ShowerRainIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Image
      source={require('../../../images/09dn.png')}
      alt="Logo"
      width={width || weatherIconSize}
      height={height || weatherIconSize}
    />
  );
};
export default ShowerRainIcon;
