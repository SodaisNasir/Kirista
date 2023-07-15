import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  useColorScheme,
  Platform,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useState, useLayoutEffect, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import {Color} from '../../utils/Colors';
import {verticalScale, scale, moderateVerticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import ImageModal from '../../components/Modals/ImageModal';
import Map from '../../components/Map';
import {useFocusEffect} from '@react-navigation/native';
import Loading from '../../components/Modals/Loading';
import { event_by_id, markData } from '../../redux/actions/UserAction';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import Share from 'react-native-share'
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import { EVENTBOOKMARK } from '../../redux/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import BannerLoader from '../../components/Loader/BannerLoader';
import DoubleText from '../../components/Loader/DoubleText';
import TickModal from '../../components/Modals/TickModal';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const EventScreen = ({route, navigation}) => {
  const {id,item} = route.params;
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [cordinates, setCordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const is_guest = useSelector(state => state.is_guest)
  const eventbookmark = useSelector(state => state.eventbookmark)
  const user_details = useSelector(state => state.user_details)
  const [isChecked, setIsChecked] = useState(false);
  const [ setData] = useState(item);
  const [check, setCheck] = useState(false)
  const [msg, setMsg] = useState('')


  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useFocusEffect(
    useCallback(() => {
      setCordinates(JSON.parse(item["map"]))
      event_by_id(setData, id, setLoading,setCordinates);
    }, []),
  );
  const shareBook = (data) => {
    let shareImageBase64 = {
      title: data.title,
      url: item.share,
      subject: 'Share Book Link', //  for email
    }
    Share.open(shareImageBase64).catch((error) => console.log(error))
  }
  function openDeviceCalendar() {
    const eventConfig = {
      title: item.title,
      startDate: item.start_date.split(' ')[0] + 'T09:30:45.000000Z',
      endDate: item.end_date.split(' ')[0] + 'T09:30:45.000000Z',
      location: item.address,
      notes: item.about,
    };
  
    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(eventId => {
        console.log('Event created with ID:', eventId);
        ToastAndroid.show('Event added successfully', ToastAndroid.LONG)
      })
      .catch(error => {
        console.warn('Event creation error:', error);
      });
  }
  useEffect(() => {
    addBookmark()
  },[eventbookmark,item])
  
  const addBookmark = () => {
    const extrxtIds = eventbookmark.find((elm) => elm.id == item.id)
    if(extrxtIds != null){
      setIsChecked(true);
    }else{
      setIsChecked(false)
    }
  }

  const type = 'event'

  const handleSubmit = async () => {
    const findData = eventbookmark?.find((elm) => elm.id == item?.id)

    if (findData) {
      const updatedData = eventbookmark.filter((elm) => elm.id !== findData.id);
      dispatch({type: EVENTBOOKMARK, payload: updatedData})
      await AsyncStorage.setItem('eventbookmark', JSON.stringify(updatedData));
      setIsChecked(false)
      console.log('laraib =========>')
      markData(type,item.id,user_details)
      // ToastAndroid.show('Bookmark removed', ToastAndroid.LONG)
      setMsg(applanguage.RemoveEvent)
      setCheck(true)
    } else {
      markData(type,item.id,user_details)
      dispatch({type: EVENTBOOKMARK, payload: [...eventbookmark, item]})
      console.log('laraib =========> Object not found in the array');
      setIsChecked(true);
      await AsyncStorage.setItem('eventbookmark', JSON.stringify([...eventbookmark, item]));
      // ToastAndroid.show('Bookmark added successfully', ToastAndroid.LONG)
      setMsg(applanguage.SaveEvent)
      setCheck(true)
    }
  }
  return (
    <>
    <SafeAreaView style={{backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}}/>
    <View
      style={[
        styles.Container,
        {
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        },
      ]}>
        <CustomHeader
        shareOnPress={shareBook}
        calOnPress={openDeviceCalendar}
          text={applanguage.View + ' ' + applanguage.Events}
          shareicon={true}
          select={isChecked}
          BookPress={handleSubmit}
          saveicon={is_guest == true ? false :  true}
          timeicon={true}
          AuthHeaderStyle={{
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(80)
                  : verticalScale(70)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(50)
                : verticalScale(50),
            justifyContent: 'center',
            paddingTop:
              Platform.OS == 'android'
                ? moderateVerticalScale(20)
                : w >= 768 && h >= 1024
                // ? moderateVerticalScale(25)
                // : moderateVerticalScale(25),
          }}
        />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
          }}>
            {
             item.image ?

              <TouchableOpacity
              onPress={() => {
                setShowModal(toggleModal(true));
              }}
              style={styles.ImageViewStyle}>
            <Image
              resizeMode="contain"
              source={{uri: item.image}}
              style={{height: '100%', width: '100%'}}
              />
          </TouchableOpacity>
          : 
          <View style={styles.ImageViewStyle}>
            <BannerLoader />
          </View>  
          
          }

          {item.title ?
            <>
          <View
            style={{
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(5),
            }}>
            <Text
              style={[
                styles.TextStyle,
                {
                  color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                },
              ]}>
              {item.title}
            </Text>
          </View>
          <View style={styles.DetailsViewStyle}>
            <Text
              style={[
                styles.DateText,
                {
                  color: Theme === 'dark' ? '#828C9B' : Color.TextColor2,
                },
              ]}>
              {moment(item.start_date).format("MMM Do YY")} -  {moment(item.end_date).format("MMM Do YY")}
            </Text>
            <View
              style={{
                backgroundColor: Theme === 'dark' ? '#828C9B' : Color.TextColor2,
                borderRadius: 100,
                width: scale(3),
                height: scale(3),
                marginHorizontal: scale(15),
                alignSelf: 'center',
              
              }}
            />
            <Text
              style={[
                styles.DateText,
                {
                  color: Theme === 'dark' ? '#828C9B' : Color.TextColor2,
                },
              ]}>
              {item.start_time} - {item.end_time}
            </Text>
          </View>
            </>
          : 
          <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(40)} />
          }


        {item.about
        ?
          <View
            style={{
              marginVertical: verticalScale(10),
            }}>
            <Text
              style={[
                styles.AboutText,
                {
                  color: Theme === 'dark' ? Color.White : Color.TextColor2,
                },
              ]}>
              {item.about}
            </Text>
          </View>
        :
        <View style={{marginVertical: verticalScale(5)}}>
        <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(100) : verticalScale(80)} />
        </View>
        }


        </View>
        <View
          style={{
            height: verticalScale(25),
            backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
          }} />

        <View
          style={{
            // backgroundColor: 'purple',
            justifyContent: 'center',
            // marginVertical: verticalScale(15),
            marginTop: verticalScale(15),
          }}>
          <Text
            style={[
              {
                color: Theme === 'dark' ? Color.White : Color.Black,
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              },
              styles.LocationBigText,
            ]}>
            {applanguage.Location}
          </Text>
        </View>

        {item.address ?
        <View
          style={{
            marginTop: verticalScale(5),
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
                color: Theme === 'dark' ? Color.White : Color.TextColor2,
              },
              styles.LocationText,
            ]}>
            {item.location}
          </Text>
          <Text
            style={[
              {
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
                color: Theme === 'dark' ? Color.White : Color.TextColor2,
              },
              styles.LocationDetailsText,
            ]}>
            {item.address}
          </Text>
        </View>
          :
          <View style={{marginVertical: verticalScale(5),marginHorizontal:scale(20)}}>
          <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(40)} />
          </View>
        }
          {
            cordinates?.latitude > 1 ? 
        <View
          style={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(180),
            // paddingHorizontal:
            //   w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            marginVertical: verticalScale(15),
            borderRadius: scale(14),
            marginBottom: verticalScale(20),
            overflow: 'hidden',
            marginHorizontal:
              w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
          }}>
              
              <Map item={cordinates} />
        </View>
             : 
              null
            }

        <View style={{height: verticalScale(40)}} />

        <ImageModal
          blurRadius={14}
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          swipeDirection="left"
          onSwipeComplete={() => setModalVisible(false)}
          onRequestClose={() => setModalVisible(false)}
          OptionSelect={() => setModalVisible(false)}
          onPressClose={() => setModalVisible(false)}
          uri={item.image}
        />
      </ScrollView>
      <TickModal
          text={msg}
          onPress={() => setCheck(false)}
          onBackdropPress={() => setCheck(false)}
          isVisible={check}
        />
    </View>
    </>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  ImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(200),
    marginTop: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(15),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(5),
  },
  TextStyle: {
    fontFamily: Font.Poppins700,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
  },
  DetailTextStyle: {
    fontFamily: Font.Poppins400,
    color: Color.TextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
    textAlign: 'center',
  },
  BoldDetailTextStyle: {
    fontFamily: Font.Poppins700,
    color: Color.TextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
    lineHeight: verticalScale(30),
    // backgroundColor:'green',
    textAlign: 'center',
  },

  About: {
    fontFamily: Font.Poppins600,
    color: Color.TextColor2,
    textAlign: w >= 768 && h >= 1024 ? 'center' : 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(15),
  },
  AboutText: {
    fontFamily: Font.Poppins500,
    color: Color.TextColor2,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10),
  },
  DetailsViewStyle: {
    //   height:
    //   w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(70),
    // justifyContent: 'space-between',
    flexDirection: 'row',
  },
  LocationText: {
    fontFamily: Font.Poppins700,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
  },
  LocationDetailsText: {
    fontFamily: Font.Poppins400,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
  },
  LocationBigText: {
    fontFamily: Font.Poppins600,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(17),
  },

  DateText: {
    fontFamily: Font.Poppins700,
    color: Color.ContinentText,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
});
