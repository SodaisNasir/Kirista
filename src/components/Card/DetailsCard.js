import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const DetailsCard = (props, {data}) => {
  const fourInchPotrait = w <= 350 && h <= 600;
  const Theme = useColorScheme() === 'dark';
  const iosTab = w >= 820 && h >= 1180;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.MainBoxRestyle,
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
      ]}>
      <View
        style={
          [
            props.restyleImage,
            {
              height:
                w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(85),
              width: w >= 768 && h >= 1024 ? scale(58) : scale(90),
              borderRadius: w >= 768 && h >= 1024 ? scale(7) : scale(10),
              overflow: 'hidden',
            },
          ]
          //
        }>
        <Image
          resizeMode={props.resize}
          style={{
            height: '100%',
            width: '100%',
          }}
          source={props.source}
        />
      </View>
      <View
        style={{
          flex: w >= 768 && h >= 1024 ? 3 : 2.1,
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(15),
        }}>
        <View
          style={{
            justifyContent: 'flex-end',
            top: Platform.OS === 'ios' ? null : verticalScale(10),
          }}>
          <Text
            style={[
              {color: Theme ? Color.White : Color.DarkTextColor},
              styles.TitleStyle,
            ]}>
            {props.title}
          </Text>
          <Text
            style={[
              {
                color: Theme ? Color.White : Color.DarkTextColor,
                marginTop:
                Platform.OS == 'ios'
                  ? 0
                  : verticalScale(-7),
              },
              styles.TitleStyle,
            ]}>
            {props.manual}
          </Text>
        </View>
        <View
          style={{
            right:
              w >= 768 && h >= 1024
                ? scale(0)
                : Platform.OS === 'ios'
                ? scale(0)
                : scale(0),
            paddingTop: iosTab
              ? moderateScale(8)
              : w >= 768 && h >= 1024
              ? moderateScale(12)
              : fourInchPotrait
              ? moderateScale(0)
              : Platform.OS === 'ios'
              ? moderateScale(12)
              : moderateScale(5),
          }}>
          {props.TimeTrue ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={[styles.DateStyle]}>{props.date}</Text>
              <View
                style={{
                  backgroundColor: Color.BoldTextColor,
                  borderRadius: scale(100),
                  width: w >= 768 && h >= 1024 ? scale(2) : scale(3),
                  height: w >= 768 && h >= 1024 ? scale(2) : scale(3),
                  marginHorizontal: scale(5),
                  // marginTop: verticalScale(-15),
                }}
              />
              <Text style={[styles.DateStyle]}>{props.time}</Text>
            </View>
          ) : null}
          {props.PlaceTrue ? (
            <Text style={[styles.DateStyle]}>{props.Place}</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(13),
      fontFamily: Font.Poppins600,
  },
  DateStyle: {
    // bottom: verticalScale(7),
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
    marginTop:verticalScale(2)
  },
});
export default DetailsCard;
