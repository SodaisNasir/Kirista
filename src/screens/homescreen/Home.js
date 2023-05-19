import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  useColorScheme,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {Color} from '../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import HomeHeader from '../../components/HomeHeader';
import {Font} from '../../utils/font';

import BottomTab from '../../constant/BottomTab';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import HomeScreen from '../HomeScreen';
import Parisher from '../homescreen/Parish Finder/ParishFinder';
import Event from '../homescreen/Events/Events';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ThirdRoute = () => <HomeScreen />;
const FourthRoute = () => <Parisher />;
const FifthRoute = () => <Event />;

const renderScene = SceneMap({
  Bedrooms: ThirdRoute,
  DiningRoom: FourthRoute,
  LivingRoom: FifthRoute,
});
const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'Bedrooms', title: 'Home', type: 'home'},
    {key: 'DiningRoom', title: 'Parish Finder', type: 'finder'},
    {key: 'LivingRoom', title: 'Events'},
  ]);
  const renderTabBar = props => (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: 'transparent',
        }}
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          height: w >= 768 && h >= 1024 ? scale(20) : scale(36),
          marginTop: verticalScale(-8),
          marginBottom: verticalScale(15),
        }}
        renderLabel={({route, focused, color}) => (
          <>
            <Text
              style={{
                fontFamily: Font.Poppins600,
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                paddingLeft:
                  route.type == 'home'
                    ? w >= 768 && h >= 1024
                      ? scale(15)
                      : scale(10)
                    : 0,
                color: focused ? Color.Main : Color.HomeHeaderText,
              }}>
              {route.title}
            </Text>
            <View
              style={[
                {
                  backgroundColor: focused ? Color.Main : 'transparent',
                  // borderBottomWidth: w >= 768 && h >= 1024 ? verticalScale(1) : verticalScale(2.2),
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(3)
                      : verticalScale(2.2),
                  width: w >= 768 && h >= 1024 ? scale(10) : scale(20),
                  marginLeft:
                    route.type == 'home'
                      ? w >= 768 && h >= 1024
                        ? scale(15)
                        : scale(10)
                      : 0,
                },
              ]}
            />
          </>
        )}
        activeColor={{color: Color.Main}}
        inactiveColor={{color: Color.HomeHeaderText}}
        tabStyle={{width: 'auto', paddingLeft: 'auto'}}
        bounces={true}
        scrollEnabled={true}
      />
    </View>
  );
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  console.log(w, h);
  const iosTab = w >= 820 && h >= 1180;
  const fourInchPotrait = w <= 350 && h <= 600;
  const Theme = useColorScheme() === 'dark';

  const image_data = [
    {
      id: 1,
      image: require('../../assets/images/list.jpg'),
      image2: require('../../assets/images/redeemImgradiant.png'),
      image3: require('../../assets/images/rccg_logo.png'),
      text: 'the redeemed christian church of god.',
      text2: 'Read More  ',
      color: '#28166f',
      screen_name: 'Rccg',
    },
    {
      id: 2,
      image: require('../../assets/images/list2.jpg'),
      image2: require('../../assets/images/redeemImgradiant.png'),
      image3: require('../../assets/images/rccg_logo.png'),
      text: 'rccg ',
      text_subText: 'structure',
      text2: 'Read More  ',
      color: '#00923f',
      type: 'ye',
      screen_name: 'RccgStructure',
    },
    {
      id: 3,
      image: require('../../assets/images/list3.jpg'),
      image2: require('../../assets/images/redeemImgradiant.png'),
      image3: require('../../assets/images/rccg_logo.png'),
      text: 'rccg ',
      text_subText: 'continent 2',
      text2: 'Read More  ',
      color: '#e43f40',
      type: 'ye',
      screen_name: 'RccgContinent',
    },
  ];
  const books_data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      year: '2023',
      type: 'first',
    },
    {
      id: 2,
      title: 'Sunday School',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      year: '2023',
    },

    {
      id: 3,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },

    {
      id: 4,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },
    {
      id: 5,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
      type: 'first',
    },
    {
      id: 6,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },
    {
      id: 7,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },
  ];

  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <StatusBar
        backgroundColor={Theme ? Color.ExtraViewDark : Color.HeaderColor}
        barStyle={Theme ? 'light-content' : 'dark-content'}
      />

      <HomeHeader />
      <View
        style={{
          flex: 1,
          backgroundColor: Theme ? Color.ExtraViewDark : '#F1F6FD',
        }}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
      <BottomTab activeHome={true} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
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
  YearStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins600,
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
    paddingHorizontal: moderateScale(20),
    height: w >= 768 && h >= 1024 ? verticalScale(105) : verticalScale(160),
  },
  DateStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins600,

    fontSize: w >= 768 && h >= 1024 ? scale(6) : scale(10),
  },

  CountryStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  BooksTitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(13),
    fontFamily: Font.Poppins600,
  },
  EventTtitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
    fontFamily: Font.Poppins700,
  },
  ParishTitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
    fontFamily: Font.Poppins700,
  },
});
