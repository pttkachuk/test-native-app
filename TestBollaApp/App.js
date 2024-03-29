import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreenFolder/LoginScreen';


const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Fira-Sans-Regular': require('./assets/fonts/Fira_Sans/FiraSans-Regular.ttf'),
    'Fira-Sans-Medium': require('./assets/fonts/Fira_Sans/FiraSans-Medium.ttf'),
    'Fira-Sans-Light': require('./assets/fonts/Fira_Sans/FiraSans-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator initialRouteName='Login'>
            <MainStack.Screen name='Home' component={HomeScreen} options={{
              headerShown: false,
            }} />
            <MainStack.Screen name='Login' component={LoginScreen} options={{
              headerShown: false,
            }} />
          </MainStack.Navigator>
          <StatusBar style='light' />
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}
