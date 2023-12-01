import {
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  useWindowDimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {register} from '../../redux/actions/AuthAction';
import { useRef } from 'react';
import IncorrectModal from '../../components/Modals/IncorrectModal';
import { useFocusEffect } from '@react-navigation/native';
import { getPerishCountry } from '../../redux/actions/UserAction';
import Loader from '../../components/Modals/Loader';
import AntDesign from "react-native-vector-icons/AntDesign"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const applanguage = useSelector(state => state.applanguage)

  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;
  const tabPotrait = width >= 768 && height >= 1024;
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});


  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useSelector(state => state.mode)
  const language = useSelector(state => state.language)
  const [isVisible, setVisible] = useState(true);
  const [isVisible2, setVisible2] = useState(true);
  const [loader, setLoader] = useState(false);
  const [country, setCountry] = useState({
    country_name: 'Nigeria',
    country_code: '+234',
    flag_code: '🇳🇬'
  });


  const handlePhoneNumberButtonPress = () => {
    navigation.navigate('FeaturedCountry', {
      setCountry:setCountry
    });
  };

  // const onSubmit = (data) => {
  //   if (data.password == data.confirm_password) {
  //     // dispatch(verify_Email(data,navigation,type))
  //     navigation.navigate('OTP',{
  //       type: type,
  //       data: data
  //   })

  //   } else {
  //     alert('password is not same')
  //   }
  // };

  const device = Platform.OS;
  const [notMatched, setNotMatched] = useState(false);
  const [message, setMessage] = useState('');
  const [check, setCheck] = useState(false)

  const onSubmit = data => {
    if (data.password == data.confirm_password) {
      dispatch(register(data, device,setMessage,setCheck,country,setLoader,language));
    } else {
      setNotMatched(true);
    }
  };
  const confirmPasswordRef = useRef()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
      }}>
      <StatusBar backgroundColor={Theme === 'dark' ? Color.DarkTheme : Color.White} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            marginTop:
              w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(20),
          }}>
             <View>
              <View style={{marginTop:Platform.OS == "android" ? 10 :0}}>

          <AntDesign
            name="arrowleft"
            size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
            color={Theme === 'dark' ? Color.White : Color.Black}
            onPress={() => navigation.goBack()}
            // onPress={props.goPress}
          />
              </View>
        </View>
          <View style={{}}>
            <Kiristalogo />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',

              marginTop:
                w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(15),
            }}>
            <Text
              style={{
                fontFamily: Font.Poppins700,
                fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(25),
                color: Theme === 'dark' ? Color.White : Color.Black,
              }}>
              {applanguage.CreateAccount}
            </Text>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(5) : moderateScale(10),
            }}>
            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                control={control}
                name="full_name"
                rules={{
                  required: applanguage.FullNameReq,
                  message: applanguage.EnterFullName,
                }}
                text={applanguage.FullName}
                placeholder={applanguage.FullName}
                // keyboardType={'email-address'}
              />

              {errors.full_name && (
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
                  {errors.full_name.message}{' '}
                </Text>
              )}
            </View>

            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                onPress={handlePhoneNumberButtonPress}
                control={control}
                name="phonenumber"
                maxLength={14}
                rules={{
                  required: applanguage.RequiredPhone,
                  message: applanguage.Phonemessage,
                  maxLength: {
                    value: 14,
                    message: applanguage.ValidPhone,
                  },
                }}
                // restyleBox={{
                //   marginBottom:
                //     w >= 768 && h >= 1024
                //       ? verticalScale(15)
                //       : verticalScale(15),
                // }}
                placeholder={applanguage.PhoneNumber}
                keyboardType={'numeric'}
                text={applanguage.PhoneNumber}
                flagImage={country ? country.flag_code : '🇳🇬'}
                phoneNumber={country ? country.country_code : '+234'}
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
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                control={control}
                name="email"
                rules={{
                  required: applanguage.RequiredEmail,
                  // value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: applanguage.ValidEmail,
                  },
                }}
                text={applanguage.EmailAddress}
                placeholder={applanguage.EmailAddress}
                keyboardType="email-address"
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
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                password={true}
                text={applanguage.Password}
                placeholder={applanguage.Password}
                control={control}
                name="password"
                rules={{
                  required: applanguage.RequiredPassword,
                  minLength: {
                    value: 8,
                    message: applanguage.PasswordMax,
                  },
                  maxLength: {
                    value: 16,
                    message: applanguage.PasswordMin,
                  },
                }}
                keyboardType="default"
                maxLength={20}
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
                secureTextEntry={isVisible}
                PIname={isVisible ? 'eye-off-outline' : 'eye-outline'}
                onShowPass={() => setVisible(!isVisible)}
              />
              {errors.password && (
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
                  {errors.password.message}
                </Text>
              )}
            </View>
            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                password={true}
                text={applanguage.ConfirmPassword}
                placeholder={applanguage.ConfirmPassword}
                control={control}
                name="confirm_password"
                rules={{
                  required: applanguage.RequiredConfirmPassword,
                  minLength: {
                    value: 8,
                    message: applanguage.ConfirmPasswordMax,
                  },
                  maxLength: {
                    value: 16,
                    message: applanguage.ConfirmPasswordMin,
                  },
                  validate: {
                    positive: (value) =>
                      value === watch('password') || applanguage.PasswordMatch,
                  },
                }}
                keyboardType="default"
                maxLength={20}
                ref={(e) => (confirmPasswordRef.current = e)}
                secureTextEntry={isVisible2}
                PIname={isVisible2 ? 'eye-off-outline' : 'eye-outline'}
                onShowPass={() => setVisible2(!isVisible2)}
              />
              {errors.confirm_password && (
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
                  {errors.confirm_password.message}{' '}
                </Text>
              )}
            </View>
            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
              }}>
              <CustomButton
                onPress={handleSubmit(onSubmit)}
                // onPress={() =>
                //   email != null
                //     ? Dispatch({type: LOGIN, payload: email})
                //     : alert('Complete the form')
                // }
                text={applanguage.SignUp}
              />
            </View>

            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),

                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                  fontFamily: Font.Poppins500,
                  fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                }}>
                {applanguage.SignUpText}, {' '}
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                    fontFamily: Font.Poppins700,
                  }}>
                  {applanguage.SignIn}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <IncorrectModal
          text={message}
          onPress={() => setCheck(false)}
          onBackdropPress={() => setCheck(false)}
          isVisible={check}
        />

<Loader 
   onBackdropPress={() => setLoader(false)}
   isVisible={loader}
/> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    alignSelf: 'flex-start',
    // marginLeft: scale(25),
    marginTop: 5,
    fontFamily: Font.Inter500,
    marginBottom: -20,
    paddingHorizontal: verticalScale(10),
  },
});

export default SignUp;
