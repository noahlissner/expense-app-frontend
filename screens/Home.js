import { View, Text, Button, StyleSheet, Image, Pressable } from "react-native";
import img from "../assets/piggy.png";
const Home = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#F1F3F4",
        // backgroundColor: "#000",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={img} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            // style={styles.registerBtn}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#144EFE" : "#3869FE",
              },
              styles.registerBtn,
            ]}
          >
            <Text style={styles.registerBtnText}>Register</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            // style={styles.loginBtn}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#D5DEF6" : "#D5DEF6",
              },
              styles.loginBtn,
            ]}
          >
            <Text style={styles.loginBtnText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // marginTop: "50%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 75,
  },

  title: {
    fontSize: 32,
    fontWeight: "500",
  },
  buttonsContainer: {
    marginTop: 50,
    width: 310,
    height: 57,
    borderRadius: 14,
    flexDirection: "row",
    backgroundColor: "#D5DEF6",
  },
  loginBtn: {
    flex: 1,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  registerBtn: {
    // backgroundColor: "#3869FE",
    flex: 1,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnText: {
    fontSize: 16,
    fontWeight: "500",
  },
  registerBtnText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
});
