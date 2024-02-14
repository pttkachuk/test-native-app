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
//import { selectIsLoggedIn } from "../../src/redux/auth/authSelector";
import { selectIsAuth } from "../../src/redux/auth/authSelector";
//import { signIn } from "../../src/redux/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
//import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../../src/firebase/config";

import techneLogo from "../../src/images/techno-login-bottom.png";
import techneNarrow from "../../src/images/techne-logo-narrow.png";
import { loginUserThunk } from "../../src/redux/auth/authThunk";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const [userNameFocused, setUserNameFocused] = useState(false);
  const [userLoginFocused, setUserLoginFocused] = useState(false);
  const [userPasswordFocused, setUserPasswordFocused] = useState(false);

  const isLoggedIn = useSelector(selectIsAuth);

  const [userName, setUserName] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("Home");
    }
  }, [isLoggedIn, navigation]);

  const handleFocus = (name) => {
    if (name === "username") {
      setUserNameFocused(true);
      return;
    } else if (name === "userLogin") {
      setUserLoginFocused(true);
      return;
    } else if (name === "password") {
      setUserPasswordFocused(true);
      return;
    }
    return;
  };

  const handleBlur = (name) => {
    if (name === "username") {
      setUserNameFocused(false);
      return;
    } else if (name === "userLogin") {
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
    //setUserName("");
    setUserLogin("");
    setUserPassword("");
  };

  const signInUser = async () => {
    if (!userLogin && !userPassword) {
      return Alert.alert("Inserisci o tuoi credenziali!");
    }
    try {
      setIsLoading(true);
      dispatch(
        loginUserThunk({
          login: userLogin,
          password: userPassword,
        })
      );
      setIsLoading(false);
      resetForm();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert(
        "Errore durante l'accesso",
        "Verifica le tue credenziali e riprova."
      );
    } finally {
      navigation.navigate("Home");
    }
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
              autoCapitalize="none"
              autoComplete="username"
              keyboardType="default"
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
                  borderColor: userPassword ? "#073C85" : "#D3D3D3",
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
