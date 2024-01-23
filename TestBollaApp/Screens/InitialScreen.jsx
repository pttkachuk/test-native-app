import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UploadModal from "../src/components/UploadModalFolder/UploadModal";
import { useDispatch } from "react-redux";
import { toggleModalVisible } from "../src/redux/modal/modalSlice";

const InitialScreen = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleModalVisible());
  };

  return (
    <View style={styles.container}>
      <UploadModal />
      <Text style={styles.userName}>Nome Cognome</Text>
      <TouchableOpacity style={styles.addPhotoBtn} onPress={toggleModal}>
        <MaterialIcons name="add" size={90} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.description}>
        Premi "Piu" per aggiungere la foto del documento
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    elevation: 50,
  },
  description: {
    fontFamily: "Fira-Sans-Light",
    fontSize: 14,
  },
});

export default InitialScreen;
