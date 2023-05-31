import {
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  useWindowDimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import PhoneInput from '../../components/PhoneInput';
import Password from '../../components/Password';
import {useDispatch} from 'react-redux';
import {LOGIN} from '../../redux/reducer';
import {useForm} from 'react-hook-form';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const SignUp = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const Dispatch = useDispatch();

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useColorScheme() === 'dark';

  const onSubmit = data => {
    navigation.navigate('Login');
    console.log(data);
  };

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
                <Text style={styles.error}>{errors.fullname.message} </Text>
              )}
            </View>

            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                control={control}
                name="phonenumber"
                maxLength={16}
                rules={{
                  required: 'Phone number is required',
                  message: 'Please enter your phone number',
                  maxLength:{
                    value: 15,
                    message: 'Please enter a valid phone number'
                  }
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
                phone={true}
                
              />
              {errors.phonenumber && (
                <Text style={styles.error}>{errors.phonenumber.message} </Text>
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
                <Text style={styles.error}>{errors.email.message} </Text>
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
                <Text style={styles.error}>{errors.password.message} </Text>
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
    color: Color.Main,
    fontSize: scale(12),
    alignSelf: 'flex-start',
    // marginLeft: scale(25),
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
    marginBottom:-20
  },
});

export default SignUp;
