import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  StatusBar,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Header from '../../components/Header';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {base_Url} from '../../utils/Url';
import {useState} from 'react';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import {useSelector} from 'react-redux';
import DoubleText from '../../components/Loader/DoubleText';

const About = ({navigation}) => {
  const Theme = useSelector(state => state.mode);
  const language = useSelector(state => state.language);
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [data, setData] = useState('');
  const {width} = useWindowDimensions();
  const [Loading,setLoading] = useState(false)

  const systemFonts = [...defaultSystemFonts, 'Poppins-Medium'];

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    getAbout();
  }, []);




  const type = 'Kirista';
  const getAbout = async () => {
    setLoading(true)
    try {
      let base_url = `${base_Url}show-about`;
      let myData = new FormData();

      myData.append('type', type);
      myData.append('language', language);

      const response = await fetch(base_url, {
        body: myData,
        method: 'post',
      });

      const responseData = await response.json();

      if (responseData.success.status === 200) {
        setData(responseData.success.data.description);
        setLoading(false)
      }
    } catch (error) {
      console.log('error', error);
      setLoading(false)
    }
  };

  let result = data?.replace(/<div(.*?)>/gi,`<div style='color: ${Theme === 'dark' ? Color.White : Color.Black};font-family: ${Font.Poppins500}; font-size: ${w >= 768 && h >= 1024 ? '15px' : '15px'};'>`)
  const source = {
    html: result,
  };

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor:
            Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <StatusBar
        backgroundColor={
          Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor
        }
      />
      <View
        style={[
          {
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            flex: 1,
          },
        ]}>
        <Header text={'About'} />
        {/* AuthHeaderStyle={{
            height:
              w >= 768 && h >= 1024
                ? verticalScale(50)
                : w <= 450 && h <= 750
                ? verticalScale(65)
                : verticalScale(30),
          }} */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(0),
            }}>
            {/* <Image
              resizeMode="contain"
              source={
                Theme === 'dark'
                  ? require('../../assets/images/krista_about_dark.png')
                  : require('../../assets/images/krista_about.png')
              }
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(50)
                    : verticalScale(100),
                width: w >= 768 && h >= 1024 ? '40%' : '60%',
                alignSelf: 'center',
                marginBottom: w >= 768 && h >= 1024 ? verticalScale(5) : 0,
              }}
            /> */}
            {Loading ? (
                 <View style={{flex:1,backgroundColor: Theme === 'dark'
                 ? Color.DarkTheme
                 : Color.White}}>
                  <View style={{
                    marginTop:
                    w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(15),
                  }}>
                  <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(65) : verticalScale(80)} />
               </View>
                  {/* <View style={{
                    marginTop:
                    w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(10),
                  }}>
                  <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(70) : verticalScale(80)} />
               </View> */}
                  <View style={{
                    marginVertical:
                    w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(10),
                  }}>
                  <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(280) : verticalScale(320)} />
               </View>
              
                  </View>
            ) : (
              <RenderHtml contentWidth={width} source={source} systemFonts={systemFonts} />
            )}

            {/* {Theme === 'dark' ? (
              <View
                style={{
                  height: verticalScale(80),
                  borderBottomColor:
                    Theme === 'dark' ? Color.White : Color.BorderColor,
                  borderBottomWidth: 0.5,
                  borderTopWidth: 0.5,
                  borderTopColor:
                    Theme === 'dark' ? Color.White : Color.BorderColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(20)
                      : verticalScale(15),
                }}>
                <View
                  style={{
                    height: '90%',
                    width: '50%',
                    paddingTop: 5,
                  }}>
                  <Image
                    resizeMode="contain"
                    source={
                      // Theme === 'dark' ?
                      require('../../assets/images/dark_splash.png')
                      // : require('../../assets/images/splash_light.png')
                    }
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </View>
              </View>
            ) : null} */}

            {/* <View style={{top: w >= 768 && h >= 1024 ? scale(10) : scale(5)}}>
              <View style={{alignSelf: 'center'}}>
                <Text
                  style={{
                    fontFamily: Font.Poppins600,
                    color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    textAlign: 'center',
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                    top: w >= 768 && h >= 1024 ? scale(5) : scale(10),
                  }}>
                  {' '}
                  Developed By
                </Text>
                <View
                  style={{
                    height:
                      w >= 768 && h >= 1024
                        ? verticalScale(40)
                        : verticalScale(50),
                    width: w >= 768 && h >= 1024 ? scale(200) : scale(240),
                    //   alignSelf: 'center',
                    alignSelf: 'center',
                    marginVertical:
                      w >= 768 && h >= 1024 ? verticalScale(10) : null,
                  }}>
                  <Image
                    resizeMode="contain"
                    source={
                      Theme
                        ? require('../../assets/images/idc_platforms_dark.png')
                        : require('../../assets/images/idc_platforms.png')
                    }
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </View>

                <Text
                  onPress={() =>
                    Linking.openURL('https://www.idcplatforms.com/')
                  }
                  style={{
                    fontFamily: Font.Poppins700,
                    color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    textAlign: 'center',
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
                    bottom: w >= 768 && h >= 1024 ? scale(10) : scale(10),
                  }}>
                  {' '}
                  www.idcplatforms.com
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',

                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(60)
                      : verticalScale(100),
                  marginBottom: verticalScale(20),
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    {
                      fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                      color:
                        Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    },
                    styles.NaijaText,
                  ]}>
                  Made in Naija
                </Text>
                <Ionicons
                  name="heart"
                  size={w >= 768 && h >= 1024 ? scale(16) : scale(22)}
                  color={'#4BCE32'}
                  style={{left: scale(1)}}
                />
              </View>
            </View> */}
          </View>
          {/* <View style={{height: verticalScale(10)}} /> */}
        </ScrollView>
      </View>
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  TextViewStyle: {
    paddingHorizontal: moderateScale(10),
  },
  TextStyle: {
    fontFamily: Font.Poppins400,
  },

  NaijaText: {
    fontFamily: Font.Poppins600,
  },
});
