import React, {useState, useEffect} from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useDispatch, useSelector} from 'react-redux';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LightSplash from './src/screens/auth/LightSplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DETAILS} from './src/redux/reducer';

const App = () => {
  const user_details = useSelector(state => state.user_details);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
  }, []);
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
