// import {StyleSheet, Image, View, Text} from 'react-native';
// import React from 'react';
// import {Commonstyle} from '../common/Commonstyle';
// import {Commonfont} from '../common/Commonfont';
// import {deviceHeight} from '../common/Commondimension';

// const IRL = () => {
//   return (
//     <View style={Commonstyle.container}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}>
//         <Image source={require('../../assets/images/Arrow1.png')}></Image>
//         <Text style={{color: 'black'}}>IRL events</Text>
//         <View></View>
//       </View>
//       <View style={{padding: 15, paddingTop: 20, rowGap: 10}}>
//         <Image source={require('../../assets/images/irl.png')}></Image>
//         <Text style={{color: 'black', fontFamily: Commonfont.robotomedium}}>
//           Wednesday, 29 November
//         </Text>
//         <Text
//           style={{
//             color: 'black',
//             fontFamily: Commonfont.robotoblack,
//             fontSize: deviceHeight(3),
//           }}>
//           IRL 2024
//         </Text>
//         <Text style={{color: 'black', fontSize: deviceHeight(1.5)}}>
//           Join us for our third IRL! A festive industry get together, with this
//           year's 30 under 30 to be announced too.
//         </Text>
//         <View></View>
//       </View>
//     </View>
//   );
// };

// export default IRL;

// const styles = StyleSheet.create({});
import {StyleSheet, Image, View, Text, ScrollView, ActivityIndicator, Linking,BackHandler, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Commonstyle } from '../common/Commonstyle';
import { Commonfont } from '../common/Commonfont';
import { deviceHeight } from '../common/Commondimension';

const IRL = ({navigation}) => {
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
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEventData = async () => {
      try {
        // Retrieve the token from AsyncStorage
        const token = await AsyncStorage.getItem('user_token');
        
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await fetch('https://zacro-backend.onrender.com/v1/user/getIRL', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,  // Use the token from AsyncStorage
            'Content-Type': 'application/json',
          },
        });

        const json = await response.json();
        if (json.status) {
          setEventData(json.data[0]);  // Assuming only one event is returned, adjust if necessary
        } else {
          console.log('Failed to fetch event data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getEventData();
  }, []);

  if (loading) {
    return (
      <View style={[Commonstyle.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!eventData) {
    return (
      <View style={[Commonstyle.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: 'black' }}>No event data available</Text>
      </View>
    );
  }

  return (
    <ScrollView style={Commonstyle.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image source={require('../../assets/images/Arrow1.png')} />
        </TouchableOpacity>
        <Text style={{ color: 'black', fontFamily: Commonfont.robotomedium }}>IRL Events</Text>
        <View />
      </View>

      <View style={{ padding: 15, paddingTop: 20, rowGap: 10 }}>
        <Image source={{ uri: eventData.image }} style={styles.image} />
        <Text style={{ color: 'black', fontFamily: Commonfont.robotomedium }}>
          {new Date(eventData.startTime).toLocaleDateString()} - {new Date(eventData.endTime).toLocaleDateString()}
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: Commonfont.robotoblack,
            fontSize: deviceHeight(3),
          }}>
          {eventData.heading}
        </Text>
        <Text style={{ color: 'black', fontSize: deviceHeight(1.5) }}>
          {eventData.event.replace(/<\/?[^>]+(>|$)/g, '')}  {/* Strips HTML tags */}
        </Text>
        <Text style={{ color: 'blue', fontSize: deviceHeight(1.7), marginTop: 10 }}
              onPress={() => Linking.openURL(eventData.ticketLink)}>
          Get Tickets
        </Text>
      </View>
    </ScrollView>
  );
};

export default IRL;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: deviceHeight(30),
    borderRadius: 10,
  },
});
