import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ExpenseMemberCard = ({ member }) => {
  return (
    <View style={styles.expenseMember}>
      <View style={styles.expenseMemberLeft}>
        <Ionicons name="person-circle-outline" size={48} color="#525252" />
        <Text style={styles.expenseMemberName}>
          {member.firstname} {member.lastname}
        </Text>
      </View>
      <Text style={styles.expenseMemberAmount}>
        ${member.amount.toFixed(2)}
      </Text>
    </View>
  );
};
export default ExpenseMemberCard;

const styles = StyleSheet.create({
  expenseMember: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  expenseMemberLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  expenseMemberName: {
    marginLeft: 15,
    color: "#2D2F33",
    fontSize: 16,
    fontWeight: "500",
  },
  expenseMemberAmount: {
    color: "#2D2F33",
    fontSize: 16,
    fontWeight: "500",
  },
});
