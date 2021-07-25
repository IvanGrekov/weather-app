import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';
import { useTheme } from 'native-base';

interface Props {
  width?: number;
  height?: number;
}

const CloudsIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Svg
      data-name="Layer 1"
      viewBox="5 8 55 55"
      width={width || weatherIconSize}
      height={height || weatherIconSize}>
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id="prefix__a"
          x1={45.72}
          x2={24.63}
          y1={55.39}
          y2={28.08}>
          <Stop offset={0} stopColor="#f2f2f2" />
          <Stop offset={1} stopColor="#cfcfcf" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id="prefix__b"
          x1={14.82}
          x2={26.43}
          y1={33.86}
          y2={51.51}>
          <Stop offset={0.02} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Path
        d="M41.3 18.9a17.49 17.49 0 00-15.47 9.32 13.75 13.75 0 10-6.92 25.62l22.39.06a17.5 17.5 0 000-35z"
        fill="url(#prefix__a)"
      />
      <Circle
        cx={18.92}
        cy={40.09}
        r={13.75}
        transform="rotate(-15.61 18.92 40.09)"
        fill="url(#prefix__b)"
      />
    </Svg>
  );
};

export default CloudsIcon;
