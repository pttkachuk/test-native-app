import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./LoginScreenStyle";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
