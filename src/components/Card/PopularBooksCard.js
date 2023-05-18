import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
  Image,
  Platform
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const PopularBooksCard = (props, {data}) => {
  const iosTab = w >= 820 && h >= 1180;
  const fourInchPotrait = w <= 350 && h <= 600
  const Theme = useColorScheme() === 'dark';

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.MainBoxRestyle,
        {
          flexDirection: 'row',
          // marginHorizontal: verticalScale(20),
          // marginTop: verticalScale(15),
          // paddingBottom: verticalScale(15),
        },
      ]}>
      <View
        style={
          [
            props.restyleImage
            ,
            {
              height:
                w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(75),
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
            // borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(10),
            // backgroundColor:'red'
          }}
          source={props.source}
        />
      </View>
      <View
        style={{
          flex: w >= 768 && h >= 1024 ? 3 : 2.1,
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(15),
          
            paddingTop:  w >= 820 && h >= 1180 ? moderateScale(0) : Platform.OS === 'ios' ? moderateScale(10) : null
        }}>
        <View
          style={{
            // height: verticalScale(30),

            // backgroundColor: 'yellow',
            justifyContent: 'flex-end',
            top: scale(5),
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
              {bottom: scale(3)},
              {color: Theme ? Color.White : Color.DarkTextColor},
              styles.TitleStyle,
            ]}>
            {props.manual}
          </Text>
        </View>
        <View
          style={{
            // height:
            //   w >= 768 && h >= 1024 ? verticalScale(20) : scale(40),
            justifyContent: 'space-around',
            // right: w >= 768 && h >= 1024 ? scale(0) : scale(0),
            //   flexDirection:'row',
            paddingTop: w >= 768 && h >= 1024  ? moderateScale(5) : fourInchPotrait ? moderateScale(0) : Platform.OS ==='ios'? moderateScale(10) :  moderateScale(5)
          }}>
          {props.TimeTrue ? (
            <Text style={[styles.DateStyle]}>
              {' '}
              {props.date}
              {'   '}
              <Text
                style={{
                  color: Color.BoldTextColor,
                  fontFamily: Font.Poppins700,

                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                }}>
                .
              </Text>
              {'   '}
              {props.time}{' '}
            </Text>
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
    fontFamily: Font.Poppins700,
  },
  DateStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins600,

    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
});
export default PopularBooksCard;
