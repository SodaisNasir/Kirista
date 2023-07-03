import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  View,
  TextInput,
  Text,
  Platform,
} from 'react-native';
import React, {useLayoutEffect, useEffect} from 'react';
import CustomInput from '../../components/CustomInput';
import PhoneInput from '../../components/PhoneInput';
import CustomButton from '../../components/CustomButton';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {Font} from '../../utils/font';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { base_Url } from '../../utils/Url';
import { useSelector } from 'react-redux';
import Loader from '../../components/Modals/Loader';

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  const applanguage = useSelector(state => state.applanguage)
  const userData = useSelector(state => state.user_details)
console.log("user DATA ====>", userData?.data);
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useSelector(state => state.mode)
  const tabPotrait = w >= 768 && h >= 1024;
  const fourInchLandscape = w <= 600 && h <= 350;
  const iosTab = w >= 820 && h >= 1180;
  const navigation = useNavigation();
  const [text, onChangeText] = useState('');
  const [country, setCountry] = useState({
    country_name:  userData != "guest" ? userData?.data.country : '',
    country_code: userData != "guest" ? userData?.data.country_code : '+234',
    flag_code: userData != "guest" ? userData?.data.flag_code : '🇳🇬'
  });

  const [loader, setLoader] = useState(false);

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  const contactUs = async (data,setLoader) => {
    try {
      setLoader(true);
      let base_url = `${base_Url}contact`;
      let myData = new FormData();
  
      myData.append('name', data.fullname);
      myData.append('email', data.email);
      myData.append('phone_number', data.phone_number);
      myData.append('subject', data.subject);
      myData.append('message', text);
  
      const response = await fetch(base_url, {
        method: 'post',
        body: myData,
      });
console.log("response ===>",response);
      const responseData = await response.json();
      console.log("responseData ===>",responseData);
      if(responseData.success.status === 200){
        alert('Successfully Submited')
        console.log('responseData', responseData.success.data)
        setTimeout(() => {
          navigation.goBack()
        }, 2000);
        setLoader(false);
      }else{
        alert(responseData.error.message);
        setTimeout(() => {
          navigation.goBack()
        }, 2000);
        setLoader(false);
      }

    } catch (error) {
      console.log('error', error)
    }
  }
 
  const onSubmit = data =>{
    if(data && text != ''){
      contactUs(data,setLoader)

    }else{
      alert('Please fill the form')
    }
  }

  const handlePhoneNumberButtonPress = () => {
    navigation.navigate('FeaturedCountry', {
      setCountry:setCountry
    });
  };

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />

      <View
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        }}>
        <Header text={applanguage.Contact}
        AuthHeaderStyle={{
          height:
            Platform.OS == 'android'
              ? verticalScale(80)
              : w >= 768 && h >= 1024
              ? verticalScale(70)
              : w >= 768 && h >= 1024
              ? verticalScale(65)
              : w <= 450 && h <= 750
              ? verticalScale(50)
              : verticalScale(45),
        }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
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
              <CustomInput
               defaultValue={userData != "guest" ? userData.data.name: ''}
              control={control}
                name="fullname"
                rules={{
                  required: 'Full name is required',
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Enter a full name',
                }}
                // onChangeText={txt => {
                //   console.log('text ==>', email);
                //   setEmail(txt);
                // }}
                text={applanguage.FullName}
                placeholder={applanguage.FullName}
                // keyboardType={'email-address'}
              />
                {errors.fullname && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.fullname.message}
                </Text>
              )}
            </View>
            {/* <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput text={'Full Name'} placeholder={'Full Name'}  restyleBox={{
            marginTop:  w <= 450 && h <= 750 ? 0 : verticalScale(-15),
            height:
              w >= 768 && h >= 1024
                ? verticalScale(50)
                : w <= 450 && h <= 750
                ? verticalScale(65)
                : verticalScale(30),
          }}/>
          </View> */}

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <CustomInput
                control={control}
                defaultValue={userData != "guest" ? userData.data.email: '' }
                name="email"
                rules={{
                  required: 'Email is required',
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Enter a valid email',
                }}
                // onChangeText={txt => {
                //   console.log('text ==>', email);
                //   setEmail(txt);
                // }}
                text={applanguage.EmailAddress}
                placeholder={applanguage.EmailAddress}
                keyboardType={'email-address'}
              />
              {errors.email && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.email.message}{' '}
                </Text>
              )}
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <CustomInput
              defaultValue={userData.data.phone_number}
                onPress={handlePhoneNumberButtonPress}
                control={control}
                name="phonenumber"
                maxLength={16}
                rules={{
                  required: 'Phone number is required',
                  message: 'Please enter your phone number',
                  maxLength: {
                    value: 15,
                    message: 'Please enter a valid phone number',
                  },
                }}
                // restyleBox={{
                //   marginBottom:
                //     w >= 768 && h >= 1024
                //       ? verticalScale(15)
                //       : verticalScale(15),
                // }}
                placeholder={applanguage.PhoneNumber}
                text={applanguage.PhoneNumber}
                keyboardType={'numeric'}
                // flagImage={flagImage}
                // phoneNumber={phoneNumber}
                flagImage={country.flag_code}
                phoneNumber={country.country_code}
                phone={true}
                // onChange = value.replace(/(\d{3})(?=\d)/g, '$1 ')
              />
              {errors.phonenumber && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.phonenumber.message}{' '}
                </Text>
              )}
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <CustomInput
                // TextRestyle={{textAlignVertical: 'top'}}
                control={control}
                name="subject"
                rules={{
                  required: 'Subject is required',
                  // value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  // message: 'Enter a valid subject',
                }}
                // onChangeText={txt => {
                //   console.log('text ==>', email);
                //   setEmail(txt);
                // }}
                text={applanguage.Subject}
                placeholder={applanguage.Subject}
                // keyboardType={'email-address'}
              />
              {errors.subject && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.subject.message}
                </Text>
              )}
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <Text
                style={{
                  fontFamily: Font.Poppins500,
                  color: Theme === 'dark' ? Color.DarkThemText2 : Color.BoldTextColor,
                  fontSize: tabPotrait
                    ? verticalScale(11)
                    : fourInchLandscape
                    ? scale(12)
                    : scale(14),
                }}>
                {applanguage.Message}
              </Text>
              <TextInput
                placeholderTextColor={Color.BoldTextColor}
                style={{
                  fontSize: tabPotrait
                    ? verticalScale(12)
                    : fourInchLandscape
                    ? scale(12)
                    : scale(14.5),
                  paddingBottom: iosTab
                    ? moderateVerticalScale(60)
                    : moderateVerticalScale(100),
                  color: Theme === 'dark' ? Color.White : Color.TextColor,
                  backgroundColor: Theme === 'dark' 
                    ? Color.DarkThemeInputBox
                    : Color.InputBoxColor,
                  borderRadius: tabPotrait ? scale(12) : scale(18),
                  fontFamily: Font.Inter500,
                  alignItems: 'center',
                  justifyContent: 'center',
              
                  flex: 1,
                  paddingHorizontal: verticalScale(15),
                }}
                placeholder= {applanguage.Typehere}
                multiline={true}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
              }}>
              <CustomButton text={applanguage.Submit} onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </ScrollView>
        <Loader
   onBackdropPress={() => setLoader(false)}
   isVisible={loader}
/>
      </View>
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({
  error: {
    color: Color.Main,
    fontFamily: Font.Inter500,
    alignSelf: 'flex-start',
    // marginLeft: scale(25),
    marginTop: 5,
    paddingHorizontal: verticalScale(10),
  },
});
