import { View, Text, Pressable, StyleSheet } from "react-native";
const GroupNavLink = ({ active, setActive, value }) => {
  return (
    <Pressable onPress={() => setActive(value)}>
      <Text style={[styles.navItem, active === value && styles.navItemActive]}>
        {value}
      </Text>
    </Pressable>
  );
};
export default GroupNavLink;

const styles = StyleSheet.create({
  navItem: {
    color: "#A6A8AA",
    fontWeight: "700",
  },

  navItemActive: {
    color: "#3869FE",
  },
});
