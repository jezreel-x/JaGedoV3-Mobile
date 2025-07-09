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
                name="customer-signup"
                options={{
                    title: "Customer SignUp",
                    headerShown: false,
                }}
            />
        </Stack>
  );
}