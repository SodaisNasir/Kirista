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
} from 'react-native';
import React, {useCallback} from 'react';
import {Color} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
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
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
 


  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <Header text={'Popular Books'} />

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
    </SafeAreaView>
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
    // borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  YearStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(10),
  },
  TitleStyle: {
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins600,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
});
