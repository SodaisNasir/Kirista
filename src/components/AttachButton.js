import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  useColorScheme,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import {Font} from '../utils/font';
import {scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AttachCircle from '../assets/icons/attach-circle.svg';

const AttachButton = props => {
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={props.restyleBox}>
      <Text
        style={[
          {
            fontFamily: Font.Poppins400,
            color: Theme ? Color.DarkThemeGreyText : Color.TextColor,
            fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
          },
        ]}>
        {props.text}
      </Text>
      <View
        style={{
          height: w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(45),
          backgroundColor: Theme
            ? Color.DarkThemeInputBox
            : Color.InputBoxColor,
          borderRadius: w >= 768 && h >= 1024 ? scale(12) : scale(18),
          // marginHorizontal: '5%',
          paddingHorizontal: verticalScale(10),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',

        }}>
        <Text
       
           
          
        //   secureTextEntry={isVisible}
          style={{
            fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
            fontFamily: Font.Poppins400,
            width: '80%',
           
           
          }}
        >
            Screenshot Upload
        </Text>

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
        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}}>
          <AttachCircle
            height={w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AttachButton;

const styles = StyleSheet.create({});
