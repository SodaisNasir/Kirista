import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  useColorScheme,
} from 'react-native'
import React,{useState} from 'react'
import HomeHeader from '../../../components/HomeHeader'
import {Color} from '../../../utils/Colors'
import {Font} from '../../../utils/font'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import CustomInput from '../../../components/CustomInput'
import SelectDropdown from '../../../components/SelectDropdown'
import CustomButton from '../../../components/CustomButton'
import SelectRegion from './SelectRegion'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const ParishFinder = () => {
  const navigation = useNavigation()
  const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions()
  const h = useWindowDimensions()
  const [phoneNumber, setPhoneNumber] = useState('+234');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [province, setProvince] = useState('');
  const [flagImage, setFlagImage] = useState(
    require('../../../assets/images/nig.png'),
  );
  return (
    <>
       <SafeAreaView style={{backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}}/>
    <View
      style={{flex: 1, backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White}}>
        {/* <HomeHeader
          ParishRestyle={{color: Color.Main, fontFamily: Font.Poppins700}}
          ParishUnderLineStyle={{
            width: '25%',
            backgroundColor: Color.Main,
            height: verticalScale(2),
            bottom: verticalScale(4),
          }}
        /> */}
          <ScrollView showsVerticalScrollIndicator={false}>
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
              onPress={() => navigation.navigate('SelectCountry',{
                  setPhoneNumber: setPhoneNumber,
                  setFlagImage: setFlagImage,
                  setCountry: setCountry,
                  newType: 'country'
              })}
              text={'Country'}
              title={country != '' ? country : 'Select Country'}
            />
          </View>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(10),
            }}>
            <SelectDropdown
              onPress={() => navigation.navigate('Language',{
                type:'Region',
                setSelectedLanguage:setRegion
              })}
              text={'Region'}
              title={region != '' ? region : 'Select Region'}
            />
          </View>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(10),
            }}>
            <SelectDropdown
              onPress={() => navigation.navigate('Language',{
                type:'Provence',
                setSelectedLanguage:setProvince
              })}
              text={'Province'}
              title={province != '' ? province : 'Select Province'}
            />
          </View>
          <CustomButton
            onPress={() => navigation.navigate('ParishesResult')}
            text={'Search'}
            stylz={{
              marginTop: verticalScale(25),
            }}
          />
        </View>
      </ScrollView>
    </View>
        </>
  )
}

export default ParishFinder

const styles = StyleSheet.create({
  ViewStyling: {},
})
