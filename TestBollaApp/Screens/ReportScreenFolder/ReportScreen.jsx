import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
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
import UploadModal from "../../src/components/UploadModal";
import { saveToGallery } from "../../src/helpers/SaveToGallery";
import { styles } from "./ReportScreenStyles";

//import { useDispatch, useSelector } from "react-redux";
//import { selectCode, selectImage } from "../src/redux/data/dataSelectors";
//import { addCode, addPhoto, clearData } from "../src/redux/data/dataSlice";

const ReportScreen = () => {
  //const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //const image = useSelector(selectImage);
  //const code = useSelector(selectCode);
  //console.log("reportScreen image:", image);

  const [code, setCode] = useState("");
  const [image, setImage] = useState("");

  // const onChangeValue = (value) => {
  //   dispatch(addCode({ code: value }));
  //   console.log(value);
  // };

  //===============================================
  const requestClose = () => {
    Alert.alert("Modal has been closed.");
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  //===============================================

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
        setImage(result.assets[0].uri);
        //dispatch(addPhoto(result.assets[0].uri));
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
        setImage(result.assets[0].uri);
        // try {
        //   dispatch(addPhoto(result.assets[0].uri));
        // } catch (error) {
        //   console.log(error);
        // }
        saveToGallery(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //===============================================

  const clearReport = () => {
    setCode("");
    setImage("");
  };

  // const clearReport = () => {
  //   dispatch(clearData());
  // };

  //===============================================

  const sendMail = async () => {
    try {
      const mailBody = `Buongiorno.\n\n Invio la bolla con numero di commessa: ${code}.\n\n`;
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
  };

  const goHome = () => {
    navigation.navigate("Main");
    clearReport();
    //console.log("btn goHome", `Photo:${image} + Code:${code}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "android" ? "height" : "padding"}
        style={{ flex: 1 }}
      >
        <UploadModal
          visibleFunc={modalVisible}
          requestFunc={requestClose}
          pressFunc={toggleModal}
          cameraFunc={makeImage}
          galleryFunc={pickImage}
        />
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
            onChangeText={(value) => setCode(value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!image && !code ? (
            <View style={styles.exitBtnWrap}>
              <Text style={styles.alertText}>
                prima aggiungi i dati e dopo potrai inviarli
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
