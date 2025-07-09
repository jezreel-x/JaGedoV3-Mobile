import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgb(0,0,112)",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            title: "Register",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "Login",
            headerShown: true,
          }}
        />
      </Stack>
  );
}
