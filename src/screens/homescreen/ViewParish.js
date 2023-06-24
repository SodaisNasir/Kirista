import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useColorScheme,
  Platform,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import {Color} from '../../utils/Colors';
import {verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {markData, parish_by_id} from '../../redux/actions/UserAction';
import Loading from '../../components/Modals/Loading';
import Map from '../../components/Map';
import { useDispatch, useSelector } from 'react-redux';
import Share from 'react-native-share'
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PARISHBOOKMARK } from '../../redux/reducer';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ViewParish = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const is_guest = useSelector(state => state.is_guest)

  const parishbookmark = useSelector(state => state.parishbookmark)
  const user_details = useSelector(state => state.user_details)
  const [isChecked, setIsChecked] = useState(false);
  const [location, setLocation] = useState([])

  const [cordinates, setCordinates] = useState(null);


  // const mapProperty = () => {
  //   let json = data.length > 0 && typeof data?.map === "string" ? JSON.parse(data?.map) : data?.map;
  //   json = typeof json === "string" ? JSON.parse(json) : json;

  //   setLocation(json)
  //   return `${json.latitude} - ${json.longitude}`;
  // };

  useFocusEffect(
    useCallback(() => {
      parish_by_id(setData, id, setLoading,setCordinates);
    }, []),
  );

  const shareBook = () => {
    let shareImageBase64 = {
      title: data.title,
      url: `d`,
      subject: 'Share Book Link', //  for email
    }
    Share.open(shareImageBase64).catch((error) => console.log(error))
  }
  useEffect(() => {
    addBookmark()
  },[parishbookmark,data])
  
  const addBookmark = () => {
    const extrxtIds = parishbookmark.find((elm) => elm.id == data.id)
    if(extrxtIds != null){
      setIsChecked(true);
    }else{
      setIsChecked(false)
    }
  }

  const type = 'parish'

  const handleSubmit = async () => {
    const findData = parishbookmark?.find((elm) => elm.id == data?.id)

    if (findData) {
      const updatedData = parishbookmark.filter((elm) => elm.id !== findData.id);
      dispatch({type: PARISHBOOKMARK, payload: updatedData})
      await AsyncStorage.setItem('parishbookmark', JSON.stringify(updatedData));
      setIsChecked(false)
      console.log('laraib =========>')
    } else {
      markData(type,data.id,user_details)
      dispatch({type: PARISHBOOKMARK, payload: [...parishbookmark, data]})
      console.log('laraib =========> Object not found in the array');
      setIsChecked(true);
      await AsyncStorage.setItem('parishbookmark', JSON.stringify([...parishbookmark, data]));
    }
  }
  return loading ? (
    <Loading />
  ) : (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          styles.Container,
          {
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            marginTop: Platform.OS == 'ios' ? verticalScale(-20) : 0,
          },
        ]}>
        <CustomHeader
         text={applanguage.ViewParish}
          shareicon={true}
           saveicon={!is_guest}
           shareOnPress={shareBook}
           select={isChecked}
           BookPress={handleSubmit}
            />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            }}>
            <View style={styles.ImageViewStyle}>
              <Image
                resizeMode="contain"
                // source={require('../../assets/images/parish.png')}
                source={{uri: data.image}}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(20),
              }}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                  styles.TextStyle,
                ]}>
                {data.title}
              </Text>
            </View>

            <View style={styles.DetailsViewStyle}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationText,
                ]}>
                {applanguage.Country}:
              </Text>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationDetailsText,
                ]}>
                {data.country}
              </Text>
            </View>

            <View style={styles.DetailsViewStyle}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationText,
                ]}>
                {applanguage.Region}:
              </Text>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationDetailsText,
                ]}>
                {data.region}
              </Text>
            </View>

            <View style={styles.DetailsViewStyle}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationText,
                ]}>
                {applanguage.Province}:
              </Text>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationDetailsText,
                ]}>
                {data.province}
              </Text>
            </View>

            <View
              style={{
                marginBottom: verticalScale(20),
              }}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.AboutText,
                ]}>
                {/* The Redeemed Christian Church of God, Central Parish, is the
              Continental Headquarters of RCCG Continent 2. It is a big
              fellowship of families fitly knitted together in true love.
              Situated in the heart of the Federal Capital Territory, Central
              Parish is an architectural masterpiece that allows for comfort to
              those that worship therein. Presided over by a team of Pastors
              under the leadership of Pastor E.A. Odeyemi (Continent 2
              Overseer). */}
                {data.about}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
              height: verticalScale(25),
            }}
          />

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
                  paddingHorizontal:
                    w >= 768 && h >= 1024
                      ? verticalScale(25)
                      : verticalScale(20),
                },
                styles.LocationBigText,
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              ]}>
               {applanguage.Location}
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
                    w >= 768 && h >= 1024
                      ? verticalScale(25)
                      : verticalScale(20),
                },
                styles.LocationText,
                {color: Theme === 'dark' ? Color.White : Color.TextColor2},
              ]}>
              {data.location}
            </Text>
            <Text
              style={[
                {
                  paddingHorizontal:
                    w >= 768 && h >= 1024
                      ? verticalScale(25)
                      : verticalScale(20),
                },
                styles.LocationDetailsText,
                {color: Theme === 'dark' ? Color.White : Color.TextColor2},
              ]}>
             {data.address}
            </Text>
          </View>
          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(180),
              marginVertical: verticalScale(15),
              borderRadius: scale(14),
              marginBottom: verticalScale(20),
              overflow: 'hidden',
              marginHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
                backgroundColor: 'pink'
            }}>
            {/* <Image
              source={require('../../assets/images/maps.png')}
              style={{height: '100%', width: '100%'}}
            /> */}
          
{
              cordinates ? 
              
              <Map data={cordinates} />
             : 
             <ActivityIndicator size={30} color={'blue'} /> 
              
            }
          </View>
          <View
            style={{
              backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
              height: verticalScale(25),
            }}
          />

          <View style={{height: verticalScale(150)}}>
            <View
              style={{
                justifyContent: 'center',
                // marginVertical: verticalScale(10),
                marginTop: verticalScale(15),
              }}>
              <Text
                style={[
                  {
                    paddingHorizontal:
                      w >= 768 && h >= 1024
                        ? verticalScale(25)
                        : verticalScale(20),
                  },
                  styles.LocationBigText,
                  {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                ]}>
               {applanguage.Contact}
              </Text>
            </View>

            <View
              style={{
                // height: verticalScale(80),
                justifyContent: 'center',
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              }}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationDetailsText,
                ]}>
                {data.phone_number}
              </Text>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationDetailsText,
                ]}>
                {data.email}
              </Text>
              <Text
                onPress={() => Linking.openURL(data.website)}
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.TextColor2},
                  styles.LocationDetailsText,
                ]}>
                {data.website}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ViewParish;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(200),
    marginTop: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(15),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(5),
  },
  TextStyle: {
    fontFamily: Font.Poppins700,
    // color: Color.DarkTextColor,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
  },
  DetailTextStyle: {
    fontFamily: Font.Poppins400,
    color: Color.TextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
    textAlign: 'center',
  },
  BoldDetailTextStyle: {
    fontFamily: Font.Poppins700,
    color: Color.TextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    lineHeight: verticalScale(30),
    // backgroundColor:'green',
    textAlign: 'center',
  },

  About: {
    fontFamily: Font.Poppins600,
    color: Color.TextColor2,
    textAlign: w >= 768 && h >= 1024 ? 'center' : 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  AboutText: {
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(12),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10),
  },
  DetailsViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(70),
    justifyContent: 'center',
  },
  LocationText: {
    fontFamily: Font.Poppins700,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
  },
  LocationDetailsText: {
    fontFamily: Font.Poppins500,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
  },
  LocationBigText: {
    fontFamily: Font.Poppins600,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(17),
  },
});
