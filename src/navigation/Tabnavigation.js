import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, StatusBar, View, BackHandler, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import Search from '../home/Search';
import Content from '../home/Content';
import Airdrop from '../home/Airdrop';
import Metamask from '../metamask/metamask';

const Tab = createBottomTabNavigator();

function TabNavigation({ navigation }) {



  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to Exit App', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        width: '100%'
      }}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute', bottom: 20, width: '80%', left: '10%', borderRadius: 28, height: '7%',
          elevation: 16, shadowColor: 'black', shadowOffset: 1,backgroundColor:'#000000'
        },
      }}
      sceneAnimationEnabled={true}
      sceneAnimationType='shifting'
      labeled={false}
      shifting={true}
      activeIndicatorStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="dash"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (<View style={focused &&{paddingVertical:5,backgroundColor:'white',paddingHorizontal:10,borderRadius:10}}>
                <Image style={styles.on1} source={!focused ? require('../../assets/images/home.png') : require('../../assets/images/Group1833.png')}></Image>
                </View>)
          }
        }}
      />
       <Tab.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (<View style={focused &&{paddingVertical:5,backgroundColor:'white',paddingHorizontal:10,borderRadius:10}}>
                <Image style={styles.on1} source={!focused ? require('../../assets/images/Search1.png') : require('../../assets/images/search.png')}></Image>
                </View>)
          }
        }}
      />
         <Tab.Screen
        name="Content"
        component={Content}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (<View style={focused &&{paddingVertical:5,backgroundColor:'white',paddingHorizontal:10,borderRadius:10}}>
                <Image style={styles.on1} source={!focused ? require('../../assets/images/Vector9.png') : require('../../assets/images/comment.png')}></Image>
                </View>)
          }
        }}
      />
          <Tab.Screen
        name="airdrop"
        component={Airdrop}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (<View style={focused &&{paddingVertical:5,backgroundColor:'white',paddingHorizontal:10,borderRadius:10}}>
                <Image style={styles.on1} source={!focused ? require('../../assets/images/Vector14.png') : require('../../assets/images/vector13.png')}></Image>
                </View>)
          }
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  on1: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  }
})

export default TabNavigation;