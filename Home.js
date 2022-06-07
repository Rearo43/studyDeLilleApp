import React from 'react';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet,
  View, Dimensions,
} from 'react-native';

export const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text} category='h1'>DeLille App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'yellow',
  },
});
