import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from "react-native-safe-area-context"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen'


export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
          <Stack.Screen 
              name='SplashScreen'
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='SignInScreen'
              component={SignInScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='SignUpScreen'
              component={SignUpScreen}
              options={{
                headerShown: false,
              }}
            />
            
          </Stack.Navigator>
        {/*<HomeScreen />*/}  
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
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
