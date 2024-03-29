import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LibraryHome from '../screens/library/LibraryHome';
import {NavigationContainer} from '@react-navigation/native';
import Privacy from '../screens/more/Privacy';

import LibraryHomeTwo from '../screens/library/LibraryHomeTwo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsMore from '../screens/more/SettingsMore';
import Terms from '../screens/more/Terms';
import Home from '../screens/homescreen/Home';
import PopularBooks from '../screens/homescreen/PopularBooks';
import FeaturedParishes from '../screens/homescreen/FeaturedParishes';
import Events from '../screens/homescreen/Events/Events';
import ViewManual from '../screens/homescreen/ViewManual';
import ViewParish from '../screens/homescreen/ViewParish';
import ParishFinder from '../screens/homescreen/Parish Finder/ParishFinder';
import Language from '../screens/more/Language';
import Readone from '../screens/homescreen/Read Book/Readone';
import Readtwo from '../screens/homescreen/Read Book/Readtwo';
import DrawerScreen from '../components/DrawerScreen';
import ImageModal from '../components/Modals/ImageModal';
import Contact from '../screens/more/Contact';
import EditProfile from '../screens/more/EditProfile';
import About from '../screens/more/About';
import DarkMode from '../screens/more/DarkMode';


import SettingsGuest from '../screens/more/SettingsGuest';
import Feedback from '../screens/more/Feedback';
import Faq from '../screens/more/Faq';
import Advertisement from '../components/Advertisement';
import ViewBanner from '../screens/homescreen/ViewBanner';
import SelectCountry from '../components/SelectCountry';
import EventScreen from '../screens/homescreen/EventScreen';
import Searchbar from '../components/Searchbar';
import SearchResult from '../components/SearchResult';
import Rccg from '../screens/homescreen/RCCG/Rccg';
import RccgContinent from '../screens/homescreen/RCCG/RccgContinent';
import RccgStructure from '../screens/homescreen/RCCG/RccgStructure';
import Login from '../screens/auth/Login';
import ParishesResult from '../screens/homescreen/ParishesResult';
import SelectRegion from '../screens/homescreen/Parish Finder/SelectRegion';
import HomeScreen from '../screens/HomeScreen';
import AdvWebView from '../components/AdvWebView';
import RegionCountry from '../screens/RegionCountry';
import Country from '../screens/Country';
import { useSelector } from 'react-redux';
import FeaturedCountry from '../components/FeaturedCountry';
import ViewBookTitle from '../screens/homescreen/Read Book/ViewBookTitle';
import CusWebView from '../components/CusWebView';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={AllHome}
      
      />
      <Tab.Screen
        name="Library"
        component={LibraryStack}
      />

      <Tab.Screen
        name="More"
        component={AllSettings}
      />
      <Tab.Screen
        name="ViewBookTitle"
        component={ViewBookTitle}
      />
    </Tab.Navigator>
     </NavigationContainer>
  );
};

export default BottomTabNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
         <Stack.Screen
        name="HomeScreenMain"
        component={HomeScreen}
        options={{animation: 'fade_from_bottom'}}
      />
           <Stack.Screen
        name="LibraryHome"
        component={LibraryHome}
        options={{animation: 'fade_from_bottom'}}
      />
           <Stack.Screen
        name="CusWebView"
        component={CusWebView}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="LibraryHomeTwo"
        component={LibraryHomeTwo}
        options={{animation: 'fade_from_bottom'}}
      />
          <Stack.Screen
        name="Language"
        component={Language}
        options={{animation: 'fade_from_bottom'}}
      />
          <Stack.Screen
        name="regioncountry"
        component={RegionCountry}
        options={{animation: 'fade_from_bottom'}}
      />
          <Stack.Screen
        name="Country"
        component={Country}
        options={{animation: 'fade_from_bottom'}}
      />
            <Tab.Screen
        name="ViewBookTitle"
        component={ViewBookTitle}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="FeaturedParishes"
        component={FeaturedParishes}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="PopularBooks"
        component={PopularBooks}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Events"
        component={Events}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="ViewManual"
        component={ViewManual}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="ParishFinder"
        component={ParishFinder}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Readone"
        component={Readone}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Readtwo"
        component={Readtwo}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="ImageModal"
        component={ImageModal}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Advertisement"
        component={Advertisement}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="AdvWebView"
        component={AdvWebView}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="ViewBanner"
        component={ViewBanner}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="SelectCountry"
        component={SelectCountry}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Searchbar"
        component={Searchbar}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Rccg"
        component={Rccg}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="RccgContinent"
        component={RccgContinent}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="RccgStructure"
        component={RccgStructure}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="ViewParish"
        component={ViewParish}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="SelectRegion"
        component={SelectRegion}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="ParishesResult"
        component={ParishesResult}
        options={{animation: 'fade_from_bottom'}}
      />
    </Stack.Navigator>
  );
}
function LibraryStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LibraryHome">
      <Stack.Screen
        name="LibraryHome"
        component={LibraryHome}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="LibraryHomeTwo"
        component={LibraryHomeTwo}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="ViewParish"
        component={ViewParish}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="ViewManual"
        component={ViewManual}
        options={{animation: 'fade_from_bottom'}}
      />
            <Tab.Screen
        name="ViewBookTitle"
        component={ViewBookTitle}
      />
    </Stack.Navigator>
  );
}
function AllSettings() {

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SettingsMore">
        <Stack.Screen
          name="SettingsMore"
          component={SettingsMore}
          options={{animation: 'fade_from_bottom'}}
        />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{animation: 'fade_from_bottom'}}
      />
            <Tab.Screen
        name="ViewBookTitle"
        component={ViewBookTitle}
      />
      <Stack.Screen
        name="ViewManual"
        component={ViewManual}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="DarkMode"
        component={DarkMode}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="SettingsGuest"
        component={SettingsGuest}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Faq"
        component={Faq}
        options={{animation: 'fade_from_bottom'}}
      />
      {/* <Stack.Screen
        name="Advertisement"
        component={Advertisement}
        options={{animation: 'fade_from_bottom'}}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{animation: 'fade_from_bottom'}}
      />
        <Stack.Screen
          name="FeaturedCountry"
          component={FeaturedCountry}
          options={{animation: 'flip'}}
        />
    </Stack.Navigator>
  );
}
