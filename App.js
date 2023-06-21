import React, {useState, useEffect} from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useDispatch, useSelector} from 'react-redux';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LightSplash from './src/screens/auth/LightSplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {APPLANGUAGE, BOOKMARK, GETLANGUAGE, LANGUAGE, MODE, USER_DETAILS} from './src/redux/reducer';
import {
  useColorScheme,
} from 'react-native';
import English from './src/components/LanguageJson/English.json'
import Hausa from './src/components/LanguageJson/Hausa.json'
import French from './src/components/LanguageJson/French.json'
import Pidgin from './src/components/LanguageJson/Pidgin.json'
import Spanish from './src/components/LanguageJson/Spanish.json'
import Fula from './src/components/LanguageJson/Fula.json'
import Portugese from './src/components/LanguageJson/Portugese.json'

const App = () => {
  const dispatch = useDispatch();
  const user_details = useSelector(state => state.user_details);
  const getlanguage = useSelector(state => state.getlanguage)
  const applanguage = useSelector(state => state.applanguage)
  const [loading, setLoading] = useState(true);
  const Theme = useColorScheme() === 'dark';


  const setLanguage = async () => {
    const getLang = await AsyncStorage.getItem('language')
    const cnvrtlng = JSON.parse(getLang)
    const languagetitle = await AsyncStorage.getItem('languagetitle')
    const cnvrtlng2 = JSON.parse(languagetitle)
    dispatch({type: LANGUAGE, payload: cnvrtlng2})


    if(cnvrtlng === 'EN'){
      dispatch({type: APPLANGUAGE, payload: English})
      dispatch({type: GETLANGUAGE, payload: cnvrtlng})
    }else if(cnvrtlng === 'HA'){
      dispatch({type: APPLANGUAGE, payload: Hausa})
      dispatch({type: GETLANGUAGE, payload: cnvrtlng})
    } else if(cnvrtlng === 'FR'){
      dispatch({type: APPLANGUAGE, payload: French})
      dispatch({type: GETLANGUAGE, payload: cnvrtlng})
    } else if(cnvrtlng === 'PO'){
      dispatch({type: APPLANGUAGE, payload: Portugese})
      dispatch({type: GETLANGUAGE, payload: cnvrtlng})
    } else if(cnvrtlng === 'PN'){
      dispatch({type: APPLANGUAGE, payload: Pidgin})
      dispatch({type: GETLANGUAGE, payload: cnvrtlng})
    } else if(cnvrtlng === 'FU'){
      dispatch({type: APPLANGUAGE, payload: Fula})
      dispatch({type: GETLANGUAGE, payload: cnvrtlng})
    } else if(cnvrtlng === 'ES'){
      dispatch({type: APPLANGUAGE, payload: Spanish})
      dispatch({type: GETLANGUAGE, payload: cnvrtlng})
    } else{
       dispatch({type: APPLANGUAGE, payload: English})
       dispatch({type: GETLANGUAGE, payload: 'EN'})
    }
  }


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
    // setLanguage()
  }, []);

  useEffect(() => {
    setLanguage()
  }, [getlanguage])

  useEffect(() => {
    bookmarkData()
  }, [])

  const bookmarkData = async () => {
    const bookMark = await AsyncStorage.getItem('bookmark')
    const convertData = JSON.parse(bookMark)
    if(convertData != null){
      dispatch({type: BOOKMARK, payload: convertData})
    }else{
      console.log('Monkey D. Luffy')
    }
  }

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
