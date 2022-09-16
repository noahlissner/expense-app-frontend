import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const ExpenseCard = () => {
  return (
    <View style={styles.wrapper}>
      {/* Left */}
      <View style={styles.containerLeft}>
        <Ionicons name="person-circle-outline" size={48} color="#525252" />
        <View style={styles.expenseInfo}>
          <Text style={styles.expenseTitle}>Dinner</Text>
          <Text style={styles.expenseDate}>
            May 30 - <Text style={styles.expenseOwner}>By Mark</Text>
          </Text>
        </View>
      </View>
      {/* Right */}
      <Text>$50,00</Text>
    </View>
  );
};
export default ExpenseCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 14,
    marginBottom: 10,
  },

  containerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  expenseInfo: {
    marginLeft: 12,
  },

  expenseTitle: {
    fontSize: 16,
    color: "#2D2F33",
    fontWeight: "500",
  },

  expenseDate: {
    fontSize: 12,
    color: "#A6A8AA",
  },

  expenseOwner: {
    color: "#2D2F33",
  },

  expenseInfoLower: {
    flexDirection: "row",
  },
});
