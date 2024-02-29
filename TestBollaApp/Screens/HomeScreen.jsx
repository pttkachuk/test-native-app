import React from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { toggleExitModal } from "../src/redux/exitModal/exitModalSlice";

const ReportScreen = React.lazy(() =>
  import("./ReportScreenFolder/ReportScreen")
);
const InitialScreen = React.lazy(() => import("./InitialScreen"));
const ExitModal = React.lazy(() =>
  import("../src/components/ExitModalFolder/ExitModal")
);

//import ReportScreen from "./ReportScreenFolder/ReportScreen";
//import InitialScreen from "./InitialScreen";
//import ExitModal from "../src/components/ExitModalFolder/ExitModal";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleExitModal());
  };
  const LogOutBtn = () => (
    <TouchableOpacity
      style={{ paddingRight: 20 }}
      activeOpacity={0.5}
      onPress={toggleModal}
    >
      <Ionicons name="exit-outline" size={22} color="#fff" />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <ExitModal />
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
          tabBarInactiveTintColor: "#D3D3D3",
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
