import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
  Platform,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import React, {useState, useEffect} from 'react';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {show_popup} from '../redux/actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import { ADVMODAL } from '../redux/reducer';

const Advertisement = (props) => {
  // const navigation = useNavigation();
  // const dispatch = useDispatch();
  const IOS = Platform.OS == 'ios';
  const Advertisement = props.Advertisement
const seconds = props.seconds
  const applanguage = props.applanguage
  // const advmodal = useSelector(state => state.advmodal);
  // const [data, setData] = useState();
  // const deviceData = Platform.OS;
  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(show_popup(deviceData));
  //   }, []),
  // );

  // useFocusEffect(
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   useCallback(() => {
  //     navigation.getParent()?.setOptions({
  //       tabBarStyle: {
  //         display: 'none',
  //       },
  //     });
  //   }),
  // );

  // const onSubmit = () => {
  //   if (Advertisement?.book_name != null) {
  //     navigation.navigate('ViewManual', {
  //       item: Advertisement?.book,
  //     });
  //   }else {
  //     navigation.navigate('AdvWebView', {
  //       link: Advertisement?.app_page,
  //     });
  //   }
  // };
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  return (
    <>
    <StatusBar translucent={true} backgroundColor={'transparent'} />
    <Modal 
    isVisible={props.isVisible}
    backdropOpacity={props.backdropOpacity}
    style={{
      margin: 0,
      flex:1
    }}
    animationIn="slideInDown" // Set the animationIn property to slideInDown
    // animationInTiming={400} // Adjust the animationInTiming value as needed
    animationOut="slideOutUp" // Set the animationOut property to slideOutUp
    // animationOutTiming={400} // Adjust the animationOutTiming value as needed
    >
    <View style={styles.container}>
      <ImageBackground
        blurRadius={14}
        // source={require('../assets/images/ad_book_tablet.png')}
        source={{uri: Advertisement?.image}}
        style={styles.ImageBackground}>
        <View
          style={[
            {
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            },
            styles.container,
          ]}>
          <View
            style={{
              // marginTop: verticalScale(20),

              flex: w >= 768 && h >= 1024 ? 0.7 : 0.5,
              justifyContent: 'flex-end',
              width: '100%',
            }}>
            <TouchableOpacity
              disabled={seconds > 0 ? true : false}
              // onPress={() => navigation.navigate('HomeScreen')}
              // onPress={() => dispatch({type:ADVMODAL, payload: false})}
              onPress={props.skipPress}
              style={[
                {
                  borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(18),
                  backgroundColor: 'white',
                  alignSelf: 'flex-end',
                  opacity: 0.5,
                  paddingVertical:
                    w >= 768 && h >= 1024 ? verticalScale(2) : verticalScale(5),
                  paddingHorizontal:
                    w >= 768 && h >= 1024
                      ? moderateScale(15)
                      : moderateScale(15),
                },
              ]}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                  // textAlign: 'center',
                  color: Color.DarkTextColor,
                  fontFamily: Font.Inter500,
                }}>
                {seconds} {applanguage.Skip}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              // marginTop: verticalScale(20),

              flex: 3,
              justifyContent: 'center',
              width: '100%',
            }}>
            <View
              style={{
                height: w >= 768 && h >= 1024 ? '75%' : '70%',
                marginBottom: verticalScale(15),
                borderRadius: scale(20),
                width: w >= 768 && h >= 1024 ? '70%' : '80%',
                alignSelf: 'center',
                overflow: 'hidden',
              }}>
                {/* {IOS ? (
                   <Image
                   style={{height: '100%', width: '100%', borderRadius: scale(20)}}
                   source={{
                     uri: Advertisement?.image,
                   }}
                   resizeMode={'contain'}
                 />
                ) : (
              <FastImage
                style={{height: '100%', width: '100%', borderRadius: scale(20)}}
                source={{
                  uri: Advertisement?.image,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
                )} */}
                <FastImage
                style={{height: '100%', width: '100%', borderRadius: scale(20)}}
                source={{
                  uri: Advertisement?.image,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View style={{maxWidth: '50%', alignSelf: 'center'}}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
                  textAlign: 'center',
                  color: Color.White,
                  fontFamily: Font.Poppins600,
                }}>
                {Advertisement?.title}
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              width: '100%',
              marginBottom: w >= 768 && h >= 1024 ? '16%' : scale(10),
            }}>
            <TouchableOpacity
              // onPress={() =>
              //   navigation.navigate('AdvWebView', {
              //     link: forLink,
              //   })
              // }
              // onPress={onSubmit}
              onPress={props.onPress}
              style={[
                {
                  height: w >= 768 && h >= 1024 ? verticalScale(40) : '55%',
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(18),
                },
                styles.Btn,
              ]}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                  textAlign: 'center',
                  color: Color.Main,
                  fontFamily: Font.Poppins600,
                }}>
                {applanguage.View}
              </Text>
              <View style={{marginLeft: scale(5)}}>
                <AntDesign
                  name="arrowright"
                  size={w >= 768 && h >= 1024 ? scale(9) : scale(16)}
                  color={Color.Main}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
    </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(2, 136, 50, 0.3)',
    alignItems: 'center',

    width: '100%',
  },
  modalStyling: {
    flex: 1,
    height: '100%',
    margin: 0,
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
  },

  Text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '900',
    marginTop: 20,
  },

  Btn: {
    width: '100%',
    backgroundColor: Color.White,
    alignSelf: 'center',
    position: 'absolute',
    bottom: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Advertisement;
