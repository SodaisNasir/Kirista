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

const Tab = createBottomTabNavigator();

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="LibraryHome"
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
          component={SignUp}
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
          component={LibraryHome}
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
          component={Privacy}
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
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

const Stack = createNativeStackNavigator();

function AllLibrary() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LibraryHome ">
      <Stack.Screen name="LibraryHome" component={LibraryHome} />
      <Stack.Screen name="LibraryHomeTwo" component={LibraryHomeTwo} />
    </Stack.Navigator>
  );
}
