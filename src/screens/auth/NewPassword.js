import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AuthHeader from '../../components/AuthHeader';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomInput from '../../components/CustomInput';
import Password from '../../components/Password';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const NewPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <AuthHeader text={'New Password'} />

      <View
        style={{
          justifyContent: 'center',
          marginVertical: scale(10),
        }}>
        <Text style={styles.LongText}>
          Kindly fill your new password and confirm it.
        </Text>
      </View>

      <View
        style={
          {
            // justifyContent: 'space-between',
            // height: w >= 768 && h >= 1024 ? '21%' : '24%',
            // backgroundColor: 'red',
          }
        }>
        <Password
          restyleBox={{
            marginBottom:
              w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(25),
          }}
          text={'New Password'}
        />

        <Password text={'Confirm Password'} />
      </View>

      <View
        style={{
          marginTop:
            w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),
        }}>
        <CustomButton
          //   onPress={() => navigation.navigate('OTP')}
          text={'Finish'}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
    // paddingTop: moderateScale(50),
    paddingHorizontal:
      w >= 768 && h >= 1024 ? moderateScale(30) : moderateScale(20),
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
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(12),
    marginBottom: scale(5),
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
