import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  useColorScheme,
  StatusBar,
  ScrollView,
  Platform
} from 'react-native';
import React, {useCallback, useState} from 'react';
import LibraryHeader from '../../components/LibraryHeader';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import FilterModal from '../../components/Modals/FilterModal';
import DetailsCard from '../../components/Card/DetailsCard';
import {useFocusEffect} from '@react-navigation/native';
import BottomTab from '../../constant/BottomTab';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const LibraryHome = ({navigation}) => {
  // for modal
  const [showModal, setShowModal] = useState(false);
  const Theme = useColorScheme() === 'dark';
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      detail: '2023',
      path: 'PopularBooks',
    },

    {
      id: 2,
      title: 'RCCG',
      manual: 'Central Parish',
      image: require('../../../src/assets/images/parishsmall_1.png'),
      detail: 'Ghana',
      path: 'FeaturedParishes',
    },

    {
      id: 3,
      title: 'West Coast 3 Regional',
      manual: 'Convention',
      image: require('../../../src/assets/images/event_4.png'),
      detail: 'July 7, 2023.   .   4PM',
      path: 'EventScreen',
    },
    {
      id: 4,
      title: 'RCCG His Grace Assembly',
      manual: '',
      image: require('../../../src/assets/images/rcg_centralparish.png'),
      detail: 'Banjul',
      path: 'FeaturedParishes',
    },
    {
      id: 5,
      title: 'Sunday School',
      manual: 'Teachers Man..',
      image: require('../../../src/assets/images/book2.png'),
      detail: '2023',
      path: 'PopularBooks',
    },
  ];
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  return (
    <>
     <SafeAreaView
        style={{
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <StatusBar
        backgroundColor={Theme ? Color.ExtraViewDark : Color.White}
        barStyle={Theme ? 'light-content' : 'dark-content'}
      />
      <LibraryHeader
        onPress={() => {
          setShowModal(toggleModal(true));
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <DetailsCard
            onPress={() => navigation.navigate('ViewManual')}
            source={require('../../assets/images/manual.png')}
            title="Sunday Student"
            resize={'contain'}
            manual="Manual"
            PlaceTrue={true}
            Place={'2023'}
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
            source={require('../../assets/images/parishsmall_1.png')}
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
            source={require('../../assets/images/EventScreenImage1.png')}
            title="RCCG"
            resize={'cover'}
            manual="Precious Ambassadors "
            TimeTrue={true}
            date={'November 09, 2023'}
            time={'4PM'}
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
            source={require('../../assets/images/parishsmall_3.png')}
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
            source={require('../../assets/images/sunday_manual2.png')}
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
      </ScrollView>
     
      <FilterModal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        onPress={() => setModalVisible(false)}
      />
    </SafeAreaView>
    <BottomTab  activeLibary={true}/>
    </>
  );
};

export default LibraryHome;

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
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
});
