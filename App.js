import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './tabs/Home';
import { Wines } from './tabs/Wines';
import { BottomTabs } from './tabs/CreateTabs';
import { SideDrawer } from './CreateSideDrawer';

export default () => (
  <>
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <SideDrawer />
      </SafeAreaProvider>
    </ApplicationProvider>
  </>
);
