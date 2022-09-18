import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateGroup = () => {
  const [groupName, setGroupName] = React.useState("");
  const [members, setMembers] = React.useState("");
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        {/* Input wrapper */}
        <View>
          <View style={[styles.inputGap]}>
            <Text style={styles.inputTitle}>Group name</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: Trip to Paris"
              onChangeText={(text) => setGroupName(text)}
            />
          </View>
          <View style={[styles.inputGap]}>
            <Text style={styles.inputTitle}>Add members</Text>
            <TextInput
              style={styles.input}
              placeholder="Name, Email or Phone"
              onChangeText={(text) => setMembers(text)}
            />
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#144EFE" : "#3869FE",
            },
            styles.addBtn,
          ]}
        >
          <Ionicons name="arrow-forward-outline" color="#fff" size={32} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroup;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 30,
    marginLeft: 30,
    height: "100%",
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
    marginBottom: 30,
  },

  inputTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2D2F33",
    marginBottom: 10,
  },

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
