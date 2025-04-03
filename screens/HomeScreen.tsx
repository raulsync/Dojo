import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';

const profile_img =
  'https://media.licdn.com/dms/image/v2/D4E03AQGqeOKSXuHJKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718773903409?e=1749081600&v=beta&t=vzctcIwQwJlLjyDQS7hu6QiHK_fPnt_zWXZp3JY0SYU';

const box_img =
  'https://m.media-amazon.com/images/I/61qbMx4oXJL._AC_UF1000,1000_QL80_.jpg';
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textView}>React Native !</Text>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>Rahul Anand !</Text>
        <Image source={{uri: profile_img}} style={styles.profilePic} />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => Alert.alert('Om Namah Siway')}
          color="#blue"
          title="click me"
        />
      </View>
      <View>
        <Image
          source={{uri: box_img}}
          style={{
            marginTop: 10,
            width: '80%',
            height: 100,
            // objectFit: 'contain',
            alignSelf: 'center',
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  textView: {
    fontSize: 30,
    padding: 40,
    color: 'purple',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nameText: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'maroon',
    textAlign: 'center',
  },
  textContainer: {
    width: '80%',
    height: 500,
    backgroundColor: 'pink',
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonView: {
    width: 100,
    marginTop: 20,
    alignSelf: 'center',
    cursor: 'pointer',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default HomeScreen;
