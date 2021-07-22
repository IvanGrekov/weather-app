import { configureFonts, DefaultTheme } from 'react-native-paper';

import { variables } from '../utils/StyleVariables';
import { fontConfig } from './FontConfig';

declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      bold: ThemeFont;
    }

    interface Theme {
      fontSizes: {
        text: number;
        heading: number;
        extraHeading: number;
      };

      iconSizes: {
        locationIconSize: number;
        weatherIconSize: number;
        windIconSize: number;
      };

      paddings: {
        appPaddings: number;
      };
    }
  }
}

export const theme = {
  ...DefaultTheme,

  roundness: 15,

  colors: {
    ...DefaultTheme.colors,
    primary: variables.mainColor,
    accent: '#0779E4',
    background: variables.mainColor,
    text: '#fafafa',
  },

  fonts: {
    ...configureFonts(fontConfig),
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: '700' as '700',
    },
  },

  fontSizes: {
    text: 22,
    heading: 24,
    extraHeading: 120,
  },

  iconSizes: {
    locationIconSize: 40,
    weatherIconSize: 45,
    windIconSize: 30,
  },

  paddings: {
    appPaddings: 15,
  },
};
