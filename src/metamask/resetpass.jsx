import axios from 'axios'; // For API requests
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { yupResolver } from '@hookform/resolvers/yup';

const Setpassword = ({ navigation, route }) => {
    const email = route.params.email;
    const API_URL_CHANGE_PASSWORD = 'http://192.168.243.101:8000/v1/user/changepassword';

    const [isSubmitting, setIsSubmitting] = useState(false); 
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [confirmPasswordVisible1, setConfirmPasswordVisible1] = useState(false);

    const validationSchema = yup.object().shape({
        password: yup
            .string()
            .required('Password is required')
            .matches(/\w*[a-z]\w*/, "Password must have a small letter")
            .matches(/\d/, "Password must have a number")
            .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
            .min(8, ({ min }) => `Password must be at least ${min} characters`),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], "Passwords don't match")
            .required('Confirm Password is required'),
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
        mode: 'all',
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post(API_URL_CHANGE_PASSWORD, {
                newPassword: data.password,
                confirmNewPassword: data.confirmPassword,
                email: email
            });

            if (response.data.status == true) {
                alert('Password changed successfully!');
                navigation.navigate('Login'); 
            } else {
                alert(response.data.message || 'Password change failed. Try again.');
            }
        } catch (error) {
            alert('An error occurred while changing the password. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View style={styles.contain}>
            <View style={styles.box1}>
                <KeyboardAwareScrollView style={styles.box3}>
                    <Text style={styles.text2}>Set New Password</Text>
                    <View style={{ paddingTop: 20, borderBottomWidth: 2, width: '30%' }} />
                    
                    <View style={styles.viw2}>
                        <Text>New Password</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder='Enter password'
                                    placeholderTextColor={'#151515'}
                                    secureTextEntry={!confirmPasswordVisible}
                                    style={styles.inputStyle}
                                />
                            )}
                            name="password"
                        />
                    </View>
                    {errors.password && <Text style={{ color: 'red', fontSize: 14 }}>{errors.password.message}</Text>}

                    <View style={styles.viw2}>
                        <Text>Confirm Your Password</Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder='Confirm password'
                                    placeholderTextColor={'#151515'}
                                    secureTextEntry={!confirmPasswordVisible1}
                                    style={styles.inputStyle}
                                />
                            )}
                            name="confirmPassword"
                        />
                    </View>
                    {errors.confirmPassword && (
                        <Text style={{ color: 'red', fontSize: 14 }}>
                            {errors.confirmPassword.message}
                        </Text>
                    )}

                    <View style={{ justifyContent: 'flex-end', flex: 1, paddingTop: '90%' }}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                        >
                            <Text style={styles.buttonTextStyle}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
};

export default Setpassword;

const styles = StyleSheet.create({
    contain: { flex: 1, backgroundColor: '#FFFFFF' },
    box1: { paddingHorizontal: 14, flex: 1 },
    text2: { color: 'black', fontSize: 24, fontWeight: 'bold' },
    viw2: { position: 'relative', paddingTop: 30, borderBottomWidth: 1, borderBlockColor: '#E2E2E2' },
    box3: { paddingTop: 20, paddingHorizontal: 10, flex: 1 },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#E2E2E2',
        padding: 10,
        borderRadius: 5,
        color: '#151515',
        flex: 1,
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
});
