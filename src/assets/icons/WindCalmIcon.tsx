import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'native-base';

const WindCalmIcon = () => {
  const { iconSizes, projectColors } = useTheme();

  return (
    <Svg viewBox="0 0 15 15" width={iconSizes.windIconSize} height={iconSizes.windIconSize}>
      <Path
        fill={projectColors.accent}
        d="M13.193 6.331c.003.049.007.098.007.148 0 .253-.046.495-.126.721.1.158.16.345.16.546 0 .756-.568 1.371-1.255 1.371v.002H1.44v.72H12v-.001c.911-.014 1.919-.946 1.919-2.091a1.76 1.76 0 00-.726-1.416zM10.8 7.916c.911-.014 1.919-.945 1.919-2.09 0-.963-.799-1.746-1.715-1.746-.771 0-1.403.659-1.403 1.469 0 .688.492 1.248 1.179 1.248v-.722c-.229 0-.479-.236-.479-.526 0-.412.341-.747.733-.747.538 0 1.001.46 1.001 1.025 0 .756-.568 1.371-1.255 1.371V7.2H0v.72h10.8v-.004z"
      />
    </Svg>
  );
};

export default WindCalmIcon;
