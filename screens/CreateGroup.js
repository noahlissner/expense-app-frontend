import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateGroup = () => {
  const [groupName, setGroupName] = React.useState("");
  const [tempMember, setTempMember] = React.useState("");
  const [members, setMembers] = React.useState([]);

  const handleMemberSubmit = () => {
    if (!members.includes(tempMember) && tempMember !== "") {
      setMembers((current) => [tempMember, ...current]);
    }
    setTempMember("");
  };

  const handleRemoveItem = (member) => {
    setMembers((current) => current.filter((item) => item !== member));
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        {/* Input wrapper */}
        <ScrollView
          style={styles.wrapperInner}
          keyboardShouldPersistTaps="handled"
        >
          <View style={[styles.inputGap]}>
            <Text style={styles.inputTitle}>Group name</Text>
            <TextInput
              keyboardType="default"
              style={styles.input}
              placeholder="ex: Trip to Paris"
              onChangeText={(text) => setGroupName(text)}
            />
          </View>
          <View style={[styles.inputGap]}>
            <Text style={styles.inputTitle}>Add members</Text>
            <View style={styles.memberInputBox}>
              <TextInput
                keyboardType="default"
                style={styles.memberInput}
                placeholder="Email or Phone"
                onChangeText={(text) => setTempMember(text)}
                value={tempMember}
              />
              <Pressable
                onPress={handleMemberSubmit}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#144EFE" : "#3869FE",
                  },
                  styles.addBtn,
                ]}
              >
                <Text style={[styles.addBtnText]}>Add</Text>
              </Pressable>
            </View>
            <View style={styles.memberListBox}>
              {members.map((member, key) => (
                <View key={key} style={styles.memberListItem}>
                  <Text style={styles.memberListItemText}>{member}</Text>
                  <Pressable
                    style={styles.memberListItemRemove}
                    onPress={() => handleRemoveItem(member)}
                  >
                    <Ionicons name="close-outline" color="#2d2f33" size={24} />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#144EFE" : "#3869FE",
            },
            styles.continueBtn,
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
    height: "100%",
  },

  wrapperInner: {
    paddingRight: 30,
    paddingLeft: 30,
    height: "100%",
    width: "100%",
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

  memberInputBox: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },

  memberInput: {
    paddingLeft: 20,
    height: 60,
    backgroundColor: "#fff",
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    fontSize: 16,
    flex: 1,
  },

  inputTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2D2F33",
    marginBottom: 10,
  },

  addBtn: {
    alignContent: "center",
    justifyContent: "center",
    width: 80,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },

  addBtnText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },

  continueBtn: {
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

  memberListBox: {
    flexDirection: "column",
  },

  memberListItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 14,
    fontSize: 16,
    marginBottom: 3,
    marginTop: 3,
  },
});
