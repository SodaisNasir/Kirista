// In App.js in a new project

import * as React from 'react';
import {View, Text, Settings} from 'react-native';
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
import NewPassword from '../screens/auth/NewPassword';
import EventScreen from '../screens/homescreen/EventScreen';
import ViewEvent from '../screens/homescreen/ViewEvent';
import PopularBooks from '../screens/homescreen/PopularBooks';
import ViewManual from '../screens/homescreen/ViewManual';
import ViewParish from '../screens/homescreen/ViewParish';
import FeaturedParishes from '../screens/homescreen/FeaturedParishes';
import ParishesResult from '../screens/homescreen/ParishesResult';
import ViewBanner from '../screens/homescreen/ViewBanner';
import Searchbar from '../components/Searchbar';
import SearchBarWithArrow from '../components/SearchBarWithArrow';
import LibraryHeader from '../components/LibraryHeader';
import LibraryHome from '../screens/library/LibraryHome';
import LibraryHomeTwo from '../screens/library/LibraryHomeTwo';
import FilterModal from '../components/Modals/FilterModal';
import Terms from '../screens/more/Terms';
import Privacy from '../screens/more/Privacy';
import SettingsMore from '../screens/more/SettingsMore';
import Home from '../screens/homescreen/Home';
import BottomTabNavigator from './BottomTabNavigator';
import SelectCountry from '../components/SelectCountry';


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
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="EventScreen" component={EventScreen} />
        <Stack.Screen name="ViewEvent" component={ViewEvent} />
        <Stack.Screen name="PopularBooks" component={PopularBooks} />
        <Stack.Screen name="ViewManual" component={ViewManual} />
        <Stack.Screen name="ViewParish" component={ViewParish} />
        <Stack.Screen name="FeaturedParishes" component={FeaturedParishes} />
        <Stack.Screen name="ParishesResult" component={ParishesResult} />
        <Stack.Screen name="ViewBanner" component={ViewBanner} />
        <Stack.Screen name="Searchbar" component={Searchbar} />
        <Stack.Screen name="SearchBarWithArrow" component={SearchBarWithArrow} />
        <Stack.Screen name="FilterModal" component={FilterModal} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="SettingsMore" component={SettingsMore} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="SelectCountry" component={SelectCountry} />

  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
