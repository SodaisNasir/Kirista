// In App.js in a new project

import * as React from 'react';
import {View, Text, Settings} from 'react-native';
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
import EventScreen from '../screens/homescreen/EventScreen';
import ViewEvent from '../screens/homescreen/ViewEvent';
import PopularBooks from '../screens/homescreen/PopularBooks';
import ViewManual from '../screens/homescreen/ViewManual';
import ViewParish from '../screens/homescreen/ViewParish';
import FeaturedParishes from '../screens/homescreen/FeaturedParishes';
import ParishesResult from '../screens/homescreen/ParishesResult';
import ViewBanner from '../screens/homescreen/ViewBanner';
import Searchbar from '../components/Searchbar';
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
import HomeHeader from '../components/HomeHeader';
import SearchResult from '../components/SearchResult';
import SearchBarScreen from '../components/SearchBarScreen';
import Countrycode from '../components/Countrycode';
import Contact from '../screens/more/Contact';
import EditProfile from '../screens/more/EditProfile';
import About from '../screens/more/About';
import DarkMode from '../screens/more/DarkMode';
import Language from '../screens/more/Language';
import Rccg from '../screens/homescreen/RCCG/Rccg';
import RccgStructure from '../screens/homescreen/RCCG/RccgStructure';
import RccgContinent from '../screens/homescreen/RCCG/RccgContinent';
import Feedback from '../screens/more/Feedback';
import Ad from '../components/Advertisement';
import Advertisement from '../components/Advertisement';
import SettingsGuest from '../screens/more/SettingsGuest';
import Readone from '../screens/homescreen/Read Book/Readone';
import Readtwo from '../screens/homescreen/Read Book/Readtwo';
import LightSplash from '../screens/auth/LightSplash';
import Faq from '../screens/more/Faq';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashlight"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="OverBoard"
          component={OverBoard}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="splashlight"
          component={LightSplash}
          options={{animation: 'flip'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
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
          name="BottomTabNavigator"
          component={BottomTabNavigator}
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

        {/* <Stack.Screen name="HomeHeader" component={HomeHeader} /> */}
        {/* <Stack.Screen name="SearchResult" component={SearchResult} /> */}
        {/* <Stack.Screen name="SearchBarScreen" component={SearchBarScreen} /> */}
        {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
        {/* <Stack.Screen name="Rccg" component={Rccg} /> */}
        {/* <Stack.Screen name="RccgStructure" component={RccgStructure} />
        <Stack.Screen name="RccgContinent" component={RccgContinent} /> */}
        {/* <Stack.Screen name="Readone" component={Readone} />
        <Stack.Screen name="Readtwo" component={Readtwo} /> */}

        {/* <Stack.Screen name="EventScreen" component={EventScreen} />
        <Stack.Screen name="ViewEvent" component={ViewEvent} /> */}
        {/* <Stack.Screen name="PopularBooks" component={PopularBooks} />
        <Stack.Screen name="ViewManual" component={ViewManual} /> */}
        {/* <Stack.Screen name="ViewParish" component={ViewParish} />
        <Stack.Screen name="FeaturedParishes" component={FeaturedParishes} />
        <Stack.Screen name="ParishesResult" component={ParishesResult} /> */}
        {/* <Stack.Screen name="ViewBanner" component={ViewBanner} />
        <Stack.Screen name="Searchbar" component={Searchbar} />
        */}
        {/* <Stack.Screen name="FilterModal" component={FilterModal} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
