import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useSelector} from 'react-redux';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App = () => {
  const userData = useSelector(state => state.userEmail);
  console.log("userData ==>", userData);

  return userData != null ? <BottomTabNavigator /> : <AuthNavigator />;
};

export default App;


