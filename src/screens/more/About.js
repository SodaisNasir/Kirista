import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  useColorScheme,
  View,
  Image,
} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import {moderateScale, s, scale, verticalScale} from 'react-native-size-matters'
import {Color} from '../../utils/Colors'
import {Font} from '../../utils/font'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomNavigator from '../../components/CustomNavigator'

const About = () => {
  const Theme = useColorScheme() === 'dark'
  const w = useWindowDimensions().width
  const h = useWindowDimensions().height

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
      <Header text={'About'} />
      <ScrollView>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(150),
              width: w >= 768 && h >= 1024 ? scale(90) : '100%',
              alignSelf: 'center',
            }}>
            <Image
              resizeMode="center"
              source={require('../../assets/images/krista_about.png')}
              style={{height: '100%', width: '100%'}}
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
                  {color: Theme ? Color.White : Color.DarkTextColor},
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
                  {color: Theme ? Color.White : Color.DarkTextColor},
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
                  {color: Theme ? Color.White : Color.DarkTextColor},
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
                  {color: Theme ? Color.White : Color.DarkTextColor},
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
                  {color: Theme ? Color.White : Color.DarkTextColor},
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
                  {color: Theme ? Color.White : Color.DarkTextColor},
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
                  {color: Theme ? Color.White : Color.DarkTextColor},
                  styles.TextStyle,
                ]}>
                Kirista also keeps the brethren informed of upcoming events,
                which can be easily browsed, saved, and added to the calendar.
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: Theme ? Color.Black : Color.BorderColor,
                borderBottomWidth: 0.5,
                width: '100%',
                alignSelf: 'center',
                marginVertical: verticalScale(15),
              }}
            />
          </View>

          <View>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  fontFamily: Font.Poppins600,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                }}>
                {' '}
                Developed By
              </Text>
              <View
                style={{
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(80)
                      : verticalScale(50),
                  //   width: w >= 768 && h >= 1024 ? scale(90) : scale(5500),
                  //   alignSelf: 'center',
                  // justifyContent:'center',
                  alignSelf: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/images/idc.png')}
                  styles={{height: '100%', width: '100%'}}
                />
              </View>

              <Text
                style={{
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                  fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
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
        <View style={{height: verticalScale(85)}} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: Color.White,
        }}>
        <CustomNavigator />
      </View>
    </SafeAreaView>
  )
}

export default About

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
})