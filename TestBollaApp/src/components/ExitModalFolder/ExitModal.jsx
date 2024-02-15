import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ExitModalStyles";
import {
  closeExitModal,
  requestExitModalCLose,
  toggleExitModal,
} from "../../redux/exitModal/exitModalSlice";
import { selectExitModalVisible } from "../../redux/exitModal/exitModalSelectors";
import { Ionicons } from "@expo/vector-icons";
//import { auth } from "../../firebase/config";
//import { signOut } from "../../redux/auth/authSlice";
import { logoutUserThunk } from "../../redux/auth/authThunk";

const ExitModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const modalVisible = useSelector(selectExitModalVisible);

  const requestCloseModal = () => {
    console.log("Modal has been closed");
    dispatch(requestExitModalCLose());
  };

  const toggleExit = () => {
    dispatch(toggleExitModal());
  };

  const signOutUser = () => {
    try {
      dispatch(closeExitModal());
      dispatch(logoutUserThunk());
      navigation.navigate("Login");
    } catch (error) {
      alert(error.message);
    }
    //finally {
    //   navigation.navigate("Login");
    // }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={requestCloseModal}
    >
      <View style={styles.centeredModalView}>
        <View style={styles.modalContent}>
          <Text style={styles.titleTxt}>Sicuro di voler uscire?</Text>
          <View style={styles.btnsContainer}>
            <View style={styles.btnbox}>
              <TouchableOpacity style={styles.exitButton} onPress={signOutUser}>
                <Ionicons name="exit-outline" size={35} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.btnText}>Esci</Text>
            </View>
            <View style={styles.btnbox}>
              <TouchableOpacity style={styles.cancelBtn} onPress={toggleExit}>
                <Ionicons name="close-outline" size={35} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.btnText}>Annulla</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExitModal;
