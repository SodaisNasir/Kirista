import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import AttachButton from '../../components/AttachButton';
import CustomHeader from '../../components/CustomHeader';

const Feedback = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
      <Header text = {'Feedback'} />
      <View
        style={{
          paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
        }}>
        <View style={{height: '60%'}}>
          <View
            style={{
              flex: 1,
              paddingTop: moderateScale(10),
            }}>
            <TextInput
              placeholder={
                'Briefly explain what isnt working or what happened'
              }
              placeholderTextColor={Theme? Color.DarkThemeGreyText : Color.TextColor}
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
            // paddingVertical: verticalScale(10),
          }}>
             <View style={{paddingVertical:w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(10)}}>
             <AttachButton text={'Upload'} />
          </View>
          
          <View style={{marginVertical:w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(35)}}>
            <CustomButton
             onPress={() => navigation.goBack()}
            text={'Send'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({});
