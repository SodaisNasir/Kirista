import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../assets/fonts/PoppinsFont';
import {Color} from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomInput = props => {
  return (
    <View style={props.restyleBox}>
      <Text
        style={{
          fontFamily: Font.Poppins400,
          color: Color.TextColor,
          fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
        }}>
        {props.text}
      </Text>
      <View
        style={{
          height: w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(45),
          backgroundColor: Color.InputColor,
          borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
          // marginHorizontal: '5%',
          paddingHorizontal: verticalScale(20),
          // flexDirection: 'row',
          marginTop: verticalScale(2),
        }}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={Color.BoldTextColor}
          style={{
            fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
            fontFamily: Font.Poppins400,
            alignItems: 'center',
            justifyContent:'center',
            color: Color.TextColor,
            // backgroundColor: 'red',
            flex:1
          }}
        />
      </View>
    </View>
  );
};

export default CustomInput;
