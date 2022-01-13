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
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import awsconfig from './src/aws-exports'
import CreateScreen from './screens/CreateScreen';
import { Authenticator } from 'aws-amplify-react-native';


/*
const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory= {}

class MyStorage {
  static syncPromise = null

  static setItem(key, value) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  },
  storage: MyStorage
})

*/

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})


function App() {
  const Stack = createNativeStackNavigator();


  return (
    <Provider store={store}>
      <Authenticator usernameAttributes="email" />
    </Provider>
  );
}

/*
<NavigationContainer>
        <SafeAreaProvider>

          <Stack.Navigator>
          
            
          </Stack.Navigator>
          
        </SafeAreaProvider>
      </NavigationContainer>
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
            <Stack.Screen 
              name='CreateScreen'
              component={CreateScreen}
              options={{
                headerShown: false,
              }}
            />
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;