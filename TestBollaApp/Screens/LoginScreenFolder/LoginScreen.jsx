import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
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
import { selectIsLoggedIn } from "../../src/redux/auth/authSelector";
import { signIn } from "../../src/redux/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase/config";

import techneLogo from "../../src/images/techne-logo-2x.png";
import techneNarrow from "../../src/images/techne-logo-narrow.png";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userNameFocused, setUserNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
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
    } else if (name === "emailAddress") {
      setEmailFocused(true);
      return;
    } else if (name === "password") {
      setPasswordFocused(true);
      return;
    }
    return;
  };

  const handleBlur = (name) => {
    if (name === "username") {
      setUserNameFocused(false);
      return;
    } else if (name === "emailAddress") {
      setEmailFocused(false);
      return;
    } else if (name === "password") {
      setPasswordFocused(false);
      return;
    }
    return;
  };

  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

  const resetForm = () => {
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };

  const signInUser = async () => {
    if (!userName && !userEmail && !userPassword) {
      Alert.alert("Inserisci o tuoi credenziali!");
    } else {
      try {
        const credentials = await signInWithEmailAndPassword(
          auth,
          userEmail,
          userPassword
        );
        dispatch(
          signIn({
            email: userEmail,
            password: userPassword,
            userName: userName,
          })
        );
        console.log(credentials.user);
        return credentials.user;
      } catch (error) {
        console.log(error);
      } finally {
        resetForm();
        navigation.navigate("Main");
      }
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
                  borderColor: userNameFocused ? "#073C85" : "#D3D3D3",
                  marginBottom: 15,
                },
              ]}
              placeholder="Nome Utente"
              value={userName}
              textContentType="username"
              onChangeText={(text) => setUserName(text)}
              onFocus={() => handleFocus("username")}
              onBlur={() => handleBlur("username")}
            />
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: 1,
                  borderColor: emailFocused ? "#073C85" : "#D3D3D3",
                  marginBottom: 15,
                },
              ]}
              placeholder="Email dell'utente"
              value={userEmail}
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={(text) => setUserEmail(text)}
              onFocus={() => handleFocus("emailAddress")}
              onBlur={() => handleBlur("emailAddress")}
            />
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: 1,
                  borderColor: passwordFocused ? "#073C85" : "#D3D3D3",
                },
              ]}
              placeholder="Password dell'utente"
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
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Entra</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
