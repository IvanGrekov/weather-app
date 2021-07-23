import { StyleSheet } from 'react-native';
import { theme } from './Theme';

export default StyleSheet.create({
  font: {
    fontWeight: 'normal',
    color: theme.projectColors.text,
  },
  text: {
    fontFamily: theme.fontConfig.Roboto[400].normal,
    fontSize: theme.fontSizes.text,
    lineHeight: theme.lineHeights.shorter * theme.fontSizes.text,
  },
  heading: {
    fontFamily: theme.fontConfig.Roboto[500].normal,
    fontSize: theme.fontSizes.heading,
    lineHeight: theme.lineHeights.shorter * theme.fontSizes.heading,
  },
  extraHeading: {
    fontFamily: theme.fontConfig.Roboto[500].normal,
    fontSize: theme.fontSizes.extraHeading,
    lineHeight: theme.lineHeights.none * theme.fontSizes.text,
  },
});
