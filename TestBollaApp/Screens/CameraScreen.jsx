import React from "react";
import { StyleSheet, View } from "react-native";

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Camera Screen</Text>
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

export default CameraScreen;
