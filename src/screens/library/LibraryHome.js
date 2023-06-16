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
import {scale, verticalScale, moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import FilterModal from '../../components/Modals/FilterModal';
import DetailsCard from '../../components/Card/DetailsCard';
import {useFocusEffect} from '@react-navigation/native';
import BottomTab from '../../constant/BottomTab';
import { getBooks } from '../../redux/actions/UserAction';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const LibraryHome = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const Theme = useSelector(state => state.mode)
  const [isModalVisible, setModalVisible] = useState(false);
  const [data,setData] = useState([])
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const myData = [
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
      getBooks(setData)
    }, []),
  );


  return (
    <>
     <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White}}>
      <StatusBar
        backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.White}
        barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <LibraryHeader
        onPress={() => {
          setShowModal(toggleModal(true));
        }}
        AuthHeaderStyle={{
          height:
          Platform.OS == 'android'
            ? w >= 768 && h >= 1024
              ? verticalScale(80)
              : verticalScale(80)
            : w >= 768 && h >= 1024
            ? verticalScale(70)
            : w <= 450 && h <= 750
            ? verticalScale(60)
            : verticalScale(40),
        justifyContent: 'center',
        paddingTop:
        Platform.OS == 'android' ? moderateVerticalScale(30) :
          w >= 768 && h >= 1024
            ? moderateVerticalScale(25)
            : moderateVerticalScale(25),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
            {
              data?.map((item) => {
                return(
                  <>
                  <DetailsCard
                  key={item?.id}
                  onPress={() => navigation.navigate('ViewManual',{
                    item:item
                  })}
                  source={{uri: item?.cover_image}}
                  title={item?.title}
                  resize={'contain'}
                  manual={item?.category}
                  PlaceTrue={true}
                  Place={item?.release_year}
                  MainBoxRestyle={{
                    paddingBottom:
                      w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                    marginTop:
                      w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                    // backgroundColor:'red'
                    borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
                    borderBottomWidth: 1,
                  }}
                />
                  </>
                )
              })
            }
         
          {/* <DetailsCard
          onPress={() => navigation.navigate('ViewParish')}
            source={require('../../assets/images/parishsmall_2.png')}
            title="RCCG"
            resize={'contain'}
            manual="Precious Ambassadors"
            PlaceTrue={true}
            Place={'Abuja'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          />
          <DetailsCard
            source={require('../../assets/images/EventScreenImage1.png')}
            title="WestCoast 3 Regional"
            resize={'cover'}
            manual="Convention "
            TimeTrue={true}
            date={'July 7, 2023'}
            time={'4PM'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          />

          <DetailsCard
            source={require('../../assets/images/parishsmall_3.png')}
            title="RCCG"
            resize={'contain'}
            manual="Salvation Centre"
            PlaceTrue={true}
            Place={'Togo'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          />

          <DetailsCard
            source={require('../../assets/images/sunday_manual2.png')}
            title="Sunday School"
            resize={'contain'}
            manual="Teachers Man..."
            PlaceTrue={true}
            Place={'2023'}
            MainBoxRestyle={{
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              // backgroundColor:'red'
              borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
              borderBottomWidth: 1,
            }}
          /> */}
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
  // DateStyle: {
  //   color: Color.BoldTextColor,
  //   fontFamily: Font.Poppins600,

  //   fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  // },
  // TitleStyle: {
  //   // color: Color.DarkTextColor,
  //   fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
  //   fontFamily: Font.Poppins700,
  //   // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

  //   // paddingHorizontal: verticalScale(50),
  // },
});
