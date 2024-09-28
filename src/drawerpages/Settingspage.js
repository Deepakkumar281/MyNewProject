import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {Commonstyle} from '../common/Commonstyle';
import {deviceHeight, deviceWidth} from '../common/Commondimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settingspage = ({navigation}) => {
  const logout =async()=>{
    await AsyncStorage.removeItem('user_id');
await AsyncStorage.removeItem('user_token');
await AsyncStorage.getItem('user_type')
navigation.navigate('Login')
  }
  return (
    <View style={Commonstyle.container}>
      <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image source={require('../../assets/images/Arrow1.png')}></Image>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('setting')}
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
          source={require('../../assets/images/Vectory.png')}></Image>
        <Text style={{color: 'black'}}>Settings</Text>
        <Image source={require('../../assets/images/ArrowRight5.png')}></Image>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          padding: 20,
          left: '10%',
          borderRadius: 20,
          rowGap: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('setting')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Text style={{color: 'black'}}>Become a Trader</Text>
          <Image
            source={require('../../assets/images/ArrowRight5.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Text style={{color: 'black'}}>Notification</Text>
          <Image
            source={require('../../assets/images/ArrowRight5.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Text style={{color: 'black'}}>IRL events</Text>
          <Image
            source={require('../../assets/images/ArrowRight5.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Text style={{color: 'black'}}>Advertise with us</Text>
          <Image
            source={require('../../assets/images/ArrowRight5.png')}></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: '60%',
          left: '20%',
          columnGap: 20,
        }}>
        
      </View> */}
      <View style={{paddingTop: '10%', width: '100%', flex: 1}}>
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

export default Settingspage;

const styles = StyleSheet.create({});
