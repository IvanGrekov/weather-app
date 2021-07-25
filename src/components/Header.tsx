import React from 'react';
import { StyleSheet } from 'react-native';
import { HStack } from 'native-base';

import { Heading } from './CustomComponents/Heading';

import LocationIcon from '../assets/icons/LocationIcon';
import { ReadableLocation } from '../utils/Types';

export const Header = ({ location }: { location: ReadableLocation }) => {
  return (
    <HStack style={style.header}>
      <Heading style={style.heading}>{`${location} `}</Heading>

      <LocationIcon />
    </HStack>
  );
};

const style = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    marginBottom: -2,

    textAlign: 'center',
  },
});
