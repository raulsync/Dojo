/* eslint-disable react/no-unstable-nested-components */
// import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import {Image} from 'react-native';
import Chat from './screens/Chat';
import CustomButtomTab from './CustomButtomTab';
// import HomeScreen from '../../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      // screenOptions={{
      //   tabBarStyle: {backgroundColor: 'black'},
      //   tabBarActiveTintColor: 'black',
      //   tabBarInactiveTintColor: 'gray',
      //   headerShown: false,
      //   tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
      // }}
      tabBar={props => <CustomButtomTab {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{width: size, height: size, tintColor: color}}
              source={require('../../../assets/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{width: size, height: size, tintColor: color}}
              source={require('../../../assets/chat.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
