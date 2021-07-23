import React from 'react';
import { StyleSheet } from 'react-native';
import { HStack } from 'native-base';

import { Heading } from './Heading';

import LocationIcon from '../assets/icons/LocationIcon';
import { ReadableLocation } from '../utils/Types';

export const Header = ({ location }: { location: ReadableLocation }) => {
  // const { temp, feels_like, wind_deg, wind_speed } = currentWeather;
  // const { main, description, icon } = getWeatherStatus(currentWeather);

  // const roundedWindSpeed = Math.round(wind_speed);

  return (
    // <VStack alignItems="center">
    <HStack style={styles.header}>
      <Heading content={`${location} `} style={{ marginBottom: -2, textAlign: 'center' }} />

      <LocationIcon />
    </HStack>

    // <HStack style={styles.currentWeatherWrapper}>
    //   <VStack space={2}>
    //     <Temperature value={temp} isHeading={true} />

    //     <HStack alignItems="center">
    //       <Text style={styles.feelsLike}>{'Ощущается как '}</Text>
    //       <Temperature value={feels_like} />
    //     </HStack>
    //   </VStack>

    //   <VStack>
    //     <HStack alignItems="center">
    //       <Text style={styles.weather}>{description}</Text>
    //       <Weatherimage iconCode={icon} alt={main} />
    //     </HStack>

    //     <HStack alignItems="center">
    //       <Box
    //         style={[
    //           styles.windIconWrapper,
    //           {
    //             transform: [{ rotate: `${wind_deg}deg` }],
    //           },
    //         ]}>
    //         <WindFirectionIcon />
    //       </Box>

    //       <Text style={styles.windInfo}>{` ${roundedWindSpeed} м/с`}</Text>
    //     </HStack>
    //   </VStack>
    // </HStack> */}
    // </VStack>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
// currentWeatherWrapper: {
//   width: '100%',
//   padding: 15,
//   justifyContent: 'space-between',

//   borderRadius: 20,
//   backgroundColor: '#0779E4',
// },
// feelsLike: {
//   fontSize: styleVariables.defaultFontSize - 2,
//   color: styleVariables.fontColor,
// },
// weather: {
//   fontSize: styleVariables.defaultFontSize,
//   textTransform: 'capitalize',
//   color: styleVariables.fontColor,
// },
// windIconWrapper: {
//   width: styleVariables.windIconSize,
//   height: styleVariables.windIconSize,
// },
// windInfo: {
//   fontSize: styleVariables.defaultFontSize,
//   color: styleVariables.fontColor,
// },
