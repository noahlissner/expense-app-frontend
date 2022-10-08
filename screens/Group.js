import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import GroupInfoSquares from "../components/GroupInfoSquares";
import GroupNavLink from "../components/GroupNavLink";
import ExpenseCard from "../components/ExpenseCard";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
  {
    id: "9",
  },
  {
    id: "10",
  },
];

const Group = ({ navigation }) => {
  const [active, setActive] = useState("Expenses");

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        {/* Top squares */}
        <GroupInfoSquares />
        <View style={styles.nav}>
          <GroupNavLink
            active={active}
            setActive={setActive}
            value="Expenses"
          />
          <GroupNavLink active={active} setActive={setActive} value="Balance" />
          <GroupNavLink
            active={active}
            setActive={setActive}
            value="Settlement"
          />
        </View>
        <View style={styles.mainContainer}>
          {/* Expenses */}

          {active === "Expenses" && (
            <ScrollView style={styles.expensesContainer}>
              <Pressable onPress={() => navigation.navigate("Expense")}>
                <ExpenseCard />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Expense")}>
                <ExpenseCard />
              </Pressable>
            </ScrollView>
          )}

          {/* Balance */}
          {active === "Balance" && <Text>Balance</Text>}

          {/* Settlement */}
          {active === "Settlement" && <Text>Settlement</Text>}
        </View>
        <Pressable
          onPress={() => navigation.navigate("CreateExpense")}
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

export default Group;

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 30,
    marginRight: 30,
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 25,
  },

  expensesContainer: {
    marginTop: 30,
    height: 500,
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
