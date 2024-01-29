import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ReportScreen from "./ReportScreenFolder/ReportScreen";
import InitialScreen from "./InitialScreen";
import LoginScreen from "./LoginScreenFolder/LoginScreen";
import { useDispatch } from "react-redux";
import { signOut } from "../src/redux/auth/authSlice";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const signOutUser = () => {
    try {
      dispatch(signOut());
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  const LogOutBtn = () => (
    <TouchableOpacity
      style={{ paddingRight: 20 }}
      activeOpacity={0.5}
      onPress={signOutUser}
    >
      <Ionicons name="exit-outline" size={22} color="#fff" />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Report") {
              iconName = focused ? "document-text" : "document-text-outline";
            } else if (route.name === "Main") {
              iconName = focused ? "home" : "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#073C85",
          tabBarInactiveTintColor: "#A9A9A9",
          tabBarShowLabel: false,
          tabBarStyle: {
            width: "100%",
            height: 50,
            paddingHorizontal: 50,
            borderTopColor: "#A9A9A9",
            backgroundColor: "#fff",
          },
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
            headerRight: LogOutBtn,
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
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
});

export default HomeScreen;
