import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
  ScrollView,
  StatusBar,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

const Advertisement = props => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    let timerId;

    const decrementTimer = () => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        setSeconds(null);
      }
    };

    timerId = setTimeout(() => {
      decrementTimer();
    }, 1000);

    return () => clearTimeout(timerId);
  }, [seconds]);
  return (
    <View style={styles.modalStyling}>
      {/* <StatusBar backgroundColor={'#65A980'} barStyle={'light-content'} /> */}
      <ImageBackground
        blurRadius={14}
        source={require('../assets/images/ad_book_tablet.png')}
        // resizeMode="stretch"
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
              // opacity={0.1}
              onPress={() => navigation.navigate('HomeScreen')}
              style={[
                {
                  borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(18),
                  backgroundColor: 'white',
                  alignSelf: 'flex-end',
                  opacity: 0.7,
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
                  fontFamily: Font.Poppins500,
                }}>
                {seconds} Skip
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
                height: w >= 768 && h >= 1024 ? scale(130) : '50%',
                //   width:
                //     w >= 768 && h >= 1024 ? scale(130) : verticalScale(240),

                //   marginBottom: verticalScale(15),
              }}>
              <Animatable.Image
                iterationDelay={1500}
                duration={500}
                animation={fadeIn}
                resizeMode="contain"
                style={{
                  height: '100%',
                  width: '100%',

                  // width: w >= 768 && h >= 1024 ? scale(7) : verticalScale(180),
                }}
                source={require('../assets/images/ad_book.png')}
              />
            </View>
            <View style={{marginTop: verticalScale(20)}}>
              <Animatable.Text
                iterationDelay={1800}
                duration={300}
                animation={fadeIn}
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
                  textAlign: 'center',
                  color: Color.White,
                  fontFamily: Font.Poppins600,
                }}>
                Sunday School {`\n`} Student’s Manual
              </Animatable.Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              width: '100%',
              // justifyContent:'center'
              // marginBottom: verticalScale(15),
              // backgroundColor:'red',
              marginBottom: w >= 768 && h >= 1024 ? '16%' : scale(10),
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewManual')}
              style={[
                {
                  height: w >= 768 && h >= 1024 ? verticalScale(30) : '55%',
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(18),
                },
                styles.Btn,
              ]}>
              <Animatable.Text
                iterationDelay={700}
                duration={300}
                animation={fadeIn}
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                  textAlign: 'center',
                  color: Color.Main,
                  fontFamily: Font.Poppins600,
                }}>
                View
              </Animatable.Text>
              <Animatable.View
                iterationDelay={700}
                duration={300}
                animation={fadeIn}
                style={{marginLeft: scale(5)}}>
                <AntDesign
                  name="arrowright"
                  size={w >= 768 && h >= 1024 ? scale(9) : scale(16)}
                  color={Color.Main}
                />
              </Animatable.View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(2, 136, 50, 0.5)',
    // justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
  },
  modalStyling: {
    flex: 1,
    height: '100%',
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
