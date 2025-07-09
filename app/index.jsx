import { SafeAreaView, View, StyleSheet, Pressable, Text, Dimensions, useWindowDimensions, StatusBar } from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'
import CarouselSlides from '../components/CarouselSlides';
import * as Animatable from 'react-native-animatable';


const { width } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();
  const width = useWindowDimensions().width;

   const getLogoWidth = () => {
    if (width >= 1024) return 320; // Tailwind: lg:w-80 (20rem)
    if (width >= 768) return 256;  // Tailwind: md:w-64 (16rem)
    return 90;                    // Tailwind: w-40 (10rem)
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="rgb(0,0,112)" />
      <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animatable.Image
        source={{
            uri: 'https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75',
          }}
          style={[styles.logo, { width: getLogoWidth() }]}
          accessibilityLabel="Logo"
          animation="fadeInDown"
          duration={800}
        />
        <Animatable.View animation="fadeIn" duration={800} style={styles.heroText}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>A One-Stop Construction Platform</Text>
          <Text style={{ 
            fontSize: 20, 
            marginTop: 10, 
            fontWeight: "100", 
            textAlign: "center",
            paddingHorizontal: 20,
          }}>
              JaGedo seamlessly connects customers and fundis in your locality.
          </Text>
        </Animatable.View>
        <CarouselSlides />
        <Pressable style={styles.SignLoginBtns} onPress={() => router.push('/register')}>
          <Text style={styles.link}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    fontSize: 16,
    width: width * 0.8,
    textAlign: 'center',
  },
  SignLoginBtns: {
    backgroundColor: "rgb(0,0,112)",
    minHeight: 48,
    width: '70%',
    marginTop: 20,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
  },
  heroText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  logo: {
    marginTop: 5,
    height: 35, // or adjust as needed for logo aspect ratio
    alignSelf: 'center',
  },
});