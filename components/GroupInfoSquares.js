import { View, Text, StyleSheet, Image } from "react-native";
import img from "../assets/group.png";

const GroupInfoSquares = () => {
  return (
    <View style={styles.infoSquares}>
      <View style={styles.infoSquareLeft}>
        <Text style={styles.infoSquareLeftAmount}>$500,00</Text>
        <Text style={styles.infoSquareLeftText}>Total Spent</Text>
      </View>
      <View style={styles.infoSquareRight}>
        <View style={styles.participantContainer}>
          <Image source={img} />
        </View>
        <Text style={styles.infoSquareRightText}>Participants</Text>
      </View>
    </View>
  );
};
export default GroupInfoSquares;

const styles = StyleSheet.create({
  infoSquares: {
    flexDirection: "row",
  },
  infoSquareLeft: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flex: 1,
    backgroundColor: "#3869FE",
    height: 140,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },

  infoSquareLeftAmount: {
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
  },
  infoSquareLeftText: {
    color: "#C1DCFF",
  },

  infoSquareRight: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    flex: 1,
    backgroundColor: "#E3E3E3",
    height: 140,
    marginLeft: 5,
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },

  infoSquareRightText: {
    color: "#79797B",
  },

  participantContainer: {
    marginBottom: 5,
  },
});
