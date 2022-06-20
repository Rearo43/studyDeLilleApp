import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Home';
import { Wines } from './Wines';

function CreateTabs({ state, descriptors, navigation }) {
  return (
    <View style={styles.card}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tab}
          >
            <Text
              style={[styles.text, { color: isFocused ? '#673ab7' : '#222' }]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CreateTabs {...props} />}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Current Wines' component={Wines} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    height: 50,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 35,
  },
});
