import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  View,
  TextInput,
} from 'react-native';
import React, {useLayoutEffect, useEffect} from 'react';
import CustomInput from '../../components/CustomInput';
import PhoneInput from '../../components/PhoneInput';
import CustomButton from '../../components/CustomButton';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {Font} from '../../utils/font';

const Contact = () => {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useColorScheme() === 'dark';
  const tabPotrait = w >= 768 && h >= 1024;
  const fourInchLandscape = w <= 600 && h <= 350;
  const iosTab = w >= 820 && h >= 1180;
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation
  //     .getParent()
  //     ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
  //   return () =>
  //     navigation
  //       .getParent()
  //       ?.setOptions({tabBarStyle: null, tabBarVisible: false});
  // }, [navigation]);

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  return (
    <>
    <SafeAreaView style={{backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor}}/>

    <View
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <Header text={'Contact'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            marginVertical:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput text={'Full Name'} placeholder={'Full Name'}  restyleBox={{
            marginTop:  w <= 450 && h <= 750 ? 0 : verticalScale(-15),
            height:
              w >= 768 && h >= 1024
                ? verticalScale(50)
                : w <= 450 && h <= 750
                ? verticalScale(65)
                : verticalScale(30),
          }}/>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput text={'Email Address'} placeholder={'Email'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <PhoneInput text={'Phone Number'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput
              // TextRestyle={{textAlignVertical: 'top'}}
              text={'Subject'}
              placeholder={'Type here'}
            />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <View
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(80)
                    : verticalScale(130),
                // paddingHorizontal: moderateScale(10),
                borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(18),
              }}>
              <TextInput
                
                placeholderTextColor={Color.BoldTextColor}
                
                style={{
                  fontSize: tabPotrait
                  ? verticalScale(12)
                  : fourInchLandscape
                  ? scale(12)
                  : scale(14.5),
                  paddingBottom: iosTab ?  moderateVerticalScale(60) : moderateVerticalScale(100),
                  color: Theme ? Color.White : Color.TextColor,
                  backgroundColor: Theme
                    ? Color.DarkThemeInputBox
                    : Color.InputBoxColor,
                  borderRadius: tabPotrait ? scale(12) : scale(18),
                  fontFamily: Font.Inter500,
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: Theme ? Color.White : Color.TextColor,
                  flex: 1,
                  paddingHorizontal:verticalScale(10)
                }}
                placeholder={'Type here'}
              
              />
            </View>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
            }}>
            <CustomButton text={'Submit'} />
          </View>
        </View>
      </ScrollView>
    </View>
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({});
