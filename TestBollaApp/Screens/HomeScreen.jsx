import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Pagina Report"
        onPress={() => navigation.navigate("Report")}
      />
      <Button
        title="Pagina Camera"
        onPress={() => navigation.navigate("Camera")}
      />
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

export default HomeScreen;
