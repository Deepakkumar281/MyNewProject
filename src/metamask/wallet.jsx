import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,ImageBackground,TouchableOpacity,Text
} from 'react-native';
import {
	WalletConnectModal,
	useWalletConnectModal,
} from '@walletconnect/modal-react-native';
import NetInfo from '@react-native-community/netinfo';

const projectId = '8dab931d7b53402d12a91f6f27fd495c';

const providerMetadata = {
	name: 'YOUR_PROJECT_NAME',
	description: 'YOUR_PROJECT_DESCRIPTION',
	url: 'https://your-project-website.com/',
	icons: ['https://your-project-logo.com/'],
	redirect: {
		native: 'YOUR_APP_SCHEME://',
		universal: 'YOUR_APP_UNIVERSAL_LINK.com',
	},
};
const Wallet = ({navigation}) => {
  const { open, isConnected, address, provider } = useWalletConnectModal();
	const handleButtonPress = async () => {
		if (isConnected) {
      navigation.navigate('Login')
			return provider?.disconnect();
		}
		return await open();
	};
  return (
    <View style={styles.container}>
       <ImageBackground
        source={require('../../assets/images/46.png')}
        style={{width: '100%', resizeMode: 'contain', margin: 30,height:'100%'}}
    >
            <View style={{justifyContent:'center',alignContent:'center',marginTop:'10%'}}>
              <Text style={{fontSize:20,color:'black',textAlign:'center'}}>lorem ipsum lorem{'\n'}
              <Text style={{fontSize:20,color:'#ED222E',textAlign:'center',}}> Ipsum</Text></Text>
</View>
      <View style={{justifyContent:'center',alignContent:'center',marginStart:'30%',marginTop:'130%'}}>
      <TouchableOpacity onPress={() =>handleButtonPress()}  style={{
      backgroundColor: 'red',
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 15,width:'60%',height:60
    }}>
    <Text style={{ color: 'white' }}>{address ?'Continue Login':'Connect Wallet'}</Text>
</TouchableOpacity>
<WalletConnectModal
				explorerRecommendedWalletIds={[
					'8dab931d7b53402d12a91f6f27fd495c',
				]}
				projectId={projectId}
				providerMetadata={providerMetadata}
			/>

</View>
      </ImageBackground> 
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});