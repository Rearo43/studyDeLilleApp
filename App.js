import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './Home';

export default () => (
  <>
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </ApplicationProvider>
  </>
);
