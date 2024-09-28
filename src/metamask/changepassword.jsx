import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const newPasswordInputRef = createRef();
  const confirmPasswordInputRef = createRef();

  const handleSubmitPress = async () => {
    setErrortext('');
    let valid = true;

    if (!currentPassword) {
      setPasswordError('Please enter your current password.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!newPassword) {
      setNewPasswordError('Please enter your new password.');
      valid = false;
    } else if (newPassword !== confirmNewPassword) {
      setNewPasswordError('Passwords do not match.');
      valid = false;
    } else {
      setNewPasswordError('');
    }

    if (!valid) {
      return;
    }

    setLoading(true);

    try {
      const token = await AsyncStorage.getItem('user_token');
      if (!token) {
        setLoading(false);
        setErrortext('Unable to authenticate. Please login again.');
        return;
      }

      fetch('https://zacro-backend.onrender.com/v1/user/changePassword', {
        method: 'POST',
        body: JSON.stringify({
          password: currentPassword,
          newPassword: newPassword,
          confirmNewPassword: confirmNewPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false);
          console.log(responseJson);

          if (responseJson.status) {
            AsyncStorage.setItem('user_token', responseJson.data); 
            ToastAndroid.showWithGravity(
              'Password changed successfully!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            navigation.replace('Login'); 
          } else {
            setErrortext(responseJson.message || 'Password change failed');
            ToastAndroid.showWithGravity(
              responseJson.message,
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            console.log('Password change failed:', responseJson.message);
          }
        })
        .catch((error) => {
          setLoading(false);
          setErrortext('Something went wrong. Please try again later.');
          console.error(error);
        });
    } catch (error) {
      setLoading(false);
      setErrortext('An error occurred. Please try again later.');
      console.error(error);
    }
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
            <Text style={{ marginStart: '12%', color: 'black' }}>Current Password</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(password) => setCurrentPassword(password)}
                placeholder="Enter Current Password"
                placeholderTextColor="#8b9cb5"
                secureTextEntry={true}
                returnKeyType="next"
                onSubmitEditing={() =>
                  newPasswordInputRef.current && newPasswordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            {passwordError ? (
              <Text style={styles.errorTextStyle}>
                {passwordError}
              </Text>
            ) : null}

            <Text style={{ marginStart: '12%', color: 'black' }}>New Password</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(password) => setNewPassword(password)}
                placeholder="Enter New Password"
                placeholderTextColor="#8b9cb5"
                secureTextEntry={true}
                ref={newPasswordInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  confirmPasswordInputRef.current && confirmPasswordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>

            <Text style={{ marginStart: '12%', color: 'black' }}>Confirm New Password</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(password) => setConfirmNewPassword(password)}
                placeholder="Confirm New Password"
                placeholderTextColor="#8b9cb5"
                secureTextEntry={true}
                ref={confirmPasswordInputRef}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>

            {newPasswordError ? (
              <Text style={styles.errorTextStyle}>
                {newPasswordError}
              </Text>
            ) : null}

            {loading ? (
              <ActivityIndicator />
            ) : (
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>Change Password</Text>
              </TouchableOpacity>
            )}

            {errortext !== '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
});
