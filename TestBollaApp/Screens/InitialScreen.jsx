import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const InitialScreen = () => {
  const navigation = useNavigation();
  const toCamera = () => {
    navigation.navigate("Camera");
    console.log("to Camera");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Nome Cognome</Text>
      <TouchableOpacity style={styles.addPhotoBtn} onPress={toCamera}>
        <MaterialIcons name="add" size={90} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.description}>Premi "Piu" per scattare la foto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#fff",
  },
  userName: {
    marginTop: 20,
    fontFamily: "Fira-Sans-Regular",
    fontSize: 20,
  },
  addPhotoBtn: {
    marginTop: "45%",
    marginBottom: "15%",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#073C85",
    justifyContent: "center",
    alignItems: "center",
    elevation: 35,
  },
  description: {
    fontFamily: "Fira-Sans-Light",
    fontSize: 14,
  },
});

export default InitialScreen;
