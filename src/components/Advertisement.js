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
  StatusBar,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import Modal from 'react-native-modal';

const Advertisement = props => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );

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
    <View style={styles.container}>
      <StatusBar backgroundColor='#66a981'/>
        <ImageBackground
          blurRadius={14}
          source={require('../assets/images/ad_book_tablet.png')}
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
                onPress={() => navigation.replace('HomeScreen')}
                style={[
                  {
                    borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(18),
                    backgroundColor: 'white',
                    alignSelf: 'flex-end',
                    opacity: 0.5,
                    paddingVertical:
                      w >= 768 && h >= 1024
                        ? verticalScale(2)
                        : verticalScale(5),
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
                <Image
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
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
                    textAlign: 'center',
                    color: Color.White,
                    fontFamily: Font.Poppins600,
                  }}>
                  Sunday School {`\n`} Student’s Manual
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
                onPress={props.onPressView}
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
                  View
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
      {/* </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(2, 136, 50, 0.5)',
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
