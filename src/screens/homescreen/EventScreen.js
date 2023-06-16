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
import { event_by_id } from '../../redux/actions/UserAction';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const EventScreen = ({route, navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const {id} = route.params;
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const Theme = useSelector(state => state.mode)
  

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
      event_by_id(setData, id, setLoading);
    }, []),
  );
  return loading ? (
    <Loading />
  ) : (
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
          text={'View Event'}
          shareicon={true}
          saveicon={true}
          timeicon={true}
          AuthHeaderStyle={{
            // marginTop: Platform.OS = 'ios' ? verticalScale(-5) : 0,
            paddingTop:
            Platform.OS == 'ios' ? 0 :  w >= 768 && h >= 1024
        ? moderateVerticalScale(20)
        : moderateVerticalScale(10),
        height:
        Platform.OS == 'android'
          ? w >= 768 && h >= 1024
            ? verticalScale(80)
            : verticalScale(80)
            : w >= 768 && h >= 1024
            ? verticalScale(65)
            : w <= 450 && h <= 750
            ? verticalScale(50)
            : verticalScale(30),
            
          }}
        />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
          }}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(toggleModal(true));
            }}
            style={styles.ImageViewStyle}>
            <Image
              resizeMode="contain"
              source={{uri: data.image}}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
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
              {data.title}
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
              {moment(data.start_date).format("MMM Do YY")} -  {moment(data.end_date).format("MMM Do YY")}
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
              {data.start_time} - {data.end_time}
            </Text>
          </View>

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
              {/* The Abuja Special Holy Ghost Service is an annual gathering of the
              church in the FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed ministers of God. */}
              {data.about}
            </Text>
          </View>
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
            Location
          </Text>
        </View>
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
            {data.location}
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
            {data.address}
          </Text>
        </View>
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
          <Image
            source={require('../../assets/images/maps.png')}
            style={{height: '100%', width: '100%'}}
          />

          {/* <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 9.0765,
              longitude: 7.3986,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            
            showsUserLocation={false}
            zoomEnabled={true}
            // zoomControlEnabled={true}
            provider={PROVIDER_GOOGLE}
         
            ></MapView> */}
        </View>

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
        />
      </ScrollView>
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
