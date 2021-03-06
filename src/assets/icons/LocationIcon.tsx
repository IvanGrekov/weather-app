import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'native-base';

const LocationIcon = () => {
  const { iconSizes, projectColors } = useTheme();

  return (
    <Svg
      viewBox="17 18 60 60"
      width={iconSizes.locationIconSize}
      height={iconSizes.locationIconSize}
      fill={projectColors.text}>
      <Path d="M66.9 41.8c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4 0 11.3 20.4 32.4 20.4 32.4s20.4-21.1 20.4-32.4zM37 41.4c0-5.2 4.3-9.5 9.5-9.5s9.5 4.2 9.5 9.5c0 5.2-4.2 9.5-9.5 9.5-5.2 0-9.5-4.3-9.5-9.5z" />
    </Svg>
  );
};

export default LocationIcon;
