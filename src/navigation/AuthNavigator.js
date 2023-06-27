// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OverBoard from '../screens/auth/OverBoard';
import SignUp from '../screens/auth/SignUp';
import PhoneInput from '../components/PhoneInput';
import Login from '../screens/auth/Login';
import Password from '../components/Password';
import OTP from '../screens/auth/Otp';
import ResetPassword from '../screens/auth/ResetPassword';
import NewPassword from '../screens/auth/NewPassword';
import Terms from '../screens/more/Terms';
import Privacy from '../screens/more/Privacy';
import SelectCountry from '../components/SelectCountry';
import Countrycode from '../components/Countrycode';
import Contact from '../screens/more/Contact';
import About from '../screens/more/About';
import DarkMode from '../screens/more/DarkMode';
import Language from '../screens/more/Language';
import Feedback from '../screens/more/Feedback';
import Advertisement from '../components/Advertisement';
import SettingsGuest from '../screens/more/SettingsGuest';
import Faq from '../screens/more/Faq';
import BottomTabNavigator from './BottomTabNavigator';
import FeaturedCountry from '../components/FeaturedCountry';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OverBoard"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="OverBoard"
          component={OverBoard}
          options={{animation: 'flip'}}
        />
       
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="FeaturedCountry"
          component={FeaturedCountry}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="PhoneInput"
          component={PhoneInput}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Countrycode"
          component={Countrycode}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{animation: 'flip'}}
        />

        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="SelectCountry"
          component={SelectCountry}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{animation: 'flip'}}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="DarkMode"
          component={DarkMode}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Advertisement"
          component={Advertisement}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="SettingsGuest"
          component={SettingsGuest}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="Faq"
          component={Faq}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{animation: 'flip'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
