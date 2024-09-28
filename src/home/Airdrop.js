import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Commonstyle } from '../common/Commonstyle';
import { Commonfont } from '../common/Commonfont';
import { deviceHeight, deviceWidth } from '../common/Commondimension';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For retrieving the token

const Airdrop = ({ navigation }) => {
  const [active, setActive] = useState(1);  // 1 for Airdrop, 2 for Presale
  const [active1, setActive1] = useState(1);  // Airdrop filter: 1 for latest, 2 for hottest, 3 for potential
  const [activePresale, setActivePresale] = useState(1); // Presale filter: 1 for latest, 2 for hottest, 3 for potential
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAirdrops = async (filter) => {
    setLoading(true);
    const token = await AsyncStorage.getItem('user_token');
    try {
      const response = await fetch(`https://zacro-backend.onrender.com/v1/user/getAirdrop?page=1&limit=10&filter=${filter}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      if (json.status) {
        setData(json.data);
      } else {
        console.log('Failed to fetch airdrop data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchPresales = async (filter) => {
    const token = await AsyncStorage.getItem('user_token');

    setLoading(true);
    try {
      const response = await fetch(`https://zacro-backend.onrender.com/v1/user/getPresale?page=1&limit=10&filter=${filter}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      if (json.status) {
        setData(json.data); 
      } else {
        console.log('Failed to fetch presale data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (active === 1) {
      const filter = active1 === 1 ? 'latest' : active1 === 2 ? 'hottest' : 'potential';
      fetchAirdrops(filter);
    } else {
      const filter = activePresale === 1 ? 'All' : activePresale === 2 ? 'End' : 'Upcoming';
      fetchPresales(filter);
    }
  }, [active, active1, activePresale]); 

  if (loading) {
    return (
      <View style={[Commonstyle.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={Commonstyle.container}>
      <View>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: '#4A90E2',
            borderWidth: 1,
            borderRadius: 30,
          }}>
          <TouchableOpacity onPress={() => setActive(1)} style={{ alignItems: 'center' }}>
            {active === 1 ? (
              <LinearGradient
                style={{ borderRadius: 30 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#00A3FF', '#0065C2']}>
                <Text
                  style={{
                    padding: 15,
                    fontFamily: Commonfont.robotobold,
                    color: 'white',
                    paddingHorizontal: 20,
                  }}>
                  CRYPTO AIRDROP
                </Text>
              </LinearGradient>
            ) : (
              <Text
                style={{
                  color: 'black',
                  padding: 15,
                  fontFamily: Commonfont.robotobold,
                  paddingHorizontal: 20,
                }}>
                CRYPTO AIRDROP
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActive(2)}>
            {active === 2 ? (
              <LinearGradient
                style={{ borderRadius: 30 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#00A3FF', '#0065C2']}>
                <Text style={{ padding: 15, fontFamily: Commonfont.robotobold, paddingHorizontal: 20 }}>
                  PRE SALE
                </Text>
              </LinearGradient>
            ) : (
              <Text
                style={{
                  color: 'black',
                  padding: 15,
                  fontFamily: Commonfont.robotobold,
                  paddingHorizontal: 20,
                }}>
                PRE SALE
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Airdrop Filters */}
        {active === 1 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <TouchableOpacity onPress={() => setActive1(1)}>
              {active1 === 1 ? (
                <Text
                  style={{
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    color: 'black',
                    borderWidth: 2,
                    borderColor: '#4A90E2',
                    borderRadius: 20,
                    fontSize: deviceHeight(1.3),
                  }}>
                  LATEST AIRDROPS
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    fontSize: deviceHeight(1.3),
                  }}>
                  LATEST AIRDROPS
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive1(2)}>
              {active1 === 2 ? (
                <Text
                  style={{
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    color: 'black',
                    borderWidth: 2,
                    borderColor: '#4A90E2',
                    borderRadius: 20,
                    fontSize: deviceHeight(1.3),
                  }}>
                  HOTTEST AIRDROPS
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    fontSize: deviceHeight(1.3),
                  }}>
                  HOTTEST AIRDROPS
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive1(3)}>
              {active1 === 3 ? (
                <Text
                  style={{
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    color: 'black',
                    borderWidth: 2,
                    borderColor: '#4A90E2',
                    borderRadius: 20,
                    fontSize: deviceHeight(1.3),
                  }}>
                  POTENTIAL AIRDROPS
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    fontSize: deviceHeight(1.3),
                  }}>
                  POTENTIAL AIRDROPS
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* Presale Filters */}
        {active === 2 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <TouchableOpacity onPress={() => setActivePresale(1)}>
              {activePresale === 1 ? (
                <Text
                  style={{
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    color: 'black',
                    borderWidth: 2,
                    borderColor: '#4A90E2',
                    borderRadius: 20,
                    fontSize: deviceHeight(1.3),
                  }}>
                  All
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    fontSize: deviceHeight(1.3),
                  }}>
                  All
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActivePresale(2)}>
              {activePresale === 2 ? (
                <Text
                  style={{
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    color: 'black',
                    borderWidth: 2,
                    borderColor: '#4A90E2',
                    borderRadius: 20,
                    fontSize: deviceHeight(1.3),
                  }}>
                  End
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    fontSize: deviceHeight(1.3),
                  }}>
                 End
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActivePresale(3)}>
              {activePresale === 3 ? (
                <Text
                  style={{
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    color: 'black',
                    borderWidth: 2,
                    borderColor: '#4A90E2',
                    borderRadius: 20,
                    fontSize: deviceHeight(1.3),
                  }}>
                 Upcoming
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    fontFamily: Commonfont.robotobold,
                    fontSize: deviceHeight(1.3),
                  }}>
                 Upcoming
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
        
      </View>
      
        <ScrollView>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TouchableOpacity
               onPress={() => navigation.navigate('airdropdetail', { 
                id: item.id, 
                type: active === 1 ? 'airdrop' : 'presale',  
                data: item
              })}
              style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View>
                <Text style={{ color: 'black', fontSize: deviceHeight(1.7), fontFamily: Commonfont.robotobold }}>
                  {item.name}
                </Text>
                <Text style={{ color: '#00000082', fontSize: deviceHeight(1.3), fontFamily: Commonfont.robotobold }}>
                  {item.platform}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Image source={require('../../assets/images/Vector15.png')} />
            </TouchableOpacity>
          </View>
        ))}
        
      </ScrollView>

      
      <View
        style={{
          backgroundColor: '#B1D3FF',
          height: deviceHeight(20),
          position: 'absolute',
          flex: 1,
          width: deviceWidth(100),
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('createairdrop')} style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10, backgroundColor: 'white', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: 'black' }}>
          <Text style={{ color: 'black', fontFamily: Commonfont.robotobold, fontSize: deviceHeight(1.5) }}>
            CREATE YOUR OWN AIRDROP
          </Text>
          <Image source={require('../../assets/images/Arrow5.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: deviceWidth(10),
    height: deviceWidth(10),
    borderRadius: 10,
  },
  presaleCard: {
    backgroundColor: '#f0f4ff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  projectImage: {
    width: deviceWidth(10),
    height: deviceWidth(10),
    borderRadius: 10,
  },
  projectTitle: {
    fontSize: deviceHeight(2),
    fontFamily: Commonfont.robotobold,
    color: '#000',
  },
  projectInfo: {
    fontSize: deviceHeight(1.3),
    color: '#6c757d',
    marginTop: 5,
  },
  blockchainIcon: {
    width: 25,
    height: 25,
    marginLeft: 'auto',
  },
  progressBarContainer: {
    marginVertical: 10,
  },
  progressText: {
    fontSize: deviceHeight(1.5),
    fontFamily: Commonfont.robotobold,
    color: '#000',
    marginBottom: 5,
  },
  progressBar: {
    backgroundColor: '#e0e0e0',
    height: 10,
    borderRadius: 5,
  },
  progressFill: {
    backgroundColor: '#00A3FF',
    height: '100%',
    borderRadius: 5,
  },
  projectDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  detailText: {
    fontSize: deviceHeight(1.3),
    color: '#6c757d',
  },
  participateButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  participateText: {
    color: '#fff',
    fontSize: deviceHeight(1.5),
    fontFamily: Commonfont.robotobold,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  socialIcon: {
    width: 25,
    height: 25,
  },
});

export default Airdrop;
