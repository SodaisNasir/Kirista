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
} from 'react-native';
import React, {useState} from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import { register, verify_Email } from '../../redux/actions/AuthAction';
import { useEffect } from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  const dispatch = useDispatch()

  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;
  const tabPotrait = width >= 768 && height >= 1024;
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});


  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useColorScheme() === 'dark';

  const type = 'signup'




  const [phoneNumber, setPhoneNumber] = useState('+234');
  const [flagImage, setFlagImage] = useState(
    require('../../assets/images/nig.png'),
  );
  const handlePhoneNumberButtonPress = () => {
    navigation.navigate('SelectCountry', {
      setPhoneNumber: setPhoneNumber,
      setFlagImage: setFlagImage,
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

  const onSubmit = (data) => {
    // dispatch(register(data))
    navigation.navigate('OTP')
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
      }}>
      <StatusBar backgroundColor={Theme ? Color.DarkTheme : Color.White} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            marginTop:
              w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(20),
          }}>
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
                color: Theme ? Color.White : Color.Black,
              }}>
              Create Account
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
                name="fullname"
                rules={{
                  required: 'Full name is required',
                  message: 'Please enter your full name',
                }}
                // restyleBox={{
                //   marginBottom:
                //     w >= 768 && h >= 1024
                //       ? verticalScale(15)
                //       : verticalScale(15),
                // }}
                text={'Full Name'}
                placeholder={'Full Name'}

                // keyboardType={'email-address'}
              />

              {errors.fullname && (
                <Text style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>{errors.fullname.message} </Text>
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
                placeholder={'Phone Number'}
                keyboardType={'numeric'}
                text={'Phone Number'}
                flagImage={flagImage}
                phoneNumber={phoneNumber}
                phone={true}
                // onChange = value.replace(/(\d{3})(?=\d)/g, '$1 ')
              />
              {errors.phonenumber && (
                <Text style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>{errors.phonenumber.message} </Text>
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
                  required: 'Email is required',
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Enter a valid email',
                }}
                // onChangeText={txt => {
                //   console.log('text ==>', email);
                //   setEmail(txt);
                // }}

                text={'Email Address'}
                placeholder={'Email Address'}
                keyboardType={'email-address'}
              />
              {errors.email && (
                <Text style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>{errors.email.message} </Text>
              )}
            </View>

            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                password={true}
                text={'Password'}
                placeholder={'Password'}
                control={control}
                name="password"
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: '*Password too short (minimum length is 8)',
                  },
                  maxLength: {
                    value: 16,
                    message: '*Password too long (maximum length is 16)',
                  },
                }}
                keyboardType="default"
                maxLength={20}
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
                text={'Confirm Password'}
                placeholder={'Confirm Password'}
                control={control}
                name="confirm_password"
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: '*Password too short (minimum length is 8)',
                  },
                  maxLength: {
                    value: 16,
                    message: '*Password too long (maximum length is 16)',
                  },
                }}
                keyboardType="default"
                maxLength={20}
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
                text={'Sign Up'}
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
                  color: Theme ? Color.White : Color.DarkTextColor,
                  fontFamily: Font.Poppins500,
                  fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                }}>
                If you have an account,{' '}
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                    fontFamily: Font.Poppins700,
                  }}>
                  Sign in
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
