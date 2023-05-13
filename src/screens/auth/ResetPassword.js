import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AuthHeader from '../../components/AuthHeader';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomInput from '../../components/CustomInput';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ResetPassword = ({navigation}) => {

  const iosTab = w >= 820 && h >= 1180;
  const Theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{alignSelf:'center',width:'90%'}}>

       
        <AuthHeader text={'Reset Password'} />

        <View
          style={{
            justifyContent: 'center',
            marginVertical: scale(20),
          }}>
          <Text
            style={[
              {color: Theme ? Color.DarkThemText2 : Color.TextColor},
              styles.LongText,
            ]}>
            Please enter your email address, and we will send you an OTP to
            confirm it.
          </Text>
        </View>

        <View
          style={{
            marginBottom:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),
          }}>
          <CustomInput
            placeholder={'maryjames@rccg.com'}
            text={'Email Address'}
            keyboardType={'email-address'}
          />
        </View>

        <View
          style={{
            paddingTop:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
            marginBottom: verticalScale(10),
          }}>
          <CustomButton
            onPress={() => navigation.navigate('OTP')}
            text={'Next'}
          />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  
  },

  NavigatorStyle: {
    height: verticalScale(64),
    justifyContent: 'center',
    marginTop: scale(10),
  },
  WelcomeText: {
    fontSize: scale(28),
    fontFamily: Font.Poppins700,
    color: Color.Black,
    marginBottom: scale(5),
  },
  LongText: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(12),
    marginBottom: scale(5),
  },
  codeFieldRoot: {
    paddingHorizontal: moderateScale(32),
    marginVertical: scale(10),
  },
  cell: {
    width: scale(50),
    height: verticalScale(40),
    fontSize: scale(24),
    borderRadius: scale(16),
    backgroundColor: Color.OtpBoxColor,
    textAlign: 'center',
    color: Color.Black,
    fontFamily: Font.Poppins400,
    textAlignVertical: 'center',
    elevation: 1,
  },
  ImageBox: {
    marginTop: '30%',
    alignItems: 'center',
  },
  Image: {
    width: scale(220),
    height: scale(170),
    resizeMode: 'contain',
  },
});

export default ResetPassword;
