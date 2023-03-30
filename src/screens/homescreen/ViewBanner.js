import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Font} from '../../utils/font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomNavigator from '../../components/CustomNavigator';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ViewBanner = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <View style={{height: '100%', backgroundColor: Color.White}}>
        <Header />
        <ScrollView>

        <View style={styles.Container}>
          <View style={styles.ImageViewStyle}>
            <TouchableOpacity onPress={() => console.log('Image pressed')}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/banner.png')}
                style={{height: '100%', width: '100%'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log('Center image pressed')}
              style={styles.centerImageContainer}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/play-circle.png')}
                style={{height: '100%', width: '80%'}}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: verticalScale(15)}}>
            <Text style={styles.BoldText}>
              Abuja Special Holy Ghost Congress
            </Text>
          </View>

          <View style={{marginVertical: verticalScale(0)}}>
            <Text style={styles.LightText}>
              The Abuja Special Holy Ghost Service is an annual gathering of the
              church in the FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed minthe FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed ministers of God.
            </Text>
          </View>
        </View>
        <View style={{height:verticalScale(85)}}/>
        </ScrollView>
        <View style={{position:'absolute',bottom:0,width:'100%',backgroundColor:Color.White}}>
          <CustomNavigator />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewBanner;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
    backgroundColor: Color.White,
  },
  ImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(200),
    marginTop: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(15),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(5),
  },

  BoldText: {
    color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(19),
    fontFamily: Font.Poppins700,
  },
  LightText: {
    color: Color.TextColor2,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
    fontFamily: Font.Poppins400,
  },
  centerImageContainer: {
    position: 'absolute',
    marginTop: w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(65),
    width: w >= 768 && h >= 1024 ? verticalScale(55) : verticalScale(70),
    height: w >= 768 && h >= 1024 ? verticalScale(55) : verticalScale(70),
    //   marginLeft: w >= 768 && h >= 1024 ? verticalScale(-50) : verticalScale(-35),
    //   marginTop: w >= 768 && h >= 1024 ? verticalScale(-50) : verticalScale(-35),
    alignSelf: 'center',
    // backgroundColor:'red',
    justifyContent: 'center',
    alignContent: 'center',
  },
  LoadStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(10),
    borderColor: Color.Black,
    borderWidth: 2,
    height: w >= 768 && h >= 1024 ? verticalScale(19) : verticalScale(35),
    width: w >= 768 && h >= 1024 ? verticalScale(19) : verticalScale(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ArrowStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(10),
    borderColor: Color.Black,
    borderWidth: 2,
    height: w >= 768 && h >= 1024 ? verticalScale(17) : verticalScale(30),
    width: w >= 768 && h >= 1024 ? verticalScale(17) : verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
