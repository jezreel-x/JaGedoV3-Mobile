import { Link } from 'expo-router';
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, Alert } from 'react-native';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="rgb(0,0,112)" />
        <StatusBar />
        <Text style={{ marginTop: 20 }} onPress={() => Alert.alert("Invalid Data!", "Try again!", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") }
        ])}>LogIn</Text>
        <Link href="/register" style={{ color: 'black', marginTop: 20, fontSize: 16, textDecorationLine: 'none' }}>
            <Text>Welcome!!</Text>
        </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
