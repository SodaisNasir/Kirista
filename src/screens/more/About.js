import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  useColorScheme,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Header from '../../components/Header';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomNavigator from '../../components/CustomNavigator';

const About = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  return (
    <>
      <SafeAreaView style={{backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor}}/>

    <SafeAreaView
      style={[
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
      <StatusBar
        backgroundColor={Theme ? Color.ExtraViewDark : Color.HeaderColor}
        barStyle={Theme ? 'light-content' : 'dark-content'}
      />
      <Header text={'About'} />
      <ScrollView>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            marginTop:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(0),
          }}>
          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(150),
              width: w >= 768 && h >= 1024 ? '100%' : '90%',
            }}>
            <Image
              resizeMode="contain"
              source={
                Theme
                  ? require('../../assets/images/krista_about_dark.png')
                  : require('../../assets/images/krista_about.png')
              }
              style={{height: '100%', width: '100%', alignSelf: 'center'}}
            />
          </View>

          <View
            style={[
              styles.TextViewStyle,
              {
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              },
            ]}>
            <View>
              <Text
                style={[
                  {
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
                  },
                  styles.TextStyle,
                ]}>
                Kirista is mobile platform for learning about or finding
                parishes, reading books, and more.
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.TextViewStyle,
              {
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              },
            ]}>
            <View>
              <Text
                style={[
                  {
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
                  },
                  styles.TextStyle,
                ]}>
                Kirista is mobile platform for learning about or finding
                parishes, reading books, and more.
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.TextViewStyle,
              {
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              },
            ]}>
            <View>
              <Text
                style={[
                  {
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
                  },
                  styles.TextStyle,
                ]}>
                This platform's powerful content and resources will assist
                brethren in staying connected with the activities of the RCCG
                Continent 2.
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.TextViewStyle,
              {
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              },
            ]}>
            <View>
              <Text
                style={[
                  {
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
                  },
                  styles.TextStyle,
                ]}>
                With the intuitive interface, Brethren can access the
                information whenever they need it and can navigate the features
                with ease.
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.TextViewStyle,
              {
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              },
            ]}>
            <View>
              <Text
                style={[
                  {
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
                  },
                  styles.TextStyle,
                ]}>
                Kirista makes it easy for brethren to find a parish (mostly RCCG
                Continent 2 Parishes) through sorting and searching by Country,
                Region, Province, Zone, or Area and then viewing parish
                information.
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.TextViewStyle,
              {
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              },
            ]}>
            <View>
              <Text
                style={[
                  {
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
                  },
                  styles.TextStyle,
                ]}>
                Brethren can easily access free books, such as manuals, stories,
                articles, activities, and everything in between. Brethren can
                then save, read, bookmark, and share books with friends and
                family.
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.TextViewStyle,
              {
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              },
            ]}>
            <View>
              <Text
                style={[
                  {
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
                  },
                  styles.TextStyle,
                ]}>
                Kirista also keeps the brethren informed of upcoming events,
                which can be easily browsed, saved, and added to the calendar.
              </Text>
            </View>

            {/* <View
              style={{
                borderBottomColor: Theme ? Color.Black : Color.BorderColor,
                borderBottomWidth: 0.5,
                width: '100%',
                alignSelf: 'center',
                marginVertical: verticalScale(15),
              }}
            /> */}
          </View>

          {Theme ? (
            <View
              style={{
                height: verticalScale(80),
                borderBottomColor: Theme ? Color.White : Color.BorderColor,
                borderBottomWidth: 0.5,
                borderTopWidth: 0.5,
                borderTopColor: Theme ? Color.White : Color.BorderColor,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(15),
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
                    // Theme ?
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
          ) : null}

          <View style={{top: w >= 768 && h >= 1024 ? scale(10) : scale(5)}}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  fontFamily: Font.Poppins600,
                  color: Theme ? Color.White : Color.DarkTextColor,
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
                      : require('../../assets/images/idc.png')
                  }
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </View>

              <Text
                style={{
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
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
                    color: Theme ? Color.White : Color.DarkTextColor,
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
          </View>
        </View>
        <View style={{height: verticalScale(10)}} />
      </ScrollView>
    </SafeAreaView>
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
