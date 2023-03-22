import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../assets/fonts/PoppinsFont';
import {Color} from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomInput = props => {
  return (
    <View
      style={
        {
          // marginTop:'8%'
        }
      }>
      <Text
        style={{
          fontFamily: Font.Poppins400,
          color: '#071A36',
          marginLeft: '8%',
          fontSize: scale(12),
        }}>
        {props.text}
      </Text>
      <View
        style={{
          height: verticalScale(45),
          backgroundColor: Color.InputColor,
          borderRadius: 23,
          // marginHorizontal: '5%',
          // paddingLeft: '5%',
          flexDirection: 'row',
        }}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={'UnderInputColor'}
          style={{
            fontSize: scale(16),
            fontFamily: Font.Poppins400,
            paddingHorizontal: scale(20),
            alignItems: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default CustomInput;
