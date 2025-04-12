import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomDrawer(props) {
  return (
    // drawercontent scroll is useful when we creating custom drawer so that if content will increase then it make scrollable
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View style={styles.profileSection}>
        <Image
          source={require('../../../assets/home.png')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Rahul Anand</Text>
      </View>

      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
        {/* it is used to list all drawerscreens */}
        <DrawerItemList {...props} />
      </View>

      <View style={styles.logoutSection}>
        <TouchableOpacity style={{paddingVertical: 10}}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  logoutSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});
