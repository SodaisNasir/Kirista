import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  useColorScheme,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Font} from '../utils/font';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AttachCircle from '../assets/icons/attach-circle.svg';
import { useSelector } from 'react-redux';

const AttachButton = props => {
 const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [isVisible, setVisible] = useState(false);
  const applanguage = useSelector(state => state.applanguage)

  return (
    <View style={props.restyleBox}>
      <Text
        style={[
          {
            fontFamily: Font.Poppins400,
            color: Theme === 'dark' ? '#838C9A' : '#C6CAD1',
            fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
            marginBottom: 2,
          },
        ]}>
        {props.text}
      </Text>
      <View
        style={{
          height: w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(45),
          backgroundColor: Theme === 'dark'
            ? Color.DarkThemeInputBox
            : Color.InputBoxColor,
          borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(18),
          // marginHorizontal: '5%',
          paddingHorizontal: verticalScale(10),
          paddingLeft:moderateScale(12),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          //   secureTextEntry={isVisible}
          style={{
            fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
            fontFamily: Font.Poppins400,
            width: '80%',
            color: Theme === 'dark' ? Color.DarkThemeInputText : '#C6CAD1',
          }}>
          {/* {applanguage.ScreenShotUpload} */}
          {props.sstext}
        </Text>
            {
              props.img ?
              <Image source={{uri: props.img}} style={{height: verticalScale(20),width: scale(25)}} />
              : null
            }
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
        {/* <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}> */}
          <AttachCircle
            height={
              w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30)
            }
          />
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default AttachButton;

const styles = StyleSheet.create({});
