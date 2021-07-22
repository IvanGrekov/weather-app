import { StyleSheet } from 'react-native';
import { theme } from './Theme';

export default StyleSheet.create({
  font: {
    color: theme.colors.text,
  },
  text: {
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: theme.fonts.regular.fontWeight,
    fontSize: theme.fontSizes.text,
  },
  heading: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: theme.fonts.medium.fontWeight,
    fontSize: theme.fontSizes.heading,
  },
  extraHeading: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: theme.fonts.medium.fontWeight,
    fontSize: theme.fontSizes.extraHeading,
  },
});
