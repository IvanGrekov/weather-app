import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const { projectColors, fontConfig, projectFontSizes, lineHeights } = theme;

export default StyleSheet.create({
  font: {
    fontWeight: 'normal',
    color: projectColors.text,
  },
  text: {
    fontFamily: fontConfig.Roboto[400].normal,
    fontSize: projectFontSizes.text,
    lineHeight: lineHeights.shorter * projectFontSizes.text,
  },
  heading: {
    fontFamily: fontConfig.Roboto[500].normal,
    fontSize: theme.projectFontSizes.heading,
    lineHeight: lineHeights.shorter * projectFontSizes.heading,
  },
  extraHeading: {
    marginBottom: -projectFontSizes.extraHeading * 0.2,

    fontFamily: fontConfig.Roboto[400].normal,
    fontSize: projectFontSizes.extraHeading,
    lineHeight: lineHeights.none * projectFontSizes.extraHeading,
    letterSpacing: -3,
  },
});
