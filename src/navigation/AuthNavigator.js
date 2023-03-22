// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OverBoard from '../screens/auth/OverBoard';
import SignUp from '../screens/auth/SignUp';
import Countrycode from '../../Countrycode';
import PhoneInput from '../components/PhoneInput';
import Login from '../screens/auth/Login';
import Password from '../components/Password';
import OTP from '../screens/auth/Otp';
import ResetPassword from '../screens/auth/ResetPassword';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OverBoard"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OverBoard" component={OverBoard} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="PhoneInput" component={PhoneInput} />
        <Stack.Screen name="Countrycode" component={Countrycode} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
