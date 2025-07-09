import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, FlatList } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const data = [
  {
    title: 'Customers',
    image: require('../assets/mutonga.jpg'),
    steps: [
      { id: 1, title: 'Sign Up' },
      { id: 2, title: 'Request' },
      { id: 3, title: 'Pay to Escrow' },
      { id: 4, title: 'Track Execution' },
      { id: 5, title: 'Complete and Review' },
    ],
  },
  {
    title: 'Fundis',
    image: require('../assets/Builder.jpg'),
    steps: [
      { id: 1, title: 'Sign Up & Set Profile' },
      { id: 2, title: 'Receive Requests' },
      { id: 3, title: 'Bid and Win' },
      { id: 4, title: 'Job Execution Updates' },
      { id: 5, title: 'Get Paid and Reviewed' },
    ],
  },
];

export default function CarouselSlides() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderStep = ({ item }) => (
    <View style={styles.stepCard}>
      <View style={styles.stepCircle}>
        <Text style={styles.stepNumber}>{item.id}</Text>
      </View>
      <Text style={styles.stepTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={height * 0.6}
        autoPlay
        data={data}
        scrollAnimationDuration={1200}
        onSnapToItem={setActiveIndex}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.sectionTitle}>How It Works for {item.title}</Text>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <FlatList
                data={item.steps}
                renderItem={renderStep}
                keyExtractor={(step) => step.id.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.stepsContainer}
            />
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  slide: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    width: width * 0.9,
    height: height * 0.8,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  stepsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    borderRadius: 8,
    marginTop: 20,
    paddingBottom: 20,
  },
  stepCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    width: width * 0.6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stepCircle: {
    backgroundColor: '#FFD700',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  stepNumber: {
    color: '#000',
    fontWeight: 'bold',
  },
  stepTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 14,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFD700',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});
