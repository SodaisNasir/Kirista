import {
  Text,
  View,
  TextInput,
  useWindowDimensions,
  useColorScheme,
  TouchableOpacity,
  Image
} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {scale, verticalScale,moderateScale} from 'react-native-size-matters';
import {Font} from '../assets/fonts/PoppinsFont';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../utils/Colors';
import {useController} from 'react-hook-form';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const CustomInput = forwardRef((props, ref) => {3
  const navigation = useNavigation();

  const standardLandscape = width >= 684 && height >= 360;
  const tabLandscape = width >= 768 && height >= 1024;
  const Theme = useSelector(state => state.mode)
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const tabPotrait = width >= 768 && height >= 1024;

  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;

  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  const [isVisible, setVisible] = useState(true);

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
            flexDirection: 'row',
            marginTop: verticalScale(2),
          },
          props.RestyleHeight,
        ]}>
        {props.phone == true ? (
          <TouchableOpacity
            onPress={props.onPress}
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
                source={props.flagImage}
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
                {props.phoneNumber}
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
          onFocus={props.onFocus}
          value={field.value}
          ref={ref}
          multiline={props.multiline}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          placeholderTextColor={Color.BoldTextColor}
          onChangeText={field.onChange}
          onChange={props.onChange}
          onSubmitEditing={props.onSubmitEditing}
          defaultValue={props.defaultValue}
          maxLength={props.maxLength}
          // secureTextEntry={props.password ? showPassword : false}
          style={[
            props.TextRestyle,
            {
              fontSize: tabPotrait
                ? verticalScale(11)
                : fourInchLandscape
                ? scale(12)
                : scale(14),
              fontFamily: Font.Inter500,
              alignItems: 'center',
              justifyContent: 'center',
              color: Theme === 'dark' ? Color.White : Color.TextColor,
              flex: 1,
              top: verticalScale(1),
            },
          ]}
        />
        {props.password == true ? (
          <MaterialCommunityIcons
            name={isVisible ? 'eye-off-outline' : 'eye-outline'}
            size={width >= 768 && height >= 1024 ? scale(14) : scale(26)}
            color={Color.Main}
            onPress={() => setVisible(!isVisible)}
            style={{
              alignSelf: 'center',
              marginLeft: '5%',
            }}
          />
        ) : null}
      </View>
    </View>
  );
});

export default CustomInput;
