import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const HomeHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal:
          w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(25),
        backgroundColor: Color.HeaderColor,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(60),
            width: w >= 766 && h >= 1024 ? scale(80) : scale(130),
            right: scale(5),
            // backgroundColor:'red',
            marginTop:verticalScale(15)
          }}>
          <Image
            source={require('../assets/images/logo.png')}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '70%',
          justifyContent: 'space-between',
          // marginBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
          // marginTop: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(0),
            
        }}>
        <TouchableOpacity>
          <Text style={styles.TextStyle}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.TextStyle}>Parish Finder</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.TextStyle}>Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  TextStyle: {
    fontFamily: Font.Poppins600,
    color: Color.HomeHeaderText,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
  },
});
