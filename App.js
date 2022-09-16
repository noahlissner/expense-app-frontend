import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Test from "./screens/Test";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { initUser } from "./features/auth/authSlice";

const Stack = createNativeStackNavigator();

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const App = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator
          // initialRouteName={user ? 'Dashboard' : 'Home'}
          screenOptions={{ headerTintColor: "#000" }}
        >
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                  headerStyle: {
                    backgroundColor: "#F1F3F4",
                  },
                  headerShadowVisible: false,
                  headerTitle: "Dashboard",
                  headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: "500",
                  },
                  headerRight: () => (
                    <TouchableOpacity>
                      <Ionicons
                        name="settings-outline"
                        size={24}
                        color="#2D2F33"
                      />
                    </TouchableOpacity>
                  ),
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
                  headerBackTitleVisible: false,
                  headerTitle: "Test",
                  headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: "500",
                  },
                  headerRight: () => (
                    <TouchableOpacity>
                      <Ionicons
                        name="settings-outline"
                        size={24}
                        color="#2D2F33"
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
