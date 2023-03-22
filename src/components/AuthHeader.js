import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from './../utils/font';
import {Color} from './../utils/Colors';

const AuthHeader = props => {
  return (
    <View>
      <View style={styles.NavigatorStyle}>
        <AntDesign name="arrowleft" size={scale(24)} color="black" />
      </View>
      <View
        style={{
          //   height: '12%',
          justifyContent: 'center',
        }}>
        <Text style={styles.WelcomeText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  WelcomeText: {
    fontSize: scale(26),
    fontFamily: Font.Poppins700,
    color: Color.Black,
    marginBottom: scale(5),
  },
  NavigatorStyle: {
    height: verticalScale(64),
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: scale(10),
  },
});
