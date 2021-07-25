import React from 'react';
import { Center } from 'native-base';

import { LogoImage } from '../assets/icons/LogoImage';

import { ImageSizeType } from '../utils/Types';

export const Loader = () => {
  return (
    <Center flex={1}>
      <LogoImage size={ImageSizeType['2xl']} />
    </Center>
  );
};
