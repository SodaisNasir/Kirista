import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Font} from './../utils/font';
import {Color} from './../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import Share from '../assets/icons/share.svg';
import ShareDark from '../assets/icons/share_dark.svg';
import { useDispatch, useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function Header(props) {
  // const getTheme = useColorScheme() === 'dark';
  const Theme = useSelector(state => state.mode)
  const navigation = useNavigation();
  return (
    <View
      style={[
        {backgroundColor: Theme  === 'dark' ? Color.ExtraViewDark : Color.HeaderColor},
        styles.AuthHeaderStyle,
        props.AuthHeaderStyle,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
          marginTop:
            Platform.OS == 'ios' && w >= 768 && h >= 1024
              ? verticalScale(20)
              : 0,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.NavigatorStyle}>
          <AntDesign
            name="arrowleft"
            size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
            color={Theme  === 'dark'   ? Color.White : Color.Black}
          />
        </TouchableOpacity>
        <View
          style={{
            // height: '12%',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {color: Theme  === 'dark'   ? Color.White : Color.Black},
              styles.WelcomeText,
              props.welcomeText,
            ]}>
            {props.text}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        {props.shareicon ? (
          Theme === 'dark' ? (
            <ShareDark
              height={
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(23)
              }
              width={scale(24)}
            />
          ) : (
            <Share
              height={
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(23)
              }
              width={scale(24)}
            />
          )
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    height:
      Platform.OS == 'android'
        ? w >= 768 && h >= 1024
          ? verticalScale(80)
          : verticalScale(100)
        : w >= 768 && h >= 1024
        ? verticalScale(65)
        : w <= 450 && h <= 750
        ? verticalScale(50)
        : verticalScale(45),
    justifyContent: 'center',
    paddingTop:
    Platform.OS == 'ios' ? 0 :
      w >= 768 && h >= 1024
        ? moderateVerticalScale(20)
        : moderateVerticalScale(25),
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(11) : scale(18),
    fontFamily: Font.Poppins500,
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(10),
  },
  NavigatorStyle: {
    justifyContent: 'center',
  },
});
