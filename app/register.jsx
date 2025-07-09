import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';


import customerImg from '../assets/customer(1).png';
import fundiImg from '../assets/fundi.jpeg';
import { useRouter } from 'expo-router';
// import professionalImg from '../../assets/professional.jpeg';
// import contractorImg from '../../assets/contractor.jpeg';
// import hardwareImg from '../../assets/hardware.jpeg';
// import builderImg from '../assets/Builder.jpg';
// import micaImg from '../assets/mutonga.jpg';

const LogInSignUp = () => {
  const { width } = useWindowDimensions();
  const [activeTab, setActiveTab] = useState('login'); // default to login
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // default email state
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  // const [selectedCategory, setSelectedCategory] = useState('Login');
  // const [image, setImage] = useState(micaImg);
  // const [steps, setSteps] = useState([
  //   { id: 1, title: 'Sign Up' },
  //   { id: 2, title: 'Request' },
  //   { id: 3, title: 'Pay to Escrow' },
  //   { id: 4, title: 'Track Execution' },
  //   { id: 5, title: 'Complete and Review' },
  // ]);

  const navCards = [
    { name: 'Customer', img: customerImg, route: 'CustomerSignup' },
    { name: 'Fundi', img: fundiImg, route: 'FundiSignup' }
  ];

  const getLogoWidth = () => {
    if (width >= 1024) return 320; // Tailwind: lg:w-80 (20rem)
    if (width >= 768) return 256;  // Tailwind: md:w-64 (16rem)
    return 90;                    // Tailwind: w-40 (10rem)
  };

  const handleCardClick = (card) => {
    router.push(`./${card.toLowerCase()}-signup`, {
      params: { cardName: card }, // Pass the card name as a parameter
    });
  };

  // const handleCategory = (category) => {
  //   setSelectedCategory(category);
  //   if (category === 'Customer') {
  //     setImage(micaImg);
  //     setSteps([
  //       { id: 1, title: 'Sign Up' },
  //       { id: 2, title: 'Request' },
  //       { id: 3, title: 'Pay to Escrow' },
  //       { id: 4, title: 'Track Execution' },
  //       { id: 5, title: 'Complete and Review' },
  //     ]);
  //   } else {
  //     setImage(builderImg);
  //     setSteps([
  //       { id: 1, title: 'Sign Up & Set Profile' },
  //       { id: 2, title: 'Receive Requests' },
  //       { id: 3, title: 'Bid and Win' },
  //       { id: 4, title: 'Job Execution Updates' },
  //       { id: 5, title: 'Get Paid and Reviewed' },
  //     ]);
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInUp" duration={800} style={styles.header}>
        <Image
          source={{
            uri: 'https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75',
          }}
          style={[styles.logo, { width: getLogoWidth() }]}
          accessibilityLabel="Logo"
        />
        <View style={{flexDirection: "row", justifyContent: "space-between", width: "55%"}}>
          <Pressable 
          style={[
            styles.SignLoginBtns,
            activeTab === 'login' ? styles.activeTab : {}
          ]} 
          onPress={() => setActiveTab('login')}
          >
            <Text style={[activeTab === 'login' ? styles.link : { color: 'black', fontSize: 16 }]}>Login</Text>
          </Pressable>
          <Pressable 
            style={[
              styles.SignLoginBtns,
              activeTab === 'sign-up' ? styles.activeTab : {}
            ]} 
            onPress={() => setActiveTab('sign-up')}
          >
            <Text style={[activeTab === 'sign-up' ? styles.link : { color: 'black', fontSize: 16 }]}>Sign Up</Text>
          </Pressable>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeIn" duration={800} style={styles.heroText}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>A One-Stop Construction Platform</Text>
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "100", textAlign: "center" }}>
           JaGedo seamlessly connects customers and fundis in your locality.
        </Text>
      </Animatable.View>

      {/* <View style={styles.cardGrid}>
        {navCards.map((card) => (
          <TouchableOpacity
            key={card.name}
            style={styles.card}
            onPress={() => handleCardClick(card)}
          >
            <Image source={card.img} style={styles.cardImage} />
            <Text style={styles.cardLabel}>{card.name}</Text>
          </TouchableOpacity>
        ))}
      </View> */}

      {/* <Text style={styles.subtitle}>How It Works</Text>
      <View style={styles.categoryButtons}>
        {['Customer', 'Builder'].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.catButton,
              selectedCategory === cat && styles.catButtonActive,
            ]}
            onPress={() => handleCategory(cat)}
          >
            <Text style={styles.catButtonText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Image source={image} style={styles.heroImage} />

      <View style={styles.stepsContainer}>
        {steps.map((step) => (
          <View key={step.id} style={styles.stepBox}>
            <Text style={styles.stepNumber}>{step.id}</Text>
            <Text style={styles.stepTitle}>{step.title}</Text>
          </View>
        ))}
      </View> */}


      {/* Content */}
      {activeTab === 'login' ? (
        <Animatable.View 
          key="login"
          animation="fadeInRight"
          duration={600}
          style={styles.loginForm}
        >
          <TextInput 
            placeholder="Email" 
            value={email}
            onChangeText={setEmail}
            style={styles.input} 
          />
          <View style={{ position: 'relative' }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
            <Pressable onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
              <Ionicons
                name={passwordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
              />
            </Pressable>
          </View>
          <Pressable style={{ alignSelf: "flex-end" }} onPress={() => router.push('/forgot-password')}>
            <Text style={[styles.submitText, { color: "rgb(0,0,222)" }]}>Forgot Password?</Text>
          </Pressable>
          <Pressable style={[styles.LogInForgotPasswdBtn, {backgroundColor: "rgb(0,0,112)"}]}>
            <Text style={styles.submitText}>Log In</Text>
          </Pressable>
          <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16 }}>Or</Text>
          <Pressable style={[
            styles.LogInForgotPasswdBtn, 
            { backgroundColor: '#eee', borderColor: '#ccc', borderWidth: 2, gap: 10}
          ]}>
            <Text style={[styles.submitText, { color: "black" }]}>
              <Ionicons name="logo-google" size={20} color="" style={{ alignSelf: 'baseline' }} /> Sign in with Google
            </Text>
          </Pressable>
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4
            }}>
            <Text style={{ fontSize: 16 }}>{`Don't have an account?`}</Text>
            <Text onPress={() => setActiveTab('sign-up')} style={{ color: "rgb(0,0,112)", fontSize: 16 }}> Sign Up</Text>
          </View>
        </Animatable.View>
      ) : (
        <Animatable.View
          key="sign-up"
          animation="fadeInLeft"
          duration={600}
        >
          <Text style={styles.signUpText}>Sign up as: </Text>
          <View style={styles.cardGrid}>
            {navCards.map((card) => (
              <TouchableOpacity
                key={card.name}
                style={styles.card}
                onPress={() => handleCardClick(card.name)}
              >
                <Image source={card.img} style={styles.cardImage} />
                <Text style={styles.cardLabel}>{card.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animatable.View>
      )}
    </ScrollView>
  );
};

export default LogInSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeTab: {
    backgroundColor: "rgb(0,0,112)",
  },
  signUpText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginForm: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  eyeIcon: {
    paddingHorizontal: 16,
    position: 'absolute',
    right: 32,
    top: 30,
    insetInlineEnd: 0,
    insetBlock: 0,
    zIndex: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingVertical: 20,
    paddingHorizontal: 12,
    fontSize: 16,
    marginVertical: 12,
    borderRadius: 8,
  },
  LogInForgotPasswdBtn: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  forgotPassword: {
    color: 'blue',
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderWidth: 2,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  SignLoginBtns: {
    backgroundColor: "#eee",
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    fontSize: 16,
  },
  heroText: {
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    marginHorizontal: 8,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "rgb(0,0,112)",
  },
  card: {
    width: 140,
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: "white"
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  catButton: {
    backgroundColor: '#00007a',
    margin: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  catButtonActive: {
    backgroundColor: 'green',
  },
  catButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  heroImage: {
    width: '90%',
    height: 280,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  stepsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  stepBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  stepNumber: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    width: 28,
    height: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: 10,
  },
  stepTitle: {
    fontSize: 16,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: '#00007a',
  },
  logo: {
    marginTop: 10,
    height: 35, // or adjust as needed for logo aspect ratio
    alignSelf: 'flex-start',
  },
  footerContainer: {
    marginTop: 64,
    backgroundColor: 'rgb(0,0,122)',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  columnsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  column: {
    width: '45%',
    marginBottom: 24,
  },
  columnTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
    color: '#fff',
  },
  navLink: {
    color: '#FFD700',
    marginBottom: 8,
    fontSize: 14,
  },
  textGray: {
    color: '#ccc',
    marginBottom: 6,
  },
  email: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
  socialMediaRow: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 12,
    flexWrap: 'wrap',
  },
  icon: {
    padding: 10,
    backgroundColor: 'rgb(0,0,122)',
    borderRadius: 100,
  },
  jibsIcon: {
    width: 32,
    height: 32,
    marginTop: 4,
    borderRadius: 50,
    backgroundColor: 'rgb(0,0,112)',
  },
  bottomCopyright: {
    borderTopWidth: 1,
    borderTopColor: '#555',
    marginTop: 32,
    paddingTop: 16,
    alignItems: 'center',
  },
  copyrightText: {
    color: '#ccc',
    fontSize: 12,
  },
});


