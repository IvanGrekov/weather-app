import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, StatusBar, Box } from 'native-base';

import { Main } from './src/components/Main';

import { styleVariables } from './src/helpers/styleHelper';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor={styleVariables.bgColor} />

      <Box style={styles.appWrapper}>
        <Main />
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    height: '100%',

    backgroundColor: styleVariables.bgColor,
  },
});

export default App;
