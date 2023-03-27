import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import {Color} from '../../utils/Colors';
import {verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import CustomButton from '../../components/CustomButton';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ViewManual = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader image2={require('../../assets/images/bookmark.png')} />
        {/* <View style={{height:verticalScale(100),backgroundColor:'purple'}}> */}

        {/* </View> */}
        <View style={styles.ImageViewStyle}>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/manual.png')}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={{}}>
          <Text style={styles.TextStyle}>Sunday School Student</Text>
          <Text style={styles.TextStyle}>Manual</Text>
        </View>

        <View
          style={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(80),
            justifyContent: 'center',
            paddingHorizontal: verticalScale(20),
          }}>
          <CustomButton text={'Read'} />
        </View>

        <View></View>

        <View
          style={{
            backgroundColor: Color.HeaderColor,
            height: verticalScale(25),
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-evenly',
            width: '100%',
            alignSelf: 'center',
            height:
              w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(120),
            backgroundColor: Color.White,
            height: verticalScale(80),
            paddingHorizontal:w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(20),
          }}>
          <View
            style={{
              borderRightColor: Color.HeaderColor,
              borderRightWidth: 2,
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={styles.DetailTextStyle}>Language</Text>
            <Text style={styles.BoldDetailTextStyle}>English</Text>
          </View>
          <View
            style={{
              borderRightColor: Color.HeaderColor,
              borderRightWidth: 2,
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={styles.DetailTextStyle}>Category</Text>
            <Text style={styles.BoldDetailTextStyle}>Manual</Text>
          </View>
          <View
            style={{
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={styles.DetailTextStyle}>Released</Text>
            <Text style={styles.BoldDetailTextStyle}>2023</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.HeaderColor,
            height: verticalScale(25),
          }}></View>

        <View
          style={{
          
            height: verticalScale(70),
            justifyContent: 'center',
            borderBottomColor: Color.HeaderColor,
            borderBottomWidth: 1,
            marginHorizontal:verticalScale(20)
            // marginHorizontal:verticalScale(20)
          }}>
          <Text style={styles.AuthorText}>Author</Text>
          <Text style={styles.AuthorNameText}>Pastor E.A. Adeboye</Text>
        </View>

        <View
          style={{
            paddingHorizontal: verticalScale(20),
            marginVertical: verticalScale(15),
         
          }}>
          <Text style={styles.About}>About</Text>

          <Text style={styles.AboutText}>
            This Sunday School year is expected to be a year of firm and
            dedicated study. This year's manual is a compilation of sound
            biblical doctrines. Our personal goal should be to study the Bible
            to discover the treasures in it.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewManual;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  ImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(200),

    marginTop: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(15),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(5),
  },
  TextStyle: {
    fontFamily: Font.Poppins600,
    color: Color.DarkTextColor,
    textAlign: 'center',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(16),
  },
  DetailTextStyle: {
    fontFamily: Font.Poppins400,
    color: Color.TextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
    textAlign: 'center',
  },
  BoldDetailTextStyle: {
    fontFamily: Font.Poppins700,
    color: Color.TextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    lineHeight: verticalScale(30),
    // backgroundColor:'green',
    textAlign: 'center',
  },
  AuthorText: {
    fontFamily: Font.Poppins600,
    color: Color.DarkTextColor,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  About: {
    fontFamily: Font.Poppins600,
    color: Color.DarkTextColor,
    textAlign: w >= 768 && h >= 1024 ? 'center' : 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  AuthorNameText: {
    fontFamily: Font.Poppins400,
    color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    lineHeight: verticalScale(30),
    textAlign: 'left',
  },
  AboutText: {
    fontFamily: Font.Poppins400,
    color: Color.BoldTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
    marginTop: verticalScale(5),
  },
});
