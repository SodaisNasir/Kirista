import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  useColorScheme,
  useWindowDimensions,
  StatusBar,
  Platform,
} from 'react-native';
import {Color} from '../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import HomeHeader from '../../components/HomeHeader';
import {Font} from '../../utils/font';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import DetailsCard from '../../components/Card/DetailsCard';
import Swiper from 'react-native-swiper';
import Advertisement from '../../components/Advertisement';
// import AdvertisementModal from '../../components/Modals/AdvertisementModal'
// import { useDispatch, useSelector } from 'react-redux'
// import { HIDE_ADVERTISEMENT } from '../../redux/reducer'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const Home = ({navigation}) => {
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: verticalScale(80),
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          borderColor: Theme ? Color.DarkTheme : Color.White,
          borderTopWidth: 0,
          tabBarLabelStyle: {
            fontFamily: Font.Poppins600,
            fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(11),
            marginBottom:
              w >= 768 && h >= 1024 ? verticalScale(-15) : verticalScale(15),

            left: w >= 768 && h >= 1024 ? scale(115) : scale(0),
          },
        },
      });
    }),
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
      <View
        style={{
          flex: 1,
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        
        }}>
        <StatusBar
          backgroundColor={Theme ? Color.ExtraViewDark : '#F1F6FD'}
          barStyle={Theme ? 'light-content' : 'dark-content'}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeHeader
            HomeRestyle={{color: Color.Main, fontFamily: Font.Poppins700}}
            HomeUnderLineStyle={{
              width: '55%',
              backgroundColor: Color.Main,
              height: verticalScale(2),
              bottom: verticalScale(4),
            }}
          />
          <View
            style={[
              {
                backgroundColor: Theme
                  ? Color.ExtraViewDark
                  : Color.HeaderColor,
              },
              styles.SwiperViewOne,
            ]}>
            <Swiper
              autoplayTimeout={5}
              autoplay={true}
              showsButtons={false}
              showsPagination={false}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ViewBanner')}
                activeOpacity={1}
                style={{
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(100)
                      : verticalScale(135),
                  alignSelf: 'center',
                  width: w >= 768 && h >= 1024 ? scale(160) : scale(300),
                  overflow: 'hidden',
                }}>
                <Image
                  resizeMode="stretch"
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  source={require('../../../src/assets/images/swiperone.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ViewBanner')}
                activeOpacity={1}
                style={{
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(100)
                      : verticalScale(135),

                  alignSelf: 'center',
                  width: w >= 768 && h >= 1024 ? scale(160) : scale(300),
                  overflow: 'hidden',
                }}>
                <Image
                  resizeMode="stretch"
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  source={require('../../../src/assets/images/swipertwo.png')}
                />
              </TouchableOpacity>
            </Swiper>
          </View>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: 'row',
                marginTop: verticalScale(15),
              }}>
              <Text
                style={[
                  {color: Theme ? Color.White : Color.DarkTextColor},
                  styles.BooksText,
                ]}>
                Popular Books
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('PopularBooks')}
                style={{flexDirection: 'row'}}>
                <Text style={styles.MoreText}>More</Text>
                <View style={{top: 1}}>
                  <Entypo
                    name="chevron-small-right"
                    size={w >= 768 && h >= 1024 ? scale(12) : scale(18)}
                    color={Color.Main}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                numColumns={Math.ceil(books_data?.length / 2)}
                data={books_data}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ViewManual')}>
                      <View
                        style={{
                          height:
                            w >= 768 && h >= 1024
                              ? verticalScale(80)
                              : verticalScale(100),

                          flexDirection: 'row',
                          overflow: 'hidden',
                          width: scale(250),
                          // backgroundColor:'red',
                          marginLeft: item.type == 'first' ? scale(-15) : 0,
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                          }}>
                          <View
                            style={{
                              height: w >= 768 && h >= 1024 ? '68%' : '100%',
                              width:
                                w >= 768 && h >= 1024 ? scale(60) : scale(100),
                            }}>
                            <Image
                              resizeMode="contain"
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                              source={item?.image}
                            />
                          </View>
                        </View>
                        <View style={{marginVertical: verticalScale(20)}}>
                          <View
                            style={{
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={[
                                {
                                  color: Theme
                                    ? Color.White
                                    : Color.DarkTextColor,
                                },
                                styles.BooksTitleStyle,
                              ]}>
                              {item?.title}
                            </Text>
                            <Text
                              // numberOfLines={1}
                              // adjustsFontSizeToFit={true}
                              style={[
                                styles.BooksTitleStyle,
                                {
                                  color: Theme
                                    ? Color.White
                                    : Color.DarkTextColor,
                                  marginTop:
                                    Platform.OS == 'ios'
                                      ? 0
                                      : verticalScale(-5),
                                },
                              ]}>
                              {item.manual}
                            </Text>
                          </View>
                          <View
                            style={{
                              marginTop: verticalScale(3),
                              justifyContent: 'center',
                            }}>
                            <Text style={styles.YearStyle}> {item?.year}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
          </View>
          <View
            style={[
              {backgroundColor: Theme ? Color.ExtraViewDark : Color.White},
              styles.SwiperViewTwo,
            ]}>
            <FlatList
              data={image_data}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      paddingVertical: verticalScale(10),
                      height:
                        w >= 768 && h >= 1024
                          ? verticalScale(110)
                          : verticalScale(140),
                      width: w >= 768 && h >= 1024 ? scale(115) : scale(200),
                      marginRight:
                        w >= 768 && h >= 1024
                          ? verticalScale(8)
                          : verticalScale(0),
                      alignSelf: 'center',
                      overflow: 'hidden',
                      margin: 5,
                    }}>
                    <Image
                      resizeMode="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                      }}
                      source={item.image}
                    />
                    <Image
                      resizeMode="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                      }}
                      source={item.image2}
                    />
                    <View
                      style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                      }}>
                      <View
                        style={{
                          height: '5%',
                          width: '100%',
                          backgroundColor: item.color,
                        }}
                      />
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            height: '100%',
                            width: '40%',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              height:
                                w >= 768 && h >= 1024
                                  ? verticalScale(30)
                                  : verticalScale(65),
                              width:
                                w >= 768 && h >= 1024 ? scale(30) : scale(65),
                              borderRadius: 100,
                              top:
                                w >= 768 && h >= 1024 ? scale(15) : scale(20),
                              overflow: 'hidden',
                            }}>
                            <Image
                              resizeMode="contain"
                              style={{
                                height: '100%',
                                width: '100%',
                              }}
                              source={item.image3}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            height: '100%',
                            width: '60%',
                            // justifyContent:'center',
                            // alignItems:'center'
                          }}>
                          <View
                            style={{
                              height: '70%',
                              width: '100%',
                            }}>
                            <Text
                              style={{
                                fontFamily: Font.GoBold400,
                                color: Color.White,
                                textTransform: 'uppercase',
                                maxWidth: '100%',
                                top: item.type == 'ye' ? scale(15) : scale(10),
                                fontSize: iosTab
                                  ? scale(7)
                                  : w >= 768 && h >= 1024
                                  ? scale(7)
                                  : w <= 350 && h <= 600
                                  ? scale(12)
                                  : w >= 450 && h >= 700
                                  ? scale(8)
                                  : scale(13),
                                elevation: 5,
                                marginTop:
                                  w >= 768 && h >= 1024
                                    ? verticalScale(5)
                                    : verticalScale(20),
                              }}>
                              {item.text}
                            </Text>
                            <Text
                              style={{
                                fontFamily: Font.GoBold400,
                                color: Color.White,
                                textTransform: 'uppercase',
                                top: item.type == 'ye' ? scale(15) : scale(10),
                                fontSize: iosTab
                                  ? scale(7)
                                  : w >= 768 && h >= 1024
                                  ? scale(7)
                                  : w <= 350 && h <= 600
                                  ? scale(12)
                                  : w >= 450 && h >= 700
                                  ? scale(8)
                                  : scale(13),
                                elevation: 5,
                              }}>
                              {item.text_subText}
                            </Text>
                          </View>
                          <View
                            style={{
                              height: '25%',
                              width: '100%',
                              marginVertical: verticalScale(2),
                            }}>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate(item.screen_name)
                              }
                              style={{
                                flexDirection: 'row',
                              }}>
                              <Text
                                style={{
                                  fontFamily: Font.Poppins400,
                                  color: Color.White,
                                  fontSize: iosTab
                                    ? scale(5)
                                    : w >= 768 && h >= 1024
                                    ? scale(7)
                                    : scale(12),
                                  elevation: 5,
                                }}>
                                {item.text2}
                              </Text>
                              <MaterialIcons
                                name="keyboard-arrow-right"
                                size={
                                  w >= 768 && h >= 1024 ? scale(12) : scale(18)
                                }
                                color={'white'}
                                style={{bottom: 2, right: 3}}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: 'row',
                marginTop: verticalScale(15),
              }}>
              <View style={{}}>
                <Text
                  style={[
                    {color: Theme ? Color.White : Color.DarkTextColor},
                    styles.BooksText,
                  ]}>
                  Featured Parishes
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FeaturedParishes');
                }}
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={styles.MoreText}>More</Text>
                <View style={{top: 1}}>
                  <Entypo
                    name="chevron-small-right"
                    size={w >= 768 && h >= 1024 ? scale(12) : scale(18)}
                    color={Color.Main}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <DetailsCard
                onPress={() => {
                  navigation.navigate('ViewParish');
                }}
                source={require('../../assets/images/parishsmall_1.png')}
                title="RCCG "
                manual="Central Parish"
                resize={'contain'}
                PlaceTrue={true}
                Place={'Abuja'}
                MainBoxRestyle={{
                  marginTop: verticalScale(10),
                }}
              />
              <DetailsCard
                onPress={() => {
                  navigation.navigate('ViewParish');
                }}
                source={require('../../assets/images/parishsmall_3.png')}
                title="RCCG"
                manual="Salvation Center"
                resize={'contain'}
                PlaceTrue={true}
                Place={'Ghana'}
                MainBoxRestyle={{
                  marginTop: verticalScale(10),
                }}
              />

              <DetailsCard
                onPress={() => {
                  navigation.navigate('ViewParish');
                }}
                source={require('../../assets/images/parishsmall_2.png')}
                title="RCCG"
                manual="Precious Ambassadors "
                resize={'contain'}
                PlaceTrue={true}
                Place={'Abuja'}
                MainBoxRestyle={{
                  // paddingBottom: verticalScale(10),
                  marginTop: verticalScale(10),
                  // backgroundColor:'red'
                  paddingBottom: verticalScale(15),
                }}
              />
            </View>
          </View>

          <View
            style={{
              height: verticalScale(20),
              backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
            }}
          />
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              // backgroundColor: Color.White,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: 'row',
                marginTop: verticalScale(15),
              }}>
              <View>
                <Text
                  style={[
                    {color: Theme ? Color.White : Color.DarkTextColor},
                    styles.UpcomingText,
                  ]}>
                  Upcoming Events
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Events');
                }}
                style={{flexDirection: 'row'}}>
                <Text style={styles.MoreText}>See all</Text>
                <View style={{top: 1}}>
                  <Entypo
                    name="chevron-small-right"
                    size={w >= 768 && h >= 1024 ? scale(12) : scale(17)}
                    color={Color.Main}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <DetailsCard
                onPress={() => {
                  navigation.navigate('EventScreen');
                }}
                source={require('../../assets/images/event_1.png')}
                title="West Coast 2 Regional"
                manual="Convention"
                resize={'cover'}
                TimeTrue={true}
                date={'November 09, 2023'}
                time={'4PM'}
                MainBoxRestyle={{
                  // paddingBottom: verticalScale(10),
                  marginTop: verticalScale(12),
                  // backgroundColor:'red'
                }}
              />
              <DetailsCard
                onPress={() => {
                  navigation.navigate('EventScreen');
                }}
                source={require('../../assets/images/event_2.png')}
                title="West Coast 3 Regional"
                resize={'cover'}
                manual="Convention"
                TimeTrue={true}
                date={'November 09, 2023'}
                time={'4PM'}
                MainBoxRestyle={{
                  paddingBottom: 0,
                  marginTop: verticalScale(12),
                }}
              />
              <DetailsCard
                onPress={() => {
                  navigation.navigate('EventScreen');
                }}
                source={require('../../assets/images/event_3.png')}
                title="West Coast 3 Regional"
                resize={'cover'}
                manual="Convention"
                PlaceTrue={true}
                TimeTrue={true}
                date={'November 09, 2023'}
                time={'4PM'}
                MainBoxRestyle={{
                  paddingBottom: 0,
                  marginTop: verticalScale(12),
                }}
              />
              <DetailsCard
                onPress={() => {
                  navigation.navigate('EventScreen');
                }}
                source={require('../../assets/images/EventScreenImage1.png')}
                title="Abuja Special Holy Ghost"
                resize={'cover'}
                manual="Congress"
                PlaceTrue={true}
                // Place="Ghana"
                TimeTrue={true}
                date={'June 22, 2023'}
                time={'4PM'}
                MainBoxRestyle={{
                  paddingBottom: 0,
                  marginTop: verticalScale(12),
                }}
              />
            </View>
          </View>

          <View
            style={{
              height: verticalScale(80),
            }}
          />
        </ScrollView>
        <Advertisement
          isVisible={isModalVisible}
          HideModalOnPress={() => setModalVisible(false)}
          onPressView={() => {
            navigation.navigate('ViewManual');
            setModalVisible(false);
          }}
        />
      </View>
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
