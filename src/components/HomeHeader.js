import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  Platform
} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import {useNavigation} from '@react-navigation/native';

import SearchNormal from '../assets/icons/search-normal';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const HomeHeader = props => {
  const Theme = useSelector(state => state.mode)

  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal:
          w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(25),
        backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        marginTop:Platform.OS == 'ios'?  verticalScale(-20) : 0,
        paddingTop: Platform.OS == 'ios'? 0 : moderateScale(20)
      }}>
      <View style={{}}>
        <View
          style={[styles.HeaderBox,props.HeaderBox]}>
          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(60),
              width: w >= 766 && h >= 1024 ? scale(80) : scale(130),
              right: scale(5),
              marginTop: verticalScale(15),
            }}>
            <Image
              source={
                Theme === 'dark'
                  ? require('../assets/images/krista_main_dark.png')
                  : require('../assets/images/krista_main.png')
              }
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
                borderRadius: w >= 768 && h >= 1024 ? scale(5) : scale(7),
                backgroundColor: Theme === 'dark' ? '#0A2E61' : '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                height:
                  w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30),
                width: w >= 768 && h >= 1024 ? scale(20) : scale(30),
              }}
              onPress={() => navigation.navigate('Searchbar')}>
              <View>
                <SearchNormal
                  height={
                    w >= 768 && h >= 1024
                      ? verticalScale(20)
                      : verticalScale(24)
                  }
                  width={w >= 768 && h >= 1024 ? scale(12) : scale(16)}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            width: w >= 766 && h >= 1024 ? '55%' : '75%',
            justifyContent: 'space-between',
            marginBottom:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
            // marginTop: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(0),
          }}>
          <TouchableOpacity
        
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            <Text style={[styles.TextStyle, props.HomeRestyle]}>Home</Text>
            <View style={[{marginTop : Platform.OS == 'ios' ? verticalScale(2)  : null},props.HomeUnderLineStyle]} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ParishFinder');
            }}>
            <Text style={[styles.TextStyle, props.ParishRestyle]}>
              Parish Finder
            </Text>
            <View style={[{marginTop : Platform.OS == 'ios' ? verticalScale(2)  : null},props.ParishUnderLineStyle]} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Events');
            }}>
            <Text style={[styles.TextStyle, props.EventRestyle]}>Events</Text>
            <View style={[{marginTop : Platform.OS == 'ios' ? verticalScale(2)  : null},props.EventUnderLineStyle]} />
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  TextStyle: {
    fontFamily: Font.Poppins600,
    color: Color.HomeHeaderText,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
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
  HeaderBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:
    Platform.OS == 'ios' && w >= 768 && h >= 1024
      ? verticalScale(20)
      : 0,
  }
});
