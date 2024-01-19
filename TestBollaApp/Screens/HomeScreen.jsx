import { Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ReportScreen from "./ReportScreen";
//import CameraScreen from "./CameraScreen";
import InitialScreen from "./InitialScreen";

const { width, height } = Dimensions.get("window");
const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
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
            //position: "absolute",
            width: "100%",
            height: height,
            height: 50,
            paddingHorizontal: 50,
            borderTopColor: "#A9A9A9",
            backgroundColor: "#fff",
          },
          //keyboardHidesTabBar: true,
          tabBarHideOnKeyboard: true,
        })}
        initialRouteName="Main"
      >
        <Tabs.Screen
          name="Main"
          component={InitialScreen}
          options={{
            headerTitle: "Pagina principale",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Fira-Sans-Light",
              fontSize: 14,
              color: "#fff",
            },
            headerStyle: { backgroundColor: "#073C85" },
          }}
        />
        <Tabs.Screen
          name="Report"
          component={ReportScreen}
          options={{
            headerTitle: "Dati da inserire",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Fira-Sans-Light",
              fontSize: 14,
              color: "#fff",
            },
            headerStyle: { backgroundColor: "#073C85" },
            //tabBarStyle: { display: "none" },
          }}
        />
        {/* <Tabs.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            headerShown: false,
          }}
        /> */}
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
