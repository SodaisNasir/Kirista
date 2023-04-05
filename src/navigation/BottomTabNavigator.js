import {StyleSheet, Text, View, Dimensions} from 'react-native';
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
import Svg, {G, Path} from 'react-native-svg';
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

const Tab = createBottomTabNavigator();

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const BottomTabNavigator = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: Color.Main,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            height: verticalScale(80),
            justifyContent:'space-around',
            
          },
          tabBarLabelStyle: {
            fontFamily: Font.Poppins600,
            fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
            marginBottom:
              w >= 768 && h >= 1024 ? scale(-15) : verticalScale(15),
            
         
          },
        }}>
        <Tab.Screen
          name="Home"
          component={AllHome}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Feather
                name="home"
                size={w >= 768 && h >= 1024 ? scale(10) : scale(25)}
                color={color}
                style={{
                  marginTop:
                    w >= 768 && h >= 1024 ? scale(-10) : verticalScale(10),
                  
                  left: w >= 768 && h >= 1024 ? scale(18) : scale(0),
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="LibraryHome"
          component={LibraryStack}
          options={{
            tabBarLabel: 'Library',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="md-book"
                size={w >= 768 && h >= 1024 ? scale(10) : scale(25)}
                color={color}
                style={{
                    marginTop:
                      w >= 768 && h >= 1024 ? scale(-10) : verticalScale(10),
                    
                    left: w >= 768 && h >= 1024 ? scale(18) : scale(0),
                  }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="More"
          component={AllSettings}
          options={{
            tabBarLabel: 'More',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="menu"
                size={w >= 768 && h >= 1024 ? scale(10) : scale(26)}
                color={color}
                style={{
                    marginTop:
                      w >= 768 && h >= 1024 ? scale(-10) : verticalScale(10),
                    
                    left: w >= 768 && h >= 1024 ? scale(18) : scale(0),
                  }}
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
      initialRouteName="Home ">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FeaturedParishes" component={FeaturedParishes} />
      <Stack.Screen name="PopularBooks" component={PopularBooks} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="ViewManual" component={ViewManual} />
      <Stack.Screen name="ParishFinder" component={ParishFinder} />
     
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
    
   
  </Stack.Navigator>
    
  )

}
