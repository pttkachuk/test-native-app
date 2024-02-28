import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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
import { styles } from "./LoginScreenStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../../src/redux/auth/authSelector";
import { useNavigation } from "@react-navigation/native";

import techneLogo from "../../src/images/techno-login-bottom.png";
import techneNarrow from "../../src/images/techne-logo-narrow.png";
import { loginUserThunk } from "../../src/redux/auth/authThunk";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const [userLoginFocused, setUserLoginFocused] = useState(false);
  const [userPasswordFocused, setUserPasswordFocused] = useState(false);

  const isAuth = useSelector(selectUserToken);
  //console.log(isAuth);

  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    if (isAuth) {
      navigation.navigate("Home");
    }
  }, [isAuth, navigation]);

  const handleFocus = (name) => {
    if (name === "userLogin") {
      setUserLoginFocused(true);
      return;
    } else if (name === "password") {
      setUserPasswordFocused(true);
      return;
    }
    return;
  };

  const handleBlur = (name) => {
    if (name === "userLogin") {
      setUserLoginFocused(false);
      return;
    } else if (name === "password") {
      setUserPasswordFocused(false);
      return;
    }
    return;
  };

  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

  const resetForm = () => {
    setUserLogin("");
    setUserPassword("");
  };

  const signInUser = () => {
    if (!userLogin && !userPassword) {
      Alert.alert("Inserire tutti i credenziali");
      return;
    }
    try {
      setIsLoading(true);
      dispatch(
        loginUserThunk({
          login: userLogin,
          password: userPassword,
        })
      )
        .then(() => {
          setIsLoading(false);
          resetForm();
        })
        .catch((error) => {
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
      "Si è verificato un errore durante il login. Riprova più tardi."
    );
    if (error.response && error.response.status === 401) {
      errorMessage = Alert.alert("Credenziali non valide. Verifica e riprova.");
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={techneNarrow} style={styles.photo} />

        <Text style={styles.title}>Entra nel Bolla App</Text>
        <View style={styles.inputsContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 0}
          >
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: 1,
                  borderColor: userLoginFocused ? "#073C85" : "#D3D3D3",
                  marginBottom: 15,
                },
              ]}
              placeholder="Login"
              value={userLogin}
              autoComplete="username"
              textContentType="username"
              onChangeText={(text) => setUserLogin(text)}
              onFocus={() => handleFocus("userLogin")}
              onBlur={() => handleBlur("userLogin")}
            />
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: 1,
                  borderColor: userPasswordFocused ? "#073C85" : "#D3D3D3",
                },
              ]}
              placeholder="Password"
              value={userPassword}
              autoComplete="password"
              textContentType="password"
              secureTextEntry={hidePassword}
              onChangeText={(text) => setUserPassword(text)}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
            />
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.btn} onPress={signInUser}>
          <Text style={styles.btnText}>Entra</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePassword} disabled={!userPassword}>
          <Text style={styles.password}>
            {hidePassword ? "Mostra password" : "Nascondi password"}
          </Text>
        </TouchableOpacity>
        <Image source={techneLogo} style={styles.bottomLogo} />
        {isLoading && <ActivityIndicator size="small" color="#073C85" />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
