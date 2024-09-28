// import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import {Commonstyle} from '../common/Commonstyle';
// import {TextInput} from 'react-native-gesture-handler';
// import {deviceHeight, deviceWidth} from '../common/Commondimension';
// import {Commonimage} from '../common/Commonimage';
// import {Commonfont} from '../common/Commonfont';

// const Content = ({navigation}) => {
//   const [active, setActive] = useState(1);

//   return (
//     <View style={{flex: 1, padding: deviceWidth(6)}}>
//       <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 20}}>
//         <View
//           style={{
//             flex: 1,
//             borderWidth: 1,
//             borderColor: 'black',
//             borderRadius: 30,
//             paddingHorizontal: 20,
//             flexDirection: 'row',
//             alignItems: 'center',
//             columnGap: 10,
//           }}>
//           <Image source={require('../../assets/images/Vector8.png')}></Image>
//           <TextInput
//             placeholder="Search news"
//             placeholderTextColor={'#00000033'}></TextInput>
//         </View>
//         <Image source={require('../../assets/images/Group38.png')}></Image>
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-around',
//           marginVertical: deviceWidth(2),
//           paddingVertical: 20,
//         }}>
//         <View
//           style={{
//             borderBottomWidth: active == 1 ? 3 : 1,
//             borderBottomColor: active == 1 ? '#4A90E2' : 'black',
//             paddingBottom: 7,
//           }}>
//           <TouchableOpacity onPress={() => setActive(1)}>
//             <Text style={styles.text}>For You</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             borderBottomWidth: active == 2 ? 3 : 1,
//             borderBottomColor: active == 2 ? '#4A90E2' : 'black',
//             paddingBottom: 7,
//           }}>
//           <TouchableOpacity onPress={() => setActive(2)}>
//             <Text style={styles.text}>Trader</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       {active == 1 && (
//         <View style={{flexDirection: 'row', columnGap: 10}}>
//           <Image source={require('../../assets/images/Ellipse91.png')}></Image>
//           <View style={{flex: 1, rowGap: 10}}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 columnGap: 10,
//               }}>
//               <Text style={{color: 'black', fontSize: deviceHeight(2)}}>
//                 Don Norman
//               </Text>
//               <Text style={{fontSize: deviceHeight(1.2), color: '#5B7083'}}>
//                 @jndler
//               </Text>
//               <Text style={{fontSize: deviceHeight(1.2), color: '#5B7083'}}>
//                 1 min
//               </Text>
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: '#4A90E2',
//                   padding: 3,
//                   borderRadius: 5,
//                 }}>
//                 <Text style={{fontSize: deviceHeight(1.2)}}>Follow</Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={{fontSize: deviceHeight(1.2), color: 'black'}}>
//               Peter Schiff believes that the price of Bitcoin is going to slide
//               to $54,000 in the short term
//             </Text>
//             <Image
//               style={{width: '100%', resizeMode: 'contain'}}
//               source={require('../../assets/images/Maskgroup1.png')}></Image>
//             <View style={{flexDirection: 'row', columnGap: 30}}>
//               <Image
//                 source={require('../../assets/images/Comment1.png')}></Image>
//               <Image
//                 source={require('../../assets/images/Retweet.png')}></Image>
//               <Image source={require('../../assets/images/Heart.png')}></Image>
//               <Image source={require('../../assets/images/Share.png')}></Image>
//             </View>
//           </View>
//         </View>
//       )}
//       {active == 2 && (
//         <View>
//           <View
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexDirection: 'row',
//               columnGap: 10,
//             }}>
//             <Image
//               source={require('../../assets/images/Maskgroup3.png')}></Image>
//             <Image
//               source={require('../../assets/images/Maskgroup3.png')}></Image>
//             <Image
//               source={require('../../assets/images/Maskgroup3.png')}></Image>
//             <Image
//               source={require('../../assets/images/Maskgroup3.png')}></Image>
//             <Image
//               source={require('../../assets/images/Maskgroup3.png')}></Image>
//           </View>
//           <View
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexDirection: 'row',
//               columnGap: 30,
//               paddingTop: 20,
//             }}>
//             <View
//               style={{
//                 alignItems: 'center',
//                 flexDirection: 'row',
//                 columnGap: 10,
//               }}>
//               <Image
//                 source={require('../../assets/images/Ellipse91.png')}></Image>
//               <Text style={{color: 'black', fontSize: deviceHeight(2)}}>
//                 Don Norman
//               </Text>
//             </View>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: '#4A90E2',
//                 paddingHorizontal: 10,
//                 borderRadius: 5,
//                 paddingVertical: 5,
//               }}>
//               <Text style={{fontSize: deviceHeight(1.2)}}>Follow</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//       <TouchableOpacity onPress={()=>navigation.navigate('contentpublish')}
//         style={{
//           position: 'absolute',
//           bottom: 105,
//           right: 50,
//           borderRadius: 20,
//           backgroundColor: '#4A90E2',
//         }}>
//         <Image
//           style={{height: 25, width: 25}}
//           source={require('../../assets/images/+.png')}></Image>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Content;

// const styles = StyleSheet.create({
//   text: {
//     color: 'black',
//     fontSize: deviceHeight(2),
//     fontFamily: Commonfont.robotoblack,
//   },
// });

import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput,ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {deviceHeight, deviceWidth} from '../common/Commondimension';
import {Commonfont} from '../common/Commonfont';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Content = ({navigation}) => {
  const [active, setActive] = useState(1);
  const [traders, setTraders] = useState([]); // Store traders data
  const [loading, setLoading] = useState(true); // Loading state
  const [token, setToken] = useState(''); // JWT token
  const [userType, setUserType] = useState(null);
console.log(userType,token)
  useEffect(() => {
    const getUserType = async () => {
      try {
        const type = await AsyncStorage.getItem('user_type'); // Retrieve the stored user type
        setUserType(type);
      } catch (error) {
        console.error('Failed to retrieve user type:', error);
      }
    };

    getUserType();
  }, []);
  // Fetch JWT token from AsyncStorage (or wherever it is stored)
  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('user_token'); // Get the token
      console.log('Token:', storedToken); // Log the token
      if (storedToken) {
        setToken(storedToken);
      }
    };
    fetchToken();
  }, []);
  

  // Fetch traders data from API
  useEffect(() => {
    const fetchTraders = async () => {
      try {
        const response = await axios.post('https://zacro-backend.onrender.com/v1/user/getTradersList?page=1&limit=10');
        if (response.data.status) {
          setTraders(response.data.data); // Store traders data
        }
      } catch (error) {
        console.error('Error fetching traders:', error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    if (active === 2) {
      fetchTraders();
    }
  }, [active]);

  // Handle follow button press
  const handleFollow = async (userId) => {
    console.log(userId,'jjg')
    if (!token) {
      console.log('JWT token is missing');
      return;
    }
  const formdata =
  {
      userId: userId,
      "type": "follow"
  }
    try {
      const response = await axios.post(
        'https://zacro-backend.onrender.com/v1/user/addFollowers',
        formdata,
        {
          headers: {
            Authorization:token, // Add JWT token in Authorization header
          },
        }
      );
      if (response.data.status) {
        console.log('Followed successfully');
        ToastAndroid.show('Followed successfully', ToastAndroid.SHORT);
      } else {
        console.log('Failed to follow');
      }
    } catch (error) {
      console.error('Error following user:', error);
    }
  };
  

  const renderTrader = ({item}) => (
    <View style={styles.traderContainer}>
      <Text style={styles.traderName}>{item.userName}</Text>
      <TouchableOpacity
        style={styles.followButton}
        onPress={() => handleFollow(item._id)} // Follow trader on button press
      >
        <Text style={{fontSize: deviceHeight(1.2)}}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1, padding: deviceWidth(6)}}>
      {/* Header */}
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 20}}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 30,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 10,
          }}>
          <Image source={require('../../assets/images/Vector8.png')}></Image>
          <TextInput placeholder="Search news" placeholderTextColor={'#00000033'} />
        </View>
        <Image source={require('../../assets/images/Group38.png')}></Image>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActive(1)}>
          <Text style={[styles.text, active === 1 && styles.activeTab]}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive(2)}>
          <Text style={[styles.text, active === 2 && styles.activeTab]}>Trader</Text>
        </TouchableOpacity>
      </View>

      {/* Display content based on active tab */}
      {active == 1 && (
        <View style={{flexDirection: 'row', columnGap: 10}}>
          <Image source={require('../../assets/images/Ellipse91.png')}></Image>
          <View style={{flex: 1, rowGap: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 10,
              }}>
              <Text style={{color: 'black', fontSize: deviceHeight(2)}}>
                Don Norman
              </Text>
              <Text style={{fontSize: deviceHeight(1.2), color: '#5B7083'}}>
                @jndler
              </Text>
              <Text style={{fontSize: deviceHeight(1.2), color: '#5B7083'}}>
                1 min
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#4A90E2',
                  padding: 3,
                  borderRadius: 5,
                }}>
                <Text style={{fontSize: deviceHeight(1.2)}}>Follow</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: deviceHeight(1.2), color: 'black'}}>
              Peter Schiff believes that the price of Bitcoin is going to slide
              to $54,000 in the short term
            </Text>
            <Image
              style={{width: '100%', resizeMode: 'contain'}}
              source={require('../../assets/images/Maskgroup1.png')}></Image>
            <View style={{flexDirection: 'row', columnGap: 30}}>
              <Image
                source={require('../../assets/images/Comment1.png')}></Image>
              <Image
                source={require('../../assets/images/Retweet.png')}></Image>
              <Image source={require('../../assets/images/Heart.png')}></Image>
              <Image source={require('../../assets/images/Share.png')}></Image>
            </View>
          </View>
        </View>
      )}

      {active === 2 && (
        <View>
          {loading ? (
            <Text>Loading traders...</Text>
          ) : (
            <FlatList
              data={traders}
              keyExtractor={(item) => item._id}
              renderItem={renderTrader}
            />
          )}
        </View>
      )}

      {/* Floating action button */}
      {userType === 'trader' ? (
      <TouchableOpacity onPress={() => navigation.navigate('contentpublish')}
        style={styles.fab}>
        <Image style={{height: 25, width: 25}} source={require('../../assets/images/+.png')} />
      </TouchableOpacity>):null}
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: deviceHeight(2),
    fontFamily: Commonfont.robotoblack,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#4A90E2',
    paddingBottom: 7,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: deviceWidth(2),
    paddingVertical: 20,
  },
  traderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  traderName: {
    fontSize: deviceHeight(2),
    color: 'black',
  },
  followButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  fab: {
    position: 'absolute',
    bottom: 105,
    right: 50,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    padding: 10,
  },
});
