import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  Image, 
  useWindowDimensions,
  View,
  Pressable, 
} from 'react-native'
import React from 'react';
import * as Animatable from 'react-native-animatable';
import EmailCard from '../../components/cards/EmailCard';
import PhoneNumberCard from '../../components/cards/PhoneNumberCard';

export default function CustomerSignUp() {

  const { width } = useWindowDimensions();
  const [step, setStep] = React.useState(1);
  const [email, setEmail] = React.useState('');
  const [accountType, setAccountType] = React.useState('');
  const [countryCode, setCountryCode] = React.useState("+254"); // Default country code for Kenya
  const [phone, setPhone] = React.useState("");


  const getLogoWidth = () => {
    if (width >= 1024) return 320; // Tailwind: lg:w
    if (width >= 768) return 256;  // Tailwind: md:w-64 (16rem)
    return 90;                    // Tailwind: w-40 (10rem)
  }

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep(prevStep => (prevStep > 1 ? prevStep - 1 : 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      {step === 1 && (
        <Animatable.View 
          key="step1"
          animation="fadeInRight" 
          duration={800} 
          style={styles.animatedView}
        >
          <Image
            source={{
              uri: 'https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75',
            }}
            style={[styles.logo, { width: getLogoWidth() }]}
            accessibilityLabel="Logo"
          />
          <Text style={styles.text}>Welcome to Customer SignUp</Text>
          <Text style={{ fontSize: 22, color: '#666', marginTop: 20 }}>
            Select Account Type
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 20, gap: 10 }}>
            <Pressable 
              onPress={() => setAccountType("Individual")} 
              style={[
                styles.accountTypeContainer, 
                { 
                  backgroundColor: accountType === "Individual" ? 'rgb(0,0,112)' : '#eee',
                  width: width * 0.4,
                }
              ]}
            >
              <Text style=
              {{ color: accountType === "Individual" ? '#fff' : '#000', fontSize: 20,
                  alignSelf: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
               }}>
                Individual
              </Text>
            </Pressable>
            <Pressable onPress={() => setAccountType("Organization")} 
            style={[
              styles.accountTypeContainer
              , 
              { 
                backgroundColor: accountType === "Organization" ? 'rgb(0,0,112)' : '#eee',
                width: width * 0.4,
              }]}>
              <Text style={{
                color: accountType === "Organization" ? '#fff' : '#000', fontSize: 20,
                alignSelf: 'center',
                paddingVertical: 10,
                paddingHorizontal: 20, 
              }}>
                Organization
              </Text>
            </Pressable>
          </View>

          <View>
            {accountType === "Individual" && (
              <Text style={styles.accountTypeText}>
                These are Individuals seeking construction services for personal projects e.g home renovations, repairs or new construction
              </Text>
            )}
            {accountType === "Organization" && (
              <Text style={styles.accountTypeText}>
                Register as a group, business, corporation or institution
              </Text>
            )}
          </View>

          <View style=
          {{ 
            flexDirection: 'row', 
            justifyContent: "space-between", 
            width: '100%',
            marginTop: 20
          }}>
            <Pressable
              onPress={handlePreviousStep}
              style={{ 
                backgroundColor: 'rgb(0,0,112)', 
                paddingVertical: 10, 
                paddingHorizontal: 20, 
                borderRadius: 5,
                gap: 10,
                flexDirection: 'row',
              }}
            >
              <Text style={{ fontWeight: "700", color: "#fff", textAlignVertical: "center" }}>←</Text>
              <Text style={{ color: '#fff', fontSize: 20 }}>
                Back
              </Text>
            </Pressable>
            <Pressable
              onPress={handleNextStep}
              style={{ 
                backgroundColor: 'rgb(0,0,112)', 
                paddingVertical: 10, 
                paddingHorizontal: 20, 
                borderRadius: 5,
                gap: 10,
                flexDirection: 'row',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 20}}>
                Next
              </Text>
              <Text style={{ fontWeight: "700", color: "#fff", textAlignVertical: "center" }}>→</Text>
            </Pressable>
          </View>
        </Animatable.View>
      )}

      {step === 2 && (
        <EmailCard
          email={email}
          setEmail={setEmail}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}

      {step === 3 && (
        <PhoneNumberCard
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          phone={phone}
          setPhone={setPhone}
          prevStep={handlePreviousStep}
          nextStep={handleNextStep}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 26,
        marginTop: 20,
        color: '#333',
    },
    logo: {
      marginTop: 10,
      height: 35, // or adjust as needed for logo aspect ratio
      alignSelf: 'center',
    },
    accountTypeContainer: {
      backgroundColor: "rgb(0,0,112)",
      minHeight: 48,
      // width: width * 0.5,
      gap: 10,
      borderRadius: 12,
      justifyContent: 'center',
    },
    animatedView: {
      marginTop: 20,
      paddingTop: 40,
      alignSelf: 'center',
      width: '90%',
      elevation: 2,
      padding: 20,
      borderRadius: 12,
      backgroundColor: '#fff',
      minHeight: "60%",
      alignItems: 'center',
    },
    accountTypeText: {
      fontSize: 20,
      color: '#333',
      textAlign: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
})