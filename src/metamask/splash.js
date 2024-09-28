// import React, {useState, useEffect} from 'react';
// import {
//   ActivityIndicator,
//   View,
//   StyleSheet,
//   Image
// } from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SplashScreen = ({navigation}) => {
//   const [animating, setAnimating] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimating(false);
//       AsyncStorage.getItem('user_id').then((value) =>
//         navigation.navigate('SimpleCarousel')
//       );
//     }, 5000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* <Image
//         source={require('../Image/aboutreact.png')}
//         style={{width: '90%', resizeMode: 'contain', margin: 30}}
//       /> */}
//       <ActivityIndicator
//         animating={animating}
//         color="#FFFFFF"
//         size="large"
//         style={styles.activityIndicator}
//       />
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   activityIndicator: {
//     alignItems: 'center',
//     height: 80,
//   },
// });
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // Check if user_id or user_token exists in AsyncStorage
      navigation.replace('SimpleCarousel');
      AsyncStorage.getItem('user_token').then((token) => {
        if (token) {
          navigation.replace('Connectwallet');
        } else {
          navigation.replace('SimpleCarousel');
        }
      });
    }, 3000); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../assets/images/splash_logo.png')} 
        style={{width: '80%', resizeMode: 'contain', margin: 30}}
      /> */}
      {/* <ActivityIndicator
        animating={animating}
        color="#F65735"
        size="large"
        style={styles.activityIndicator}
      /> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
