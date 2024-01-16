import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ReportScreen from "./ReportScreen";
import CameraScreen from "./CameraScreen";
import InitialScreen from "./InitialScreen";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Report") {
              iconName = focused ? "document-text" : "document-text-outline";
            } else if (route.name === "Camera") {
              iconName = focused ? "camera" : "camera-outline";
            } else if (route.name === "Main") {
              iconName = focused ? "home" : "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#073C85",
          tabBarInactiveTintColor: "#A9A9A9",
          tabBarShowLabel: false,
          tabBarStyle: {
            margin: 0,
            width: "100%",
            height: 80,
            paddingHorizontal: 70,
            borderTopColor: "#A9A9A9",
            //backgroundColor: "#ff",
          },
        })}
      >
        <Tabs.Screen
          name="Main"
          component={InitialScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Tabs.Screen
          name="Report"
          component={ReportScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Tabs.Screen
          name="Camera"
          component={CameraScreen}
          options={{ headerTitleAlign: "center" }}
        />
      </Tabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
});

export default HomeScreen;
