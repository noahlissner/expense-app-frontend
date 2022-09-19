import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const UserCard = ({ user, navigation }) => {
  return (
    <View style={styles.wrapper}>
      {/* Left */}
      <View style={styles.containerLeft}>
        <Ionicons name="person-circle-outline" size={48} color="#525252" />
        <View style={styles.userInfo}>
          <Text style={styles.userInfoEmail}>{user.email}</Text>
          <Text style={styles.userInfoName}>
            {user.firstname} {user.lastname}
          </Text>
        </View>
      </View>
      {/* Right */}
      <Pressable
        onPress={() => navigation.navigate("EditUser")}
        style={styles.editProfile}
      >
        <Text style={styles.editProfileText}>Edit profile</Text>
        <Ionicons name="chevron-forward-outline" size={16} color="#fff" />
      </Pressable>
    </View>
  );
};
export default UserCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 14,
  },
  containerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  userInfo: {
    marginLeft: 10,
  },
  userInfoEmail: {
    fontSize: 12,
    color: "#A6A8AA",
    fontWeight: "500",
  },
  userInfoName: {
    fontSize: 16,
    color: "#2D2F33",
  },

  containerRight: {},

  editProfile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3869FE",
    borderRadius: 999,
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 8,
    paddingBottom: 8,
  },
  editProfileText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
});
