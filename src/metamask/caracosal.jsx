import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const SimpleCarousel = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        ref={swiperRef}
        onIndexChanged={handleIndexChanged}
        dot={<View style={{ width: 0, height: 0 }} />}  
        activeDot={<View style={{ width: 0, height: 0 }} />}  
      >
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/images/1.png')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>

        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/images/2.png')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>

        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/images/3.png')}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </Swiper>
      <View style={styles.buttonsContainer}>
        {currentIndex === 2 ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Connectwallet')}
            style={styles.button}>
            <Text style={{ color: 'white', fontSize: 15 }}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate('Connectwallet')}
          >
            <Text style={{ color: 'black', textAlign: 'center' }}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: '-13%',
    width: '24%',
    backgroundColor: '#A41D21',
    height: 35,
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 25,
    alignItems: 'center',
  },
  button1: {
    marginTop: '-17%',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: '40%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
    backgroundColor: '#A41D21',
  },
  wrapper: {},
});

export default SimpleCarousel;
