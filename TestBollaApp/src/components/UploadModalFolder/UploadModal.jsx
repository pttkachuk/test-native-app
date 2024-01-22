import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./UploadModalStyles";

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
          <View style={styles.btnbox}>
            <TouchableOpacity style={styles.button} onPress={props.cameraFunc}>
              <Ionicons name="camera-outline" size={35} color="#073C85" />
            </TouchableOpacity>
            <Text style={styles.btnText}>Camera</Text>
          </View>
          <View style={styles.btnbox}>
            <TouchableOpacity style={styles.button} onPress={props.galleryFunc}>
              <Ionicons name="image-sharp" size={35} color="#008000" />
            </TouchableOpacity>
            <Text style={styles.btnText}>Foto</Text>
          </View>
          <View style={styles.btnbox}>
            <TouchableOpacity style={styles.button} onPress={props.pressFunc}>
              <Ionicons name="close-outline" size={35} color="#D22B2B" />
            </TouchableOpacity>
            <Text style={styles.btnText}>Annulla</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UploadModal;
