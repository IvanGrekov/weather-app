import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme, Image } from 'native-base';

interface Props {
  width?: number;
  height?: number;
}

export const ClearDayIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Image
      source={require('../../../images/01d.png')}
      alt="Logo"
      width={width || weatherIconSize}
      height={height || weatherIconSize}
    />
  );
};

export const ClearNightIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Svg
      data-name="Layer 1"
      viewBox="10 10 45 45"
      width={width || weatherIconSize}
      height={height || weatherIconSize}>
      <Path
        d="M44.54 41.47a23 23 0 01-20.05-29.74A1 1 0 0023 10.59 23 23 0 1054.41 42a1 1 0 00-1.14-1.47 23.06 23.06 0 01-8.73.94z"
        fill="#efcc00"
      />
    </Svg>
  );
};
