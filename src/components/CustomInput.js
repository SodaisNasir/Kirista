import {
  Text,
  View,
  TextInput,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../assets/fonts/PoppinsFont';
import {Color} from '../utils/Colors';

const CustomInput = props => {
  const Theme = useColorScheme() === 'dark';
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const tabPotrait = width >= 768 && height >= 1024;
  const standardLandscape = width >= 684 && height >= 360;
  const tabLandscape = width >= 768 && height >= 1024;
  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;

  return (
    <View style={props.restyleBox}>
      <Text
        style={{
          fontFamily: Font.Poppins500,
          color: Theme ? Color.DarkThemText2 : Color.BoldTextColor,
          fontSize: tabPotrait
            ? verticalScale(11)
            : fourInchLandscape
            ? scale(12)
            : scale(14),
        }}>
        {props.text}
      </Text>
      <View
        style={[
          {
            height: tabPotrait
              ? verticalScale(35)
              : fourInchPotrait
              ? verticalScale(52)
              : verticalScale(45),
            backgroundColor: Theme
              ? Color.DarkThemeInputBox
              : Color.InputBoxColor,
            borderRadius: tabPotrait ? scale(12) : scale(18),
            paddingHorizontal: verticalScale(10),

            marginTop: verticalScale(2),
          },
          props.RestyleHeight,
        ]}>
        <TextInput
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          placeholderTextColor={Color.BoldTextColor}
          onChangeText={props.onChangeText}
          style={[
            props.TextRestyle,
            {
              fontSize: tabPotrait
                ? verticalScale(11)
                : fourInchLandscape
                ? scale(12)
                : scale(14),
              // top: fourInchPotrait
              //   ? verticalScale(2.5)
              //   : fourInchLandscape
              //   ? verticalScale(2)
              //   : tabPotrait
              //   ? verticalScale(1)
              //   : verticalScale(1.5),
              // fontWeight:'500',
              fontFamily:Font.Inter500,
              alignItems: 'center',
              justifyContent: 'center',
              color: Theme ? Color.White : Color.TextColor,
              flex: 1,
              top:verticalScale(1)
            },
          ]}
        />
      </View>
    </View>
  );
};

export default CustomInput;
