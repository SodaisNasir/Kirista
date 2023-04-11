import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  useWindowDimensions,
  useColorScheme
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../assets/fonts/PoppinsFont';
import {Color} from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const CustomInput = props => {
  const Theme = useColorScheme();
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  return (
    <View style={props.restyleBox}>
      <Text
        style={{
          fontFamily: Font.Poppins400,
          color: Theme?  Color.DarkThemeGreyText : Color.TextColor,
          fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
        }}>
        {props.text}
      </Text>
      <View
        style={
        [ { height: w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(45),
          backgroundColor: Theme?  Color.DarkThemeInputBox : Color.InputBoxColor,
          borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(12),
          paddingHorizontal: verticalScale(20),
          
          marginTop: verticalScale(2)},props.RestyleHeight]
        }>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={Color.BoldTextColor}
          style={
           [props.TextRestyle,{ fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
            fontFamily: Font.Poppins400,
            alignItems: 'center',
            justifyContent:'center',
            color: Theme ?  Color.DarkThemeInputText : Color.TextColor,
            flex:1}]
          }
        />
      </View>
    </View>
  );
};

export default CustomInput;
