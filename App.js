import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useSelector} from 'react-redux';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import SplashNavigator from './src/navigation/SplashNavigator';
import {useDispatch} from 'react-redux';
import {SPLASH_SCREEN} from './src/redux/reducer';

const App = () => {
  // const userData = useSelector(state => state.userEmail);
  // const splash = useSelector(state => state.splash_screen);
  // const dispatch = useDispatch(state => state.splash_screen);
  // console.log('userData ==>', userData);
  // useEffect(() => {
  //   if (userData) {
  //     dispatch({type: SPLASH_SCREEN, payload: 'red'});
  //   }
  // }, [userData]);

  return <AuthNavigator />;
};

export default App;
