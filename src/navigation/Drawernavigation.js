import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Settings,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import TabNavigation from './Tabnavigation';
import {Commonfont} from '../common/Commonfont';
import {deviceHeight, deviceWidth} from '../common/Commondimension';
import Settingspage from '../drawerpages/Settingspage';
import Notification from '../drawerpages/Notification';
import IRL from '../drawerpages/IRL';
import User from '../drawerpages/User';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation, ...props}) => {
  //   useFocusEffect(
  //     React.useCallback(() => {
  //       navigation.openDrawer();
  //     }, [navigation]),
  //   );

  //   const logout = async () => {
  //     try {
  //       await AsyncStorage.removeItem('token');
  //       await AsyncStorage.removeItem('tfastatus');
  //       console.log('Item removed successfully!');
  //       navigation.navigate('loginpg');
  //     } catch (error) {
  //       console.error('Error removing item:', error);
  //     }
  //   };
  const logout =async()=>{
    await AsyncStorage.removeItem('user_id');
await AsyncStorage.removeItem('user_token');
await AsyncStorage.removeItem('user_type')
navigation.navigate('Connectwallet')
  }
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/Arrow1.png')}></Image>
        <Text style={{color: 'black', fontFamily: Commonfont.robotomedium}}>
          settings
        </Text>
        <View></View>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingTop: '40%',
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            padding: 20,
            borderRadius: 20,
            rowGap: 20,
          }}>
             {/* <TouchableOpacity
            onPress={() => navigation.navigate('setting')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <Image
              style={{
                width: deviceWidth(6),
                height: deviceHeight(3),
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/pin.png')}></Image>
            <Text style={{color: 'black'}}>Change pin</Text>
            <Image
              source={require('../../assets/images/ArrowRight5.png')}></Image>
          </TouchableOpacity> */}
          <TouchableOpacity
            
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <Image
              style={{
                width: deviceWidth(6),
                height: deviceHeight(3),
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/fingerprint.png')}></Image>
            <Text style={{color: 'black'}}>Fingerprint</Text>
            <Image
              source={require('../../assets/images/ArrowRight5.png')}></Image>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('setting')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <Image
              style={{
                width: deviceWidth(6),
                height: deviceHeight(3),
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/password.png')}></Image>
            <Text style={{color: 'black'}}>Reset password</Text>
            <Image
              source={require('../../assets/images/ArrowRight5.png')}></Image>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('setting')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <Image
              style={{
                width: deviceWidth(6),
                height: deviceHeight(3),
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/Vectory.png')}></Image>
            <Text style={{color: 'black'}}>Settings</Text>
            <Image
              source={require('../../assets/images/ArrowRight5.png')}></Image>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('notification')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <Image
              style={{
                width: deviceWidth(6),
                height: deviceHeight(3),
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/notifications.png')}></Image>
            <Text style={{color: 'black'}}>Notification</Text>
            <Image
              source={require('../../assets/images/ArrowRight5.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity   onPress={() => navigation.navigate('irl')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <Image
              style={{
                width: deviceWidth(6),
                height: deviceHeight(3),
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/Calendar.png')}></Image>
            <Text style={{color: 'black'}}>IRL events</Text>
            <Image
              source={require('../../assets/images/ArrowRight5.png')}></Image>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <Image
              style={{
                width: deviceWidth(6),
                height: deviceHeight(3),
                resizeMode: 'stretch',
              }}
              source={require('../../assets/images/Groupy.png')}></Image>
            <Text style={{color: 'black'}}>Advertise with us</Text>
            <Image
              source={require('../../assets/images/ArrowRight5.png')}></Image>
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={{position:'absolute',top:'130%', width: '100%', flex: 1}}>
        <View
          style={{
            borderBottomColor: '#909090',
            borderBottomWidth: 1,
            borderStyle: 'dotted',
            marginHorizontal: -20,
            paddingTop: 10,
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: '10%',
            columnGap: 20,
            paddingLeft: '25%',
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
    </DrawerContentScrollView>
  );
};

const Drawernavigation = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        drawerItemStyle: {
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black',
        },
      }}>
      <Drawer.Screen
        name="tabnav"
        options={{headerShown: false}}
        component={TabNavigation}
      />
      <Drawer.Screen
        name="setting"
        options={{headerShown: false}}
        component={Settingspage}
      />
      <Drawer.Screen
        name="notification"
        options={{headerShown: false}}
        component={Notification}
      />
             <Drawer.Screen
        name="irl"
        options={{headerShown: false}}
        component={IRL}
      />
              <Drawer.Screen
        name="user"
        options={{headerShown: false}}
        component={User}
      />
    </Drawer.Navigator>
  );
};

export default Drawernavigation;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
    // width:'130%',
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    borderRadius: 50,
  },
  txt: {
    color: 'white',
    paddingLeft: 10,
  },
  tuch: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  tuch1: {
    width: '100%',
    height: 72,
    marginTop: 144,
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Display-Regular',
  },
  linearGradient: {
    flexDirection: 'row',
    height: 72,
    alignItems: 'center',
    paddingHorizontal: 20,
    columnGap: 150,
  },
});
