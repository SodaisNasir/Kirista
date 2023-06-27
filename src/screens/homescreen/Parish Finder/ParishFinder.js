import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import React,{useState} from 'react'
import {Color} from '../../../utils/Colors'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import SelectDropdown from '../../../components/SelectDropdown'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { searchPerish } from '../../../redux/actions/UserAction'
import IncorrectModal from '../../../components/Modals/IncorrectModal'

const ParishFinder = () => {
  const navigation = useNavigation()
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const w = useWindowDimensions()
  const h = useWindowDimensions()
  const [phoneNumber, setPhoneNumber] = useState('+234');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [province, setProvince] = useState('');
  const [flagImage, setFlagImage] = useState(
    require('../../../assets/images/nig.png'),
  );

  const [message, setMessage] = useState('');
  const [check, setCheck] = useState(false)

  const onSubmit = () => {
    if(country != '' && province != '' && region != ''){
      searchPerish(country,province,region,navigation,setMessage,setCheck,applanguage)
    }else{
      setMessage(applanguage.SelectField)
      setCheck(true)
    }
  }
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
              onPress={() => navigation.navigate('Country',{
                  setPhoneNumber: setPhoneNumber,
                  setFlagImage: setFlagImage,
                  setCountry: setCountry,
                  newType: 'country'
              })}
              text={applanguage.Country}
              title={country != '' ? country : applanguage.SelectCountry}
            />
          </View>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(10),
            }}>
            <SelectDropdown
              onPress={() => navigation.navigate('regioncountry',{
                type:'region',
                dataType: country,
                setSelectedLanguage:setRegion
              })}
              text={applanguage.Region}
              title={region != '' ? region : applanguage.SelectRegion}
            />
          </View>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(10),
            }}>
            <SelectDropdown
              onPress={() => navigation.navigate('regioncountry',{
                type:'province',
                setSelectedLanguage:setProvince,
                dataType: region,
              })}
              text={applanguage.Province}
              title={province != '' ? province : applanguage.SelectProvince}
            />
          </View>
          <CustomButton
            onPress={onSubmit}
            // onPress={() => navigation.navigate('ParishesResult')}
            text={applanguage.Search}
            stylz={{
              marginTop: verticalScale(25),
            }}
          />
        </View>
      </ScrollView>

      <IncorrectModal
          text={message}
          onPress={() => setCheck(false)}
          onBackdropPress={() => setCheck(false)}
          isVisible={check}
        />
    </View>
        </>
  )
}

export default ParishFinder

const styles = StyleSheet.create({
  ViewStyling: {},
})
