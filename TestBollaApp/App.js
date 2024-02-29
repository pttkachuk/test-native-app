import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { ActivityIndicator } from 'react-native';

//const HomeScreen = React.lazy(() => import('./Screens/HomeScreen'));
//const ReportScreen = React.lazy(() => import('./Screens/ReportScreenFolder/ReportScreen'));
//const InitialScreen = React.lazy(() => import('./Screens/InitialScreen'));
//const LoginScreen = React.lazy(() => import('./Screens/LoginScreenFolder/LoginScreen'));

import HomeScreen from './Screens/HomeScreen';
import ReportScreen from './Screens/ReportScreenFolder/ReportScreen';
import InitialScreen from './Screens/InitialScreen';
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
            <MainStack.Screen name='Report' component={ReportScreen} options={{
              headerShown: false,
            }} />
            <MainStack.Screen name='Main' component={InitialScreen} options={{ headerShown: false, }} />
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
