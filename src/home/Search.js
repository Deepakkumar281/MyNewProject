// import {StyleSheet, Text, View, TextInput,Image} from 'react-native';
// import React from 'react';
// import {Commonstyle} from '../common/Commonstyle';
// import { Commonfont } from '../common/Commonfont';

// const Search = ({navigation}) => {
//   return (
//     <View style={Commonstyle.container}>
//       <View style={{borderWidth: 1, borderColor: 'black', borderRadius: 30,paddingHorizontal:20,flexDirection:'row',alignItems:'center',columnGap:10}}>
//         <Image source={require('../../assets/images/Vector8.png')}></Image>
//         <TextInput placeholder="Search news" placeholderTextColor={'#00000033'}></TextInput>
//       </View>
//       <Text onPress={()=>navigation.navigate('searchitem')} style={{color:'black',fontFamily:Commonfont.robotobold,paddingVertical:20}}>Categories</Text>
//     </View>
//   );
// };

// export default Search;

// const styles = StyleSheet.create({});
import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Commonstyle } from '../common/Commonstyle';
import { Commonfont } from '../common/Commonfont';
import { deviceHeight, deviceWidth } from '../common/Commondimension';

const Search = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch('https://zacro-backend.onrender.com/v1/user/getCategory'); 
        const json = await response.json();
        if (json.status) {
          setCategories(json.data);
        } else {
          console.log('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('searchitem')}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 15 }}>
        <Text style={styles.categoryText}>{item.category}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={Commonstyle.container}>
      <View style={styles.searchBar}>
        <Image source={require('../../assets/images/Vector8.png')} />
        <TextInput
          placeholder="Search news"
          placeholderTextColor={'#00000033'}
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.categoryTitle}>Categories</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item._id}
          numColumns={2}  // Display two items per row
          columnWrapperStyle={styles.row}  // Ensures correct spacing between items in the row
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  categoryTitle: {
    color: 'black',
    fontFamily: Commonfont.robotobold,
    paddingVertical: 20,
    fontSize: 20,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',  // Ensures even spacing between items
    marginBottom: deviceHeight(3),
  },
  card: {
    width: deviceWidth(43),  // Ensures two cards fit within the row with some padding
    marginBottom: 10,
  },
  imageBackground: {
    width: '100%',
    height: deviceHeight(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Add a slight background to make the text more readable
    padding: 10,
    borderRadius: 10,
  },
});
