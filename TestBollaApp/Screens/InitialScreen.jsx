import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InitialScreen = () => {
  //console.log("i am here at Main screen");
  return (
    <View style={styles.container}>
      <Text>Initial Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InitialScreen;
