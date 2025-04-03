/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import HomeScreen from './screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <HomeScreen />
    </ScrollView>
  );
}

export default App;
