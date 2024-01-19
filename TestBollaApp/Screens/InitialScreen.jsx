import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UploadModal from "../src/components/UploadModal";

const InitialScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const requestClose = () => {
    Alert.alert("Modal has been closed.");
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const toCamera = () => {
    navigation.navigate("Report");
  };
  return (
    <View style={styles.container}>
      <UploadModal
        visibleFunc={modalVisible}
        requestFunc={requestClose}
        pressFunc={toggleModal}
      />
      <Text style={styles.userName}>Nome Cognome</Text>
      <TouchableOpacity style={styles.addPhotoBtn} onPress={openModal}>
        <MaterialIcons name="add" size={90} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.description}>Premi "Piu" per aggiungere i dati</Text>
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
    elevation: 35,
  },
  description: {
    fontFamily: "Fira-Sans-Light",
    fontSize: 14,
  },
});

export default InitialScreen;
