// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OverBoard from '../screens/auth/OverBoard';
import SignUp from '../screens/auth/SignUp';
<<<<<<< Updated upstream
import Countrycode from '../../Countrycode';
import PhoneInput from '../components/PhoneInput';
import Login from '../screens/auth/Login';

=======
import OTP from '../screens/auth/Otp';
>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OTP"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OverBoard" component={OverBoard} />
        <Stack.Screen name="SignUp" component={SignUp} />
<<<<<<< Updated upstream
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PhoneInput" component={PhoneInput} />
        <Stack.Screen name="Countrycode" component={Countrycode} />
     </Stack.Navigator>
=======
        <Stack.Screen name="OTP" component={OTP} />
      </Stack.Navigator>
>>>>>>> Stashed changes
    </NavigationContainer>
  );
}

export default Route;
