import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const SocialMediaForm = ({navigation}) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Form Data:', data);
    navigation.navigate('RegisterScreen',{formdata : data})
    // Handle form submission here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now, Let's Add Your Social Media Accounts To Your Page.</Text>

      {/* Instagram */}
      <View style={styles.inputContainer}>
      <Image
                source={require('../../assets/images/111.png')}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                //   margin: 30,
                }}
              />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Za-z0-9._-]{3,}$/ // Basic pattern for username validation
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="@Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="instagram"
          defaultValue=""
        />
      </View>
      {errors.instagram && <Text style={styles.errorText}>Invalid Instagram username</Text>}

      {/* Facebook */}
      <View style={styles.inputContainer}>
      <Image
                source={require('../../assets/images/222.png')}
                // style={{
                //   width: '50%',
                //   height: 100,
                //   resizeMode: 'contain',
                //   margin: 30,
                // }}
              />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Za-z0-9._-]{3,}$/
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="@Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="facebook"
        //   defaultValue="@Antone-Milkoff"
        />
      </View>
      {errors.facebook && <Text style={styles.errorText}>Invalid Facebook username</Text>}

      {/* X */}
      <View style={styles.inputContainer}>
      <Image
                source={require('../../assets/images/333.png')}
                // style={{
                //   width: '50%',
                //   height: 100,
                //   resizeMode: 'contain',
                //   margin: 30,
                // }}
              />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Za-z0-9._-]{3,}$/
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="@Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="x"
          defaultValue=""
        />
      </View>
      {errors.x && <Text style={styles.errorText}>Invalid X username</Text>}

      {/* Telegram */}
      <View style={styles.inputContainer}>
      <Image
                source={require('../../assets/images/444.png')}
                // style={{
                //   width: '50%',
                //   height: 100,
                //   resizeMode: 'contain',
                //   margin: 30,
                // }}
              />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Za-z0-9._-]{3,}$/
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="@Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="telegram"
        //   defaultValue="@Antone-Milkoff"
        />
      </View>
      {errors.telegram && <Text style={styles.errorText}>Invalid Telegram username</Text>}

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginLeft: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF4500',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SocialMediaForm;
