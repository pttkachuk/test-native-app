import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Camera, CameraType } from "expo-camera";
import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Button from "../src/components/Button";

const CameraScreen = () => {
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState("");
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        //alert("Picture saved!");
        setImage(null);
        navigation.navigate("Report", { photo: { image } });
        console.log("saved successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const toggleCameratype = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const toggleFlashMode = () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  const goBack = () => {
    navigation.goBack();
    console.log("sono tornato alla homepage");
  };

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
          ratio="16:9"
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          >
            <Button title="Annulla" onPress={goBack} />
            <Button
              icon="flash"
              color={flash === Camera.Constants.FlashMode.off ? "gray" : "#fff"}
              onPress={toggleFlashMode}
            />
            <Button icon="retweet" onPress={toggleCameratype} />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Rifare"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <Button title="Salva" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <Button title="Scatta la foto" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Fira-Sans-Medium",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});

export default CameraScreen;
