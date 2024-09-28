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
  KeyboardAvoidingView,ActivityIndicator,ToastAndroid
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation,route }) => {
  const formface = route.params.formdata
  console.log(formface)
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errortext, setErrortext] = useState('');

  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setNameError('');
    setEmailError('');
    setPasswordError('');

    let valid = true;

    if (!userName) {
      setNameError('Please enter your name.');
      valid = false;
    }
    if (!userEmail) {
      setEmailError('Please enter your email.');
      valid = false;
    }
    if (!userPassword) {
      setPasswordError('Please enter your password.');
      valid = false;
    }

    if (!valid) return;

    setLoading(true);

    fetch('https://zacro-backend.onrender.com/v1/user/register', {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        walletType: "trader",
        userName: userName,
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
          AsyncStorage.setItem('user_id', responseJson.data.email);
          navigation.replace('Login');
        } else {
          setErrortext(responseJson.msg || 'Registration failed. Please try again.');
          ToastAndroid.showWithGravity(
            responseJson.message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          
          console.log('Registration failed:', responseJson.msg);
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
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) => setUserName(UserName)}
                placeholder="Enter Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            {nameError ? <Text style={styles.errorTextStyle}>{nameError}</Text> : null}

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            {emailError ? <Text style={styles.errorTextStyle}>{emailError}</Text> : null}

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                returnKeyType="done"
              />
            </View>
            {passwordError ? <Text style={styles.errorTextStyle}>{passwordError}</Text> : null}

            {errortext ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            {loading? (<ActivityIndicator />):(
              <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>Resigter</Text>
            </TouchableOpacity>
            )}
            <Text
              style={styles.loginTextStyle}
              onPress={() => navigation.navigate('Login')}>
              Already have an account? Sign in
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

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
    marginTop: 20,
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
    justifyContent: 'center', // Center button text
    paddingHorizontal: 20, // Adjust horizontal padding
    paddingVertical: 10, // Adjust vertical padding
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 14, // Smaller font size
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
  loginTextStyle: {
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
