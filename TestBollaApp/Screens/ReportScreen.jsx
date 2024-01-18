import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ReportScreen = () => {
  const navigation = useNavigation();
  const [statusCamera, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  const [statusMedia, requestMediaPernmssion] =
    ImagePicker.useCameraPermissions();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [code, setCode] = useState("");
  const [image, setImage] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [1, 1],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const clearReport = () => {
    setCode("");
    setImage("");
  };

  const sendMail = () => {
    Alert.alert(
      "Dati da mandare via mail:",
      `FOTO:${image} + CODICE FATTURATO:${code}`
    );
    console.log(
      "Dati da mandare via mail:",
      `FOTO:${image} + CODICE FATTURATO:${code}`
    );
    clearReport();
  };

  const toCamera = () => {
    console.log("to camera");
  };

  //const route = useRoute();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {image ? (
          <View style={styles.photoContainer}>
            <Image source={{ uri: image }} style={styles.photo} />
          </View>
        ) : (
          <TouchableOpacity style={styles.photoContainer} onPress={pickImage}>
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
        {/* <View style={styles.photoContainer}></View> */}
        <KeyboardAvoidingView
          behavior={Platform.OS == "android" ? "height" : "padding"}
          style={{ flex: 1 }}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Inserisci codice fatturato"
            value={code}
            onChangeText={(value) => setCode(value)}
            onFocus={() => setIsKeyboardVisible(true)}
            onBlur={() => setIsKeyboardVisible(false)}
          />
          <View style={styles.bottomBtns}>
            <TouchableOpacity style={styles.btn} onPress={clearReport}>
              <Text style={styles.btnText}>Elimina</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={sendMail}>
              <Text style={styles.btnText}>Invia</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  photoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 300,
    backgroundColor: "#073C85",
    borderRadius: 8,
    marginBottom: 15,
    overflow: "hidden",
  },
  textInput: {
    width: "100%",
    height: 50,
    fontFamily: "Fira-Sans-Light",
    paddingLeft: 15,
    backgroundColor: "#A9A9A9",
    borderRadius: 8,
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  bottomBtns: {
    display: "flex",
    padding: 0,
    marginTop: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    //borderWidth: 1,
    //borderColor: "black",
  },
  btn: {
    backgroundColor: "#073C85",
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Fira-Sans-Regular",
    fontSize: 12,
  },
});

export default ReportScreen;
