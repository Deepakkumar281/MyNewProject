import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  BackHandler,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Commonstyle } from '../common/Commonstyle';
import LinearGradient from 'react-native-linear-gradient';
import { Commonfont } from '../common/Commonfont';
import { deviceHeight, deviceWidth } from '../common/Commondimension';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For retrieving the token

const Airdropdetail = ({ navigation, route }) => {
  const { id, type, data } = route.params; 
  const [active, setActive] = useState(1);
  const [detailData, setDetailData] = useState(data); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  if (loading) {
    return <ActivityIndicator style={styles.loader} />;
  }

  return (
    <View style={Commonstyle.container}>
      {detailData && (
        <View style={styles.container}>
          {/* <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => setActive(1)} style={styles.tabButton}>
              {active === 1 ? (
                <LinearGradient
                  style={styles.tabActive}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#00A3FF', '#0065C2']}
                >
                  <Text style={styles.tabText}>
                    {type === 'airdrop' ? 'CRYPTO AIRDROP' : 'PRESALE'}
                  </Text>
                </LinearGradient>
              ) : (
                <Text style={styles.tabTextInactive}>
                  {type === 'airdrop' ? 'CRYPTO AIRDROP' : 'PRESALE'}
                </Text>
              )}
            </TouchableOpacity>
          </View> */}

          {/* Detail View */}
          <View style={styles.detailContainer}>
            <Image
              style={styles.image}
              source={{ uri: detailData.image }}
            />
            <Text style={styles.name}>
              {detailData.name}
            </Text>

            {/* Display content or show placeholder if content is empty */}
            <ScrollView style={styles.descriptionContainer}>
              <Text style={{color:'black',fontSize:24,fontWeight:'bold'}}> Description</Text>
              <Text style={{color:'black',fontSize:18}}>
                {detailData.content ? detailData.content.replace(/<[^>]+>/g, '') : 'No content available.'}
              </Text>
            </ScrollView>

            <View style={styles.linksContainer}>
              {/* External Links */}
              {detailData.facebook && (
                <TouchableOpacity onPress={() => Linking.openURL(detailData.facebook)}>
                  <Text style={{ color: '#4267B2', padding: 5 }}>Facebook</Text>
                </TouchableOpacity>
              )}
              {detailData.telegram && (
                <TouchableOpacity onPress={() => Linking.openURL(detailData.telegram)}>
                  <Text style={{ color: '#0088cc', padding: 5 }}>Telegram</Text>
                </TouchableOpacity>
              )}
              {detailData.discord && (
                <TouchableOpacity onPress={() => Linking.openURL(detailData.discord)}>
                  <Text style={{ color: '#7289DA', padding: 5 }}>Discord</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  {type === 'airdrop' ? 'CLAIM AIRDROP' : 'BUY PRESALE'}
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      )}
    </View>
  );
};

export default Airdropdetail;

const styles = StyleSheet.create({
  loader: {
    marginTop: '50%',
  },
  container: {
    padding: 10,
  },
  tabContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#4A90E2',
    borderWidth: 1,
    borderRadius: 30,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabActive: {
    borderRadius: 30,
  },
  tabText: {
    padding: 15,
    fontFamily: Commonfont.robotobold,
    color: 'white',
    paddingHorizontal: 20,
  },
  tabTextInactive: {
    color: 'black',
    padding: 15,
    fontFamily: Commonfont.robotobold,
    paddingHorizontal: 20,
  },
  detailContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: deviceWidth(20),
    height: deviceHeight(10),
  },
  name: {
    color: 'black',
    fontFamily: Commonfont.robotobold,
    paddingTop: 10,
  },
  descriptionContainer: {
    paddingTop: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#DFEBFF',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  buttonText: {
    color: 'black',
    fontFamily: Commonfont.robotobold,
  },
});
