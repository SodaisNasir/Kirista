import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  Platform,
} from 'react-native';
import React, {useCallback, useLayoutEffect} from 'react';
import {Color} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, verticalScale, moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import DetailsCard from '../../components/Card/DetailsCard';
import PopularBooksCard from '../../components/Card/PopularBooksCard';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PopularBooks = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  useFocusEffect(
    useCallback(() => {
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: {display: 'none', backgroundColor: 'red'}});
    }, []),
  );

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          {backgroundColor: Theme ? Color.DarkTheme : Color.White},
          styles.Container,
        ]}>
        <Header
          text={'Popular Books'}
          AuthHeaderStyle={{
            marginTop: Platform.OS == 'ios' ? verticalScale(-25) : 0,
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(65)
                  : verticalScale(80)
                : w >= 768 && h >= 1024
                ? verticalScale(50)
                : w <= 450 && h <= 750
                ? verticalScale(50)
                : verticalScale(30),
    paddingTop:  w >= 768 && h >= 1024 ? moderateVerticalScale(7) :moderateVerticalScale(10)

          }}
        />
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <PopularBooksCard
            onPress={() => navigation.navigate('ViewManual')}
            source={require('../../assets/images/manual.png')}
            title="Sunday Student"
            manual="Manual"
            resize={'contain'}
            PlaceTrue={true}
            Place="2023"
            MainBoxRestyle={{
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
              marginTop: verticalScale(15),
              paddingBottom: verticalScale(15),
            }}
          />
          <PopularBooksCard
            onPress={() => navigation.navigate('ViewManual')}
            source={require('../../assets/images/sunday_manual2.png')}
            title="Sunday Student"
            manual="Manual"
            resize={'contain'}
            PlaceTrue={true}
            Place="2023"
            MainBoxRestyle={{
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
              marginTop: verticalScale(15),
              paddingBottom: verticalScale(15),
            }}
          />
          <PopularBooksCard
            onPress={() => navigation.navigate('ViewManual')}
            source={require('../../assets/images/manual.png')}
            title="Sunday School Teachers"
            manual="Manual"
            resize={'contain'}
            PlaceTrue={true}
            Place="2023"
            MainBoxRestyle={{
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
              marginTop: verticalScale(15),
              paddingBottom: verticalScale(15),
            }}
          />
          <PopularBooksCard
            onPress={() => navigation.navigate('ViewManual')}
            source={require('../../assets/images/sunday_manual2.png')}
            title="Sunday School Teachers"
            manual="Manual"
            resize={'contain'}
            PlaceTrue={true}
            Place="2023"
            MainBoxRestyle={{
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
              marginTop: verticalScale(15),
              paddingBottom: verticalScale(15),
            }}
          />
          <PopularBooksCard
            onPress={() => navigation.navigate('ViewManual')}
            source={require('../../assets/images/manual.png')}
            title="Sunday Student"
            manual="Manual"
            resize={'contain'}
            PlaceTrue={true}
            Place="2023"
            MainBoxRestyle={{
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
              marginTop: verticalScale(15),
              paddingBottom: verticalScale(15),
            }}
          />

          {/* <View style ={{height:verticalScale(75)}}/> */}
        </View>
      </View>
    </>
  );
};

export default PopularBooks;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    alignItems: 'center',
  },
  YearStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(10),
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins600,
  },
});
