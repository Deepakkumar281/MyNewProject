import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  BackHandler,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // For image selection
import AsyncStorage from '@react-native-async-storage/async-storage'; // For retrieving the token
import { Commonstyle } from '../common/Commonstyle';
import { deviceHeight, deviceWidth } from '../common/Commondimension';
import { Commonfont } from '../common/Commonfont';

const Contentpublish = ({ navigation }) => {
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const Back = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  }, [navigation]);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        const image = response.assets[0];
        setSelectedImage(image);
      }
    });
  };

  const publishContent = async () => {
    if (!content && !selectedImage) {
      Alert.alert('Please add some content or select an image.');
      return;
    }

    try {
      // Retrieve token from AsyncStorage
      const token = await AsyncStorage.getItem('user_token');
      if (!token) {
        Alert.alert('Authentication Error', 'Token not found');
        return;
      }

      let formData = new FormData();
      formData.append('content', content);

      if (selectedImage) {
        formData.append('image', {
          uri: selectedImage.uri,
          type: selectedImage.type,
          name: selectedImage.fileName,
        });
      }

      const response = await fetch('https://zacro-backend.onrender.com/v1/user/traderPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`, // Add the token in the Authorization header
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert('Content published successfully!');
        navigation.goBack(); // Redirect back after successful post
      } else {
        Alert.alert('Failed to publish content', result.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={Commonstyle.container}>
      <TouchableOpacity onPress={() => Back()}>
        <Image source={require('../../assets/images/+1.png')}></Image>
      </TouchableOpacity>
      <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          columnGap: 10,
        }}>
        <Image source={require('../../assets/images/Ellipse91.png')}></Image>
        <View>
          <Text style={{ color: 'black' }}>Username</Text>
          <TextInput
            placeholder={`What's new ?`}
            placeholderTextColor={'#00000026'}
            value={content}
            onChangeText={setContent}
            style={{ color: 'black' }}
          />
        </View>
      </View>

      {selectedImage && (
        <View style={{ padding: 10 }}>
          <Image
            source={{ uri: selectedImage.uri }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}

      <View
        style={{
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 20,
          }}>
          <TouchableOpacity onPress={selectImage}>
            <Image source={require('../../assets/images/Vector11.png')}></Image>
          </TouchableOpacity>
          <Image source={require('../../assets/images/Vector12.png')}></Image>
          <Image source={require('../../assets/images/Group18331.png')}></Image>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#4A90E2',
            paddingHorizontal: 10,
            borderRadius: 5,
            paddingVertical: 5,
          }}
          onPress={publishContent}>
          <Text style={{ fontSize: deviceHeight(1.2), color: 'white' }}>
            Publish
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contentpublish;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: deviceHeight(2),
    fontFamily: Commonfont.robotoblack,
  },
});
