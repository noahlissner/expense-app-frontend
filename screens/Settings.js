import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import UserCard from "../components/UserCard";
const Settings = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <UserCard user={user} navigation={navigation} />
      <TouchableOpacity onPress={() => {}} style={styles.logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F1F3F4",
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 30,
  },

  logout: {
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "#3869FE",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // width: 75,
    // height: 35,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
