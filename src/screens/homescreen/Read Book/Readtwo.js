import {
  StyleSheet,
  View,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  Dimensions,
  Platform,
  ToastAndroid,
} from 'react-native';
import React, { useRef, useState} from 'react';
import {Color} from '../../../utils/Colors';
import {
  verticalScale,
  scale,
  moderateVerticalScale,
  moderateScale,
} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ChapterOptionModal from '../../../components/Modals/ChapterOptionModal';
import DrawerScreen from '../../../components/DrawerScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontModal from '../../../components/Modals/FontModal';
import ReadNavigator from '../../../components/ReadNavigator';
import { useCallback } from 'react';
import { getChapters, getChaptersByID, sendReadBok } from '../../../redux/actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKMARK, CHAPTERS } from '../../../redux/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import IncorrectModal from '../../../components/Modals/IncorrectModal';
import WebView from 'react-native-webview';
import moment from 'moment';
import BookMarkModal from '../../../components/Modals/BookMarkModal';
import DoubleText from '../../../components/Loader/DoubleText';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const Readtwo = ({route}) => {
  const dispatch = useDispatch()
  const {id,bookData,chapterOne,url} = route.params
  const chapters = useSelector(state => state.chapters)
  const bookmark = useSelector(state => state.bookmark)
  const isGuest = useSelector(state => state.is_guest)
  const [data,setData] = useState([])
  const navigation = useNavigation();
  const [tempMode, setTempMode] = useState('');
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);
  const [isModalThreeVisible, setModalThreeVisible] = useState(false);
  const [showSvg, setShowSvg] = useState(false);
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const modeCheck = useSelector(state => state.mode);
  const is_guest = useSelector(state => state.is_guest)
  const Theme = tempMode != '' ? tempMode : modeCheck;
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState();
  const [isSelect, setisSelect] = useState(false);
  const [chapterData, setChapterData] = useState([])
  const [fontData, setFontData] = useState(  {
    id: '1',
    label: 'Arial',
    name: 'arial',
    // name: 'Arial',
  })
  const [count, setCount] = useState(22)
  const [show, setShow] = useState(false)
  const [check, setCheck] = useState(false)
  const [loader, setLoader] = useState(true)
  const [bottomModal, setBottomModal] = useState(false);
  const applanguage = useSelector(state => state.applanguage)
  const [markModal, setMarkModal] = useState(false)
  const [tapShow, setTapShow] = useState(false)
  const [email, setEmail] = useState(null);
  const webViewRef = useRef(null);
  useFocusEffect(
    useCallback(() => {
      dispatch(getChapters(setData,id,chapters))
      sendReadBok(id)
      setTimeout(() => {
      // setLoader(false)
      loadXMLDoc()
      }, 1500);
    }, []),
  );
  useEffect(() => {
    if(!loader){
      callWebViewFunction()
      // loadXMLDoc()
      console.log('Theme', Theme)
      SaveBookID()
      changeTheme(Theme)
      changeFontColor(Theme)
      changeHeaderFontColor(Theme === 'dark' ? Color.White : '#797B7F')
      changeHeaderBackground(Theme === 'dark'
      ? Color.DarkTheme
      : Color.HeaderColor)
    }else{
      console.log('loader false effecdt')
    }
  }, [loader])
  // useEffect(() => {
  //   getChaptersByID(setChapterData, select);
  // }, [select]);
  // useEffect(() => {
  //   changeTheme(Theme)
  //   changeFontColor(Theme)
  // }, [])
  console.log('id', id)
  const changeTheme = (color) => {
    const functionName = 'changeTheme';
    const functionArguments = [color != 'dark' && color !=  'light' ? color : color === 'dark' ? Color.DarkTheme
    : Color.White]; // Optional function arguments


    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
  };
  const changeFontColor = (color) => {
    const functionName = 'changeFontColor';
    const functionArguments = [color != 'dark' && color !=  'light' ? color : color === 'dark' ? Color.White
    : Color.Black]; // Optional function arguments

          console.log('functionArguments', functionArguments)

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
  };
  const handlepressone = () => {
    setBackgroundColor('#F5F5F5');
    setTextColor(Color.Black);
    setShow(true);
    changeTheme('#F5F5F5')
    changeFontColor('black')
  };
  const handlepresstwo = () => {
    setBackgroundColor('#F5EDD8');
    setTextColor(Color.Black);
    setShow(true);
    changeTheme('#F5EDD8')
    changeFontColor('black')
  };
  const handlepressthree = () => {
    setBackgroundColor('#E5F1FD');
    setTextColor(Color.Black);
    setShow(true);
    changeTheme('#E5F1FD')
    changeFontColor('black')
  };
  const handlepressfour = () => {
    setBackgroundColor('#DBE7E3');
    setTextColor(Color.Black);
    setShow(true);
    changeTheme('#DBE7E3')
    changeFontColor('black')
  };
  const toggleIcon = () => {
    if (showSvg == true) {
      setTempMode('light');
      setShowSvg(!showSvg);
      changeTheme('light');
      changeFontColor('light');
      changeHeaderFontColor('#797B7F')
      changeHeaderBackground(Color.White)
      setBackgroundColor('')
      setShow(true)
    } else {
      setBackgroundColor('')
      setShow(true)
      setTempMode('dark');
      setShowSvg(!showSvg);
      changeTheme('dark');
      changeFontColor('dark');
      changeHeaderFontColor(Color.White)
      changeHeaderBackground(Color.DarkTheme)
    }
   
  };
  // const addBookmark = () => {
  //   const extrxtIds = bookmark.find(
  //     item =>
  //       item.scroll_id == chapNo && item.books_id == id,
  //   );
  //   if (extrxtIds != null || undefined) {
  //     setisSelect(true);
  //   } else {
  //     setisSelect(false);
  //   }
  // };
  // useEffect(() => {
  //   addBookmark();
  // }, [chapterData, bookmark,chapNo]);

  const onFontSubmit = (item) => { 
    setSecondModalVisible(false)
    setFontData(item)
    ChangefontFamily(item.name)
   }
  const doubleTapRef = useRef(null)
  const doubleTapDelay = 200; // Adjust the delay between taps (in milliseconds)
  const handleDoubleTap = () => {
    clearTimeout(doubleTapRef.current);
    setTapShow(true)
    setBottomModal(!bottomModal);
    changeHeaderBackground(Theme === 'dark'
    ? Color.DarkTheme
    : Color.HeaderColor)
    Header('none')
    changeHeaderFontColor(Theme === 'dark' ? Color.White : '#797B7F')
    setisSelect(false)
  };
  const handleSingleTap = () => {
    if (doubleTapRef.current && new Date().getTime() - doubleTapRef.current < doubleTapDelay) {
      handleDoubleTap();
    } else {
      doubleTapRef.current = new Date().getTime();
    }
  };
  const handleSingleTap2 = () => {
    // if (doubleTapRef.current && new Date().getTime() - doubleTapRef.current < doubleTapDelay) {
      setBottomModal(!bottomModal)
      clearTimeout(doubleTapRef.current);
      setTapShow(false)
      Header('block')
      changeHeaderFontColor(Theme === 'dark' ? Color.White : '#797B7F')
      changeHeaderBackground(Theme === 'dark'
      ? Color.DarkTheme
      : Color.HeaderColor)
    // } else {
    //   doubleTapRef.current = new Date().getTime();
    // }
  };
  const callWebViewFunction = () => {
    const functionName = 'loadXMLDoc';
    const functionArguments = []; // Optional function arguments

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
  };
  const loadXMLDoc = () => {
    const functionName = 'loadXMLDoc';
    const functionArguments = [id]; // Optional function arguments


    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
  };
  const changeFontSize = () => {
    const functionName = 'changeFontSize';
    const functionArguments = [count]; // Optional function arguments


    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);

  };
  const goToLocation = (index) => {
    console.log('index', index)
    const functionName = 'Goto';
    const functionArguments = [index]; // Optional function arguments


    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
  };
  const ChangefontFamily = (name) => {
    const functionName = 'ChangefontFamily';
    const functionArguments = [name]; // Optional function arguments

    console.log('functionArguments', functionArguments)

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
  };
  const BookMark = (item) => {
    setEmail(item.mark)
    const functionName = 'BookMark';
    const functionArguments = []; // Optional function arguments

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
    setisSelect(true);
  };
  const SaveBookID = () => {
    const functionName = 'SaveBook';
    const functionArguments = [id]; // Optional function arguments

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
  };
  const GotoIndex = (id) => {
    const functionName = 'GotoIndex';
    const functionArguments = [id]; // Optional function arguments

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
    setModalThreeVisible(false)
  };
  const changeHeaderBackground = (color) => {
    console.log('back',color)
    const functionName = 'changeHeaderBackground';
    const functionArguments = [color]; // Optional function arguments

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
    setModalThreeVisible(false)
  };
  const changeHeaderFontColor = (color) => {
    console.log('backFontColor',color)
    const functionName = 'changeHeaderFontColor';
    const functionArguments = [color]; // Optional function arguments

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
    setModalThreeVisible(false)
  };
  const Header = (type) => {
    console.log('type', type)
    const functionName = 'Header';
    const functionArguments = [type]; // Optional function arguments

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef?.current.injectJavaScript(injectedJavaScript);
    setModalThreeVisible(false)
  };
  const  onMessage = async (item) =>{
    const newData = item.nativeEvent.data.split(',')[1]
    const type = item.nativeEvent.data.split(',')[0]
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    console.log('===========>')
    console.log('===========>',type)
    console.log('===========>')

    if(type == 'loader'){
      setTimeout(() => {
        setLoader(false)
      }, 3000);
    } else if(type == 'bookmark'){
      const extractData = bookmark?.filter(item => item.books_id === id);
      const findData = extractData?.find(item => item.scroll_id == newData);
  
        if (findData) {
          const updatedData = bookmark.filter(item => item.scroll_id !== findData.scroll_id);
          dispatch({type: BOOKMARK, payload: updatedData});
          await AsyncStorage.setItem('bookmark', JSON.stringify(updatedData));
          setisSelect(false);
          setMarkModal(false)
          ToastAndroid.show('Bookmark removed', ToastAndroid.LONG)
        } else {
          dispatch({type: BOOKMARK, payload: [...bookmark, {'scroll_id':newData,'books_id':id,'created_at':moment(formattedDate).format('MMM Do, YYYY.'),'mark_name': email}]});
          console.log('Object not found in the array');
          setisSelect(true);
          await AsyncStorage.setItem(
            'bookmark',
            JSON.stringify([...bookmark, {'scroll_id':newData,'books_id':id,'created_at':moment(formattedDate).format('MMM Do, YYYY.'),'mark_name': email}]),
          );
          setMarkModal(false)
          ToastAndroid.show('Bookmark added successfully', ToastAndroid.LONG)
        }
      
  }else{
    console.log('onMessage else')
  }
  }
  const doubleBack = () => {
    navigation.goBack()
    // navigation.goBack()
  }

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor:
            Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />

      <View
        style={[
          styles.MainContainer,
          {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
        ]}>
          {
            bottomModal ?
        <View
          style={[
            {
              backgroundColor:
                Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
            },
            styles.AuthHeaderStyle,
          ]}>
              <View
              style={{
                flexDirection: 'row',
  
                marginBottom:
                  w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(15),
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
                justifyContent: 'space-between',
              }}>
              <View style={{justifyContent: 'center'}}>
                {
                  bottomModal ?
  
                  <AntDesign
                  name="arrowleft"
                  size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
                  color={Theme === 'dark' ? Color.White : Color.Black}
                  onPress={() => doubleBack()}
                  />
                  : null
                }
              </View>
                {
                  is_guest ?
                  null :

              <TouchableOpacity
              onPress={() => setMarkModal(true)}
              style={{justifyContent: 'center'}}>
                <Ionicons
                  name={isSelect ? 'bookmark' : 'bookmark-outline'}
                  // name={'bookmark'}
                  size={w >= 768 && h >= 1024 ? scale(16) : scale(20)}
                  color={Color.Main}
                  />

              </TouchableOpacity>
                }
            </View>
        </View>
              :
              null
         
            }
        <IncorrectModal
          text={applanguage.Guestpromt}
          onPress={() => setCheck(false)}
          onBackdropPress={() => setCheck(false)}
          isVisible={check}
          />
      <BookMarkModal 
       isVisible={markModal}
        onPress={BookMark} 
        onBackdropPress={() => setMarkModal(false)}
      />

          {
              tapShow ? 
              <View 
              onTouchStart={() => handleSingleTap2()}
               style={{ height: bottomModal ? '73%' : '100%',
              width: '100%',backgroundColor: 'transparent', position: 'absolute',zIndex: 999,alignSelf: 'center',top:Platform.OS == 'android'
              ? w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(110)
                : verticalScale(100)
              : w >= 768 && h >= 1024
              ? verticalScale(70)
              : w <= 450 && h <= 750
              ? verticalScale(60)
              : verticalScale(40),}} />
             : null}
          <View
          onTouchStart={() => handleSingleTap()}
            style={{
              height: '100%',
              width: '100%',
              backgroundColor:   backgroundColor != '' && show
              ? backgroundColor
              : Theme === 'dark'
              ? Color.DarkTheme
              : Color.White,
            }}>


            {
              loader ?
             <View style={{flex:1,backgroundColor: Theme === 'dark'
             ? Color.DarkTheme
             : Color.White, position: 'absolute',zIndex: 99,alignSelf: 'center'}}>
              <View style={{
                marginTop:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(15),
              }}>
              <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(100)} />
           </View>
              <View style={{
                marginTop:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(10),
              }}>
              <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(80)} />
           </View>
              <View style={{
                marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(10),
              }}>
              <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(500) : verticalScale(500)} />
           </View>
          
              </View>
              :
                null
            }

          

            
            <WebView 
            ref={webViewRef}
            onLoad={console.log('loading')}
            style={{ 
              flex: 1,
            // marginBottom: 50,
            backgroundColor: backgroundColor != '' && show
            ? backgroundColor
            : Theme === 'dark'
            ? Color.DarkTheme
            : Color.White
          }}
            originWhitelist={['*']}
            source={{
              uri: 'file:///android_asset/Index.html'
            }}
            onError={(event) => console.error('Received message erre:',event.nativeEvent)}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            // injectedJavaScript={injectedJavaScript}
            onMessage={onMessage}
            scalesPageToFit={false}
          mixedContentMode="compatibility"
            />
         
          {/* <View style={{height: verticalScale(75), backgroundColor: backgroundColor != '' && show ?  backgroundColor :  Theme === 'dark' ? Color.ExtraViewDark : Color.White}} /> */}
          </View>

        <ChapterOptionModal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          swipeDirection="down"
          onSwipeComplete={() => setModalVisible(false)}
          onRequestClose={() => setModalVisible(false)}
          HandlePressOne={handlepressone}
          HandlePressTwo={handlepresstwo}
          HandlePressThree={handlepressthree}
          HandlePressFour={handlepressfour}
          onPressTab={() => {
            setModalVisible(false);
            setTimeout(() => {
              setModalThreeVisible(true);
            }, 300);
          }}
          toggleModalTwo={() => {
            setModalVisible(false);
            setTimeout(() => {
              setSecondModalVisible(true);
            }, 500);
          }}
          CloseBtn={() => setModalVisible(false)}
          moonPress={toggleIcon}
          show={showSvg}
          newTheme={tempMode}
          newCount={setCount}
          fontTitle={fontData?.label}
          // changeFontSize={changeFontSize}
          changeFontSize={changeFontSize}
        />

        <FontModal
          isVisible={isSecondModalVisible}
          onBackdropPress={() => setSecondModalVisible(false)}
          // swipeDirection="down"
          onSwipeComplete={() => setSecondModalVisible(false)}
          onRequestClose={() => setSecondModalVisible(false)}
          onFontSubmit={onFontSubmit}
          OptionSelect={setSecondModalVisible}
          fontData={setFontData}
        />

        <DrawerScreen
          isVisible={isModalThreeVisible}
          onBackdropPress={() => setModalThreeVisible(false)}
          onRequestClose={() => setModalThreeVisible(false)}
          OptionSelect={() => setModalThreeVisible(false)}
          data={bookData}
          chapterData={chapters}
          select={select}
          setSelect={setSelect}
          selectOff={setModalThreeVisible}
          goToLoc={goToLocation}
          bookMarkPress={GotoIndex}
        />

          <View
            style={{
              flex: 1,
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}>
            <ReadNavigator
              onPressTab={() => {
                setModalThreeVisible(!isModalThreeVisible);
              }}
              modalVisible={bottomModal}
              onPressModal={() => setModalVisible(true)}
              moonPress={() => (toggleIcon(), setShow(!show))}
              show={showSvg}
              newTheme={tempMode}
              // background={backgroundColor}
              setShow={show}
            />
          </View>

         
      </View>
    </>
  );
};

export default Readtwo;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  Title: {
    fontFamily: Font.Libre400,
  },
  TextStyle: {
    fontFamily: Font.Libre400,
    marginBottom: verticalScale(20),
    // color:Color.Main
  },
  AuthHeaderStyle: {
    height:
      Platform.OS == 'android'
        ? w >= 768 && h >= 1024
          ? verticalScale(70)
          : w <= 450 && h <= 750
          ? verticalScale(110)
          : verticalScale(100)
        : w >= 768 && h >= 1024
        ? verticalScale(70)
        : w <= 450 && h <= 750
        ? verticalScale(60)
        : verticalScale(40),
    // height:verticalScale(140),

    justifyContent: 'flex-start',
    paddingTop:
      Platform.OS == 'android'
        ? w >= 768 && h >= 1024
          ? moderateVerticalScale(40)
          : w <= 450 && h <= 750
          ? moderateVerticalScale(50)
          : moderateVerticalScale(60)
        : // ? moderateVerticalScale(25)
          moderateVerticalScale(25),
    // paddingTop:moderateVerticalScale(50)
   
  },
  WelcomeText: {
    fontFamily: Font.Poppins400,
  },
  modalStyling: {
    justifyContent: 'flex-end',
    margin: 0,
    // flex:1,
  },

  BrightnessView: {
    height: verticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ColorsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(5),
  },
  modalView: {
    width: '80%',
    height: '100%',

    paddingVertical: verticalScale(10),
  },
  topText: {
    color: '#071A36',
    fontFamily: Font.Poppins600,
  },
  Chapter: {
    color: Color.Main,
    fontFamily: Font.Poppins600,
  },
});
