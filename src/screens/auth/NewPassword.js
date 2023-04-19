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
import Password from '../../components/Password';
import * as Animatable from 'react-native-animatable';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const NewPassword = ({navigation}) => {
  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

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
  const Theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <AuthHeader text={'New Password'} />

      <Animatable.View
        iterationDelay={700}
        duration={300}
        animation={fadeIn}
        style={{
          justifyContent: 'center',
          marginVertical: scale(10),
        }}>
        <Text
          style={[
            {color: Theme ? Color.DarkThemText2 : Color.TextColor},
            styles.LongText,
          ]}>
          Kindly fill your new password and confirm it.
        </Text>
      </Animatable.View>

      <Animatable.View
        iterationDelay={1000}
        duration={500}
        animation={fadeIn}
        style={{
          // justifyContent: 'space-between',
          // height: w >= 768 && h >= 1024 ? '21%' : '24%',

          marginVertical:
            w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(20),
        }}>
        <Password
          restyleBox={{
            marginBottom:
              w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(25),
          }}
          text={'New Password'}
        />

        <Password text={'Confirm Password'} />
      </Animatable.View>

      <Animatable.View
        iterationDelay={1500}
        duration={300}
        animation={zoomIn}
        style={{
          paddingTop:
            w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
        }}>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          text={'Finish'}
        />
      </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Color.White,
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
