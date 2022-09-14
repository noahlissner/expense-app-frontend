import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Button,
} from "react-native";
import AppleIcon from "./assets/apple-icon.png";
import GoogleIcon from "./assets/google-icon.png";

const Register = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Register</Text>
      {/* Input Wrapper */}
      <View style={styles.inputWrapper}>
        {/* Input Container */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputRowFirst}
            placeholder="Firstname"
            textContentType="givenName"
          />
          <TextInput
            style={styles.inputRowSecond}
            placeholder="Lastname"
            textContentType="familyName"
          />
        </View>
        {/* Phone */}
        <View>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            textContentType="telephoneNumber"
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          textContentType="newPassword"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          textContentType="newPassword"
          secureTextEntry={true}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#144EFE" : "#3869FE",
          },
          styles.registerBtn,
        ]}
      >
        <Text style={styles.registerBtnText}>Register</Text>
      </Pressable>
      <View style={styles.continueWith}>
        <View style={styles.continueWithLeftLine}></View>
        <Text style={styles.continueWithText}>Or continue with</Text>
        <View style={styles.continueWithRightLine}></View>
      </View>
      {/* Google & apple login */}
      <View style={styles.loginWith}>
        <Pressable style={styles.appleLogin}>
          {/* <Text>A</Text> */}
          <Image source={AppleIcon} style={styles.appleIcon} />
        </Pressable>
        <Pressable style={styles.googleLogin}>
          {/* <Text>G</Text> */}
          <Image source={GoogleIcon} style={styles.googleIcon} />
        </Pressable>
      </View>
      {/* Already member */}
      <View style={styles.alreadyMember}>
        <Text style={styles.alreadyMemberText}>Already a member?</Text>
        <Pressable
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginBtnText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F1F3F4",
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    color: "#2D2F33",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },

  inputWrapper: {
    marginTop: 30,
    flexDirection: "column",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    marginTop: 20,
    paddingLeft: 20,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 14,
    fontSize: 16,
  },

  inputRowFirst: {
    marginRight: 10,
    flex: 1,
    marginTop: 20,
    paddingLeft: 20,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 14,
  },

  inputRowSecond: {
    marginLeft: 10,
    flex: 1,
    marginTop: 20,
    paddingLeft: 20,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 14,
  },

  registerBtn: {
    marginTop: 35,
    height: 60,
    borderRadius: 14,
    // backgroundColor: "#3869FE",
    alignItems: "center",
    justifyContent: "center",
  },
  registerBtnText: {
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
  },

  //   Continue With
  continueWith: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
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

  //   Google & apple login
  loginWith: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
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
  alreadyMember: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  alreadyMemberText: {},

  loginBtn: {
    marginLeft: 5,
  },

  loginBtnText: {
    color: "#3869FE",
  },
});
