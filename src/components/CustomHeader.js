import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
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

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.AuthHeaderStyle}>
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
            color="black"
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(10),
            }}>
            <Text style={styles.WelcomeText}>{props.text}</Text>
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
              <MaterialIcons
              name = 'bookmarks'
              size = {w >= 768 && h >= 1024 ? scale(14) : scale(20)}
              color ={Color.Main}
               
              />
            ) : null}
          </View>

          <View>
            {props.shareicon ? (
              <Share
                height={
                  w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(20)
                }
                width={scale(24)}
              />
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
