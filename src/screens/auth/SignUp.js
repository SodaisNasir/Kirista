import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextComponent,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import PhoneInput from '../../components/PhoneInput';
import Countrycode from '../../components/Countrycode';
import Password from '../../components/Password';
const SignUp = ({navigation}) => {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
      }}>
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
              <CustomInput text={'Full Name'} placeholder={'Full Name'} />
            </View>

            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <PhoneInput text={'Phone Number'} />
            </View>

            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput text={'Email Address'} placeholder={'Email'} />
            </View>

            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <Password text={'Password'} />
            </View>

            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
              }}>
              <CustomButton 
              
              onPress = { ()=> navigation.navigate('Login')}
              text={'Sign Up'} />
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

export default SignUp;
