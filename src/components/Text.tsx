import React from 'react';
import { Text as NativeText } from 'native-base';

import GlobalStyle from '../styles/GlobalStyle';

const { font, text } = GlobalStyle;

export const Text = ({ content }: { content: string }) => (
  <NativeText style={[font, text]}>{content}</NativeText>
);
