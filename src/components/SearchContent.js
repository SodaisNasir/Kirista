import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  useColorScheme
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import { Font } from '../utils/font';
import { Color } from '../utils/Colors';
import DetailsCard from './Card/DetailsCard';



const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function SearchContent() {
  const Theme = useColorScheme() === 'dark';
  const data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../assets/images/book1.png'),
      detail: '2023',
    },

    {
      id: 2,
      title: 'RCCG',
      manual: 'Central Parish',
      image: require('../assets/images/parishsmall_1.png'),
      detail: 'Ghana',
    },

    {
      id: 3,
      title: 'West Coast 3 Regional',
      manual: 'Convention',
      image: require('../assets/images/event_4.png'),
      detail: 'July 7, 2023.   .   4PM',
    },
    {
      id: 4,
      title: 'RCCG His Grace Assembly',
      manual: '',
      image: require('../assets/images/rcg_centralparish.png'),
      detail: 'Banjul',
    },
    {
      id: 5,
      title: 'Sunday School',
      manual: 'Teachers Man..',
      image: require('../assets/images/book2.png'),
      detail: '2023',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White
    }}>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <DetailsCard
            source={require('../assets/images/manual.png')}
            title="Sunday Student"
            resize={'contain'}
            manual="Manual"
            PlaceTrue={true}
            Place={'Ghana'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          />
          <DetailsCard
            source={require('../assets/images/parishsmall_1.png')}
            title="RCCG"
            resize={'contain'}
            manual="Precious Ambassadors "
            PlaceTrue={true}
            Place={'Ghana'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          />
          <DetailsCard
            source={require('../assets/images/EventScreenImage1.png')}
            title="RCCG"
            resize={'cover'}
            manual="Precious Ambassadors "
            PlaceTrue={true}
            Place={'Ghana'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          />

          <DetailsCard
            source={require('../assets/images/parishsmall_3.png')}
            title="RCCG"
            resize={'contain'}
            manual="Precious Ambassadors "
            PlaceTrue={true}
            Place={'Ghana'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          />

          <DetailsCard
            source={require('../assets/images/sunday_manual2.png')}
            title="RCCG"
            resize={'contain'}
            manual="Precious Ambassadors "
            PlaceTrue={true}
            Place={'Ghana'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    border: {
      borderBottomWidth: scale(3),
      marginTop: verticalScale(20),
      borderColor: Color.BorderColor,
      borderBottomColor: Color.BorderColor,
    },
  
    ImageView: {
      // backgroundColor: 'red',
      alignItems: 'center',
    },
    DateStyle: {
      color: Color.BoldTextColor,
      fontFamily: Font.Poppins600,
  
      fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
    },
    TitleStyle: {
      
      fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
      fontFamily: Font.Poppins700,
      // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',
  
      // paddingHorizontal: verticalScale(50),
    },
  });
  