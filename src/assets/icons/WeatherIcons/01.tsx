import * as React from 'react';
import Svg, { Defs, Circle, Path } from 'react-native-svg';
import { useTheme } from 'native-base';

interface Props {
  width?: number;
  height?: number;
}

export const ClearDayIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Svg
      data-name="Layer 1"
      viewBox="15 15 34 34"
      width={width || weatherIconSize}
      height={height || weatherIconSize}>
      <Defs />
      <Circle cx={32} cy={32} r={17} fill="#efcc00" />
      <Path d="M32 5v6M32 53v6M59 32h-6M11 32H5M51.09 12.91l-4.24 4.24M17.15 46.85l-4.24 4.24M51.09 51.09l-4.24-4.24M17.15 17.15l-4.24-4.24" />
    </Svg>
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
