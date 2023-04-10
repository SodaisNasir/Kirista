import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  Animated,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Searchbar from './Searchbar';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const HomeHeader = props => {
  const Theme = useColorScheme() === 'dark';

  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal:
          w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(25),
        backgroundColor: Color.HeaderColor,
      }}>
      <View style={{}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(60),
              width: w >= 766 && h >= 1024 ? scale(80) : scale(130),
              right: scale(5),
              marginTop: verticalScale(15),
            }}>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginTop: verticalScale(10),
              height: verticalScale(50),
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={{
                // paddingHorizontal: moderateScale(),
                borderRadius: scale(5),
                backgroundColor: Theme ? '#0A2E61' : '#fff',
                justifyContent: 'center',
                // width:scale(35)
              }}
              onPress={()=>navigation.navigate('SearchBarScreen')}
              >
              <View>
                <MaterialIcons
                  name="search"
                  size={w >= 768 && h >= 1024 ? scale(12) : scale(20)}
                  color="#387DE5"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: w >= 766 && h >= 1024 ? '49%' : '70%',
            justifyContent: 'space-between',
            marginBottom:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
            // marginTop: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(0),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={[styles.TextStyle, props.HomeRestyle]}>Home</Text>
            <View style={props.HomeUnderLineStyle} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ParishFinder');
            }}>
            <Text style={[styles.TextStyle, props.ParishRestyle]}>
              Parish Finder
            </Text>
            <View style={props.ParishUnderLineStyle} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Events');
            }}>
            <Text style={[styles.TextStyle, props.EventRestyle]}>Events</Text>
            <View style={props.EventUnderLineStyle} />
          </TouchableOpacity>
        </View>
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
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 20,
    paddingRight: 10,
    height: 45,
    width: '80%',
  },
  searchInput: {
    height: '100%',
    fontSize: 16,
    width: '85%',
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  X: {
    backgroundColor: '#B4B5B7',
    borderRadius: 100,
    aspectRatio: 1 / 1,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
