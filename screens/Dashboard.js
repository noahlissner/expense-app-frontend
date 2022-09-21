import {
  View,
  Text,
  Button,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupCard from "../components/GroupCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { fetchGroups } from "../features/groups/groupSlice";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  const { groups } = useSelector((state) => state.groups);

  console.log("Groups", groups);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
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
        </ScrollView>
        <Pressable
          onPress={() => navigation.navigate("CreateGroup")}
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
