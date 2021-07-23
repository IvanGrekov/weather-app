import { extendTheme } from 'native-base';

import { FontConfig } from './FontConfig';
import { variables } from '../utils/StyleVariables';

export const theme = extendTheme({
  projectColors: {
    primary: variables.mainColor,
    accent: '#0779E4',
    background: variables.mainColor,
    text: '#fafafa',
  },

  roundness: 15,

  iconSizes: {
    locationIconSize: 30,
    weatherIconSize: 45,
    windIconSize: 30,
  },

  paddings: {
    appPaddings: 15,
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },

  fontSizes: {
    text: 22,
    heading: 24,
    extraHeading: 120,
  },

  fontConfig: FontConfig,
});
