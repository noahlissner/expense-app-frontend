import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import img from "../assets/group.png";
import GroupInfoSquares from "../components/GroupInfoSquares";

const Test = () => {
  return (
    <View style={styles.wrapper}>
      {/* Top squares */}
      <GroupInfoSquares />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
});
