import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Font} from '../utils/font';
import {scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Password = props => {
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={props.restyleBox}>
      <Text
        style={[
          {
            fontFamily: Font.Poppins400,
            color: Color.TextLightColor,
            fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
          },
        ]}>
        {props.text}
      </Text>
      <View
        style={{
          height: w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(45),
          backgroundColor: Color.InputColor,
          borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
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
            fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
            fontFamily: Font.Poppins400,
            width: '80%',
            color: Color.TextColor,
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
            size={w >= 768 && h >= 1024 ? scale(20) : scale(26)}
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
            size={w >= 768 && h >= 1024 ? scale(20) : scale(26)}
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
