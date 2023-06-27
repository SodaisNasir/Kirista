import {StyleSheet, Text, View, Dimensions,useColorScheme, Platform} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateVerticalScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from './../utils/font';
import {Color} from './../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const AuthHeader = props => {
 const Theme = useSelector(state => state.mode)
  const navigation = useNavigation();
  return (
    <View style={styles.AuthHeaderStyle}>
      <View style={styles.NavigatorStyle}>
        <AntDesign
          name="arrowleft"
          size={w >= 768 && h >= 1024 ? scale(18) : scale(24)}
          color={  Theme === 'dark' ? Color.White : Color.Black}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          //   height: '12%',
          justifyContent: 'center',
        }}>
        <Text style={[{color: Theme === 'dark' ? Color.White:Color.Black},styles.WelcomeText]}>{props.text}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    marginTop: w >= 768 && h >= 1024 ? '10%' : 0,
    paddingTop:Platform.OS == 'android' ? moderateVerticalScale(25) : 0
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(16) : scale(26),
    fontFamily: Font.Poppins700,
    marginBottom: scale(5),
  },
  NavigatorStyle: {
    height: verticalScale(64),
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: scale(10),
  },
});
