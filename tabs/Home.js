import React from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const HomeScreen = () => {
  return (
    <>
      <View>
        <Text style={styles.text} category='h1'>
          DeLille App
        </Text>
      </View>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}
      >
        {/* <View
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}
      > */}
        <Image style={styles.tinyLogo} source={require('./a.png')} />
        {/* </View> */}
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'yellow',
  },
  img: {
    backgroundColor: 'blue',
  },
  tinyLogo: {
    width: 100,
    // height: 100,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

// import {
//   Button,
//   Divider,
//   Layout,
//   TopNavigation,
//   TopNavigationAction,
// } from '@ui-kitten/components';

// import { MenuIcon } from '../assets/icons';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation, DrawerActions } from '@react-navigation/native';

// export const HomeScreen = () => {
//   const navigation = useNavigation();
//   const navigateDetails = () => {
//     navigation.navigate('Details');
//   };
//   const renderDrawerAction = () => (
//     <TopNavigationAction
//       icon={MenuIcon}
//       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//     />
//   );

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TopNavigation
//         title='Stories'
//         alignment='center'
//         accessoryLeft={renderDrawerAction}
//       />
//       <Divider />
//       <Layout
//         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//       >
//         <Button onPress={navigateDetails}>Go to details</Button>
//       </Layout>
//     </SafeAreaView>
//   );
// };
