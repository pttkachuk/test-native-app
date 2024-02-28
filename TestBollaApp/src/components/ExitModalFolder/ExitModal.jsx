import React, { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
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
import { logoutUserThunk } from "../../redux/auth/authThunk";

const ExitModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const modalVisible = useSelector(selectExitModalVisible);
  const [isLoading, setIsLoading] = useState(false);

  const requestCloseModal = () => {
    console.log("Modal has been closed");
    dispatch(requestExitModalCLose());
  };

  const toggleExit = () => {
    dispatch(toggleExitModal());
  };

  const signOutUser = () => {
    try {
      setIsLoading(true);
      dispatch(logoutUserThunk())
        .then(() => {
          setIsLoading(false);
          dispatch(closeExitModal());
          navigation.navigate("Login");
        })
        .catch(() => {
          setIsLoading(false);
          handleError(error);
        });
    } catch (error) {
      setIsLoading(false);
      handleError(error);
    }
  };

  const handleError = (error) => {
    let errorMessage = Alert.alert(
      "Si è verificato un errore durante il logout. Riprova più tardi."
    );
    if (error.response && error.response.status === 401) {
      errorMessage = Alert.alert(
        "Si è verificato un errore. Riprova più tardi."
      );
    } else if (error.response && error.response.status === 500) {
      errorMessage = Alert.alert(
        "Errore interno del server. Riprova più tardi."
      );
    } else if (error.request) {
      errorMessage = Alert.alert(
        "Errore di rete. Controlla la tua connessione e riprova."
      );
    }

    Alert.alert("Errore durante l'accesso", errorMessage);
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
