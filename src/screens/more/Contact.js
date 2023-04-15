import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native'
import React, {useLayoutEffect} from 'react'
import CustomInput from '../../components/CustomInput'
import PhoneInput from '../../components/PhoneInput'
import CustomButton from '../../components/CustomButton'
import {version} from 'react/cjs/react.production.min'
import {verticalScale, scale, moderateScale} from 'react-native-size-matters'
import Header from '../../components/Header'
import {Color} from '../../utils/Colors'

const Contact = ({navigation}) => {
  const w = useWindowDimensions().width
  const h = useWindowDimensions().height
  const Theme = useColorScheme() === 'dark'

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
  }, [])

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <Header text={'Contact'} />
      <ScrollView>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            marginVertical:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput text={'Full Name'} placeholder={'Full Name'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput text={'Email Address'} placeholder={'Email'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <PhoneInput text={'Phone Number'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput
              RestyleHeight={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(80)
                    : verticalScale(130),
                paddingHorizontal: moderateScale(10),
              }}
              TextRestyle={{textAlignVertical: 'top'}}
              text={'Subject'}
              placeholder={'Type here'}
            />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput
              RestyleHeight={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(80)
                    : verticalScale(130),
                paddingHorizontal: moderateScale(10),
              }}
              TextRestyle={{textAlignVertical: 'top'}}
              text={'Message'}
              placeholder={'Type here'}
            />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
            }}>
            <CustomButton text={'Submit'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Contact

const styles = StyleSheet.create({})
