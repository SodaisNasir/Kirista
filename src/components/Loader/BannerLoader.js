import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Font } from '../../utils/font';
import { Color } from '../../utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const width = Dimensions.get('screen').width

const BannerLoader = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const Theme = useSelector(state => state.mode);
    const applanguage = useSelector(state => state.applanguage);
  
    const tabPotrait = w >= 768 && h >= 1024;
    const [forImage, setForImage] = useState([]);
    const [data, setData] = useState([]);
    const [event, setEvent] = useState([]);
    const [myData, setMyData] = useState([]);
  
    const iosTab = w >= 820 && h >= 1180;
    const fourInchPotrait = w <= 380 && h <= 630;
  return (

    <SkeletonPlaceholder
    
    backgroundColor={Theme === 'dark' ? '#0a21424d' : '#E1E9EE'}
     borderRadius={4}
      marginTop={10} 
      // speed={1000}
      >
    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
      <SkeletonPlaceholder.Item 
                            width={'90%'} 
                            height={w >= 768 && h >= 1024 ? verticalScale(110) : verticalScale(140)}
                            marginLeft={20}
                            marginRight={w >= 768 && h >= 1024 ? verticalScale(8) : verticalScale(0)}
                            margin={5}
                            borderRadius={20}
                              />
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
      },
      box: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#E8E8E8',
        margin: 10,
      },
    MainView: {
      paddingHorizontal: moderateScale(20),
    },
    BooksText: {
      fontFamily: Font.Poppins700,
      fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
    },
    UpcomingText: {
      fontFamily: Font.Poppins600,
      fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
    },
    MoreText: {
      color: Color.Main,
      fontFamily: Font.Poppins600,
      fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
      top: 1,
    },
    ImageView: {
      alignItems: 'center',
    },
  
    slide: {
      flex: 1,
    },
    SwiperImage: {
      width: '100%',
      height: '80%',
      alignSelf: 'center',
    },
    SwiperImage2: {
      width: '75%',
      height: '75%',
      marginTop: verticalScale(10),
      alignSelf: 'center',
    },
    SwiperView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    SwiperViewOne: {
      alignItems: 'center',
      justifyContent: 'center',
      height: w >= 768 && h >= 1024 ? verticalScale(110) : verticalScale(150),
    },
    SwiperViewTwo: {
      alignItems: 'center',
      justifyContent: 'center',
      height: w >= 768 && h >= 1024 ? verticalScale(105) : verticalScale(160),
    },
  
    YearStyle: {
      color: Color.BoldTextColor,
      fontFamily: Font.Poppins500,
      fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
      right: w >= 768 && h >= 1024 ? scale(1) : 0,
      height: 20
    },
  
    BooksTitleStyle: {
      fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(13),
      fontFamily: Font.Poppins600,
    },
    BigTextStyle: {
      color: Color.DarkTextColor,
      fontFamily: Font.Poppins500,
      fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(13),
    },
  });
export default BannerLoader
