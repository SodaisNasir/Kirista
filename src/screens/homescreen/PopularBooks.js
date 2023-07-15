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
import SkeletonLoader from '../../components/Loader/SkeletonLoader';
import BooksCard from '../../components/Card/BooksCard';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PopularBooks = ({navigation}) => {
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const myData = useSelector(state => state.activeBooks);


 
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
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
          styles.Container,
        ]}>
        <Header
          text={applanguage.PopularBooks}
          AuthHeaderStyle={{
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(80)
                  : verticalScale(60)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(60)
                : verticalScale(40),
            justifyContent: 'center',
            paddingTop:
              Platform.OS == 'android'
                ? moderateVerticalScale(20)
                : w >= 768 && h >= 1024
                ? moderateVerticalScale(25)
                : moderateVerticalScale(0),
          }}
        />
        <View
          // style={{
          //   paddingHorizontal:
          //     w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          // }}
          >

           

            {
              myData.length > 0 ?
              <FlatList 
              showsHorizontalScrollIndicator={false}
              data={myData?.slice(0, 20)}
              renderItem={({item}) => {
                return(
                  <TouchableOpacity  
                  onPress={() => navigation.navigate('ViewManual',{
                    item: item
                  })}>
                  <BooksCard 
                  uri={item?.cover_image}
                  title={item?.title}
                  manual={item?.category}
                  year={item?.release_year}
                  />
                  </TouchableOpacity>
                  )
              }
    
              }
              />
                : 
                <View style={{
                  // flexDirection: '',
                  marginTop:scale(20)
                }}>
                <SkeletonLoader />
                <View style={{height: 0,marginVertical:5}} />
                <SkeletonLoader />
                <View style={{height: 0,marginVertical:5}} />
                <SkeletonLoader />
                <View style={{height: 0,marginVertical:5}} />
                <SkeletonLoader />
                  </View>
            }
          
          
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
