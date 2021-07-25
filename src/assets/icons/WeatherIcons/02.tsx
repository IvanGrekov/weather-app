import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, Circle, Path } from 'react-native-svg';
import { useTheme } from 'native-base';

interface Props {
  width?: number;
  height?: number;
}

export const FewCloudyDayIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Svg
      data-name="Layer 1"
      id="prefix__Layer_1"
      viewBox="5 8 56 56"
      width={width || weatherIconSize}
      height={height || weatherIconSize}>
      <Defs>
        <LinearGradient
          gradientTransform="matrix(-1 0 0 1 65.8 0)"
          gradientUnits="userSpaceOnUse"
          id="prefix__linear-gradient"
          x1={46.72}
          x2={25.63}
          y1={58.39}
          y2={31.08}>
          <Stop offset={0} stopColor="#f2f2f2" />
          <Stop offset={1} stopColor="#cfcfcf" />
        </LinearGradient>
        <LinearGradient
          gradientTransform="matrix(0 -1 -1 0 109.04 59.43)"
          gradientUnits="userSpaceOnUse"
          id="prefix__linear-gradient-2"
          x1={12.25}
          x2={23.86}
          y1={56.93}
          y2={74.58}>
          <Stop offset={0.02} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Circle cx={39.8} cy={28} r={12.59} fill="#efcc00" />
      <Path d="M39.8 8v4.44M39.8 43.56V48M19.8 28h4.45M55.36 28h4.44M25.66 13.86L28.8 17M50.8 39l3.14 3.14M25.66 42.14L28.8 39M50.8 17l3.14-3.14" />
      <Path
        d="M23.5 21.9A17.49 17.49 0 0139 31.22a13.75 13.75 0 116.92 25.62l-22.42.06a17.5 17.5 0 010-35z"
        fill="url(#prefix__linear-gradient)"
      />
      <Circle
        cx={45.89}
        cy={43.09}
        r={13.75}
        transform="rotate(-74.39 45.888 43.09)"
        fill="url(#prefix__linear-gradient-2)"
      />
    </Svg>
  );
};

export const FewCloudyNightIcon = ({ width = 0, height = 0 }: Props) => {
  const { iconSizes } = useTheme();
  const { weatherIconSize } = iconSizes;

  return (
    <Svg
      data-name="Layer 1"
      viewBox="5 5 56 56"
      width={width || weatherIconSize}
      height={height || weatherIconSize}>
      <Defs>
        <LinearGradient
          gradientTransform="matrix(-1 0 0 1 65.97 0)"
          gradientUnits="userSpaceOnUse"
          id="prefix__a"
          x1={46.72}
          x2={25.63}
          y1={58.39}
          y2={31.08}>
          <Stop offset={0} stopColor="#f2f2f2" />
          <Stop offset={1} stopColor="#cfcfcf" />
        </LinearGradient>
        <LinearGradient
          gradientTransform="matrix(0 -1 -1 0 168.93 51.25)"
          gradientUnits="userSpaceOnUse"
          id="prefix__b"
          x1={4.06}
          x2={15.68}
          y1={116.66}
          y2={134.3}>
          <Stop offset={0.02} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Path
        d="M50 26.71A13.88 13.88 0 0137.86 8.77a.6.6 0 00-.86-.69A13.88 13.88 0 1055.92 27a.6.6 0 00-.69-.89 13.91 13.91 0 01-5.23.6z"
        fill="#efcc00"
      />
      <Path
        d="M23.66 21.9a17.49 17.49 0 0115.47 9.32A13.75 13.75 0 1146 56.84l-22.39.06a17.5 17.5 0 010-35z"
        fill="url(#prefix__a)"
      />
      <Circle
        cx={46.05}
        cy={43.09}
        r={13.75}
        transform="rotate(-74.39 46.053 43.09)"
        fill="url(#prefix__b)"
      />
    </Svg>
  );
};
