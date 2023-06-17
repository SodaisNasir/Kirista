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
} from 'react-native';
import React, {useState} from 'react';
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
import { getChapters } from '../../../redux/actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKMARK } from '../../../redux/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const Readtwo = ({route}) => {

const dispatch = useDispatch()

  const {id,bookData,chapterOne} = route.params



  const chapters = useSelector(state => state.chapters)
  const [data,setData] = useState([])
  const [bookId,setBookId] = useState(id)
  const navigation = useNavigation();
  const [tempMode,setTempMode] = useState('')
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);
  const [isModalThreeVisible, setModalThreeVisible] = useState(false);
  const [showSvg, setShowSvg] = useState(false);
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const heyTheme = useSelector(state => state.mode)
  const Theme = tempMode != '' ? tempMode : heyTheme
  const text_color = Theme === 'dark' ? Color.White : Color.Black;
  const [backgroundColor, setBackgroundColor] = useState(
    Theme === 'dark' ? Color.DarkTheme : Color.White,
  );
  const [textColor, setTextColor] = useState(text_color);
  const selected = isSelect == true ? 'bookmark-outline' : 'bookmark';
  const [isModalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState(chapterOne)
  const [isSelect, setisSelect] = useState(false);
  const bookmark = useSelector(state => state.bookmark)



  useFocusEffect(
    useCallback(() => {
      dispatch(getChapters(setData,bookId))
    }, []),
  );
  const handlepressone = () => {
    setBackgroundColor('#F5F5F5');
    setTextColor(Color.Black);
  };
  const handlepresstwo = () => {
    setBackgroundColor('#F5EDD8');
    setTextColor(Color.Black);
  };
  const handlepressthree = () => {
    setBackgroundColor('#E5F1FD');
    setTextColor(Color.Black);
  };
  const handlepressfour = () => {
    setBackgroundColor('#DBE7E3');
    setTextColor(Color.Black);
  };
  const handleClick = async () => {
    setisSelect(!isSelect);
   
    const extractData =  data?.find((item) => item.id == chapters.id)
    const newObject = extractData
    const findData = bookmark?.find((item) => item.id == newObject.id)

    if (findData) {
      // If the object already exists in the array, remove it
      const updatedData = bookmark.filter((item) => item.id !== findData.id);
      dispatch({type: BOOKMARK, payload: updatedData})
      // await AsyncStorage.setItem('bookmark', JSON.stringify(updatedData));
    } else {
      dispatch({type: BOOKMARK, payload: [...bookmark, newObject]})
      console.log('Object not found in the array');
      // Object does not exist in the array, handle accordingly
      // await AsyncStorage.setItem('bookmark', JSON.stringify([...bookmark, newObject]));
    }
  };
  const toggleIcon = () => {
    if(showSvg == true){
      setTempMode('light')
      setShowSvg(!showSvg);
    }else{
      setTempMode('dark')
      setShowSvg(!showSvg);
    }
  };

  useEffect(() => {
    addBookmark()
  },[])

  const addBookmark = () => {
    const extrxtIds = bookmark.find((item) => item.id == chapters.id && item.books_id == chapters.books_id)
   console.log('extrxtIds', extrxtIds)
    if(extrxtIds != null || undefined){
      alert('hai')
    }else{
      alert('nh h')
    }
  }
  
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />

      <View style={[styles.MainContainer, {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,}]}>
        <View
          style={[
            {
              backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
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
            {/* {props.textshown ? (
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    {
                      color: Theme === 'dark' ? Color.White : '#797B7F',
                      fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                    },
                    styles.WelcomeText,
                  ]}>
                  {props.text}
                </Text>
              </View>
            ) : null} */}

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
                name={isSelect == true ? 'bookmark-outline' : 'bookmark'}
                size={w >= 768 && h >= 1024 ? scale(16) : scale(20)}
                color={Color.Main}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            }}>
            <View style={{marginVertical: verticalScale(20)}}>
              <Text
                style={[
                  {
                    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(20),
                  },

                  styles.Title,
                  {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                ]}>
                {/* Chapter 1 */}
                {chapters?.title}
              </Text>
            </View>
            <View style={{marginVertical: verticalScale(15)}}>
              <Text
                style={[
                  {fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15)},
                  styles.TextStyle,
                  {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                ]}>
                {/* A book is a medium for recording information in the form of
                writing or images, typically composed of many pages (made of
                papyrus, parchment, vellum, or paper) bound together and
                protected by a cover. */}
                {chapters?.description}
              </Text>
              {/* <Text
                style={[
                  {fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15)},
                  {color: textColor},
                  styles.TextStyle,
                ]}>
                The technical term for this physical arrangement is codex
                (plural, codices). In the history of hand-held physical supports
                for extended written compositions or records, the codex replaces
                its predecessor, the scroll. A single sheet in a codex is a leaf
                and each side of a leaf is a page.
              </Text>
              <Text
                style={[
                  {fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15)},
                  styles.TextStyle,
                  {color: textColor},
                ]}>
                As an intellectual object, a book is prototypically a
                composition of such great length that it takes a considerable
                investment of time to compose and still considered as an
                investment of time to read. In a restricted sense, a book is a
                self-sufficient section or part of a longer composition, a usage
                reflecting that, in antiquity, long works had to be written on
                several scrolls and each scroll had to be identified by the book
                it contained. Each part of Aristotle's Physics is called a book.
                In an unrestricted sense, a book is the compositional whole of
                which such sections, whether called books or chapters or parts,
                are parts.
              </Text> */}
            </View>
          </View>
          <View style={{height: verticalScale(75)}} />

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
              setModalVisible(false)
              setTimeout(() => {
                setModalThreeVisible(true)
                console.log('opening deawer')
              }, 300);
              }}
            toggleModalTwo={() => {
              setModalVisible(false);
              setTimeout(() => {
                setSecondModalVisible(true);
                console.log('second modal state ==>', isSecondModalVisible);
              }, 500);
            }}
            CloseBtn={() => setModalVisible(false)}
            moonPress={toggleIcon}
            show={showSvg}
            newTheme={tempMode}
          />
         
          <FontModal
            isVisible={isSecondModalVisible}
            onBackdropPress={() => setSecondModalVisible(false)}
            // swipeDirection="down"
            onSwipeComplete={() => setSecondModalVisible(false)}
            onRequestClose={() => setSecondModalVisible(false)}
            OptionSelect={() => setSecondModalVisible(false)}
          
          />

          <DrawerScreen
            isVisible={isModalThreeVisible}
            onBackdropPress={() => setModalThreeVisible(false)}
            // onSwipeComplete={() => setModalThreeVisible(false)}
            onRequestClose={() => setModalThreeVisible(false)}
            OptionSelect={() => setModalThreeVisible(false)}
            data={bookData}
            chapterData={data}
            select={select}
            setSelect={setSelect}
          />
        </ScrollView>
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
            onPressModal={() => setModalVisible(true)}
            moonPress={() => toggleIcon()}
            show={showSvg}
            newTheme={tempMode}
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
          ? verticalScale(80)
          : verticalScale(100)
        : w >= 768 && h >= 1024
        ? verticalScale(70)
        : w <= 450 && h <= 750
        ? verticalScale(55)
        : verticalScale(45),
    justifyContent: 'center',
    paddingTop:
      Platform.OS == 'ios'
        ? 10
        : w >= 768 && h >= 1024
        ? moderateVerticalScale(30)
        : moderateVerticalScale(35),
  },
  WelcomeText: {
    fontFamily: Font.Poppins400,
  },
  modalStyling: {
    justifyContent: 'flex-end',
    margin: 0,
    // flex:1,
  },

  modalView: {
    width: '100%',
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
