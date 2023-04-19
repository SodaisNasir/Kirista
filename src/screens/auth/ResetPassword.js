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
import * as Animatable from 'react-native-animatable';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ResetPassword = ({navigation}) => {
  const zoomIn = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };
  const Theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <AuthHeader text={'Reset Password'} />

      <Animatable.View
        iterationDelay={700}
        duration={300}
        animation={fadeIn}
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
      </Animatable.View>

      <Animatable.View
        iterationDelay={1300}
        duration={300}
        animation={fadeIn}
        style={{
          marginBottom:
            w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),
        }}>
        <CustomInput placeholder = {'maryjames@rccg.com'} text={'Email Address'} />
      </Animatable.View>

      <Animatable.View
        iterationDelay={1400}
        duration={300}
        animation={zoomIn}
        style={{
          paddingTop:
            w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
        }}>
        <CustomButton
          onPress={() => navigation.navigate('OTP')}
          text={'Next'}
        />
      </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
    fontFamily: Font.Poppins500,
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

export default ResetPassword;
