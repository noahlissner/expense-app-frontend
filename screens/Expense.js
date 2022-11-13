import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ExpenseOwnerCard from "../components/ExpenseOwnerCard";
import ExpenseMemberCard from "../components/ExpenseMemberCard";
import { useState, useEffect } from "react";
const Expense = ({ route, navigation }) => {
  const [expense, setExpense] = useState();

  // useEffect(() => {
  //   const foundExpense = group?.data?.data?.expenses?.find(
  //     (expense) => expense.id === route.params.expenseId
  //   );
  //   setExpense(foundExpense);
  // }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.expenseOwner}>
        <ExpenseOwnerCard user={expense?.owner} amount={expense?.amount} />
      </View>

      {/* expense info */}
      <View style={styles.expenseInfoContainer}>
        <View style={styles.expenseDesc}>
          <Text style={styles.expenseDescValue}>{expense?.title}</Text>
          <Text style={styles.expenseDescTitle}>Description</Text>
        </View>
        <View style={styles.expenseDate}>
          <Text style={styles.expenseDateValue}>May 30 - 2022</Text>
          <Text style={styles.expenseDateTitle}>Date</Text>
        </View>
      </View>
      {/* Expense members */}
      <ScrollView style={styles.expenseMembersContainer}>
        {/*  */}
        {expense?.users?.map((member) => (
          <ExpenseMemberCard member={member} key={member.id} />
        ))}
        {/*  */}
      </ScrollView>
    </View>
  );
};
export default Expense;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#3869FE",
    flex: 1,
  },

  expenseOwner: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },

  //   Expense Info

  expenseInfoContainer: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
  },
  expenseDesc: {},
  expenseDescValue: {
    color: "#FAFFFF",
    fontSize: 24,
    fontWeight: "500",
  },
  expenseDescTitle: {
    color: "#D0E2FF",
    fontSize: 12,
    marginTop: 5,
  },

  expenseDate: {
    marginTop: 15,
  },
  expenseDateValue: {
    color: "#FAFFFF",
    fontSize: 24,
    fontWeight: "500",
  },
  expenseDateTitle: {
    color: "#D0E2FF",
    fontSize: 12,
    marginTop: 5,
  },

  //   Expense Members
  expenseMembersContainer: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 40,
  },
});
