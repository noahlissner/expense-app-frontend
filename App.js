import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Test from "./screens/Test";

const Stack = createNativeStackNavigator();

export default function App() {
  // For testing purposes
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator
          initialRouteName={loggedIn ? "Dashboard" : "Home"}
          screenOptions={{ headerTintColor: "#000" }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: "#F1F3F4",
              },
              headerTitle: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: "#F1F3F4",
              },
              headerTitle: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerStyle: {
                backgroundColor: "#F1F3F4",
              },
              headerTitle: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerStyle: {
                backgroundColor: "#F1F3F4",
              },
              headerShadowVisible: false,
              title: "Dashboard",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Test"
            component={Test}
            options={{
              headerStyle: {
                backgroundColor: "#F1F3F4",
              },
              headerShadowVisible: false,
              // headerShown: false,
              title: "Test",
              headerTitleStyle: {
                fontSize: 20,
              },
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
