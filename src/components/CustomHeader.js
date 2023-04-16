import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Font} from '../assets/fonts/PoppinsFont';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Time from '../assets/icons/time.svg';
import Share from '../assets/icons/share.svg';
import ShareDark from '../assets/icons/share_dark.svg';
import Save from '../assets/icons/save.svg';
import SaveDark from '../assets/icons/save_dark.svg';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomHeader = props => {
  const navigation = useNavigation();
  const Theme = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.AuthHeaderStyle,
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
      ]}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',

          marginBottom:
            w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(8),
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
        }}>
        <View style={styles.NavigatorStyle}>
          <AntDesign
            name="arrowleft"
            size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
            color={Theme ? Color.White : Color.Black}
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(10),
            }}>
            <Text
              style={[
                styles.WelcomeText,
                {
                  color: Theme ? Color.White : Color.DarkTextColor,
                },
              ]}>
              {props.text}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            // paddingHorizontal: moderateScale(10),
          }}>
          <View style={styles.IconStyle}>
            {props.timeicon ? (
              <Time
                height={
                  w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(20)
                }
                width={scale(24)}
              />
            ) : null}
          </View>

          <View style={styles.IconStyle}>
            {props.saveicon ? (
            Theme ? (
              <SaveDark
                height={
                  w >= 768 && h >= 1024
                    ? verticalScale(14)
                    : verticalScale(20)
                }
                width={scale(24)}
              />
            ) : (
              <Save
                height={
                  w >= 768 && h >= 1024
                    ? verticalScale(14)
                    : verticalScale(20)
                }
                width={scale(24)}
              />
            )
            ) : null}
          </View>

          <View>
            {props.shareicon ? (
              Theme ? (
                <ShareDark
                  height={
                    w >= 768 && h >= 1024
                      ? verticalScale(14)
                      : verticalScale(22)
                  }
                  width={scale(24)}
                />
              ) : (
                <Share
                  height={
                    w >= 768 && h >= 1024
                      ? verticalScale(14)
                      : verticalScale(22)
                  }
                  width={scale(24)}
                />
              )
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    backgroundColor: Color.HeaderColor,
    height: verticalScale(80),
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },

  NavigatorStyle: {
    //
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    // marginTop: scale(10),
    flexDirection: 'row',
  },
  IconStyle: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(8),
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(11) : scale(18),
    fontFamily: Font.Poppins500,
    color: Color.Black,
    // marginBottom: scale(5),
    // // backgroundColor: 'red',
  },
});
