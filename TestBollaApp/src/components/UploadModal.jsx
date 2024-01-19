import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const UploadModal = (props) => {
  //const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visibleFunc}
      onRequestClose={props.requestFunc}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={props.cameraFunc}
          >
            <Ionicons name="camera-outline" size={35} color="#073C85" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={props.galleryFunc}
          >
            <Ionicons name="image-sharp" size={35} color="#008000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={props.pressFunc}
          >
            <Ionicons name="close-outline" size={35} color="#D22B2B" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 22,
  },
  modalView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    //padding: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 15,
    elevation: 3,
    //borderWidth: 0.5,
    //borderColor: "#073C85",
  },
  buttonClose: {
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "#fff",
    fontFamily: "Fira-Sans-Light",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontFamily: "Fira-Sans-Light",
    textAlign: "center",
  },
});

export default UploadModal;
