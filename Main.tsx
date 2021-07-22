import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { App } from './src/App';

import { theme } from './src/styles/Theme';

export const Main = () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
);
