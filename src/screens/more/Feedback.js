import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import AttachButton from '../../components/AttachButton';

const Feedback = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
      <StatusBar
        backgroundColor={Theme ? Color.ExtraViewDark : Color.HeaderColor}
        barStyle={Theme ? 'light-content' : 'dark-content'}
      />
      <Header text={'Feedback'} />
      <View
        style={{
          paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
        }}>
        <View style={{height: '60%'}}>
          <View
            style={{
              flex: 1,
              paddingTop: moderateVerticalScale(10),
              paddingLeft: moderateScale(10),
              paddingRight: moderateScale(30),
            }}>
            <TextInput
              placeholder={`Briefly explain what isn't working or what happened`}
              placeholderTextColor={
                Theme ? Color.DarkThemeGreyText : Color.TextColor
              }
              style={[
                {
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                  fontFamily: Font.Poppins400,
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: Theme ? Color.DarkThemeInputText : Color.TextColor,
                  flex: 1,
                  textAlignVertical: 'top',
                },
              ]}
            />
          </View>
        </View>

        <View
          style={{
            height: '40%',
          }}>
          <View
            style={{
              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(10),
            }}>
            <AttachButton text={'Upload'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(35),
            }}>
            <CustomButton onPress={() => navigation.goBack()} text={'Send'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({});
