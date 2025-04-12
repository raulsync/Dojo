import {
  // createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  // Alert,
  //  Button,
  // Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Detail from './Detail';

// const profile_img =
//   'https://media.licdn.com/dms/image/v2/D4E03AQGqeOKSXuHJKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718773903409?e=1749081600&v=beta&t=vzctcIwQwJlLjyDQS7hu6QiHK_fPnt_zWXZp3JY0SYU';

// const box_img =
//   'https://m.media-amazon.com/images/I/61qbMx4oXJL._AC_UF1000,1000_QL80_.jpg';

function HomeScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigate('Detail', {username: 'Rahul'})}
        style={styles.button}>
        <Text style={styles.text}>Go to detail</Text>
      </TouchableOpacity>
    </View>
  );
}

//for static navigation

// const RootStack = createNativeStackNavigator({
//   initialRouteName: 'Home',
//   screens: {
//     Home: {
//       screen: HomeScreen,
//       options: {
//         title: 'HomeScree',
//       },
//     },
//     Detail: {
//       screen: Detail,
//       options: {
//         title: 'Detail',
//       },
//     },
//   },
// });

// export const Navigation = createStaticNavigation(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
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

export default HomeScreen;
