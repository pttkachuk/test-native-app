import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./LoginScreenStyle";
import { useSelector } from "react-redux";
import {
  selectEmail,
  selectPassword,
  selectUserName,
} from "../../src/redux/auth/authSelector";
const imageTechne = "../../src/images/logoptfinalthelastonewow.png";

const LoginScreen = () => {
  const [isFocused, setIsFocused] = useState(false);

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectEmail);
  const userPassword = useSelector(selectPassword);

  const handleFocus = (key) => {
    setIsFocused(key);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: 1,
                  borderColor: isFocused ? "#073C85" : "#D3D3D3",
                  marginBottom: 15,
                },
              ]}
              placeholder="Nome Utente"
              value={userName}
              textContentType="nickname"
              onFocus={() => handleFocus("nickname")}
              onBlur={handleBlur}
            />
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: 1,
                  borderColor: isFocused ? "#073C85" : "#D3D3D3",
                  marginBottom: 15,
                },
              ]}
              placeholder="Email dell'utente"
              value={userEmail}
              textContentType="emailAddress"
              onFocus={() => handleFocus("emailAddress")}
              onBlur={handleBlur}
            />
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: 1,
                  borderColor: isFocused ? "#073C85" : "#D3D3D3",
                },
              ]}
              placeholder="Password dell'utente"
              value={userPassword}
              textContentType="password"
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
            />
          </KeyboardAvoidingView>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Mostra Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Entra</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
