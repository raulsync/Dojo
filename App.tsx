/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import {ScrollView, StatusBar} from 'react-native';
// import HomeScreen from './screens/HomeScreen';
// import LayoutScreen from './screens/LayoutScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import Detail from './src/screens/Detail';
// import DrawerNavigator from './src/navigation/drawer/DrawerNavigator';
import TabNavigator from './src/navigation/tabs/TabNavigator';

// const Stack = createNativeStackNavigator();

//we can create dynamic navigatiin by this
// function RootStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{title: 'HomeScreen'}}
//       />
//       <Stack.Screen
//         name="Detail"
//         component={Detail}
//         options={{title: 'Overview', headerStyle: {backgroundColor: 'tomato'}}}
//       />
//     </Stack.Navigator>
//   );
// }

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;

// <ScrollView style={{flex: 1}}>
//   <StatusBar
//     barStyle={'dark-content'}
//     backgroundColor="transparent"
//     translucent
// //   />
// {
//   /* <HomeScreen /> */
// }
// {
//   /* </ScrollView> */
// }
