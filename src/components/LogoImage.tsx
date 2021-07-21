import React from 'react';
import { Image } from 'native-base';

import { ImageSizeType } from '../types';

export const LogoImage = ({ size }: { size: ImageSizeType }) => {
  return <Image source={require('../images/splash_image.png')} alt="Logo" size={size} />;
};
