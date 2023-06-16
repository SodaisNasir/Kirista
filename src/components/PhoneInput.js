import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Font} from '../assets/fonts/PoppinsFont';
import {Color} from '../utils/Colors';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const PhoneInput = props => {
  const navigation = useNavigation();
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const tabPotrait = w >= 768 && h >= 1024;
  const standardLandscape = w >= 684 && h >= 360;
  const tabLandscape = w >= 768 && h >= 1024;
  const fourInchPotrait = w <= 350 && h <= 600;
  const fourInchLandscape = w <= 600 && h <= 350;
  return (
    <View style={props.restyleBox}>
      <Text
        style={{
          fontFamily: Font.Poppins500,
          color: Theme === 'dark' ? Color.DarkThemText2 : Color.BoldTextColor,
          fontSize: tabPotrait
            ? verticalScale(11)
            : fourInchLandscape
            ? scale(12)
            : scale(14),
        }}>
        {props.text}
      </Text>
      <View
        style={{
          height: tabPotrait
            ? verticalScale(35)
            : fourInchPotrait
            ? verticalScale(52)
            : verticalScale(45),
          backgroundColor: Theme === 'dark'
            ? Color.DarkThemeInputBox
            : Color.InputBoxColor,

          borderRadius: tabPotrait ? scale(12) : scale(18),
          paddingHorizontal: verticalScale(10),
          marginTop: verticalScale(2),
          flexDirection: 'row',
        }}>
        {props.phone == 'true' ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectCountry')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: tabPotrait ? scale(15) : scale(25),
                height: tabPotrait ? verticalScale(10) : verticalScale(16),
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/images/nig.png')}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
            <View style={{paddingHorizontal: moderateScale(5)}}>
              <Text
                style={{
                  color: Theme === 'dark' ? Color.White : Color.TextColor,
                  fontFamily: Font.Inter500,
                  fontSize: tabPotrait
                    ? verticalScale(11)
                    : fourInchLandscape
                    ? scale(12)
                    : scale(14),
                }}>
                +234
              </Text>
            </View>
            <AntDesign
              name="down"
              size={tabPotrait ? scale(11) : scale(16)}
              color={Theme === 'dark' ? Color.White : Color.Black}
            />
          </TouchableOpacity>
        ) : null}

        <TextInput
          placeholder={'Phone Number'}
          keyboardType="numeric"
          // placeholderTextColor={Theme? Color.DarkThemeGreyText : Color.TextColor}
          placeholderTextColor={Color.BoldTextColor}
          style={{
            fontSize: tabPotrait
              ? verticalScale(11)
              : fourInchLandscape
              ? scale(12)
              : scale(14),
            fontFamily: Font.Inter500,
            paddingLeft: moderateScale(5),
            color: Theme === 'dark' ? Color.DarkThemeInputText : Color.TextColor,
            // top: fourInchPotrait
            //   ? scale(2.5)
            //   : fourInchLandscape
            //   ? scale(2)
            //   : 1,
            flex: 1,
          }}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({});
