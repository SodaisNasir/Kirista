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
import React, {useRef, useState} from 'react';
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
import { BOOKMARK } from '../../../redux/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html';
import IncorrectModal from '../../../components/Modals/IncorrectModal';


const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const Readtwo = ({route}) => {
  const dispatch = useDispatch()
  const {id,bookData,chapterOne} = route.params
  const systemFonts = [...defaultSystemFonts, 'times-new-roman', 'Arial','Lato-Regular','papyrus','Georgia-Regular-font.ttf','CourierPrime-Regular'];
  const chapters = useSelector(state => state.chapters)
  const bookmark = useSelector(state => state.bookmark)
  const { width } = useWindowDimensions();
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
  const [bottomModal, setBottomModal] = useState(false);
  const applanguage = useSelector(state => state.applanguage)




  useFocusEffect(
    useCallback(() => {
      dispatch(getChapters(setData,id))
      sendReadBok(id)
      dispatch(getChapters(setData, id));
    }, []),
  );
  useEffect(() => {
    getChaptersByID(setChapterData, select);
  }, [select]);
  const handlepressone = () => {
    setBackgroundColor('#F5F5F5');
    setTextColor(Color.Black);
    setShow(true);
  };
  const handlepresstwo = () => {
    setBackgroundColor('#F5EDD8');
    setTextColor(Color.Black);
    setShow(true);
  };
  const handlepressthree = () => {
    setBackgroundColor('#E5F1FD');
    setTextColor(Color.Black);
    setShow(true);
  };
  const handlepressfour = () => {
    setBackgroundColor('#DBE7E3');
    setTextColor(Color.Black);
    setShow(true);
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

  let text = chapterData?.title;
  let text2 = chapterData?.description;
  let result = text?.replace(
    "class='chap_title'",
    `style='color:${
      backgroundColor != '' && show
        ? 'black'
        : Theme === 'dark'
        ? Color.White
        : Color.Black
    };font-family:${fontData?.name}; font-size:${
      count + 20
    }px; font-weight:600;'`,
  );
  let result3 = text2?.replace(
    "class='chap_description'",
    `style='color:${
      backgroundColor != '' && show
        ? 'black'
        : Theme === 'dark'
        ? Color.White
        : Color.Black
    };font-family:${fontData?.name};  font-size:${
      count + 15
    }px; font-weight:600;'`,
  );

  const title = {
    html: result,
  };
  const description = {
    html: result3,
  };

  const [loading, setLoading] = useState(false);
  const [mydata, setmyData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch more data here based on the current page value

      // Update the data state by appending the newly fetched data
      setmyData(prevData => [...prevData, ...chapters]);

      // Increment the page number for the next fetch
      setPage(prevPage => prevPage + 1);

      // Check if more data is available
      setHasMoreData(chapters.length > 0);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };


  const loadMoreData = () => {
    if (!loading && hasMoreData) {
      fetchData();
    }
  };

  const doubleTapRef = useRef(null);
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

        <ScrollView showsVerticalScrollIndicator={false} style={{
          backgroundColor: backgroundColor != '' && show ? backgroundColor : Theme === 'dark' ? Color.DarkTheme : Color.White,
          height: bottomModal ? '60%' : '100%',
          width: '100%',
          }}>
          <View
            style={{
              height: '100%',
              width: '100%',
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              backgroundColor:
                backgroundColor != '' && show
                  ? backgroundColor
                  : Theme === 'dark'
                  ? Color.DarkTheme
                  : Color.White,
            }}>
            {select ? (
              <>
                <View style={{marginVertical: verticalScale(20)}}>
                  <RenderHtml
                    contentWidth={width}
                    source={title}
                    systemFonts={systemFonts}
                  />
                </View>
                <View style={{marginVertical: verticalScale(15)}}>
                  <RenderHtml
                    contentWidth={width}
                    source={description}
                    systemFonts={systemFonts}
                  />
                </View>
              </>
            ) : (
              chapters.map(item => {
                let text = item?.title;
                let text2 = item?.description;
                let result = text?.replace(
                  "class='chap_title'",
                  `style='color:${
                    backgroundColor != '' && show
                      ? 'black'
                      : Theme === 'dark'
                      ? Color.White
                      : Color.Black
                  };font-family:${fontData?.name}; font-size:${
                    count + 20
                  }px; font-weight:600;'`,
                );
                let result3 = text2?.replace(
                  "class='chap_description'",
                  `style='color:${
                    backgroundColor != '' && show
                      ? 'black'
                      : Theme === 'dark'
                      ? Color.White
                      : Color.Black
                  };font-family:${fontData?.name};  font-size:${
                    count + 15
                  }px; font-weight:600;'`,
                );

                const title = {
                  html: result,
                };
                const description ={
                  html: result3,
                };
                return (
                  <>
                    <TouchableOpacity
                    // activeOpacity={0.6}
                      // onPress={() => setBottomModal(!bottomModal)}
                      onPress={() => handleSingleTap()}
                      >
                      <View style={{marginVertical: verticalScale(20)}}>
                        <RenderHtml
                          contentWidth={width}
                          source={title}
                          systemFonts={systemFonts}
                        />
                      </View>
                      <View style={{marginVertical: verticalScale(0)}}>
                        <RenderHtml
                          contentWidth={width}
                          source={description}
                          systemFonts={systemFonts}
                        
                        />
                      </View>
                    </TouchableOpacity>
                  </>
                );
              })
            )}
          </View>
          {/* <View style={{height: verticalScale(75), backgroundColor: backgroundColor != '' && show ?  backgroundColor :  Theme === 'dark' ? Color.ExtraViewDark : Color.White}} /> */}
        </ScrollView>

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
        />

        <FontModal
          isVisible={isSecondModalVisible}
          onBackdropPress={() => setSecondModalVisible(false)}
          // swipeDirection="down"
          onSwipeComplete={() => setSecondModalVisible(false)}
          onRequestClose={() => setSecondModalVisible(false)}
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
        {bottomModal && (
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
        )}
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
