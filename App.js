import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './Home';
import { Wines } from './Wines';
import { BottomTabs } from './CreateTabs';

export default () => (
  <>
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <BottomTabs />
      </SafeAreaProvider>
    </ApplicationProvider>
  </>
);
