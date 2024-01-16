import React from "react";
import { StyleSheet, View } from "react-native";

const ReportScreen = () => {
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
  },
});

export default ReportScreen;
