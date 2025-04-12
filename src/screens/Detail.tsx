import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {
  useNavigation,
  // useRoute
} from '@react-navigation/native';

export default function Detail() {
  // const route = useRoute();
  // const {params} = route;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Detail
      </Text>
      {/* <Text>{params.username}</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Detail')}>
        <Text style={styles.text}>Go to Details... again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.text}>Go Back to HomeScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popTo('Home')}>
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.text}>Go back to first screen in stack</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <Text style={styles.text}>Pop Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

//goback present screen ko stack se remove nhi karta aur pop() screen ko peeche se hata deta hai

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  text: {
    color: 'white',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
