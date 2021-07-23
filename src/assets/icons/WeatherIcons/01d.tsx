import * as React from 'react';
import Svg, { Defs, Circle, Path } from 'react-native-svg';
import { useTheme } from 'native-base';

interface Props {
  width?: number;
  height?: number;
}

const ClearDay = ({ width = 0, height = 0 }: Props) => {
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

export default ClearDay;
