// import {
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   View,
//   ActivityIndicator,FlatList
// } from 'react-native';
// import React, {useState,useEffect} from 'react';
// import {Commonstyle} from '../common/Commonstyle';
// import {Commonfont} from '../common/Commonfont';
// import {deviceHeight, deviceWidth} from '../common/Commondimension';
// import {Commonimage} from '../common/Commonimage';
// import Carousel from 'react-native-reanimated-carousel';

// const Home = ({navigation}) => {
//   const [active, setActive] = useState(0);
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const width = Dimensions.get('window').width;
//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch('https://zacro-backend.onrender.com/v1/user/feed', {  // Replace with your actual API URL
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             page: 1,
//             limit: 10,
//           }),
//         });

//         const json = await response.json();
//         if (json.status) {
//           setArticles(json.data); // Assuming "data" is the key for the articles array
//         } else {
//           console.error('Failed to fetch data:', json.message);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);


//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <View style={Commonstyle.container}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}>
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <Image source={require('../../assets/images/Group37016.png')}></Image>
//         </TouchableOpacity>
//         <Text style={styles.header}>Daily News</Text>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
//           {/* <Image style={{width:deviceWidth(10),height:deviceHeight(10)}} source={require('../../assets/images/pack.gif')}></Image> */}
//           <Image source={require('../../assets/images/Group38.png')}></Image>
//           <Image source={require('../../assets/images/Ellipse132.png')}></Image>
//           <Image source={require('../../assets/images/Group38.png')}></Image>
//         </View>
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           marginVertical: deviceWidth(2),
//         }}>
//         <View>
//           <TouchableOpacity onPress={() => setActive(0)}>
//             <Image source={Commonimage.badge}></Image>
//           </TouchableOpacity>
//           <View
//             style={{
//               borderBottomWidth: active == 0 ? 3 : 1,
//               borderBottomColor: active == 0 ? '#FF8FAF' : 'black',
//               paddingBottom: 12,
//             }}></View>
//         </View>
//         <View
//           style={{
//             borderBottomWidth: active == 1 ? 3 : 1,
//             borderBottomColor: active == 1 ? '#FF8FAF' : 'black',
//             paddingBottom: 7,
//           }}>
//           <TouchableOpacity onPress={() => setActive(1)}>
//             <Text style={styles.text}>My Feed</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             borderBottomWidth: active == 2 ? 3 : 1,
//             borderBottomColor: active == 2 ? '#FF8FAF' : 'black',
//             paddingBottom: 7,
//           }}>
//           <TouchableOpacity onPress={() => setActive(2)}>
//             <Text style={styles.text}>Latest News</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             borderBottomWidth: active == 3 ? 3 : 1,
//             borderBottomColor: active == 3 ? '#FF8FAF' : 'black',
//             paddingBottom: 7,
//           }}>
//           <TouchableOpacity onPress={() => setActive(3)}>
//             <Text style={styles.text}>Trader</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             borderBottomWidth: active == 4 ? 3 : 1,
//             borderBottomColor: active == 4 ? '#FF8FAF' : 'black',
//             paddingBottom: 7,
//           }}>
//           <TouchableOpacity onPress={() => setActive(4)}>
//             <Text style={styles.text}>Top News</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View>
//         {/* <Image
//           style={{width: '100%', resizeMode: 'contain'}}
//           source={require('../../assets/images/Maskgroup1.png')}></Image> */}
//         {/* <Carousel
//           loop
//           width={width}
//           height={width / 2}
//           autoPlay={true}
//           data={[...new Array(6).keys()]}
//           scrollAnimationDuration={1000}
//           // onSnapToItem={index => console.log('current index:', index)}
//           renderItem={({index}) => (
//             <View
//               style={{
//                 flex: 1,
//                 borderWidth: 1,
//                 justifyContent: 'center',
//               }}>
//               <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
//               <Image
//           style={{width: '100%', resizeMode: 'contain'}}
//           source={require('../../assets/images/Rectangle324.png')}></Image>
//             </View>
//           )}
//         /> */}
//       </View>
//       {/* <TouchableOpacity
//         onPress={() => navigation.navigate('description')}
//         style={{flexDirection: 'row', columnGap: 10, alignItems: 'center'}}>
//         <View style={{flex: 1, marginTop: 60}}>
//           <Text
//             style={{
//               color: 'black',
//               textAlign: 'justify',
//               fontFamily: Commonfont.times,
//             }}>
//             Cryptocurrency values surged above $60,000, reaching its highest
//             point since2021.
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}>
//             <Text style={{color: 'black', fontSize: deviceHeight(1.5)}}>
//               loremipsum.net
//             </Text>
//             <Text style={{color: 'black', fontSize: deviceHeight(1.5)}}>
//               27 min
//             </Text>
//             <Image
//               style={{width: deviceWidth(1.5), height: deviceHeight(1.5)}}
//               source={require('../../assets/images/Vector.png')}></Image>
//             <Image source={require('../../assets/images/Vector1.png')}></Image>
//             <Image source={require('../../assets/images/Vector2.png')}></Image>
//           </View>
//         </View>
//         <Image
//           style={{borderRadius: 10, width: 150, height: 70, marginTop: 20}}
//           source={require('../../assets/images/image34.png')}></Image>
//       </TouchableOpacity> */}
//       <FlatList
//         data={articles}
//         keyExtractor={item => item._id}
//         renderItem={({item}) => (
//           <TouchableOpacity onPress={() => navigation.navigate('description', {article: item})}>
//             <View style={{marginBottom: 20}}>
//               <Image source={{uri: item.image}} style={{width: '100%', height: 200, borderRadius: 10}} />
//               <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10,color: 'black'}}>{item.title}</Text>
//               <Text style={{fontSize: 14, color: 'black', marginTop: 5}}>{item.pubDate}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//       <View
//         style={{
//           borderBottomWidth: 1,
//           borderBottomColor: 'black',
//           paddingTop: 10,
//         }}></View>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   header: {
//     color: 'black',
//     fontFamily: Commonfont.robotobold,
//     fontSize: deviceHeight(3),
//   },
//   text: {
//     color: 'black',
//     fontSize: deviceHeight(2),
//     fontFamily: Commonfont.robotoblack,
//   },
// });
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ActivityIndicator,
  FlatList,
  Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Commonstyle } from '../common/Commonstyle';
import { Commonfont } from '../common/Commonfont';
import { deviceHeight, deviceWidth } from '../common/Commondimension';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(''); 
  const width = Dimensions.get('window').width;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem('user_token');
        const email = await AsyncStorage.getItem('user_id');
        if (!token || !email) {
          console.error('No token or email found');
          return;
        }

        let url = '';
        let body = {};

        if (active === 0) { 
          url = 'http://192.168.243.101:8000/v1/user/feed';
          body = {
            page: 1,
            limit: 10,
          };
        } else if (active === 4) { // New tab for saved news
          url = 'http://192.168.243.101:8000/v1/user/getSavedNews';
          body = {
            email:"UTm7dyzevRvUqLw/a2e8E5X/MPPRt2rLKmypBLqommU="
     }
        } else {
          url = 'http://192.168.243.101:8000/v1/user/categoryNews';
          body = {
            page: 1,
            limit: 10,
            category: category || 'crypto',
          };
        }

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });

        const json = await response.json();
        if (json.status) {
          setArticles(json.data); 
        } else {
          console.error('Failed to fetch data:', json.message);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [active, category]);

  const onSavePress = async (newsId) => {
    try {
      const email = await AsyncStorage.getItem('user_id');
      const token = await AsyncStorage.getItem('user_token');
      if (!email) {
        Alert.alert('Error', 'User email not found. Please log in.');
        return;
      }

      const response = await fetch('http://192.168.243.101:8000/v1/user/feedsave', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          newsId: newsId,
          email: email
        })
      });

      const json = await response.json();
      if (json.status) {
        Alert.alert('Success', 'Article saved successfully.');
      } else {
        Alert.alert('Error', json.message || 'Failed to save article.');
      }
    } catch (error) {
      console.error('Error saving article:', error);
      Alert.alert('Error', 'An error occurred while saving the article.');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ justifyContent: 'center', alignItems: 'center', marginTop: '50%' }} />;
  }

  return (
    <View style={Commonstyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../../assets/images/Group37016.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.header}>Daily News</Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
          <Image source={require('../../assets/images/Group38.png')}></Image>
          <Image source={require('../../assets/images/Ellipse132.png')}></Image>
          <Image source={require('../../assets/images/Group38.png')}></Image>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: deviceWidth(2),
        }}>
        {['My Feed', 'Latest News', 'Trader', 'Top News', 'Saved News'].map((tab, index) => ( // Add 'Saved News' tab
          <View
            key={index}
            style={{
              borderBottomWidth: active === index ? 3 : 1,
              borderBottomColor: active === index ? '#FF8FAF' : 'black',
              paddingBottom: 7,
            }}>
            <TouchableOpacity onPress={() => {
              setActive(index);
              if (index === 0) {
                setCategory(''); 
              } else if (index === 1) {
                setCategory('latest'); 
              } else if (index === 2) {
                setCategory('trader'); 
              } else if (index === 3) {
                setCategory('top'); 
              } else if (index === 4) {
                setCategory('saved'); // For Saved News
              }
            }}>
              <Text style={styles.text}>{tab}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <FlatList
        data={articles}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('description', { article: item })}>
            <View style={{ marginBottom: 20 }}>
              <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, color: 'black' }}>{item.title}</Text>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>{formatDate(item.pubDate)}</Text>
                <TouchableOpacity onPress={() => onSavePress(item._id)}>
                  <Image
                    style={{ backgroundColor: 'grey', height: 20, width: 20 }}
                    source={require('../../assets/images/Vector.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', paddingTop: 10 }}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontFamily: Commonfont.robotobold,
    fontSize: deviceHeight(3),
  },
  text: {
    color: 'black',
    fontSize: deviceHeight(2),
    fontFamily: Commonfont.robotoblack,
  },
});
