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
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {Color} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, verticalScale, moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import DetailsCard from '../../components/Card/DetailsCard';
import PopularBooksCard from '../../components/Card/PopularBooksCard';
import { useSelector } from 'react-redux';
import { getBooks } from '../../redux/actions/UserAction';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PopularBooks = ({navigation}) => {
  const Theme = useSelector(state => state.mode)
  const [myData,setMyData] = useState([])

 
  useFocusEffect(
    useCallback(() => {
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: {display: 'none', backgroundColor: 'red'}});
        getBooks(setMyData)
    }, []),
  );

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
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
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(50)
                : verticalScale(50),
    paddingTop:  w >= 768 && h >= 1024 ? moderateVerticalScale(7) :moderateVerticalScale(10)

          }}
        />
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          
          <FlatList 
          showsHorizontalScrollIndicator={false}
          data={myData}
          renderItem={({item}) => {
            return(
              <PopularBooksCard
              onPress={() => navigation.navigate('ViewManual',{
                item: item
              })}
              source={{uri: item?.cover_image}}
              title={item?.title}
              manual={item?.category}
              resize={'contain'}
              PlaceTrue={true}
              Place={item?.release_year}
              MainBoxRestyle={{
                borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth: 1,
                marginTop: verticalScale(15),
                paddingBottom: verticalScale(15),
              }}
              />
              )
          }

          }
          />
          {/* <PopularBooksCard
            onPress={() => navigation.navigate('ViewManual')}
            source={require('../../assets/images/sunday_manual2.png')}
            title="Sunday Student"
            manual="Manual"
            resize={'contain'}
            PlaceTrue={true}
            Place="2023"
            MainBoxRestyle={{
              borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
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
              borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
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
              borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
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
              borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
              marginTop: verticalScale(15),
              paddingBottom: verticalScale(15),
            }}
          /> */}

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
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(13),
    fontFamily: Font.Poppins600,
  },
});
