import React from 'react';
import { View, TextInput, StyleSheet, Text, Button, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button as RNEButton } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

const PasswordChange = () => {
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .required('Old password is required'),
    newPassword: Yup.string()
      .required('New password is required')
      .min(8, 'New password must be at least 8 characters long')
      .notOneOf([Yup.ref('oldPassword')], 'New password must be different from the old password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  const handleSubmit = (values) => {
    Alert.alert('Success', 'Password has been changed successfully');
  };



  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ oldPassword: '', newPassword: '', confirmPassword: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
          <View>
            <Text style={styles.label}>Old Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('oldPassword')}
              onBlur={handleBlur('oldPassword')}
              value={values.oldPassword}
              secureTextEntry
              placeholder="Enter old password"
            />
            {errors.oldPassword && touched.oldPassword && (
              <Text style={styles.error}>{errors.oldPassword}</Text>
            )}

            <Text style={styles.label}>New Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('newPassword')}
              onBlur={handleBlur('newPassword')}
              value={values.newPassword}
              secureTextEntry
              placeholder="Enter new password"
            />
            {errors.newPassword && touched.newPassword && (
              <Text style={styles.error}>{errors.newPassword}</Text>
            )}

            <Text style={styles.label}>Confirm New Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
              placeholder="Confirm new password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

          

            <RNEButton title="Change Password" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default PasswordChange;