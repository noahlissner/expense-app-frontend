import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ExpenseOwnerCard from "../components/ExpenseOwnerCard";
import ExpenseMemberCard from "../components/ExpenseMemberCard";
const Expense = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.expenseOwner}>
        <ExpenseOwnerCard />
      </View>

      {/* expense info */}
      <View style={styles.expenseInfoContainer}>
        <View style={styles.expenseDesc}>
          <Text style={styles.expenseDescValue}>Dinner</Text>
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
        <ExpenseMemberCard />
        <ExpenseMemberCard />
        <ExpenseMemberCard />
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
