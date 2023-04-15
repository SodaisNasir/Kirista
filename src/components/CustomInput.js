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
  const Theme = useColorScheme() === 'dark';
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const tabPotrait = width >= 768 && height >= 1024;
  const standardLandscape = width >= 684 && height >= 360;
  const tabLandscape = width >= 768 && height >= 1024;
  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 350 && height <= 600;

  return (
    <View style={props.restyleBox}>
      <Text
        style={{
          fontFamily: Font.Poppins500,
          color: Theme?  Color.DarkThemText2 : Color.BoldTextColor,
          fontSize: tabPotrait ? scale(9) : scale(14),
        }}>
        {props.text}
      </Text>
      <View
        style={
        [ { height: tabPotrait ? verticalScale(35) : fourInchPotrait ? verticalScale(52) : verticalScale(45),
          backgroundColor: Theme?  Color.DarkThemeInputBox : Color.InputBoxColor,
          borderRadius: tabPotrait ? scale(12) : scale(18),
          paddingHorizontal: verticalScale(20),
        
          marginTop: verticalScale(2)},props.RestyleHeight]
        }>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={Color.BoldTextColor}
          style={
           [props.TextRestyle,{ fontSize: tabPotrait ? scale(9) : scale(14),
            fontFamily: Font.Poppins400,
            alignItems: 'center',
            justifyContent:'center',
            color: Theme?  Color.White : Color.TextColor,
            flex:1}]
          }
        />
      </View>
    </View>
  );
};

export default CustomInput;
