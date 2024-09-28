import {StyleSheet, Image, View, TouchableOpacity, Text,BackHandler} from 'react-native';
import React,{useEffect} from 'react';
import {Commonstyle} from '../common/Commonstyle';
import {deviceHeight, deviceWidth} from '../common/Commondimension';
import {Commonfont} from '../common/Commonfont';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notification = ({navigation}) => {
  const logout =async()=>{
    await AsyncStorage.removeItem('user_id');
await AsyncStorage.removeItem('user_token');
await AsyncStorage.removeItem('user_type')
navigation.navigate('Connectwallet')
  }
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
  return (
    <View style={Commonstyle.container}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image source={require('../../assets/images/Arrow1.png')}></Image>
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goback()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '60%',
          left: '20%',
          marginVertical: '15%',
        }}>
        <Image
          style={{
            width: deviceWidth(6),
            height: deviceHeight(3),
            resizeMode: 'stretch',
          }}
          source={require('../../assets/images/notifications.png')}></Image>
        <Text style={{color: 'black'}}>Notification</Text>
        <Image source={require('../../assets/images/ArrowRight5.png')}></Image>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          padding: 20,
          borderRadius: 20,
          rowGap: 20,
          flexDirection: 'row',
          columnGap: 10,
        }}>
        <Image source={require('../../assets/images/Maskgroupy.png')}></Image>
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontFamily: Commonfont.robotobold}}>
            Crypto & Bitcoin News
          </Text>
          <Text
            style={{
              color: '#000000C4',
              fontFamily: Commonfont.robotoregular,
              fontSize: deviceHeight(1.5),
            }}>
            Cryptocurrency values $60,000, reaching its highest point
            since2021.Enthusiasts are waiting to see if it can achieve
          </Text>
          <Text
            style={{
              color: '#000000C4',
              fontFamily: Commonfont.robotoregular,
              fontSize: deviceHeight(1.5),
            }}>
            loremipsum.net 27 min
          </Text>
        </View>
      </View>

      <View style={{paddingTop: '80%', width: '100%', flex: 1}}>
        <View
          style={{
            borderBottomColor: '#909090',
            borderBottomWidth: 1,
            borderStyle: 'dotted',
            marginHorizontal: -20,
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: '15%',
            columnGap: 20,
            paddingLeft: '30%',
          }} onPress={()=>logout()}>
          <Image
            style={{
              width: deviceWidth(6),
              height: deviceHeight(3),
              resizeMode: 'stretch',
            }}
            source={require('../../assets/images/Download.png')}></Image>
          <Text style={{color: 'black'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
