import React from 'react';
import { Heading as NativeHeading } from 'native-base';

import GlobalStyle from '../../styles/GlobalStyle';

const { font, extraHeading } = GlobalStyle;

interface Props {
  children: string;
  style?: object;
}

export const ExtraHeading = ({ children, style = {} }: Props) => (
  <NativeHeading style={[font, extraHeading, style]}>{children}</NativeHeading>
);
