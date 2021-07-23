import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { useTheme } from 'native-base';

const VisibilityIcon = () => {
  const { iconSizes, projectColors } = useTheme();

  return (
    <Svg
      viewBox="1 -5 20 25"
      width={iconSizes.windIconSize}
      height={iconSizes.windIconSize}
      fill={projectColors.accent}>
      <G fill="none" fillRule="evenodd">
        <Path d="M-1-4h24v24H-1z" />
        <Path
          d="M11 0C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
          fill={projectColors.accent}
        />
      </G>
    </Svg>
  );
};

export default VisibilityIcon;
