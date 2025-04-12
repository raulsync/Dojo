/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import Setting from './screens/Setting';
import Chat from './screens/Chat';
import HelpSupport from './screens/HelpSupport';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'pink',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({size, focused}) => {
            return (
              <Image
                style={{
                  height: size,
                  width: size,
                  tintColor: focused ? 'blue' : 'black',
                }}
                source={require('../../../assets/home.png')}
              />
            );
          },
          drawerLabel: ({size, focused, color}) => {
            return (
              <Text
                style={{
                  fontSize: size,
                  color: focused ? 'blue' : color,
                  fontWeight: focused ? 'bold' : '600',
                }}>
                Home
              </Text>
            );
          },
          drawerActiveTintColor: 'maroon',
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          drawerIcon: ({size, focused}) => {
            return (
              <Image
                style={{
                  height: size,
                  width: size,
                  tintColor: focused ? 'blue' : 'black',
                }}
                source={require('../../../assets/chat.png')}
              />
            );
          },
          drawerLabel: ({size, focused}) => {
            return (
              <Text
                style={{
                  fontSize: size,
                  color: focused ? 'blue' : 'black',
                  fontWeight: focused ? 'bold' : '600',
                }}>
                Chat
              </Text>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Support"
        component={HelpSupport}
        options={{
          drawerIcon: ({size, focused}) => {
            return (
              <Image
                style={{
                  height: size,
                  width: size,
                  tintColor: focused ? 'blue' : 'black',
                }}
                source={require('../../../assets/support.png')}
              />
            );
          },
          drawerLabel: ({size, focused}) => {
            return (
              <Text
                style={{
                  fontSize: size,
                  color: focused ? 'blue' : 'black',
                  fontWeight: focused ? 'bold' : '600',
                }}>
                Support
              </Text>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({size, focused}) => {
            return (
              <Image
                style={{
                  height: size,
                  width: size,
                  tintColor: focused ? 'blue' : 'black',
                }}
                source={require('../../../assets/setting.png')}
              />
            );
          },
          drawerLabel: ({size, focused}) => {
            return (
              <Text
                style={{
                  fontSize: size,
                  color: focused ? 'blue' : 'black',
                  fontWeight: focused ? 'bold' : '600',
                }}>
                Setting
              </Text>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
