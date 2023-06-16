import React, {useState, useEffect} from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useDispatch, useSelector} from 'react-redux';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LightSplash from './src/screens/auth/LightSplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MODE, USER_DETAILS} from './src/redux/reducer';
import {
  useColorScheme,
} from 'react-native';

const App = () => {
  const user_details = useSelector(state => state.user_details);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const Theme = useColorScheme() === 'dark';

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const checkStatus = async () => {
    const data = await AsyncStorage.getItem('user_details');
    const userData = JSON.parse(data);
    if (userData != null) {
      dispatch({type: USER_DETAILS, payload: userData});
    } else {
      console.log('Please login');
    }
  };
  useEffect(() => {
    checkStatus();
    modeCheck()
  }, []);

  const modeCheck = async () => {
    const getMode = await AsyncStorage.getItem('mode')
    const cnvrtMode = JSON.parse(getMode)

    const onMode = 'dark'
    const ofMode = 'light'
  

    if(cnvrtMode == 'On'){
      dispatch({type: MODE, payload: onMode})
    }else if(cnvrtMode == 'Off'){
      dispatch({type: MODE, payload: ofMode})
    }else if(cnvrtMode == 'Device Settings'){
      dispatch({type: MODE, payload: Theme})
    }else{
      console.log('vvvvvvv')
    }
  }
  return (
    <>
      {loading ? (
        <LightSplash />
      ) : (
        <>
          {user_details == null && <AuthNavigator />}
          {user_details != null && <BottomTabNavigator />}
        </>
      )}
    </>
  );
};

export default App;
