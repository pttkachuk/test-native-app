import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./UploadModalStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectModalVisible } from "../../redux/modal/modalSelectors";
import { requestClose, toggleModalVisible } from "../../redux/modal/modalSlice";
import { addPhoto } from "../../redux/data/dataSlice";

const UploadModal = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector(selectModalVisible);

  const requestCloseFunc = () => {
    Alert.alert("Modal has been closed.");
    dispatch(requestClose());
  };

  const toggleModal = () => {
    dispatch(toggleModalVisible());
  };

  //===================EXPO-IMAGE-PICKER=====================

  const pickImage = async () => {
    toggleModal();
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 0.5,
      });

      if (!result.canceled) {
        dispatch(addPhoto(result.assets[0].uri));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const makeImage = async () => {
    toggleModal();
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        quality: 0.5,
      });

      if (!result.canceled) {
        try {
          dispatch(addPhoto(result.assets[0].uri));
        } catch (error) {
          console.log(error);
        }
        saveToGallery(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //=========================================================

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={requestCloseFunc}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.btnbox}>
            <TouchableOpacity style={styles.button} onPress={makeImage}>
              <Ionicons name="camera-outline" size={35} color="#073C85" />
            </TouchableOpacity>
            <Text style={styles.btnText}>Camera</Text>
          </View>
          <View style={styles.btnbox}>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Ionicons name="image-sharp" size={35} color="#008000" />
            </TouchableOpacity>
            <Text style={styles.btnText}>Foto</Text>
          </View>
          <View style={styles.btnbox}>
            <TouchableOpacity style={styles.button} onPress={toggleModal}>
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
