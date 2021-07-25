import React from 'react';
import { Heading as NativeHeading } from 'native-base';

import GlobalStyle from '../../styles/GlobalStyle';

const { font, heading } = GlobalStyle;

interface Props {
  children: string;
  style?: object;
}

export const Heading = ({ children, style = {} }: Props) => (
  <NativeHeading style={[font, heading, style]}>{children}</NativeHeading>
);
