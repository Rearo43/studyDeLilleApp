import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './/tabs/Home';
// import { Wines } from './/tabs/Wines';
import { Wines } from './/tabs/LG';
import { FastFacts } from './/tabs/FastFacts';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title='Go to notifications'
//       />
//     </View>
//   );
// }

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export const SideDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Wines' component={Wines} />
        <Drawer.Screen name='Fast Facts' component={FastFacts} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
