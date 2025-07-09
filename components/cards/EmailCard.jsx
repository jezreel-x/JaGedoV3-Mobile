import { 
    StyleSheet, 
    Text, 
    useWindowDimensions, 
    Image,
    TextInput, 
    Pressable,
    View,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import BackAndNextBtns from '../BackAndNextBtns';

export default function EmailCard({ email, setEmail, handleNextStep, handlePreviousStep }) {

    const { width } = useWindowDimensions();

    const getLogoWidth = () => {
        if (width >= 1024) return 320; // Tailwind: lg:w-80 (20rem)
        if (width >= 768) return 256;  // Tailwind: md:w-64 (16rem)
        return 90;                    // Tailwind: w-40 (10rem)
    }

    return (
            <Animatable.View 
                key="step2"
                animation="fadeInRight" 
                duration={800} 
                style={styles.animatedView}
            >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Image
                source={{
                    uri: 'https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75',
                }}
                    style={[styles.logo, { width: getLogoWidth() }]}
                    accessibilityLabel="Logo"
                />
                <Text style={styles.emailTitle}>Enter Your Email</Text>
                <View style={{ 
                    width: '100%', 
                    alignItems: 'center' 
                }}>
                    <TextInput 
                        placeholder="Email" 
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input} 
                    />
                </View>
                <Text style={{ textAlign: 'center', marginBottom: 20, fontSize: 16 }}>Or</Text>
                <Pressable style={[
                    styles.LogInForgotPasswdBtn, 
                    { backgroundColor: '#eee', borderColor: '#ccc', borderWidth: 2 }
                ]}>
                <Text style={[styles.submitText, { color: "black" }]}>
                    <Ionicons name="logo-google" size={20} color="" style={{ alignSelf: 'baseline' }} /> 
                    Sign in with Google
                </Text>
                </Pressable>
                <Text style={styles.disclaimerText}>
                    By proceeding, you consent to receive calls, WhatsApp, or SMS messages, including automated means, from JaGedo and its affiliates to the provided number.
                </Text>
                <BackAndNextBtns
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                />
            </KeyboardAvoidingView>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogInForgotPasswdBtn: {
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    emailTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        color: "rgb(0,0,112)",
    },
    input: {
        borderWidth: 2,
        borderColor: '#ccc',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 20,
        marginVertical: 12,
        borderRadius: 8,
        minHeight: 58,
        width: '100%'
    },
    logo: {
      marginTop: 10,
      height: 35, // or adjust as needed for logo aspect ratio
      alignSelf: 'center',
    },
    disclaimerText: {
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
    },
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
        minHeight: "70%",
    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});