import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Font } from '../utils/font';

import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import { Color } from '../utils/Colors';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const CustomPhoneinput = props => {
  const fourInchPotrait = w <= 350 && h <= 600;
  const Theme = useSelector(state => state.mode)
  const navigation = useNavigation();
  useEffect(() => {}, [Theme]);
  return (
    <View
      style={[
        styles.PhoneNumberBox,
        props.PhoneNumberBox,
        Theme === 'dark'
          ? {
              backgroundColor: Color.Main,
              borderColor: Color.ThemeGrey,
            }
          : {
            backgroundColor: Color.Main,
              borderColor: Color.Homeborder,
            },
        w >= 768 && h >= 1024
          ? {borderRadius: scale(8)}
          : {borderRadius: scale(12)},
      ]}>
      <TouchableOpacity style={styles.CountryCode} onPress={props.onPress}>
        <Image
          style={styles.Flag}
          resizeMode={'contain'}
          source={require('../assets/images/nig.png')}
        />
        <Text
          style={[
            styles.Code,
            Theme === 'dark' ? {color: Color.DarkTextColor} : {color: Color.Main},
          ]}>
          +234
        </Text>
      </TouchableOpacity>
      <View style={styles.borderRight} />
      <TextInput
        style={[
          styles.TextInput,
          Theme === 'dark' ? {color: Color.TextDark} : {color: Color.Black},
          
        ]}
        placeholder="Phone Number"
        keyboardType={'numeric'}
        placeholderTextColor={Color.placeholderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  PhoneNumberBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: scale(1),
    height:
      w >= 768 && h >= 1024
        ? verticalScale(40)
        : w <= 500 && h <= 800
        ? verticalScale(45)
        : verticalScale(42),
    marginTop: verticalScale(25),
  },
  Flag: {
    width: w >= 768 && h >= 1024 ? scale(17) : scale(20),
    height: w >= 768 && h >= 1024 ? verticalScale(17) : verticalScale(20),
    marginLeft: scale(15),
  },
  TextInput: {
    width: '65%',
    marginLeft: scale(10),
    height: w >= 768 && h >= 1024 ? verticalScale(40) : verticalScale(45),
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(11),
    fontFamily: Font.Poppins600,
    top: w >= 768 && h >= 1024 ? verticalScale(1) : verticalScale(1),
  },
  borderRight: {
    borderRightWidth: scale(1.5),
    borderColor: Color.placeholderTextColor,
    height: '40%',
    marginLeft: scale(10),
  },
  Code: {
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(11),
    fontFamily: Font.Poppins600,
    marginLeft: scale(10),
    top: w >= 768 && h >= 1024 ? verticalScale(2) : verticalScale(1),
  },
  CountryCode: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomPhoneinput;