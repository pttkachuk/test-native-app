import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UploadModal from "../src/components/UploadModalFolder/UploadModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalVisible } from "../src/redux/modal/modalSlice";
import { selectUserName } from "../src/redux/auth/authSelector";

const InitialScreen = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleModalVisible());
  };

  const userName = useSelector(selectUserName);

  return (
    <View style={styles.container}>
      <UploadModal />
      <Text style={styles.userName}>
        {!userName ? "Nome Utente" : userName}
      </Text>
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
    marginTop: 170,
    marginBottom: 50,
    width: 170,
    height: 170,
    borderRadius: 90,
    backgroundColor: "#073C85",
    justifyContent: "center",
    alignItems: "center",
    elevation: 50,
  },
  description: {
    fontFamily: "Fira-Sans-Light",
    color: "#A9A9A9",
    fontSize: 14,
  },
});

export default InitialScreen;
