import {StyleSheet, Text, TextInput, View, useWindowDimensions,useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {Font} from '../utils/font';
import {scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Password = props => {
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const tabPotrait = w >= 768 && h >= 1024;
  const standardLandscape = w >= 684 && h >= 360;
  const tabLandscape = w >= 768 && h >= 1024;
  const fourInchPotrait = w <= 350 && h <= 600;
  const fourInchLandscape = w <= 350 && h <= 600;

  const [isVisible, setVisible] = useState(false);
  return (
    <View style={props.restyleBox}>
      <Text
        style={[
          {
            fontFamily: Font.Poppins500,
            color: Theme?  Color.DarkThemeGreyText : Color.BoldTextColor,
            fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
          },
        ]}>
        {props.text}
      </Text>
      <View
        style={{
          height: tabPotrait ? verticalScale(35) : fourInchPotrait ? verticalScale(52) : verticalScale(45),
          backgroundColor: Theme?  Color.DarkThemeInputBox : Color.InputBoxColor,
          borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(12),
          // marginHorizontal: '5%',
          paddingHorizontal: verticalScale(20),
          flexDirection: 'row',
          justifyContent:'space-between'
        }}>
        <TextInput
          placeholder={'Password'}
          placeholderTextColor={Color.BoldTextColor}
          secureTextEntry={isVisible}
          style={{
            fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
            fontFamily: Font.Poppins400,
            width: '80%',
            color: Theme?  Color.DarkThemeGreyText : Color.TextColor,
          }}
        />

        {/* }}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={'UnderInputColor'}
          style={{
            fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
            fontFamily: Font.Poppins400,
            paddingHorizontal: scale(20),
            alignItems: 'center',
            color: Color.TextColor,
          }}
        /> */}

        {isVisible ? (
          <MaterialCommunityIcons
            name={'eye-outline'}
            size={w >= 768 && h >= 1024 ? scale(14) : scale(26)}
            color={Color.Main}
            onPress={() => setVisible(!isVisible)}
            style={{
              alignSelf: 'center',
              marginLeft: '5%',
            }}
          />
        ) : (
          <MaterialCommunityIcons
            name={'eye-off-outline'}
            size={w >= 768 && h >= 1024 ? scale(14) : scale(26)}
            color={Color.Main}
            onPress={() => setVisible(!isVisible)}
            style={{
              alignSelf: 'center',
              marginLeft: '5%',
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({});
