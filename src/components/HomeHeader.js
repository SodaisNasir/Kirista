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
import { useNavigation } from '@react-navigation/native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const HomeHeader = (props) => {
  const navigation = useNavigation();
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
            marginTop:verticalScale(15),
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
          width: w >= 766 && h >= 1024 ? '49%' : '70%',
          justifyContent: 'space-between',
          marginBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
          // marginTop: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(0),
            
        }}>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Home')
          }}>
          <Text style={[styles.TextStyle,props.HomeRestyle]}>Home</Text>
          <View style={props.HomeUnderLineStyle} />
        </TouchableOpacity>

        <TouchableOpacity
        
        onPress={()=>{
          navigation.navigate('ParishFinder')
        }}
        >
        <Text style={[styles.TextStyle,props.ParishRestyle]}>Parish Finder</Text>
        <View style={props.ParishUnderLineStyle} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={[styles.TextStyle,props.EventRestyle]}>Events</Text>
        <View style={props.EventUnderLineStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  TextStyle: {
    fontFamily: Font.Poppins500,
    color: Color.HomeHeaderText,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
  },

});
