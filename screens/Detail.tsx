import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';

export default function Detail() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <Button onPress={() => navigation.push('Detail')}>
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.navigate('Home')}>
        Go Back to HomeScreen
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>

      <Button onPress={() => navigation.popToTop()}>
        Go back to first screen in stack
      </Button>
      <Button onPress={() => navigation.pop()}>Pop Screen</Button>
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
});
