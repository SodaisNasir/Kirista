import React, {useState, useEffect} from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import {useDispatch, useSelector} from 'react-redux';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import LightSplash from './src/screens/auth/LightSplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACTIVE_BOOKS, ACTIVE_EVENT, ADVERTISMENT, ALLBOOKMARK, APPLANGUAGE, BANNER_DATA, BOOKMARK, EVENTBOOKMARK, GETLANGUAGE, LANGUAGE, MODE, PARISHBOOKMARK, PARISH_DATA, RCCG_DATA, USER_DETAILS} from './src/redux/reducer';
import {
  Platform,
  useColorScheme,
} from 'react-native';
import English from './src/components/LanguageJson/English.json'
import Hausa from './src/components/LanguageJson/Hausa.json'
import French from './src/components/LanguageJson/French.json'
import Pidgin from './src/components/LanguageJson/Pidgin.json'
import Spanish from './src/components/LanguageJson/Spanish.json'
import Fula from './src/components/LanguageJson/Fula.json'
import Portugese from './src/components/LanguageJson/Portugese.json'
import OneSignal from 'react-native-onesignal'
import { active_event, getBooks, getLibraryData, getSearchData, parish, show_all_banner, show_popup } from './src/redux/actions/UserAction';
import { get_rccgData } from './src/redux/actions/AuthAction';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const dispatch = useDispatch();
  const user_details = useSelector(state => state.user_details);
  const getlanguage = useSelector(state => state.getlanguage)
  const applanguage = useSelector(state => state.applanguage)
  const language = useSelector(state => state.language)
  const mode = useSelector(state => state.mode)
  const [loading, setLoading] = useState(true);
  const Theme = useColorScheme()
  const [isConnected, setIsConnected] = useState(false);


useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(state => {
    setIsConnected(state.isConnected);
  });

  // Clean up the subscription when the component unmounts
  return () => {
    unsubscribe();
  };
}, []);

const [data,setData] = useState('')
const deviceData = Platform.OS

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
       dispatch({type: LANGUAGE, payload: 'English'})
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
  
    // setLanguage() 
    OneSignal.setAppId('54b7926e-9b1f-4ba6-810c-97520670236f')

    OneSignal.promptForPushNotificationsWithUserResponse()

    OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent) => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        )
        let notification = notificationReceivedEvent.getNotification()
        OneSignal.add
        const data = notification.additionalData
        console.log('data', data)
        notificationReceivedEvent.complete(notification)
      },
    )

    // OneSignal.setNotificationOpenedHandler((notification) => {})
   
    OneSignal.addSubscriptionObserver(async (event) => {
      if (event.to.isSubscribed) {
        const state = await OneSignal.getDeviceState()
        await AsyncStorage.setItem('onesignaltoken', state.userId)
      }
    })
  }, []);
  useEffect(() => {
    modeCheck()
    getbannerData()
    getbookData()
    getparishData()
    geteventData()
    getrccgData()
    chapterData()
    dispatch(getLibraryData(user_details))
  }, [mode,Theme,applanguage,isConnected])

  useEffect(() => {
      setLanguage()
  }, [getlanguage,isConnected])

  useEffect(() => {
    bookmarkData()
    manualbookmarkData()
    parishbookmarkData()
    eventbookmarkData()
    getPopupData()
  }, [isConnected])

  const bookmarkData = async () => {
    const bookMark = await AsyncStorage.getItem('bookmark')
    const convertData = JSON.parse(bookMark)
    console.log("=================>",convertData );
    if(convertData != null){
      dispatch({type: BOOKMARK, payload: convertData})
    }else{
      console.log('Empty Book Marks')
    }
  }
  const chapterData = async () => {
    const chapterData = await AsyncStorage.getItem('chapters')
    const convertData = JSON.parse(chapterData)
    if(convertData != null){
      dispatch({type: BOOKMARK, payload: convertData})
    }else{
      console.log('Empty Chapters')
    }
  }
  const getPopupData = async () => {
  const popData  = await AsyncStorage.getItem('adv')
  const cnvrtData = JSON.parse(popData)
  if(cnvrtData){
    dispatch({type:ADVERTISMENT, payload: cnvrtData})
  }else{
    console.log('MOnkey D. Luffy')
  }
  }
  const manualbookmarkData = async () => {
    const bookMark = await AsyncStorage.getItem('allbookmark')
    const convertData = JSON.parse(bookMark)
    if(convertData != null){
      dispatch({type: ALLBOOKMARK, payload: convertData})
    }else{
      console.log('Empty all bookmark')
    }
  }
  const parishbookmarkData = async () => {
    const bookMark = await AsyncStorage.getItem('parishbookmark')
    const convertData = JSON.parse(bookMark)
    if(convertData != null){
      dispatch({type: PARISHBOOKMARK, payload: convertData})
    }else{
      console.log('empty parish ')
    }
  }
  const eventbookmarkData = async () => {
    const bookMark = await AsyncStorage.getItem('eventbookmark')
    const convertData = JSON.parse(bookMark)
    if(convertData != null){
      dispatch({type: EVENTBOOKMARK, payload: convertData})
    }else{
      console.log('emoty event books')
    }
  }
  const modeCheck = async () => {
    const getMode = await AsyncStorage.getItem('mode')
    const cnvrtMode = JSON.parse(getMode)
    const onMode = 'dark'
    const ofMode = 'light'
    if(cnvrtMode === 'on'){
      dispatch({type: MODE, payload: onMode})
    }else if(cnvrtMode === 'off'){
      dispatch({type: MODE, payload: ofMode})
    }else if(cnvrtMode === 'device setting'){
      dispatch({type: MODE, payload: Theme})
    }else{
      dispatch({type: MODE, payload: ofMode})
    }
  }
  const getbannerData = async () => {
    const bannerData = await AsyncStorage.getItem('bannerData')
    const cnvrtbannerData = JSON.parse(bannerData)
    if(cnvrtbannerData != null){
      dispatch({type: BANNER_DATA, payload: cnvrtbannerData})
    }else{
      dispatch(show_all_banner());
    }
  }
  const getbookData = async () => {
    const bookData = await AsyncStorage.getItem('bookData')
    const cnvrtbookData = JSON.parse(bookData)
    if(cnvrtbookData != null){
      dispatch({type: ACTIVE_BOOKS, payload: cnvrtbookData})
    }else{
      dispatch(getBooks());
    }
  }
  const getparishData = async () => {
    const parishData = await AsyncStorage.getItem('parishData')
    const cnvrtparishData = JSON.parse(parishData)
    if(cnvrtparishData != null){
      dispatch({type: PARISH_DATA, payload: cnvrtparishData})
    }else{
      dispatch(parish());
    }
  }
  const geteventData = async () => {
    const eventData = await AsyncStorage.getItem('eventData')
    const cnvrteventData = JSON.parse(eventData)
    if(cnvrteventData != null){
      dispatch({type: ACTIVE_EVENT, payload: cnvrteventData})
    }else{
      dispatch(active_event());
    }
  }
  const getrccgData = async () => {
    const rccgData = await AsyncStorage.getItem('rccgData')
    const cnvrtrccgData = JSON.parse(rccgData)
    if(cnvrtrccgData != null){
      dispatch({type: RCCG_DATA, payload: cnvrtrccgData})
    }else{
      dispatch(get_rccgData(language));
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
