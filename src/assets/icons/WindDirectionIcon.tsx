import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const WindFirectionIcon = () => (
  <Svg
    viewBox="0 0 32 32"
    width={styleVariables.windIconSize}
    height={styleVariables.windIconSize}
    fill={styleVariables.fontColor}>
    <G data-name="Layer 4">
      <Path d="M26 15.34L16.66 6h-.05a.91.91 0 00-.49-.22h-.18a.9.9 0 00-.6.27L6 15.34a.92.92 0 000 1.32.94.94 0 001.32 0l7.74-7.74v16.41a.93.93 0 101.86 0V8.92l7.74 7.74a.94.94 0 001.32 0 .92.92 0 00.02-1.32z" />
      <Path d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm0 26.13A12.13 12.13 0 1128.13 16 12.14 12.14 0 0116 28.13z" />
    </G>
  </Svg>
);

export default WindFirectionIcon;
