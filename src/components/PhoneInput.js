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
  navigation = useNavigation();
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const tabPotrait = w >= 768 && h >= 1024;
  const standardLandscape = w >= 684 && h >= 360;
  const tabLandscape = w >= 768 && h >= 1024;
  const fourInchPotrait = w <= 350 && h <= 600;
  const fourInchLandscape = w <= 350 && h <= 600;
  return (
    <View>
      <Text
        style={{
          fontFamily: Font.Poppins500,
          color: Theme?  Color.DarkThemText2 : Color.BoldTextColor,
          fontSize: tabPotrait ? scale(9) : scale(14),
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
          backgroundColor: Theme
            ? Color.DarkThemeInputBox
            : Color.InputBoxColor,
          borderRadius: tabPotrait ? scale(12) : scale(12),
          paddingHorizontal: verticalScale(20),
          marginTop: verticalScale(2),
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SelectCountry')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: tabPotrait ? scale(15) : scale(25),
              height: tabPotrait ? verticalScale(10) : verticalScale(15),
              flexDirection: 'row',
              marginTop: '-3%',
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
                color: Theme?  Color.White : Color.TextColor,
                fontFamily: Font.Poppins400,
                fontSize: tabPotrait ? scale(9) : scale(14),
              }}>
              {' '}
              +234
            </Text>
          </View>
          <AntDesign
            name="down"
            size={tabPotrait ? scale(11) : scale(16)}
            color={Theme ? Color.White : Color.Black}
            style={{}}
          />
        </TouchableOpacity>

        <TextInput
          placeholder={'Phone Number'}
          keyboardType="numeric"
          // placeholderTextColor={Theme? Color.DarkThemeGreyText : Color.TextColor}
          placeholderTextColor={Color.BoldTextColor}
          style={{
            fontSize: tabPotrait ? scale(9) : scale(14),
            fontFamily: Font.Poppins400,
            paddingLeft: moderateScale(5),
            color: Theme ? Color.DarkThemeInputText : Color.TextColor,
            top: fourInchPotrait ? scale(1) : 0,
            flex: 1,
          }}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({});
