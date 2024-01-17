//import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState();

  //const [supportedRatios, setSupportedRatios] = useState([]);

  // useEffect(() => {
  //   async () => {
  //     const cameraRatio = await Camera.getSupportedRatiosAsync();
  //     setSupportedRatios(cameraRatio);
  //     console.log(supportedRatios);
  //   };
  // }, []);
  //const cameraRatio = getSupportedRatiosAsync();
  //console.log(cameraRatio);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameratype = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const cameraSettings = {
    flashMode: Camera.Constants.FlashMode.on,
    autoFocus: Camera.Constants.AutoFocus.on,
  };

  //const cameraRatio = getSupportedRatiosAsync();
  //console.log(cameraRatio);
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
        ratio="19:9"
        flashMode={cameraSettings.flashMode}
        autoFocus={cameraSettings.autoFocus}
      >
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.text}>Annulla</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={toggleCameratype}
          >
            <MaterialIcons name="flip-camera-ios" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  bottomButtonContainer: {
    flex: 1,
    //flexDirection: "row-reverse",
    backgroundColor: "trasparent",
    //marginBottom: 64,
  },
  bottomButton: {
    flex: 1,
    marginTop: "auto",
    marginRight: 50,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  backBtn: {
    flex: 1,
    marginTop: 50,
    padding: 0,
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CameraScreen;
