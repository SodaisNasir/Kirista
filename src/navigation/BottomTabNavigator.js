import {StyleSheet, Text, View, Dimensions,useWindowDimensions,useColorScheme} from 'react-native';
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
import {scale, verticalScale} from 'react-native-size-matters';
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
import ParishFinder from '../screens/homescreen/Parish Finder/ParishFinder'
import Faq from '../screens/more/Faq';
import Language from '../screens/more/Language';
import Readone from '../screens/homescreen/Read Book/Readone';
import Readtwo from '../screens/homescreen/Read Book/Readtwo';
import DrawerScreen from '../components/DrawerScreen';
import ImageModal from '../components/Modals/ImageModal';
import Contact from '../screens/more/Contact';
import EditProfile from '../screens/more/EditProfile';
import About from '../screens/more/About';
import DarkMode from '../screens/more/DarkMode';

import HomeSvg from '../assets/icons/home.svg'
import HomeSvgActive from '../assets/icons/home_active.svg'


import LibrarySvg from '../assets/icons/library.svg'
import LibrarySvgActive from '../assets/icons/library_active.svg'

import MoreSvg from '../assets/icons/more.svg'
import MoreSvgActive from '../assets/icons/more_active.svg'
import SettingsGuest from '../screens/more/SettingsGuest';

const Tab = createBottomTabNavigator();

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const BottomTabNavigator = () => {
  const {width, height} = useWindowDimensions();
  const Theme = useColorScheme() === 'dark';
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        
        screenOptions={{
          
          tabBarActiveTintColor: Color.Main,
          tabBarHideOnKeyboard: true,
          headerShown:false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            height: verticalScale(80),
            justifyContent:'space-around',
            backgroundColor: Theme ? Color.DarkTheme : Color.White,
        
            
          },
          tabBarLabelStyle: {
            fontFamily: Font.Poppins600,
            fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(11),
            marginBottom:
              w >= 768 && h >= 1024 ? scale(-15) : verticalScale(15),
            
         
          },
        }}>
        <Tab.Screen
        name="Home"
        component={AllHome}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeSvgActive
              style={{marginTop:verticalScale(15)}}
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
              />
            ) : (
              <HomeSvg
              style={{marginTop:verticalScale(15)}}
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
              />
            ),
        }}
      />
         <Tab.Screen
        name="Library"
        component={LibraryHome}
        options={{
          
          tabBarIcon: ({focused}) =>
            focused ? (
              <LibrarySvgActive
              style={{marginTop:verticalScale(15)}}
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
              />
            ) : (
              <LibrarySvg
              style={{marginTop:verticalScale(15)}}
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
              />
            ),
        }}
      />

<Tab.Screen
        name="More"
        component={AllSettings}
        options={{
          
          tabBarIcon: ({focused}) =>
            focused ? (
              <MoreSvgActive
              style={{marginTop:verticalScale(15)}}
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
              />
            ) : (
              <MoreSvg
              style={{marginTop:verticalScale(15)}}
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
              />
            ),
        }}
      />
    

      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default BottomTabNavigator;

const Stack = createNativeStackNavigator();

function AllHome(){
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FeaturedParishes" component={FeaturedParishes} />
      <Stack.Screen name="PopularBooks" component={PopularBooks} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="ViewManual" component={ViewManual} />
      <Stack.Screen name="ParishFinder" component={ParishFinder} />
      <Stack.Screen name="Readone" component={Readone} />
      <Stack.Screen name="Readtwo" component={Readtwo} />
      <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
      <Stack.Screen name="ImageModal" component={ImageModal} />
     
    </Stack.Navigator>
    );
  
}

function LibraryStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LibraryHome ">
      <Stack.Screen name="LibraryHome" component={LibraryHome} />
      <Stack.Screen name="LibraryHomeTwo" component={LibraryHomeTwo} />
    </Stack.Navigator>
  );
}

function AllSettings(){
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="SettingsMore">
    <Stack.Screen name="SettingsMore" component={SettingsMore} />
    <Stack.Screen name="Privacy" component={Privacy} />
    <Stack.Screen name="Terms" component={Terms} />
    <Stack.Screen name="ViewParish" component={ViewParish} />
    <Stack.Screen name="ViewManual" component={ViewManual} />
    <Stack.Screen name="Faq" component={Faq}/>
    <Stack.Screen name="Language" component={Language}/>
    <Stack.Screen name="Contact" component={Contact}/>
    <Stack.Screen name="EditProfile" component={EditProfile}/>
    <Stack.Screen name="About" component={About}/>
    <Stack.Screen name="DarkMode" component={DarkMode}/>
    <Stack.Screen name="SettingsGuest" component={SettingsGuest}/>
   
  </Stack.Navigator>
    
  )

}
