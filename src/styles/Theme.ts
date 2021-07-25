import { extendTheme } from 'native-base';

import { FontConfig } from './FontConfig';
import { variables } from '../utils/StyleVariables';

export const theme = extendTheme({
  roundness: 15,
  textOpacity: 0.7,

  projectColors: {
    primary: variables.mainColor,
    accent: variables.blue,
    background: variables.mainColor,
    backgroundForCard: variables.blue,
    reserveBackground: variables.white,
    text: variables.white,
  },

  iconSizes: {
    locationIconSize: 25,
    weatherIconSize: 45,
    CurrentWeatheIconSize: 90,
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

  projectFontSizes: {
    text: 16,
    heading: 20,
    extraHeading: 100,
  },

  fontConfig: FontConfig,
});
