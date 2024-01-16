import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from './Screens/HomeScreen';
import CameraScreen from './Screens/CameraScreen';
import ReportScreen from './Screens/ReportScreen';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='Home'>
        <MainStack.Screen name='Home' component={HomeScreen} options={{ title: 'Pagina principale' }} />
        <MainStack.Screen name='Report' component={ReportScreen} />
        <MainStack.Screen name='Camera' component={CameraScreen} />
      </MainStack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
