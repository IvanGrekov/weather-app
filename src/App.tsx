/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, StatusBar, VStack, useTheme } from 'native-base';

import { Content } from './components/Content';

import { theme } from './styles/Theme';

export const App = () => {
  const { projectColors } = useTheme();

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor={projectColors.background} />

      <VStack style={styles.app}>
        <Content />
      </VStack>
    </NativeBaseProvider>
  );
};

const { projectColors } = theme;

const styles = StyleSheet.create({
  app: {
    height: '100%',
    backgroundColor: projectColors.background,
  },
});
