import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useColorScheme,
  StatusBar,
  Platform
} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import {Color} from '../../utils/Colors';
import {verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import CustomButton from '../../components/CustomButton';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ViewManual = ({navigation,route}) => {
  const {item} = route.params
  const Theme = useSelector(state => state.mode)

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );

  return (
    <>
    <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <StatusBar barStyle={Theme === 'dark' ? 'light-content' : 'dark-content' } backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}/>
    <View
      style={[
        {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
          marginTop:Platform.OS == 'ios' && w <= 450 && h <= 750 ? 0 : Platform.OS == 'ios' ? verticalScale(-20) : 0
          
        },
        styles.Container,
      ]}>
     
        <CustomHeader shareicon={true} saveicon={true} />
          <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ImageViewStyle}>
          <Image
            resizeMode="contain"
            source={{uri: item?.cover_image}}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={{marginTop: verticalScale(10)}}>
          <Text
            style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.TextStyle,
            ]}>
            {/* Sunday School Student */}
            {item?.title}
          </Text>
          {/* <Text
            style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.TextStyle,
            ]}>
            Manual
          </Text> */}
        </View>

        <View
          style={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(80),
            justifyContent: 'center',
            paddingHorizontal: verticalScale(20),
          }}>
          <CustomButton
            onPress={() => navigation.navigate('Readone',{
              id: item?.id,
              item:item
            })}
            text={'Read'}
          />
        </View>

        <View></View>

        <View
          style={{
            height: verticalScale(18),
            backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-evenly',
            width: '100%',
            alignSelf: 'center',
            height:
              w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(120),
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            // height: verticalScale(80),
            paddingHorizontal:
              w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(20),
          }}>
          <View
            style={{
              borderRightColor: Color.BorderColor,
              borderRightWidth: 1,
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={[styles.DetailTextStyle,{color:Theme === 'dark' ? '#fff' : '#D1D2D4'}]}>Language</Text>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                styles.BoldDetailTextStyle,
              ]}>
               {item?.language}
            </Text>
          </View>
          <View
            style={{
              borderRightColor: Color.BorderColor,
              borderRightWidth: 1,
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={[styles.DetailTextStyle,{color:Theme === 'dark' ? '#fff' : '#D1D2D4'}]}>Category</Text>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                styles.BoldDetailTextStyle,
              ]}>
              {item?.category}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={[styles.DetailTextStyle,{color:Theme === 'dark' ? '#fff' : '#D1D2D4'}]}>Released</Text>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                styles.BoldDetailTextStyle,
              ]}>
               {item?.release_year}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: verticalScale(18),
            backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
          }}
        />

        <View
          style={{
            height: verticalScale(70),
            justifyContent: 'center',
            borderBottomColor: Theme === 'dark'
              ? Color.DarkBorderColor
              : Color.BorderColor,
            borderBottomWidth: 1,
            marginHorizontal: verticalScale(20),
          }}>
          <Text
            style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.AuthorText,
            ]}>
            Author
          </Text>
          <Text
            style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.AuthorNameText,
            ]}>
           {item?.author}
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: verticalScale(20),
            marginVertical: verticalScale(15),
          }}>
          <Text
            style={[styles.About, {color: Theme === 'dark' ? Color.White : Color.Black}]}>
            About
          </Text>

          <Text
            style={[
              styles.AboutText,
              {color: Theme === 'dark' ? Color.White : Color.Black},
            ]}>
            {/* This Sunday School year is expected to be a year of firm and
            dedicated study. This year's manual is a compilation of sound
            biblical doctrines. Our personal goal should be to study the Bible
            to discover the treasures in it. */}
            {item?.about}
          </Text>
        </View>

        <View style={{height: verticalScale(6)}}></View>
      </ScrollView>
    </View>
    </>
  );
};

export default ViewManual;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(200),

    marginTop: w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(15),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(5),
  },
  TextStyle: {
    fontFamily: Font.Poppins600,
    textAlign: 'center',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(16),
    width: '80%',
    alignSelf: 'center'
  },
  DetailTextStyle: {
    fontFamily: Font.Poppins400,
    color: Color.GreyText,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
    textAlign: 'center',
  },
  BoldDetailTextStyle: {
    fontFamily: Font.Poppins700,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    lineHeight: verticalScale(30),
    // backgroundColor:'green',
    textAlign: 'center',
  },
  AuthorText: {
    fontFamily: Font.Poppins600,

    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  About: {
    fontFamily: Font.Poppins600,

    textAlign: w >= 768 && h >= 1024 ? 'center' : 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  AuthorNameText: {
    fontFamily: Font.Poppins400,

    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    lineHeight: verticalScale(30),
    textAlign: 'left',
  },
  AboutText: {
    fontFamily: Font.Poppins400,

    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
    marginTop: verticalScale(5),
  },
});
