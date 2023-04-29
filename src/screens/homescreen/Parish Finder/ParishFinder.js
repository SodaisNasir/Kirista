import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  useColorScheme,
} from 'react-native'
import React from 'react'
import HomeHeader from '../../../components/HomeHeader'
import {Color} from '../../../utils/Colors'
import {Font} from '../../../utils/font'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import CustomInput from '../../../components/CustomInput'
import SelectDropdown from '../../../components/SelectDropdown'
import CustomButton from '../../../components/CustomButton'

const ParishFinder = ({navigation}) => {
  const Theme = useColorScheme() === 'dark'
  const w = useWindowDimensions()
  const h = useWindowDimensions()
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader
          ParishRestyle={{color: Color.Main, fontFamily: Font.Poppins700}}
          ParishUnderLineStyle={{
            width: '25%',
            backgroundColor: Color.Main,
            height: verticalScale(2),
            bottom: scale(4),
          }}
        />
        <View
          style={{
            marginVertical:
              w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(15),
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(10),
            }}>
            <SelectDropdown
              onPress={() => navigation.navigate('SelectCountry')}
              text={'Country'}
              title={'Select Country'}
            />
          </View>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(10),
            }}>
            <SelectDropdown
              onPress={() => navigation.navigate('SelectCountry')}
              text={'Region'}
              title={'Select Region'}
            />
          </View>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(10),
            }}>
            <SelectDropdown
              onPress={() => navigation.navigate('SelectCountry')}
              text={'Province'}
              title={'Select Province'}
            />
          </View>
          <CustomButton
            onPress={() => navigation.navigate('ParishesResult')}
            text={'Search'}
            stylz={{
              marginTop: 10,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ParishFinder

const styles = StyleSheet.create({
  ViewStyling: {},
})
