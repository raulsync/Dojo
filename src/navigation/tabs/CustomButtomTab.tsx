import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButtomTab({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
      }}>
      {state?.routes?.map((route, index) => {
        const focused = state.index === index;
        return (
          <View key={route.key}>
            <TouchableOpacity
              onPress={() => navigation.navigate(route.name)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: 20,
              }}>
              <Text style={{color: focused ? 'blue' : 'black'}}>
                {route.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
