import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,ActivityIndicator,ToastAndroid} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Forgot = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    let valid = true;
  
    if (!userEmail) {
      setEmailError('Please enter your email.');
      valid = false;
    } else {
      setEmailError('');
    }
  
    if (!valid) {
      return;
    }
  
    setLoading(true);
  
    fetch('http://192.168.243.101:8000/v1/user/forget-password', {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
  
        if (responseJson.status) {
          navigation.replace('Signupotp',{email:userEmail});
        } else {
          setErrortext(responseJson.message || 'Please check your email');
          ToastAndroid.showWithGravity(
            responseJson.message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          console.log('Login failed:', responseJson.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        setErrortext('Something went wrong. Please try again later.');
        console.error(error);
      });
  };
  

  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../assets/images/login.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <Text style={{marginStart:'12%',color:'black'}}>Email</Text>
            <View style={styles.SectionStyle}>
              
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            {emailError ? (
              <Text style={styles.errorTextStyle}>
                {emailError}
              </Text>
            ) : null}
                     
         
           
            {loading? (<ActivityIndicator />):(
              <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Send Otp</Text>
            </TouchableOpacity>
            )}
            
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    // marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#F65735',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#F65735',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black', 
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 12,
    marginTop: -10, // Adjusts the spacing to be closer to the input
    marginBottom: 10, // Adjusts the spacing between the error and the next component
  },
});
