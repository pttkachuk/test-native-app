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
      <View style={styles.cameraContainer}></View>
      <Text>Report Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#fff",
  },
  cameraContainer: {
    width: "100%",
    height: "45%",
    backgroundColor: "#A9A9A9",
    borderRadius: 15,
  },
});

export default ReportScreen;
