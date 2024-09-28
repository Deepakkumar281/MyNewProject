// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import Home from '../home/Home';
import TabNavigation from './Tabnavigation';
import Description from '../home/Description';
import Searchitem from '../home/Searchitem';
import Contentpublish from '../home/Contentpublish';
import Createairdrop from '../home/Createairdrop';
import Airdropdetail from '../home/Airdropdetail';
import Metamask from '../metamask/metamask';
import SplashScreen from '../metamask/splash';
import SimpleCarousel from '../metamask/caracosal';
import LoginScreen from '../metamask/login';
import Connectwallet from '../metamask/connectwalletpage';
import SettingsScreen from '../metamask/setting';
import RegisterScreen from '../metamask/resigter';
import Wallet from '../metamask/wallet';
import Drawernavigation from './Drawernavigation';
import Forgetpassword from '../metamask/forgetpassword';
import Forgot from '../metamask/forgot';
import Signupotp from '../metamask/otp';
import Setpassword from '../metamask/resetpass';
import SocialMediaForm from '../metamask/resigter1';
import ChangePassword from '../metamask/changepassword';


const Stack = createStackNavigator();

export default function Stacknavigation() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SimpleCarousel" component={SimpleCarousel}/>
        <Stack.Screen name="Connectwallet" component={Connectwallet}/>
        <Stack.Screen name="Wallet" component={Wallet}/>

        <Stack.Screen name="Login" component={LoginScreen}/> 
        <Stack.Screen name="Forgot" component={Forgot}/> 
        <Stack.Screen name="Signupotp" component={Signupotp}/> 
        <Stack.Screen name="Setpassword" component={Setpassword}/> 

        <Stack.Screen name="Forgetpassword" component={Forgetpassword}/> 

        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name="SocialMediaForm" component={SocialMediaForm}/>
        <Stack.Screen name="tab" component={TabNavigation}/>
        <Stack.Screen name="ChangePassword" component={ChangePassword}/>

        <Stack.Screen name="drawer" component={Drawernavigation}/>
        <Stack.Screen name="description" component={Description}/>
        <Stack.Screen name="searchitem" component={Searchitem}/>
        <Stack.Screen name="contentpublish" component={Contentpublish}/>  
        <Stack.Screen name="createairdrop" component={Createairdrop}/>
        <Stack.Screen name="airdropdetail" component={Airdropdetail}/>

        <Stack.Screen name="Metamask" component={Metamask}/>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>


      </Stack.Navigator>
  );
}
