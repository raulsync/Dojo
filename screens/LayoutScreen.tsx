import {
  // Dimensions,
  StyleSheet,
  // Text,
  View,
} from 'react-native';
import React from 'react';

// const {height, width} = Dimensions.get('window');

// 'window': App ke visible area ka size deta hai (excluding status bar).

// 'screen': Full screen size deta hai (including status bar).

export default function LayoutScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={{flex: 0.3, backgroundColor: 'yellow'}} />
      <View style={{flex: 0.5, backgroundColor: 'cyan'}} /> */}
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'cyan',
          // alignSelf: 'center',
        }}
      />
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'pink'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'brown'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: width * 0.9,
    // height: height * 0.5,
    flex: 1,
    backgroundColor: 'red',
    margin: 10,
    paddingLeft: 20,
    // flexDirection: 'row',
    // alignItems: 'flex-end',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    gap: 10,
  },
});
