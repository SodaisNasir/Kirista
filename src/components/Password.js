import {
  Text,
  TextInput,
  View,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';
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
  const fourInchLandscape = w <= 600 && h <= 350;

  const [isVisible, setVisible] = useState(true);
  return (
    <View style={props.restyleBox}>
      <Text
        style={[
          {
            fontFamily: Font.Poppins500,
            color: Theme ? Color.DarkThemText2 : Color.BoldTextColor,
            fontSize: tabPotrait
              ? verticalScale(11)
              : fourInchLandscape
              ? scale(12)
              : scale(14),
          },
        ]}>
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
          borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(18),
          paddingHorizontal: verticalScale(10),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder={'Password'}
          placeholderTextColor={Color.BoldTextColor}
          secureTextEntry={isVisible}
          style={{
            fontSize: tabPotrait
              ? verticalScale(11)
              : fourInchLandscape
              ? scale(12)
              : scale(14),
            fontFamily: Font.Poppins400,
            top: fourInchPotrait
              ? verticalScale(2)
              : fourInchLandscape
              ? verticalScale(3)
              : tabLandscape
              ? verticalScale(1)
              : verticalScale(1.5),
            width: '80%',
            color: Theme ? Color.White : Color.TextColor,
          }}
        />
        <MaterialCommunityIcons
          name={isVisible ? 'eye-off-outline' : 'eye-outline'}
          size={w >= 768 && h >= 1024 ? scale(14) : scale(26)}
          color={Color.Main}
          onPress={() => setVisible(!isVisible)}
          style={{
            alignSelf: 'center',
            marginLeft: '5%',
          }}
        />
      </View>
    </View>
  );
};

export default Password;
