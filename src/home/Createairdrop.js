import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { deviceHeight, deviceWidth } from '../common/Commondimension';
import { Commonfont } from '../common/Commonfont';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';

const Createairdrop = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [details, setDetails] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const back = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigation]);

  // Fetch countries when searching
  // const searchCountry = async (searchTerm) => {
  //   try {
  //     const response = await fetch(`https://zacro-backend.onrender.com/v1/user/getCountry?search=${searchTerm}`);
  //     const result = await response.json();
  //     if (response.ok && result.status) {
  //       const countries = result.data.map(country => ({
  //         label: country.name,
  //         value: country.code,
  //         dial_code: country.dial_code,
  //       }));
  //       setCountryList(countries);  // Adjust based on API response structure
  //     } else {
  //       Alert.alert('Error', 'Failed to fetch countries');
  //     }
  //   } catch (error) {
  //     Alert.alert('Error', 'Something went wrong while fetching countries');
  //   }
  // };

  // Submit form
  const submitForm = async () => {
    if (!name || !email || !mobileNumber || !details) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    const formData = {
      name,
      email,
      mobileNumber,
      country: selectedCountry,
      details,
    };

    try {
      setLoading(true);
      const response = await fetch('https://zacro-backend.onrender.com/v1/user/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        Alert.alert('Success', 'Form submitted successfully');
        navigation.goBack();
      } else {
        Alert.alert('Error', result.message || 'Failed to submit the form');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Something went wrong while submitting the form');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F2FC', padding: deviceWidth(5) }}>
      <TouchableOpacity onPress={() => back()}>
        <Image source={require('../../assets/images/Arrow1.png')} />
      </TouchableOpacity>

      <View style={{ padding: 10 }}>
        <Text
          style={{
            color: 'black',
            fontFamily: Commonfont.robotobold,
            fontSize: deviceHeight(4),
            paddingTop: 20,
          }}>
          Contact us
        </Text>
        <View style={{ rowGap: 10 }}>
          {/* Name Input */}
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'#00000033'}
            value={name}
            onChangeText={setName}
          />

          {/* Email Input */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#00000033'}
            value={email}
            onChangeText={setEmail}
          />

          {/* Mobile Number Input */}
          <Text style={styles.inputLabel}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor={'#00000033'}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="numeric"
          />

          {/* Country Dropdown with search */}
          <Text style={styles.inputLabel}>Country</Text>
          {/* <Dropdown
            style={styles.input}
            placeholderStyle={{ color: '#00000033' }}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={countryList}
            search
            searchPlaceholder="Search country..."
            labelField="label"
            valueField="value"
            placeholder="Select country"
            value={selectedCountry}
            onChange={item => setSelectedCountry(item.value)}
            onSearch={searchCountry}  // Call searchCountry on search
          /> */}
<TextInput
            style={styles.input}
            placeholder="Country"
            placeholderTextColor={'#00000033'}
            value={selectedCountry}
            onChangeText={setSelectedCountry}
          />
          {/* Project Details Input */}
          <Text style={styles.inputLabel}>Details About The Project</Text>
          <TextInput
            style={styles.input}
            placeholder="Details"
            placeholderTextColor={'#00000033'}
            value={details}
            onChangeText={setDetails}
          />

          {/* Submit Button */}
          <TouchableOpacity
            style={{ flexDirection: 'row', borderRadius: 10 }}
            onPress={submitForm}
            disabled={loading}>
            <LinearGradient
              style={{ borderRadius: 10 }}
              colors={['#ED222E', '#FF2D00B8']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <Text
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  color: 'white',
                  fontFamily: Commonfont.robotobold,
                }}>
                {loading ? 'Submitting...' : 'Submit'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Createairdrop;

const styles = StyleSheet.create({
  inputLabel: {
    color: 'black',
    fontFamily: Commonfont.robotomedium,
    fontSize: deviceHeight(2),
    paddingTop: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  selectedTextStyle: {
    color: 'black',
  },
  inputSearchStyle: {
    color: 'black',
  },
});
