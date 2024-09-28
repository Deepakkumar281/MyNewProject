// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ImageBackground,
//   Modal,
//   TouchableOpacity,
//   ScrollView,
//   Alert,BackHandler
// } from 'react-native';
// import React, {useState,useEffect} from 'react';
// import {Commonstyle} from '../common/Commonstyle';
// import {deviceHeight, deviceWidth} from '../common/Commondimension';
// import {Commonfont} from '../common/Commonfont';

// const Description = ({navigation}) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const Back =()=>{
//     navigation.goBack()
//   }
//   useEffect(() => {
//     const backAction = () => {
//       navigation.goBack()
//         return true;
//     };
//     const backHandler = BackHandler.addEventListener(
//         'hardwareBackPress',
//         backAction,
//     );
//     return () => backHandler.remove();
//   }, [navigation]);
//   return (
//     <ImageBackground
//       source={require('../../assets/images/News.png')}
//       style={{flex: 1, padding: deviceWidth(5)}}>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', columnGap: 15}}>
//           <View
//             style={{
//               padding: 5,
//               borderWidth: 1,
//               borderColor: '#8AA6D3',
//               borderRadius: 5,
//             }}>
//               <TouchableOpacity onPress={()=>navigation.goBack()}>
//             <Image source={require('../../assets/images/Arrow4.png')}></Image>
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               columnGap: 5,
//             }}>
//             <Image source={require('../../assets/images/Vector3.png')}></Image>
//             <Text style={{color: 'black', fontSize: deviceHeight(1.5)}}>
//               00:58
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', columnGap: 15}}>
//           <View
//             style={{
//               padding: 5,
//               borderWidth: 1,
//               borderColor: '#8AA6D3',
//               borderRadius: 5,
//             }}>
//             <Image source={require('../../assets/images/Vector4.png')}></Image>
//           </View>
//           <TouchableOpacity
//             onPress={() => setModalVisible(!modalVisible)}
//             style={{alignItems: 'center', columnGap: 5}}>
//             <Image source={require('../../assets/images/Vector5.png')}></Image>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={{padding: deviceWidth(10)}}>
//         <View>
//           <Image source={require('../../assets/images/comma.png')}></Image>
//         </View>
//         <View>
//           <Text
//             style={{
//               fontSize: deviceHeight(3.5),
//               fontFamily: Commonfont.magrabold,
//               textAlign: 'center',
//             }}>
//             Wall Street Asks
//           </Text>
//           <Text
//             style={{
//               fontSize: deviceHeight(3.5),
//               fontFamily: Commonfont.magrabold,
//               textAlign: 'center',
//             }}>
//             Biden Not to Vote
//           </Text>
//           <Text
//             style={{
//               fontSize: deviceHeight(3.5),
//               fontFamily: Commonfont.magrabold,
//               textAlign: 'center',
//             }}>
//             Congress
//           </Text>
//         </View>
//         <View style={{flex: 1, alignItems: 'flex-end'}}>
//           <Image source={require('../../assets/images/comma1.png')}></Image>
//         </View>
//       </View>
//       <ScrollView
//         style={{
//           backgroundColor: 'white',
//           flex: 1,
//           borderTopLeftRadius: 30,
//           borderTopRightRadius: 30,
//           marginHorizontal: -deviceWidth(5),
//           marginBottom: -deviceWidth(5),
//           marginTop: 20,
//           padding: deviceHeight(5),
//         }}>
//         <View style={{flexDirection: 'row', columnGap: 10}}>
//           <Text
//             style={{
//               fontSize: deviceHeight(1.5),
//               fontFamily: Commonfont.magrabold,
//               color: '#00000080',
//             }}>
//             16 December
//           </Text>
//           <View style={{borderEndWidth: 1, borderEndColor: '#00000080'}}></View>
//           <Text
//             style={{
//               fontSize: deviceHeight(1.5),
//               fontFamily: Commonfont.magrabold,
//               color: '#00000080',
//             }}>
//             2 min read
//           </Text>
//         </View>
//         <Text
//           style={{
//             color: 'black',
//             fontSize: deviceHeight(3),
//             fontFamily: Commonfont.timesbold,
//           }}>
//           Lorem Ipsum is simply dummy text
//         </Text>
//         <Text
//           style={{
//             color: 'black',
//             fontSize: deviceHeight(2),
//             fontFamily: Commonfont.times,
//           }}>
//           LONDON — Cryptocurrencies “have no intrinsic value” and people who
//           invest in them should be prepared to lose all their money, Bank of
//           England Governor Andrew Bailey said. Digital currencies like bitcoin,
//           ether and even dogecoin have been on a tear this year, reminding some
//           investors of the 2017 crypto bubble in which bitcoin blasted toward
//           $20,000, only to sink as low as $3,122 a year later. Asked at a press
//           conference Thursday about the rising value of cryptocurrencies, Bailey
//           said: “They have no intrinsic value. That doesn’t mean to say people
//           don’t put value on them, because they can have extrinsic value. But
//           they have no intrinsic value.” “I’m going to say this very bluntly
//           again,” he added. “Buy them only if you’re prepared to lose all your
//           money.” Bailey’s comments echoed a similar warning from the U.K.’s
//           Financial Conduct Authority. “Investing in cryptoassets, or
//           investments and lending linked to them, generally involves taking very
//           high risks with investors’ money,” the financial services watchdog
//           said in January. “If consumers invest in these types of product, they
//           should be prepared to lose all their money.” Bailey, who was formerly
//           the chief executive of the FCA, has long been a skeptic of crypto. In
//           2017, he warned: “If you want to invest in bitcoin, be prepared to
//           lose all your money.”
//         </Text>
//       </ScrollView>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>

//               <TouchableOpacity
//                 style={{flexDirection:'row',alignItems:'center',columnGap:10}}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                     <Image source={require('../../assets/images/Vector2.png')}></Image>
//                 <Text style={{color:'black',fontSize:deviceHeight(2)}}>Share</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{flexDirection:'row',alignItems:'center',columnGap:10}}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                     <Image source={require('../../assets/images/Vector.png')}></Image>
//                 <Text style={{color:'black',fontSize:deviceHeight(2)}}>Save story</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{flexDirection:'row',alignItems:'center',columnGap:10}}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                     <Image source={require('../../assets/images/Group51.png')}></Image>
//                 <Text style={{color:'black',fontSize:deviceHeight(2)}}>Browse</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{flexDirection:'row',alignItems:'center',columnGap:10}}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                     <Image source={require('../../assets/images/Vector7.png')}></Image>
//                 <Text style={{color:'black',fontSize:deviceHeight(2)}}>Block</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{flexDirection:'row',alignItems:'center',columnGap:10}}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                     <Image source={require('../../assets/images/Vector6.png')}></Image>
//                 <Text style={{color:'black',fontSize:deviceHeight(2)}}>Report</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//       </Modal>
//     </ImageBackground>
//   );
// };

// export default Description;

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: '#000000B2',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     width: deviceWidth(90),
//     rowGap:10
//   },
// });
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
  BackHandler
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Commonstyle } from '../common/Commonstyle';
import { deviceHeight, deviceWidth } from '../common/Commondimension';
import { Commonfont } from '../common/Commonfont';

const Description = ({ navigation, route }) => {
  const { article } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const Back = () => {
    navigation.goBack();
  };

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

  return (
    <ImageBackground
      source={require('../../assets/images/News.png')}
      style={{ flex: 1, padding: deviceWidth(5) }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 15 }}>
          <View style={{ padding: 5, borderWidth: 1, borderColor: '#8AA6D3', borderRadius: 5 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/images/Arrow4.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
            <Image source={require('../../assets/images/Vector3.png')} />
            <Text style={{ color: 'black', fontSize: deviceHeight(1.5) }}>
              00:58
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 15 }}>
          <View style={{ padding: 5, borderWidth: 1, borderColor: '#8AA6D3', borderRadius: 5 }}>
            <Image source={require('../../assets/images/Vector4.png')} />
          </View>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ alignItems: 'center', columnGap: 5 }}>
            <Image source={require('../../assets/images/Vector5.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: deviceWidth(10) }}>
        <View>
          <Image source={require('../../assets/images/comma.png')} />
        </View>
        <View>
          <Text style={{ fontSize: deviceHeight(3.5), fontFamily: Commonfont.magrabold, textAlign: 'center' }}>
            {article.title}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Image source={require('../../assets/images/comma1.png')} />
        </View>
      </View>

      <ScrollView
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginHorizontal: -deviceWidth(5),
          marginBottom: -deviceWidth(5),
          marginTop: 20,
          padding: deviceHeight(5),
        }}
      >
        <View style={{ flexDirection: 'row', columnGap: 10 }}>
          <Text style={{ fontSize: deviceHeight(1.5), fontFamily: Commonfont.magrabold, color: '#00000080' }}>
            {article.date}
          </Text>
          <View style={{ borderEndWidth: 1, borderEndColor: '#00000080' }}></View>
          <Text style={{ fontSize: deviceHeight(1.5), fontFamily: Commonfont.magrabold, color: '#00000080' }}>
            {article.readTime} min read
          </Text>
        </View>
        <Text style={{ color: 'black', fontSize: deviceHeight(3), fontFamily: Commonfont.timesbold }}>
          {article.title}
        </Text>
        <Text style={{ color: 'black', fontSize: deviceHeight(2), fontFamily: Commonfont.times }}>
          {article.content}
        </Text>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }} onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/images/Vector2.png')} />
              <Text style={{ color: 'black', fontSize: deviceHeight(2) }}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }} onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/images/Vector.png')} />
              <Text style={{ color: 'black', fontSize: deviceHeight(2) }}>Save story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }} onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/images/Group51.png')} />
              <Text style={{ color: 'black', fontSize: deviceHeight(2) }}>Browse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }} onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/images/Vector7.png')} />
              <Text style={{ color: 'black', fontSize: deviceHeight(2) }}>Block</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }} onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/images/Vector6.png')} />
              <Text style={{ color: 'black', fontSize: deviceHeight(2) }}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default Description;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000B2',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: deviceWidth(90),
    rowGap: 10,
  },
});
