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
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import React, {useState, useEffect,useLayoutEffect} from 'react';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

const Advertisement = ({navigation}) => {


  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
  }, [])
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
    <SafeAreaView style={styles.container}>
      <ImageBackground
        blurRadius={14}
        source={require('../assets/images/ad_book_tablet.png')}
        // resizeMode="stretch"
        style={styles.ImageBackground}>
        <View style={styles.container}>
          <Animatable.View
            iterationDelay={1000}
            duration={300}
            animation={fadeIn}
            style={{
              justifyContent: 'flex-end',
              // backgroundColor: 'red',
              position: 'absolute',
              top: 0,
              width: '100%',
              alignSelf: 'flex-end',
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              paddingVertical: moderateScale(25),
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(0),
              height:
                w >= 768 && h >= 1024 ? verticalScale(100) : verticalScale(100),
            }}>
            <TouchableOpacity
            opacity={0.7}
             onPress={()=>navigation.navigate('Home')}
              style={[
                {borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(18)},
                styles.Skip,
              ]}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                  // textAlign: 'center',
                  color: Color.White,
                  fontFamily: Font.Poppins500,
                }}>
                {seconds} Skip
              </Text>
            </TouchableOpacity>
          </Animatable.View>


          <View
            style={{
              height: w >= 768 && h >= 1024 ? scale(130) : verticalScale(240),
              width: w >= 768 && h >= 1024 ? scale(130) : verticalScale(240),
              // backgroundColor:'red'
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

          <Animatable.Text
            iterationDelay={1800}
            duration={300}
            animation={fadeIn}
            style={{
              fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
              textAlign: 'center',
              color: Color.White,
              fontFamily: Font.Poppins600,
              marginTop: verticalScale(15),
            }}>
            Sunday School {`\n`} Student’s Manual
          </Animatable.Text>
          
          
          <TouchableOpacity
          onPress={()=>navigation.navigate('ViewManual')}
            style={[
              {
                height:
                  w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(45),
                borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(18),
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
            </Animatable.View >
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(2, 136, 50, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
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
  Skip: {
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(15),
    backgroundColor: 'white',
opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    // position: 'absolute',
  
  },
  Btn: {
    width: '85%',
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
