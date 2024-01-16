import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CameraScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Camera Screen</Text>
      {/* <Button title="Torna indietro" onPress={() => navigation.goBack()} /> */}
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
