import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={() => navigation.navigate("Test")}>
          <Text>Test</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
