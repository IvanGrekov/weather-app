import React from 'react';
import { NativeBaseProvider, StatusBar, VStack, useTheme } from 'native-base';

import { Content } from './components/Content';

export const App = () => {
  const { projectColors } = useTheme();

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor={projectColors.background} />

      <VStack style={{ height: '100%', backgroundColor: projectColors.background }}>
        <Content />
      </VStack>
    </NativeBaseProvider>
  );
};
