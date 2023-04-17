import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  Image,
} from 'react-native'
import {Color} from '../../utils/Colors'
import {Font} from '../../assets/fonts/PoppinsFont'
import {verticalScale, scale, moderateScale} from 'react-native-size-matters'

const LightSplash = ({navigation}) => {
  const Theme = useColorScheme() === 'dark'

  setTimeout(() => {
    navigation.navigate('OverBoard')
  }, 3000)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
      }}>
      <View
        style={{
          height: '40%',
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '40%',
            width: '70%',
          }}>
          {Theme ? (
            <Image
              resizeMode="center"
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../../assets/images/krista_about_dark.png')}
            />
          ) : (
            <Image
              resizeMode="center"
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../../assets/images/krista_about.png')}
            />
          )}
        </View>
      </View>
      <View
        style={{
          height: '54%',
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '20%',
            width: '85%',
          }}>
          <Text
            style={{
              fontFamily: Font.Poppins500,
              fontSize: scale(16),
              color: Theme ? Color.White : Color.Black,
              position: 'absolute',
              left: scale(115),
              top: scale(7),
            }}>
            Powered by
          </Text>
          {Theme ? (
            <Image
              resizeMode="cover"
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../../assets/images/continent2_logo_dark.png')}
            />
          ) : (
            <Image
              resizeMode="cover"
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../../assets/images/continent2_logo.png')}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LightSplash

const styles = StyleSheet.create({})
