import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { App } from './src/App';

import { theme } from './src/styles/Theme';

export const Main = () => (
  <NativeBaseProvider theme={theme}>
    <App />
  </NativeBaseProvider>
);
