import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GroupCard = ({ group }) => {
  console.log(group);
  return (
    <View style={styles.cardWrapper}>
      {/* Left Side */}
      <View style={styles.leftSide}>
        <Text style={styles.groupName}>Group Name 1</Text>
        <Text style={styles.amountPeople}>
          {group.members.length}{" "}
          {group.members.length > 1 ? "people" : "person"}
        </Text>
      </View>
      {/* Right Side */}
      <View style={styles.rightSide}>
        <Text style={styles.amountMoney}>$500,00</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Even</Text>
        </View>
      </View>
    </View>
  );
};

export default GroupCard;

const styles = StyleSheet.create({
  cardWrapper: {
    height: 80,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Left side
  leftSide: {},
  groupName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2D2F33",
  },
  amountPeople: {
    fontSize: 12,
    fontWeight: "400",
    color: "#A6A8AA",
  },

  // Right side
  rightSide: {
    alignItems: "center",
  },
  amountMoney: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2D2F33",
  },
  tag: {
    marginTop: 5,
    width: 40,
    height: 15,
    backgroundColor: "#47CE45",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  tagText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#025600",
  },
});
