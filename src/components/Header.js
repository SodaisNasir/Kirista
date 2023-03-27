import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from './../utils/font';
import {Color} from './../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function Header(props) {
  return (
    <View style={styles.AuthHeaderStyle}>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'red',
          marginBottom: verticalScale(8),
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
        }}>
        <View style={styles.NavigatorStyle}>
          <AntDesign
            name="arrowleft"
            size={w >= 768 && h >= 1024 ? scale(18) : scale(24)}
            color="black"
            // onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            // height: '12%',
            justifyContent: 'center',
          }}>
          <Text style={styles.WelcomeText}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    backgroundColor: Color.HeaderColor,
    height: verticalScale(90),
    justifyContent: 'flex-end',
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(14) : scale(18),
    fontFamily: Font.Poppins500,
    color: Color.Black,
    // marginBottom: scale(5),
    // backgroundColor: 'red',
    paddingHorizontal: verticalScale(10),
  },
  NavigatorStyle: {
    //

    justifyContent: 'center',
    // marginTop: scale(10),
  },
});