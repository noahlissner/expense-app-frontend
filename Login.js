import { View, Text, StyleSheet } from "react-native";
const Login = () => {
  return (
    <View style={{ backgroundColor: "#F1F3F4", flex: 1 }}>
      <Text style={styles.title}>Login</Text>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
});
