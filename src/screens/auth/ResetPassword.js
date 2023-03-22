import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AuthHeader from '../../components/AuthHeader';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomInput from '../../components/CustomInput';

const ResetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <AuthHeader text={'Reset Password'} />

      <View
        style={{
          justifyContent: 'center',
          marginVertical: scale(10),
        }}>
        <Text style={styles.LongText}>
          Please enter your email address, and we will send you an OTP to
          confirm it.
        </Text>
      </View>

      <View style={{}}>
        <Text style={styles.OtpText}>Email Address</Text>
        <CustomInput />
      </View>

      <View style={{backgroundColor: 'purple'}}></View>
      <View style={{marginVertical: scale(15)}}>
        <CustomButton text={'Continue'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
    // paddingTop: moderateScale(50),
    paddingHorizontal: moderateScale(20),
  },

  NavigatorStyle: {
    height: verticalScale(64),
    // backgroundColor: 'red',
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
    color: Color.TextColor,
    fontFamily: Font.Poppins400,
    fontSize: scale(12),
    marginBottom: scale(5),
  },
  OtpText: {
    color: Color.TextColor,
    fontFamily: Font.Poppins400,
    fontSize: scale(14),
  },

  codeFieldRoot: {
    paddingHorizontal: moderateScale(32),
    marginVertical: scale(10),
  },
  cell: {
    // paddingHorizontal: scale(30),
    width: scale(50),
    height: verticalScale(40),
    fontSize: scale(24),
    // borderWidth: 2,
    borderRadius: scale(16),
    // borderColor: Color.Main,
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
