import React, {useState} from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useSelector} from 'react-redux';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LightSplash from './src/screens/auth/LightSplash';


const App = () => {
  const user_details = useSelector(state => state.user_details);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

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
