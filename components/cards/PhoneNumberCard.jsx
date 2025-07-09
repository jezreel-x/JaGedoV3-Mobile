import React from 'react';
import { View, Text, TextInput, StyleSheet, Platform, useWindowDimensions, Image, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Animatable from 'react-native-animatable';
import BackAndNextBtns from '../BackAndNextBtns';

const PhoneNumberCard = ({ countryCode, setCountryCode, phone, setPhone, handleNextStep, handlePreviousStep }) => {

    const { width } = useWindowDimensions();
    
    const getLogoWidth = () => {
        if (width >= 1024) return 320; // Tailwind: lg:w-80 (20rem)
        if (width >= 768) return 256;  // Tailwind: md:w-64 (16rem)
        return 90;                    // Tailwind: w-40 (10rem)
    }

  return (
    <Animatable.View
        key="step3"
        animation="fadeInRight" 
        duration={800} 
        style={styles.animatedView}
    >
        <KeyboardAvoidingView 
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
        <View>
            {/* Image */}
             <Image
                source={{
                    uri: 'https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75',
                }}
                    style={[styles.logo, { width: getLogoWidth() }]}
                    accessibilityLabel="Logo"
            />
            {/* Title */}
            <Text style={styles.title}>Enter Your Phone Number</Text>

            {/* Phone Input Section */}
            <View style={styles.inputWrapper}>
                {/* Country Code Dropdown */}
                <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={countryCode}
                    onValueChange={(value) => setCountryCode(value)}
                    style={styles.picker}
                    mode="dropdown"
                >
                    <Picker.Item label="🇰🇪 +254" value="+254" />
                    <Picker.Item label="🇺🇸 +1" value="+1" />
                    <Picker.Item label="🇬🇧 +44" value="+44" />
                </Picker>
                </View>

                {/* Phone Number Input */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Phone number"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

            <BackAndNextBtns
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
            />
        </View>
        </KeyboardAvoidingView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
    animatedView: {
        marginTop: 20,
        paddingTop: 40,
        alignSelf: 'center',
        width: '90%',
        elevation: 2,
        paddingHorizontal: 20,
        paddingVertical: 28,
        borderRadius: 12,
        backgroundColor: '#fff',
        minHeight: "60%",
    },
    logo: {
      marginTop: 10,
      marginBottom: 20,
      height: 35, // or adjust as needed for logo aspect ratio
      alignSelf: 'center',
    },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgb(0,0,122)',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#ddd',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    marginVertical: 30
  },
  pickerWrapper: {
    backgroundColor: '#f3f3f3',
    borderRightWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    width: Platform.OS === 'ios' ? 110 : 100,
  },
  picker: {
    height: 48,
    color: '#333',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  backButton: {
    backgroundColor: 'rgb(0,0,122)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backText: {
    color: 'white',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: 'rgb(0,0,122)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  nextText: {
    color: 'white',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  disabledText: {
    color: 'black',
  },
});

export default PhoneNumberCard;
