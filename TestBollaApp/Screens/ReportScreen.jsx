import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Button,
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
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const toCamera = () => {
    //navigation.navigate("Camera");
    console.log("to camera");
  };

  const route = useRoute();
  //console.log(route.params.photo);

  //console.log(photo);

  // const {
  //   params: { userID },
  // } = useRoute();
  //console.log("i am here at report screen");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {image ? (
          <View style={styles.photoContainer}>
            <Image source={{ uri: image }} style={styles.photo} />
          </View>
        ) : (
          <TouchableOpacity style={styles.photoContainer} onPress={toCamera}>
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
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Inserisci codice"
            value={text}
            onChange={(value) => {
              setText(value);
            }}
            onFocus={() => {
              setIsKeyboardVisible(true);
            }}
            onBlur={() => {
              setIsKeyboardVisible(false);
            }}
          />
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
    height: 250,
    backgroundColor: "#073C85",
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden",
  },
  photoIcon: {},
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});

export default ReportScreen;
