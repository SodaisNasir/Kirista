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

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const NewPassword = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignSelf:'center',width:'95%'}}>
        <AuthHeader text={'New Password'} />

        <View
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
        </View>

        <View
          style={{
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
        </View>

        <View
          style={{
            paddingTop:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
            marginBottom: verticalScale(10),
          }}>
          <CustomButton
            onPress={() => navigation.navigate('Login')}
            text={'Finish'}
          />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal:
      w >= 768 && h >= 1024 ? moderateScale(30) : moderateScale(20),
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
    fontFamily: Font.Poppins400,
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
