import React from 'react';
import { Text as NativeText } from 'native-base';

import GlobalStyle from '../styles/GlobalStyle';

interface Props {
  children: string;
  style?: object;
}

const { font, text } = GlobalStyle;

export const Text = ({ children, style = {} }: Props) => (
  <NativeText style={[font, text, style]}>{children}</NativeText>
);
