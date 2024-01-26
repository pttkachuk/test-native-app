import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import UploadModal from "../../src/components/UploadModalFolder/UploadModal";
import { styles } from "./ReportScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { addCode, clearData } from "../../src/redux/data/dataSlice";
import { selectCode, selectImage } from "../../src/redux/data/dataSelectors";
import { toggleModalVisible } from "../../src/redux/modal/modalSlice";
import { selectUserName } from "../../src/redux/auth/authSelector";

const ReportScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);

  const image = useSelector(selectImage);
  const code = useSelector(selectCode);
  const userName = useSelector(selectUserName);

  //===============================================
  const onChangeValue = (value) => {
    dispatch(addCode(value));
  };

  const toggleModal = () => {
    dispatch(toggleModalVisible());
  };

  const clearReport = () => {
    dispatch(clearData());
  };

  const goHome = () => {
    navigation.navigate("Main");
    clearReport();
  };
  //===============================================

  const sendMail = async () => {
    try {
      const mailBody = `Buongiorno.\n\n Invio la bolla con numero di commessa: ${code}.\n\n ${
        !userName ? "" : `Distinti saluti, ${userName}.`
      }\n\n`;
      await MailComposer.composeAsync({
        recipients: ["petrotkachuk6@gmail.com"],
        subject: "Documento di trasporto",
        body: mailBody,
        attachments: [image],
      });
    } catch (error) {
      console.error("Error nell'invio dell'e-mail", error);
      Alert.alert(
        "Errore",
        "Si è verificato un error durante l'invio dell'e-mail"
      );
    }
    clearReport();
    navigation.navigate("Main");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <UploadModal />
        <View style={styles.container}>
          {image ? (
            <View style={styles.photoInContainer}>
              <Image source={{ uri: image }} style={styles.photo} />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.photoContainer}
              onPress={toggleModal}
            >
              <MaterialIcons name="add" size={80} color="#fff" />
              <Text
                style={{
                  marginTop: 5,
                  fontFamily: "Fira-Sans-Regular",
                  fontSize: 12,
                  color: "#fff",
                }}
              >
                Aggiungi la foto
              </Text>
            </TouchableOpacity>
          )}
          <TextInput
            style={[
              styles.textInput,
              {
                borderWidth: 1,
                borderColor: isFocused ? "#073C85" : "#D3D3D3",
              },
            ]}
            placeholder="Inserisci numero di commessa"
            value={code}
            onChangeText={onChangeValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!image || !code ? (
            <View style={styles.exitBtnWrap}>
              <Text style={styles.alertText}>
                prima aggiungi tutti i dati e dopo potrai inviarli
              </Text>
              <TouchableOpacity style={styles.exitBtn} onPress={goHome}>
                <Text style={styles.exitBtnText}>
                  Torna alla Pagina Principale
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.bottomBtns}>
              <TouchableOpacity style={styles.btn} onPress={clearReport}>
                <Text style={styles.btnText}>Elimina</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={sendMail}>
                <Text style={styles.btnText}>Invia</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ReportScreen;
