import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LibraryHome from '../screens/library/LibraryHome';
import SignUp from '../screens/auth/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import Privacy from '../screens/more/Privacy';
import {Color} from '../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../utils/font';
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

import HomeSvg from '../assets/icons/home_normal.svg';
import HomeSvgActive from '../assets/icons/home_active.svg';

import LibrarySvg from '../assets/icons/library.svg';
import LibrarySvgActive from '../assets/icons/library_active.svg';

import MoreSvg from '../assets/icons/more_normal.svg';
import MoreSvgActive from '../assets/icons/more_active.svg';
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

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const tabPotrait = w >= 768 && h >= 1024;
  const standardLandscape = w >= 684 && h >= 360;
  const tabLandscape = w >= 1024 && h >= 768;
  const fourInchPotrait = w <= 350 && h <= 600;
  const fourInchLandscape = w <= 600 && h <= 350;


  const {width, height} = useWindowDimensions();
  const Theme = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarActiveTintColor: Color.Main,
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            height: verticalScale(80),
            justifyContent: 'space-around',
            // left:50,
            paddingLeft:  tabPotrait ? moderateScale(30) : fourInchLandscape ? moderateScale(20): 0,
            backgroundColor: Theme ? Color.DarkTheme : Color.White,
            borderColor: Theme ? Color.DarkTheme : Color.White,
         
          },
          tabBarLabelStyle: {
            fontFamily: Font.Poppins600,
            fontSize: tabPotrait ? scale(6) : scale(11),
            marginBottom:
              tabPotrait ? verticalScale(-15) : verticalScale(15),
            right :  tabPotrait ?  scale(18) : scale(0),
        
          },
        }}>
        <Tab.Screen
          name="Home"
          component={AllHome}
          options={{
            tabBarLabelStyle: {
              fontFamily: Font.Poppins600,
              fontSize: tabPotrait ? scale(7) : scale(11),
              marginBottom:
                tabPotrait ? verticalScale(-15)  :verticalScale(15),
              right :  tabPotrait ? scale(19) : scale(0)
          
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <HomeSvgActive
                  style={{
                    marginTop:
                      tabPotrait ? verticalScale(-30)  : verticalScale(15),
                  }}
                  width={
                    width >= 768 && height >= 1024
                      ? 40
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                  height={
                    width >= 768 && height >= 1024
                      ? 30
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                />
              ) : (
                <HomeSvg
                  style={{marginTop:
                    tabPotrait ? verticalScale(-30) : verticalScale(15),}}
                  width={
                    width >= 768 && height >= 1024
                      ? 40
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                  height={
                    width >= 768 && height >= 1024
                      ? 30
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                />
              ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryStack}
          options={{

            tabBarLabelStyle: {
              fontFamily: Font.Poppins600,
              fontSize: tabPotrait ? scale(7) : scale(11),
              marginBottom:
                tabPotrait ? verticalScale(-15) : verticalScale(15),
              right :  tabPotrait ? scale(19) : scale(0),
        
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <LibrarySvgActive
                  style={{marginTop:
                    tabPotrait ? verticalScale(-30) : verticalScale(15)}}
                  width={
                    width >= 768 && height >= 1024
                      ? 40
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                  height={
                    width >= 768 && height >= 1024
                      ? 30
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                />
              ) : (
                <LibrarySvg
                  style={{marginTop:
                    tabPotrait ? verticalScale(-30) : verticalScale(15)}}
                  width={
                    width >= 768 && height >= 1024
                      ? 40
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                  height={
                    width >= 768 && height >= 1024
                      ? 30
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                />
              ),
          }}
        />

        <Tab.Screen
          name="More"
          component={AllSettings}
          options={{
            tabBarLabelStyle: {
              fontFamily: Font.Poppins600,
              fontSize: tabPotrait ? scale(7) : scale(11),
              marginBottom:
                tabPotrait ? verticalScale(-15) : verticalScale(15),
              right :  tabPotrait ? scale(16.5) : scale(0),
              bottom :  tabPotrait ? scale(0) : scale(0),
          
            },

            
            tabBarIcon: ({focused}) =>
              focused ? (
                <MoreSvgActive
                  style={{marginTop:
                    tabPotrait ? verticalScale(-30) : verticalScale(15)}}
                  width={
                    width >= 768 && height >= 1024
                      ? 38
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                  height={
                    width >= 768 && height >= 1024
                      ? 28
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                />
              ) : (
                <MoreSvg
                  style={{marginTop:
                    tabPotrait ? verticalScale(-30) : verticalScale(15)}}
                  width={
                    width >= 768 && height >= 1024
                      ? 38
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                  height={
                    width >= 768 && height >= 1024
                      ? 28
                      : width <= 350 && height <= 600
                      ? 18
                      : width >= 900 && height >= 600
                      ? 40
                      : width >= 600 && height >= 900
                      ? 20
                      : width <= 600 && height <= 350
                      ? 18
                      : 25
                  }
                />
              ),
          }}
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
      initialRouteName="Advertisement">
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
    </Stack.Navigator>
  );
}
