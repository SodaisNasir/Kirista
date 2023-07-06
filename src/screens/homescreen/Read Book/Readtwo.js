import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
  Platform,
  Button,
  Image,
  LogBox,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
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
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html';
import IncorrectModal from '../../../components/Modals/IncorrectModal';
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';
import RNFS from 'react-native-fs';
import LaraibCard from '../../../components/Card/LaraibCard';
import WebView from 'react-native-webview';
// import base64 from 'react-native-base64'
// import { parseString } from 'react-native-xml2js';
// import HtmlFile from '../../../../and'

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const Readtwo = ({route}) => {
  const dispatch = useDispatch()
  const {id,bookData,chapterOne,url} = route.params
  const systemFonts = [...defaultSystemFonts, 'times-new-roman', 'Arial','Lato-Regular','papyrus','Georgia-Regular-font.ttf','CourierPrime-Regular'];
  const chapters = useSelector(state => state.chapters)
  const bookmark = useSelector(state => state.bookmark)
  const { width,height } = useWindowDimensions();
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
  const Theme = tempMode != '' ? tempMode : modeCheck;
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState();
  const [isSelect, setisSelect] = useState(false);
  const [chapterData, setChapterData] = useState([])
  const [fontData, setFontData] = useState('Arial')
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [check, setCheck] = useState(false)
  const [loader, setLoader] = useState(true)
  const [chapNo, setChapNo] = useState()
  const [bottomModal, setBottomModal] = useState(false);
  const applanguage = useSelector(state => state.applanguage)

console.log('backgroundColor', backgroundColor != '' && show
? backgroundColor
: Theme === 'dark'
? Color.DarkTheme
: Color.White)


  useFocusEffect(
    useCallback(() => {
      dispatch(getChapters(setData,id))
      sendReadBok(id)
      
      setTimeout(() => {
        setLoader(false)
        callWebViewFunction()
        loadXMLDoc()
      }, 3000);
    }, []),
  );
  useEffect(() => {
    getChaptersByID(setChapterData, select);
  }, [select]);

  const changeTheme = (color) => {
    const functionName = 'changeTheme';
    const functionArguments = [color ? color : Theme === 'dark'
    ? Color.DarkTheme
    : Color.White ]; // Optional function arguments

          console.log('functionArguments', functionArguments)

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef.current.injectJavaScript(injectedJavaScript);
  };

  const handlepressone = () => {
    setBackgroundColor('#F5F5F5');
    setTextColor(Color.Black);
    setShow(true);
    changeTheme('#F5F5F5')
  };
  const handlepresstwo = () => {
    setBackgroundColor('#F5EDD8');
    setTextColor(Color.Black);
    setShow(true);
    changeTheme('#F5EDD8')
  };
  const handlepressthree = () => {
    setBackgroundColor('#E5F1FD');
    setTextColor(Color.Black);
    setShow(true);
    changeTheme('#E5F1FD')
  };
  const handlepressfour = () => {
    setBackgroundColor('#DBE7E3');
    setTextColor(Color.Black);
    setShow(true);
    changeTheme('#DBE7E3')
  };
  const handleClick = async () => {
    if (isGuest) {
      setCheck(true);
    } else {
      const extractData = chapters?.find(item => item.id == chapterData.id);
      const findData = bookmark?.find(item => item.id == extractData?.id);

      if (findData) {
        const updatedData = bookmark.filter(item => item.id !== findData.id);
        dispatch({type: BOOKMARK, payload: updatedData});
        await AsyncStorage.setItem('bookmark', JSON.stringify(updatedData));
        setisSelect(false);
        console.log('laraib =========>');
      } else {
        dispatch({type: BOOKMARK, payload: [...bookmark, extractData]});
        console.log('Object not found in the array');
        setisSelect(true);
        await AsyncStorage.setItem(
          'bookmark',
          JSON.stringify([...bookmark, extractData]),
        );
      }
    }
  };
  const toggleIcon = () => {
    if (showSvg == true) {
      setTempMode('light');
      setShowSvg(!showSvg);
    } else {
      setTempMode('dark');
      setShowSvg(!showSvg);
    }
  };
  const addBookmark = () => {
    const extrxtIds = bookmark.find(
      item =>
        item.id == chapterData.id && item.books_id == chapterData.books_id,
    );
    if (extrxtIds != null || undefined) {
      setisSelect(true);
    } else {
      setisSelect(false);
    }
  };
  useEffect(() => {
    addBookmark();
  }, [chapterData, bookmark]);

  const onFontSubmit = (item) => { 
    setSecondModalVisible(false)
    setFontData(item)
   }

  // useEffect(() => {
  //   // Replace this with the URL of the EPUB file
  //   const epubUrl = url;
  
  //   // Replace this with the path to the file where you want to save the data
  //   const filePath = RNFS.DocumentDirectoryPath   + '/data.epub';
  
  //   // Download the EPUB file and save it to a local file
  //   RNFS.downloadFile({
  //     fromUrl: epubUrl,
  //     toFile: filePath,
  //   })
  //     .promise.then(() => {
  //       console.log('EPUB file saved successfully!');
  //     })
  //     .catch((error) => {
  //       console.error('Failed to save EPUB file:', error);
  //     });
  // }, [url]);



  
  const filePath = RNFS.DocumentDirectoryPath + '/data.epub';
  const doubleTapRef = useRef(null)
  const doubleTapDelay = 300; // Adjust the delay between taps (in milliseconds)

  const handleDoubleTap = () => {
    clearTimeout(doubleTapRef.current);
    setBottomModal(!bottomModal);
  };

  const handleSingleTap = () => {
    if (doubleTapRef.current && new Date().getTime() - doubleTapRef.current < doubleTapDelay) {
      handleDoubleTap();
    } else {
      doubleTapRef.current = new Date().getTime();
    }
  };

  // const [data3, setData3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isBookCompleted, setIsBookCompleted] = useState(false);
  useEffect(() => {
    // Fetch initial data
    fetchData();
  }, []);
  
  const fetchData = () => {
    // Simulated API call or data retrieval logic
    // Replace this with your actual data-fetching logic
    
    // Assuming you are getting the data in batches of 10
    // const newData = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

    const newData = data.slice((page - 1) * 10, page * 10);
    
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
  
      // Check if the last item has been reached
      if ((page - 1) * 10 >= data.length) {
        setIsBookCompleted(true);
      }else{
        console.log('first')
      }
    }, 1000);
    // setTimeout(() => {
    //   setData((prevData) => [...prevData, ...newData]); 
    //   setIsLoading(false);
    // }, 500);
  };
  const renderFooter = () => {
    // Display a loading indicator at the bottom of the list while data is being fetched
    if (!isLoading) return null;
    
    if (pageCount > 0) {
      return (
        <View style={{ paddingVertical: 20, marginBottom: 20 }}>
          <Text>{`Total Pages: ${pageCount}`}</Text>
        </View>
      );
    }
    return null;
  };
  
  const handleLoadMore = () => {
    // Prevent loading more data if the book is completed
    if (!isLoading && !isBookCompleted) {
      setIsLoading(true);
      setPage((prevPage) => prevPage + 1);
      fetchData();
    }
  };

  const flatListRef = useRef(null);

  const handleScrollToTitle = (title) => {
    const index = data.findIndex((item) => item.title === title);
    if (index !== -1) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    calculatePageCount();
  }, [pageCount]);

  const calculatePageCount = () => {
    if (flatListRef.current && width && height) {
      const itemWidth =  scale(200)
      const itemHeight =    verticalScale(300)

      const itemsPerRow = Math.floor(width / itemWidth);
      const rowsPerPage = Math.floor(height / itemHeight);

      const totalItems = data.length;
      const totalPages = Math.ceil(totalItems / (itemsPerRow * rowsPerPage));

      console.log('parseInt(totalPages)', parseInt(totalPages))
      setPageCount(parseInt(totalPages));
    }else{
      console.log('sdfddgdg')
    }
  };

  const webViewRef = useRef(null);

  const callWebViewFunction = () => {
    const functionName = 'loadXMLDoc';
    const functionArguments = []; // Optional function arguments

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef.current.injectJavaScript(injectedJavaScript);
  };
 
  const loadXMLDoc = () => {
    const functionName = 'loadXMLDoc';
    const functionArguments = [119]; // Optional function arguments

    console.log('functionArguments', functionArguments)

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef.current.injectJavaScript(injectedJavaScript);
  };
  
  const changeFontSize = () => {
    const functionName = 'changeFontSize';
    const functionArguments = [count]; // Optional function arguments

    console.log('functionArguments', functionArguments)

    const injectedJavaScript = `
      window.${functionName} && window.${functionName}(${JSON.stringify(functionArguments)});
    `;
    webViewRef.current.injectJavaScript(injectedJavaScript);
  };
  // const [weebCount,setWebCount] = useState(0)
  // useEffect(
  //   () => {
  //     if(weebCount === 0){
        
        
  //       // setWebCount(1)
  //     }else{
  //       console.log('vvv 2')
  //     }
  //   },[]
  // )

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
              <AntDesign
                name="arrowleft"
                size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
                color={Theme === 'dark' ? Color.White : Color.Black}
                onPress={() => navigation.goBack()}
              />
            </View>
            <TouchableOpacity
              onPress={handleClick}
              style={{justifyContent: 'center'}}>
              <Ionicons
                name={isSelect == false ? 'bookmark-outline' : 'bookmark'}
                size={w >= 768 && h >= 1024 ? scale(16) : scale(20)}
                color={Color.Main}
              />
            </TouchableOpacity>
          </View>
        </View>
        <IncorrectModal
          text={applanguage.Guestpromt}
          onPress={() => setCheck(false)}
          onBackdropPress={() => setCheck(false)}
          isVisible={check}
          />
    {/* <TouchableOpacity onPress={() => handleSingleTap()}> */}


{/* 
        <ScrollView showsVerticalScrollIndicator={false} style={{
          backgroundColor: backgroundColor != '' && show ? backgroundColor : Theme === 'dark' ? Color.DarkTheme : Color.White,
          height: bottomModal ? '60%' : '100%',
          width: '100%',
          }}> */}
          <View
            style={{
              height: bottomModal ? '100%' : '100%',
              width: '100%',
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              backgroundColor:   backgroundColor != '' && show
              ? backgroundColor
              : Theme === 'dark'
              ? Color.DarkTheme
              : Color.White,
                  bottom: scale(60),
            }}>
              {/* <TouchableOpacity onPress={() => handleSingleTap()}> */}


            {/* {
              loader ?
              <ActivityIndicator size={'large'} color={'red'} />
              : */}

          <WebView 
          ref={webViewRef}
          // source={'../../../assets/Testing.html'}
          // source={{ html : '' }}
          // source={{filePath:'../../../../android/Testing.html'}}
          onLoad={console.log('loading')}
          style={{ flex: bottomModal ? 1 : 0.87,
          marginBottom: 50,
          backgroundColor:   backgroundColor != '' && show
          ? backgroundColor
          : Theme === 'dark'
          ? Color.DarkTheme
          : Color.White
        }}
          originWhitelist={['*']}
          source={{
            uri: 'file:///android_asset/Index.html'
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          />
        {/* } */}
          {/* </TouchableOpacity> */}
              {/* <FlatList
              ref={flatListRef}
              data={data}
              renderItem={({item}) => <LaraibCard
              item={item}
              backgroundColor={backgroundColor}
              show={show}
              fontData={fontData}
              count={count}
              Theme={Theme}
              handleSingleTap={handleSingleTap}
              />}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={renderFooter}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
              /> */}
               {/* <ReaderProvider >
              <Faltu {...{setBottomModal, bottomModal, Theme,count,setChapNo,chapNo,fontData,filePath}} />
               </ReaderProvider> */}
          {/* <View style={{height: verticalScale(75), backgroundColor: backgroundColor != '' && show ?  backgroundColor :  Theme === 'dark' ? Color.ExtraViewDark : Color.White}} /> */}
          </View>

        {/* </ScrollView> */}
    {/* </TouchableOpacity> */}
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
        />
        {/* <View
          style={{
            // borderTopColor:
            //   w >= 768 && h >= 1024 ? Color.BorderColor : Color.White,
            // borderTopWidth: w >= 768 && h >= 1024 ? 1 : 0,
            paddingHorizontal: moderateScale(10),
            // paddingVertical: 24,
            position: 'absolute',
            bottom: 10,
            width: '100%',
            height: verticalScale(30),
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: scale(20)
          }}>
            <Text style={{
               fontFamily: Font.Libre400,
               fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
               color: Theme === 'dark' ? Color.White : Color.Black
            }}>{(chapNo ? chapNo?.start?.displayed?.page : 1) + '/' + (chapNo ? chapNo?.start?.displayed?.total : 1)}</Text>
        </View> */}
          <View
            style={{
              flex: 1,
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'red'
            }}>
            <ReadNavigator
              onPressTab={() => {
                setModalThreeVisible(!isModalThreeVisible);
              }}
              modalVisible={!bottomModal}
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
    justifyContent: 'center',
    paddingTop:
      Platform.OS == 'android'
        ? w >= 768 && h >= 1024
          ? moderateVerticalScale(40)
          : w <= 450 && h <= 750
          ? moderateVerticalScale(50)
          : moderateVerticalScale(60)
        : // ? moderateVerticalScale(25)
          moderateVerticalScale(25),
    // height:
    //   Platform.OS == 'android'
    //     ? w >= 768 && h >= 1024
    //       ? verticalScale(80)
    //       : verticalScale(100)
    //     : w >= 768 && h >= 1024
    //     ? verticalScale(70)
    //     : w <= 450 && h <= 750
    //     ? verticalScale(55)
    //     : verticalScale(45),
    // justifyContent: 'center',
    // paddingTop:
    //   Platform.OS == 'ios'
    //     ? 10
    //     : w >= 768 && h >= 1024
    //     ? moderateVerticalScale(30)
    //     : moderateVerticalScale(70),
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

const Faltu = ({setBottomModal,bottomModal, Theme,count,setChapNo,chapNo,fontData,filePath}) => {
  const { width,height } = useWindowDimensions();
  const [tempMode, setTempMode] = useState('');
  const modeCheck = useSelector(state => state.mode);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [show, setShow] = useState(false)
  // const [bottomModal, setBottomModal] = useState(false);
  const [term, setTerm] = React.useState('');
  const { search, searchResults, getLocations, getMeta, goNext, getCurrentLocation, goPrevious, currentLocation, goToLocation, changeFontFamily, changeFontSize, changeTheme } = useReader();
  const doubleTapRef = useRef(null)
  const doubleTapDelay = 300; // Adjust the delay between taps (in milliseconds)

  const handleDoubleTap = () => {
    clearTimeout(doubleTapRef.current);
    setBottomModal(!bottomModal);
  };

  // const handleSingleTap = () => {
  //   if (doubleTapRef.current && new Date().getTime() - doubleTapRef.current < doubleTapDelay) {
  //     handleDoubleTap();
  //   } else {
  //     doubleTapRef.current = new Date().getTime();
  //   }
  // };
  const handleSingleTap = useCallback(() => {
    setBottomModal(!bottomModal);
  }, [bottomModal]);

  // const heyData = () => {
  //   RNFS.readFile(filePath, 'base64')
  //   .then((data) => {
  //     const decodedData = Buffer.from(data, 'base64').toString('utf8');

  //     parseString(decodedData, (err, result) => {
  //       if (err) {
  //         console.error('Failed to parse EPUB data:', err);
  //       } else {
  //         const htmlContent = result.package.spine[0].itemref.map(item => {
  //           const id = item.$.idref;
  //           const itemData = result.package.manifest[0].item.find(i => i.$.id === id);
  //           const href = itemData.$.href;
  //           const html = result.package.manifest[0].item.find(i => i.$.id === href);

  //           return html._;
  //         });

  //         console.log('HTML content:', htmlContent);
  //       }
  //     });
  //   })
  //   .catch((error) => {
  //     console.error('Failed to read EPUB file:', error);
  //   });
  // }

  // useEffect(() => {
  //   heyData()
  // }, [])

  

  return (
  <ReaderProvider>
                
              <Semexy {...{setChapNo,chapNo,fontData}}/>  
    <Reader
      src={filePath}
      width={width}
      height={height}
      fileSystem={useFileSystem}
      onDoublePress={()  => handleSingleTap()}
      defaultTheme={ {
        "p": {
            "background-color": `${backgroundColor != '' && show
            ? backgroundColor
            : Theme === 'dark'
            ? Color.DarkTheme
            : Color.White}`,
            // "font-size": "15px",
            // 'font-family':`${fontData?.name}`,
            //  'font-size':`${count + 15}px`,
            //  'font-weight':600,
        },
        "h1": {
            "color": `${
              backgroundColor != '' && show
                ? 'black'
                : Theme === 'dark'
                ? Color.White
                : Color.Black
            }`,
            // "font-size": "15px"
        },
        "h2": {
            "color": `${
              backgroundColor != '' && show
                ? 'black'
                : Theme === 'dark'
                ? Color.White
                : Color.Black
            }`,
            // "font-size": "15px"
        },
        "h3": {
            "color": `${
              backgroundColor != '' && show
                ? 'black'
                : Theme === 'dark'
                ? Color.White
                : Color.Black
            }`,
            // "font-size": "15px"
        },
        "div": {
            "color": `${
              backgroundColor != '' && show
                ? 'black'
                : Theme === 'dark'
                ? Color.White
                : Color.Black
            }`,
            // "font-size": "15px"
        },

        "*": {
            "background-color": `${backgroundColor != '' && show
            ? backgroundColor
            : Theme === 'dark'
            ? Color.DarkTheme
            : Color.White}`,
            "color":`${
              backgroundColor != '' && show
                ? 'black'
                : Theme === 'dark'
                ? Color.White
                : Color.Black
            }`,
            "font-size": `${count + 15}px`,
            'font-family':`${fontData?.name}`,
        },
        "body": {
            "background": `${backgroundColor != '' && show
            ? backgroundColor
            : Theme === 'dark'
            ? Color.DarkTheme
            : Color.White}`,
            // "font-size": "15px"
        }
      }}
      
      />
      </ReaderProvider>
      );
}

const Semexy =  React.memo(({setChapNo,chapNo,fontData}) => {
  const { search, searchResults, getLocations, getMeta, goNext, getCurrentLocation, goPrevious, currentLocation, goToLocation, changeFontFamily, changeFontSize, changeTheme } = useReader();
  const metadata = currentLocation;
  const lygetMeta = getMeta();
  // const vvgetCurrentLocation = getCurrentLocation();

  const vvgetCurrentLocation = getCurrentLocation()
  
  
  
  useEffect(() => {
  setChapNo(vvgetCurrentLocation);
  }, [vvgetCurrentLocation]);

useEffect(() => {
  goToLocation(vvgetCurrentLocation?.end?.cfi)
  console.log('laraib ==========>')
}, []);

useEffect(() => {
  changeTheme('dark')
}, [])
})