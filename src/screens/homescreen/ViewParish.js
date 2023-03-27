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
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ViewParish = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader text={'View Parish'} image2={require('../../assets/images/bookmark.png')} />
        <View style={{paddingHorizontal:  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20)}}>
          <View style={styles.ImageViewStyle}>
            <Image
              resizeMode="contain"
              source={require('../../assets/images/parish.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(20),
            }}>
            <Text style={styles.TextStyle}>RCCG Central Parish</Text>
          </View>

          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(70),
              justifyContent: 'center',
              // marginHorizontal:verticalScale(20)
            }}>
            <Text style={styles.LocationText}>Country:</Text>
            <Text style={styles.LocationDetailsText}>Nigeria</Text>
          </View>

          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(70),
              justifyContent: 'center',
              // marginHorizontal:verticalScale(20)
            }}>
            <Text style={styles.LocationText}>Region:</Text>
            <Text style={styles.LocationDetailsText}>Region 10 Abuja</Text>
          </View>

          <View
            style={{
                height:w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(70),
              justifyContent: 'center',
              // marginHorizontal:verticalScale(20)
            }}>
            <Text style={styles.LocationText}>Province: </Text>
            <Text style={styles.LocationDetailsText}>FCT 2 </Text>
          </View>

          <View
            style={{
              marginBottom: verticalScale(20),
            }}>
            <Text style={styles.AboutText}>
              The Redeemed Christian Church of God, Central Parish, is the
              Continental Headquarters of RCCG Continent 2. It is a big
              fellowship of families fitly knitted together in true love.
              Situated in the heart of the Federal Capital Territory, Central
              Parish is an architectural masterpiece that allows for comfort to
              those that worship therein. Presided over by a team of Pastors
              under the leadership of Pastor E.A. Odeyemi (Continent 2
              Overseer).
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.HeaderColor,
            height: verticalScale(25),
          }}></View>

        <View
          style={{
            // backgroundColor: 'purple',
            justifyContent: 'center',
            // marginVertical: verticalScale(15),
            marginTop: verticalScale(15),
          }}>
          <Text
            style={[
              {paddingHorizontal:  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20)},
              styles.LocationBigText,
            ]}>
            Location
          </Text>
        </View>
        <View
          style={{
            marginTop: verticalScale(5),
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {paddingHorizontal:  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20)},
              styles.LocationText,
            ]}>
            Abuja
          </Text>
          <Text
            style={[
              {paddingHorizontal:  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20)},
              styles.LocationDetailsText,
            ]}>
            1249 Aminu Kano Cres, Wuse 904101, Abuja, Federal Capital Territory,
            Nigeria.
          </Text>
        </View>
        <View style={styles.LocationImageViewStyle}>
          <MapView
            style={{flex: 1, borderRadius: scale(10)}}
            initialRegion={{
              latitude: 9.0765,
              longitude: 7.3986,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>
        </View>
        <View
          style={{
            backgroundColor: Color.HeaderColor,
            height: verticalScale(25),
          }}></View>

        <View style={{height: verticalScale(150)}}>
          <View
            style={{
              justifyContent: 'center',
              // marginVertical: verticalScale(10),
              marginTop: verticalScale(15),
            }}>
            <Text
              style={[
                {paddingHorizontal:  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20)},
                styles.LocationBigText,
              ]}>
              Contact
            </Text>
          </View>

          <View
            style={{
              // height: verticalScale(80),
              justifyContent: 'center',
              paddingHorizontal:  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            }}>
            <Text style={styles.LocationDetailsText}>+234 705 469 4807</Text>
            <Text style={styles.LocationDetailsText}>
              info@rccgcentralparish.org
            </Text>
            <Text style={styles.LocationDetailsText}>
              www.rccgcentralparish.org
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewParish;

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
    fontFamily: Font.Poppins700,
    color: Color.DarkTextColor,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
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

  About: {
    fontFamily: Font.Poppins600,
    color: Color.TextColor2,
    textAlign: w >= 768 && h >= 1024 ? 'center' : 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  AboutText: {
    fontFamily: Font.Poppins400,
    color: Color.TextColor2,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(12),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10),
  },
  LocationText: {
    fontFamily: Font.Poppins700,
    color: Color.TextColor2,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
  },
  LocationDetailsText: {
    fontFamily: Font.Poppins400,
    color: Color.TextColor2,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
  },
  LocationBigText: {
    fontFamily: Font.Poppins600,
    color: Color.DarkTextColor,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(17),
  },
  LocationImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(180),
    paddingHorizontal:  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
    marginVertical: verticalScale(15),
    borderRadius: scale(20),
  },
});