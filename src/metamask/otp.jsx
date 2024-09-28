import axios from 'axios';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { yupResolver } from '@hookform/resolvers/yup';

const Signupotp = ({ navigation, route }) => {
    const email = route.params.email;
    const API_URL_VERIFY_OTP = 'http://192.168.243.101:8000/v1/user/verify-forgetotp';

    // Yup validation schema for OTP
    const validationSchema = yup.object().shape({
        Number: yup
            .string()
            .required('OTP is required')
            .matches(/^\d{4}$/, 'OTP must be exactly 4 digits') 
            .trim(),
    });

    const [seconds, setSeconds] = useState(60);
    const [timerActive, setTimerActive] = useState(false);
    const [initialRun, setInitialRun] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false); 

    useEffect(() => {
        let interval;
        if (timerActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds > 0) {
                        return prevSeconds - 1;
                    } else {
                        clearInterval(interval);
                        setTimerActive(false);
                        return 0;
                    }
                });
            }, 1000);
        } else if (!timerActive && seconds !== 60) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerActive, seconds]);

    useEffect(() => {
        if (initialRun) {
            startTimer();
        }
    }, [initialRun]);

    const startTimer = () => {
        setSeconds(60);
        setTimerActive(true);
    };

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            Number: '',
        },
        mode: 'all',
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post(API_URL_VERIFY_OTP, {
                email: email, 
                code: data.Number 
            });

            if (response.data.status == true) {
                navigation.navigate('Setpassword',{email:email}); 
            } else {
                alert(response.data.message || 'OTP verification failed. Please try again.');
            }
        } catch (error) {
            alert('Error verifying OTP. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View style={styles.contain}>
            <View style={styles.box1}>
                <KeyboardAwareScrollView style={styles.box3}>
                    <Text style={styles.text2}>Email Verification</Text>
                    <View style={{ paddingTop: 20, borderBottomWidth: 2, width: '30%' }} />
                    <View style={styles.viw2}>
                        <Text style={styles.text3}>Enter the 4-digit code sent to your email: {email}</Text>
                        <View style={styles.box5}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder='Enter OTP'
                                        placeholderTextColor={'#151515'}
                                        keyboardType='numeric'
                                        style={styles.inputStyle}
                                    />
                                )}
                                name="Number"
                            />
                        </View>
                    </View>
                    {errors.Number && (
                        <Text style={{ color: 'red', fontSize: 13 }}>
                            {errors.Number.message}
                        </Text>
                    )}

                    <View style={{ paddingTop: '60%' }}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            activeOpacity={0.5}
                            onPress={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                        >
                            <Text style={styles.buttonTextStyle}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                        <TouchableOpacity disabled={timerActive} onPress={startTimer}>
                            <Text style={[styles.text6, { opacity: timerActive ? 0.5 : 1 }]}>
                                {timerActive ? `Resend code in ${seconds}s` : 'Resend code'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
};

export default Signupotp;

const styles = StyleSheet.create({
    contain: { flex: 1, backgroundColor: '#FFFFFF' },
    box1: { paddingHorizontal: 14, flex: 1 },
    text2: { color: 'black', fontSize: 24, fontWeight: 'bold' },
    viw2: { position: 'relative', paddingTop: 20, borderBottomWidth: 1, borderBlockColor: '#E2E2E2' },
    text3: { color: 'black', fontSize: 14 },
    box3: { paddingTop: 20, paddingHorizontal: 10, flex: 1 },
    text6: { color: 'black', fontSize: 14 },
    box5: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 },
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
