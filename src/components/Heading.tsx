import React from 'react';
import { Heading as NativeHeading } from 'native-base';

import GlobalStyle from '../styles/GlobalStyle';

const { font, heading } = GlobalStyle;

interface Props {
  content: string;
  style?: object;
}

export const Heading = ({ content, style = {} }: Props) => (
  <NativeHeading style={[font, heading, style]}>{content}</NativeHeading>
);
