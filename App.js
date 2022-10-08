import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Group from "./screens/Group";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { initUser } from "./features/auth/authSlice";
import Settings from "./screens/Settings";
import CreateGroup from "./screens/CreateGroup";
import EditUser from "./screens/EditUser";
import CountryCodeModal from "./screens/CountryCodeModal";
import Expense from "./screens/Expense";
import CreateExpense from "./screens/CreateExpense";

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
              <Stack.Group>
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
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                  name="CountryCodeModal"
                  component={CountryCodeModal}
                  options={({ navigation }) => ({
                    headerStyle: {
                      backgroundColor: "#F1F3F4",
                    },
                    headerTitleStyle: {
                      fontSize: 20,
                      fontWeight: "500",
                    },
                    headerShadowVisible: false,
                    headerTitle: "Country Codes",
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                          name="close-outline"
                          size={30}
                          color="#2D2F33"
                        />
                      </TouchableOpacity>
                    ),
                  })}
                />
              </Stack.Group>
            </>
          ) : (
            <>
              <Stack.Group>
                <Stack.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={({ navigation }) => ({
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
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Settings")}
                      >
                        <Ionicons
                          name="settings-outline"
                          size={24}
                          color="#2D2F33"
                        />
                      </TouchableOpacity>
                    ),
                  })}
                />

                <Stack.Screen
                  name="Group"
                  component={Group}
                  options={{
                    headerStyle: {
                      backgroundColor: "#F1F3F4",
                    },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTitle: "Group",
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
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                  name="Settings"
                  component={Settings}
                  options={({ navigation }) => ({
                    headerStyle: {
                      backgroundColor: "#F1F3F4",
                    },
                    headerTitleStyle: {
                      fontSize: 20,
                      fontWeight: "500",
                    },
                    headerShadowVisible: false,
                    headerTitle: "Settings",
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                          name="close-outline"
                          size={30}
                          color="#2D2F33"
                        />
                      </TouchableOpacity>
                    ),
                  })}
                />

                <Stack.Screen
                  name="CreateGroup"
                  component={CreateGroup}
                  options={({ navigation }) => ({
                    headerStyle: {
                      backgroundColor: "#F1F3F4",
                    },
                    headerTitleStyle: {
                      fontSize: 20,
                      fontWeight: "500",
                    },
                    headerShadowVisible: false,
                    headerTitle: "Create Group",
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                          name="close-outline"
                          size={30}
                          color="#2D2F33"
                        />
                      </TouchableOpacity>
                    ),
                  })}
                />

                <Stack.Screen
                  name="CreateExpense"
                  component={CreateExpense}
                  options={({ navigation }) => ({
                    headerStyle: {
                      backgroundColor: "#F1F3F4",
                    },
                    headerTitleStyle: {
                      fontSize: 20,
                      fontWeight: "500",
                    },
                    headerShadowVisible: false,
                    headerTitle: "Create Expense",
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                          name="close-outline"
                          size={30}
                          color="#2D2F33"
                        />
                      </TouchableOpacity>
                    ),
                  })}
                />

                <Stack.Screen
                  name="Expense"
                  component={Expense}
                  options={({ navigation }) => ({
                    headerStyle: {
                      backgroundColor: "#3869FE",
                    },
                    headerTitleStyle: {
                      fontSize: 20,
                      fontWeight: "500",
                      color: "#fff",
                    },
                    headerShadowVisible: false,
                    headerTitle: "Expense",
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close-outline" size={30} color="#fff" />
                      </TouchableOpacity>
                    ),
                  })}
                />
              </Stack.Group>
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
