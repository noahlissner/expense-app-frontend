import {
  View,
  Text,
  Button,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupCard from "../components/GroupCard";
import Ionicons from "@expo/vector-icons/Ionicons";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.cardWrapepr}
          onPress={() => navigation.navigate("Test")}
        >
          <GroupCard />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardWrapepr}
          onPress={() => navigation.navigate("Test")}
        >
          <GroupCard />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardWrapepr}
          onPress={() => navigation.navigate("Test")}
        >
          <GroupCard />
        </TouchableOpacity>

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#144EFE" : "#3869FE",
            },
            styles.addBtn,
          ]}
        >
          <Ionicons name="add-outline" color="#fff" size={32} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 30,
    marginLeft: 30,
    height: "100%",
  },
  cardWrapepr: {
    marginBottom: 10,
  },

  // Button to add group
  addBtn: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: [{ translateX: -32 }],
    height: 65,
    width: 65,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
});
