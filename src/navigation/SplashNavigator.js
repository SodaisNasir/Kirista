import * as React from 'react';
import {View, Text, Settings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LightSplash from '../screens/auth/LightSplash';

const Stack = createNativeStackNavigator();

function SplashNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashlight"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="splashlight"
          component={LightSplash}
          // options={{animation: 'flip'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default SplashNavigator;
