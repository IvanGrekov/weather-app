import React from 'react';
import { useTheme } from 'react-native-paper';
import { NativeBaseProvider, StatusBar, VStack } from 'native-base';

import { Content } from './components/Content';

export const App = () => {
  const { colors } = useTheme();

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <VStack style={{ height: '100%', backgroundColor: colors.background }}>
        <Content />
      </VStack>
    </NativeBaseProvider>
  );
};
