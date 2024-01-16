import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ReportScreen = () => {
  const navigation = useNavigation();
  // const {
  //   params: { userID },
  // } = useRoute();
  //console.log("i am here at report screen");
  return (
    <View style={styles.container}>
      <Text>Report Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default ReportScreen;
