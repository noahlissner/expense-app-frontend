import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import Ionicons from "@expo/vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    dispatch(login(data));
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.wrapperInner}
        keyboardShouldPersistTaps="handled"
      >
        {/* Top Container */}
        <Text style={styles.title}>Hello again!</Text>
        <View style={styles.topContainer}>
          {/* Inputs */}
          <View style={styles.inputWrapper}>
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={[styles.input, styles.inputGap]}
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
                styles.recoverPassword,
              ]}
            >
              <Text style={styles.recoverPasswordText}>Recover Password</Text>
            </Pressable>
          </View>
          {/* Login Button */}
          <Pressable
            onPress={handleSubmit}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#144EFE" : "#3869FE",
              },
              styles.loginBtn,
            ]}
          >
            {isLoading ? (
              <ActivityIndicator color={"#fff"} />
            ) : (
              <Text style={styles.loginBtnText}>Login</Text>
            )}
          </Pressable>
          <View style={styles.continueWithContainer}>
            <View style={styles.continueWith}>
              <View style={styles.continueWithLeftLine}></View>
              <Text style={styles.continueWithText}>Or continue with</Text>
              <View style={styles.continueWithRightLine}></View>
            </View>
            {/* Google & apple login */}
            <View style={styles.loginWith}>
              <Pressable style={styles.appleLogin}>
                <Ionicons name="logo-apple" size={32} />
              </Pressable>
              <Pressable style={styles.googleLogin}>
                <Ionicons name="logo-google" size={32} />
              </Pressable>
            </View>
          </View>
        </View>
        {/* Bottom Container */}
        <View style={styles.bottomContainer}>
          {/* Not a member */}
          <View style={styles.notMember}>
            <Text style={styles.notMemberText}>Not a member?</Text>
            <Pressable
              style={styles.registerBtn}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.registerBtnText}>Register</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#F1F3F4",
    // flex: 1,
    // paddingLeft: 30,
    // paddingRight: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  wrapperInner: {
    paddingRight: 30,
    paddingLeft: 30,
    height: "100%",
    width: "100%",
    // backgroundColor: "#000",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },

  topContainer: {
    height: "100%",
    justifyContent: "center",
    // backgroundColor: "#000",
  },

  // Inputs
  inputWrapper: {
    flexDirection: "column",
  },
  input: {
    // marginTop: 20,
    paddingLeft: 20,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 14,
    fontSize: 16,
  },

  inputGap: {
    marginTop: 20,
  },

  recoverPassword: {
    alignSelf: "flex-end",
    marginTop: 25,
    marginBottom: 30,
  },

  recoverPasswordText: {
    fontWeight: "500",
    color: "#A6A8AA",
  },

  loginBtn: {
    height: 60,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  loginBtnText: {
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
  },

  // Continue With
  continueWithContainer: {
    marginTop: 50,
  },

  continueWith: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  continueWithText: {
    fontWeight: "500",
    color: "#525252",
    marginLeft: 15,
    marginRight: 15,
  },
  continueWithLeftLine: {
    height: 1,
    backgroundColor: "#000",
    opacity: 0.3,
    flex: 1,
  },
  continueWithRightLine: {
    height: 1,
    backgroundColor: "#000",
    opacity: 0.3,
    flex: 1,
  },

  // Google & Apple Login
  loginWith: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 65,
  },
  appleLogin: {
    height: 50,
    width: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D5DEF6",
    marginRight: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  googleLogin: {
    height: 50,
    width: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D5DEF6",
    MarginLeft: 10,

    alignItems: "center",
    justifyContent: "center",
  },

  bottomContainer: {},

  // Not a member
  notMember: {
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  notMemberText: {},
  registerBtn: {
    marginLeft: 5,
  },
  registerBtnText: {
    color: "#3869FE",
  },
});
