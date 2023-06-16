import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  useColorScheme,
  Platform,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {Color} from '../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../utils/font';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import DetailsCard from '../components/Card/DetailsCard';
import Swiper from 'react-native-swiper';
import {
  active_event,
  getBooks,
  parish,
  show_all_banner,
} from '../redux/actions/UserAction';
import SwiperCard from '../components/Card/SwiperCard';
import moment from 'moment';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const HomeScreen = () => {
  const tabPotrait = w >= 768 && h >= 1024;
  const [forImage, setForImage] = useState('');
  const [forLink, setForLink] = useState(``);
  const [data, setData] = useState([]);
  const [event, setEvent] = useState([]);
  const [myData,setMyData] = useState([])

  const navigation = useNavigation();

  const iosTab = w >= 820 && h >= 1180;
  const fourInchPotrait = w <= 380 && h <= 630;
  const Theme = useSelector(state => state.mode)
  const image_data = [
    {
      id: 1,
      image: require('../assets/images/list.jpg'),
      image2: require('../assets/images/redeemImgradiant.png'),
      image3: require('../assets/images/rccg_logo.png'),
      text: 'the redeemed christian church of god.',
      text2: 'Read More  ',
      color: '#28166f',
      screen_name: 'Rccg',
    },
    {
      id: 2,
      image: require('../assets/images/list2.jpg'),
      image2: require('../assets/images/redeemImgradiant.png'),
      image3: require('../assets/images/rccg_logo.png'),
      text: 'rccg ',
      text_subText: 'structure',
      text2: 'Read More  ',
      color: '#00923f',
      type: 'ye',
      screen_name: 'RccgStructure',
    },
    {
      id: 3,
      image: require('../assets/images/list3.jpg'),
      image2: require('../assets/images/redeemImgradiant.png'),
      image3: require('../assets/images/rccg_logo.png'),
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
      image: require('../../src/assets/images/book1.png'),
      year: '2023',
      type: 'first',
    },
    {
      id: 2,
      title: 'Sunday School',
      manual: 'Manual',
      image: require('../../src/assets/images/book1.png'),
      year: '2023',
    },

    {
      id: 3,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../src/assets/images/book2.png'),
      year: '2023',
    },

    {
      id: 4,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../src/assets/images/book2.png'),
      year: '2023',
    },
    {
      id: 5,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../src/assets/images/book2.png'),
      year: '2023',
      type: 'first',
    },
    {
      id: 6,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../src/assets/images/book2.png'),
      year: '2023',
    },
    {
      id: 7,
      title: 'Sunday School ',
      manual: 'Teachers Manual',
      image: require('../../src/assets/images/book2.png'),
      year: '2023',
    },
  ];

  useFocusEffect(
    useCallback(() => {
      show_all_banner(setForImage, setForLink);
      parish(setData);
      active_event(setEvent);
      getBooks(setMyData)
    }, []),
  );
  const imageUrl =
    'https://images.unsplash.com/photo-1526045612212-70caf35c14df';
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            {
              backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
            },
            styles.SwiperViewOne,
          ]}>
          <Swiper
            autoplayTimeout={5}
            autoplay={true}
            showsButtons={false}
            showsPagination={false}>
            <SwiperCard
              source={{uri: forImage}}
              text_subText="asdf is the live event my friend"
              lastText="asdf"
              live
            />
            <SwiperCard
              source={{uri: forImage}}
              text_subText="asdf is the live event my friend"
            />
            {/* <TouchableOpacity
              // onPress={() => navigation.navigate('ViewBanner')}
              // onPress={() => Linking.openURL(forLink)}
              onPress={() =>
                Linking.openURL('https://www.google.com/')
              }
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
                // resizeMode="stretch"
                style={{
                  height: '100%',
                  width: '100%',
                }}
                // source={require('../../src/assets/images/swiperone.png')}
                source={{uri: forImage}}
              />
            </TouchableOpacity> */}

            {/* <TouchableOpacity
              // onPress={() => navigation.navigate('ViewBanner')}
              // onPress={() => Linking.openURL(forLink)}
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
                // source={require('../../src/assets/images/swipertwo.png')}
                source={{uri: imageUrl}}
              />
            </TouchableOpacity> */}
          </Swiper>
        </View>
        <View style={{}}>
          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              flexDirection: 'row',
              marginTop: verticalScale(15),
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            }}>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                styles.BooksText,
              ]}>
              Popular Books
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PopularBooks');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.MoreText}>More</Text>
              <Entypo
                name="chevron-small-right"
                size={w >= 768 && h >= 1024 ? scale(12) : scale(18)}
                color={Color.Main}
                // style={{top:verticalScale(1)}}
              />
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
              // data={myData}
              data={myData.slice(0, 5)}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ViewManual',{
                      item:item
                    })}>
                    <View
                      style={{
                        height:
                          w >= 768 && h >= 1024
                            ? verticalScale(80)
                            : verticalScale(100),

                        flexDirection: 'row',
                        overflow: 'hidden',
                        width:
                          w >= 768 && h >= 1024
                            ? verticalScale(180)
                            : verticalScale(250),
                        marginLeft: item.type == 'first' ? scale(5) : 0,
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
                            source={{uri: item?.cover_image}}
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
                                color: Theme === 'dark'
                                  ? Color.White
                                  : Color.DarkTextColor,
                              },
                              styles.BooksTitleStyle,
                            ]}>
                            {item?.title}
                          </Text>
                          <Text
                            style={[
                              styles.BooksTitleStyle,
                              {
                                color: Theme === 'dark'
                                  ? Color.White
                                  : Color.DarkTextColor,
                                marginTop:
                                  Platform.OS == 'ios' ? 0 : verticalScale(-5),
                              },
                            ]}>
                            {item?.category}
                          </Text>
                        </View>
                        <View
                          style={{
                            marginTop: tabPotrait
                              ? verticalScale(1)
                              : fourInchPotrait
                              ? verticalScale(0.5)
                              : verticalScale(2),
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
            {backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.White},
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
                    marginLeft: item.id == 1 ? scale(20) : scale(8),
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
                            top: w >= 768 && h >= 1024 ? scale(15) : scale(20),
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
                                : w < 450 && h < 750
                                ? scale(10)
                                : scale(13),
                              elevation: 5,
                              marginTop:
                                w >= 768 && h >= 1024
                                  ? verticalScale(5)
                                  : verticalScale(20),
                              fontWeight: '800',
                              textShadowColor: 'rgba(0, 0, 0, 0.75)',
                              textShadowOffset: {width: -1, height: 1},
                              textShadowRadius: 10,
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
                                : w < 450 && h < 750
                                ? scale(10)
                                : scale(13),
                              elevation: 5,
                              fontWeight: '800',
                              textShadowColor: 'rgba(0, 0, 0, 0.75)',
                              textShadowOffset: {width: -1, height: 1},
                              textShadowRadius: 10,
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
                                  : w < 450 && h < 750
                                  ? scale(10)
                                  : scale(12),
                                elevation: 5,
                              }}>
                              {item.text2}
                            </Text>
                            <MaterialIcons
                              name="keyboard-arrow-right"
                              size={
                                w >= 768 && h >= 1024
                                  ? scale(12)
                                  : w < 450 && h < 750
                                  ? scale(15)
                                  : scale(18)
                              }
                              color={'white'}
                              // style={{bottom: 2, right: 3}}
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
                  {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
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
                alignItems: 'center',
              }}>
              <Text style={styles.MoreText}>More</Text>
              <Entypo
                name="chevron-small-right"
                size={w >= 768 && h >= 1024 ? scale(12) : scale(18)}
                color={Color.Main}
                // style={{top:verticalScale(1)}}
              />
            </TouchableOpacity>
          </View>
          {data.length > 0 ? (
            <>
              {data?.map((item, index) => {
         
                return (
                  index < 3 && (
                    <DetailsCard
                      key={item.id}
                      data={item}
                      onPress={() => {
                        navigation.navigate('ViewParish', {
                          id: item.id,
                        });
                      }}
                      source={{uri: item.image}}
                      title="RCCG"
                      manual={item.title}
                      resize={'contain'}
                      PlaceTrue={true}
                      Place={item.location}
                      MainBoxRestyle={{
                        marginTop: verticalScale(10),
                      }}
                    />
                  )
                );
              })}
            </>
          ) : (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color={Color.White} />
            </View>
          )}
        </View>

        <View
          style={{
            height: verticalScale(20),
            backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
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
                  {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                  styles.UpcomingText,
                ]}>
                Upcoming Events
              </Text>
            </View>

            {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
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
          </TouchableOpacity> */}
          </View>
          <View>
            {event.length > 0 ? (
              <>
                {event?.map((item, index) => {
                  return (
                    index < 4 && (
                      <DetailsCard
                        key={item.id}
                        data={item}
                        onPress={() => {
                          navigation.navigate('EventScreen', {id: item.id});
                        }}
                        source={{uri: item.image}}
                        title={item.title}
                        // title="West Coast 2 Regional"
                        manual={item?.address}
                        resize={'cover'}
                        TimeTrue={true}
                        time={item.start_time}
                        date={moment(data.start_date).format('MMM Do YY')}
                        MainBoxRestyle={{
                          marginTop: verticalScale(12),
                        }}
                      />
                    )
                  );
                })}
              </>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color={Color.White} />
              </View>
            )}

            {/* <DetailsCard
              onPress={() => {
                navigation.navigate('EventScreen');
              }}
              source={require('../assets/images/event_2.png')}
              title="West Coast 3 Regional"
              resize={'cover'}
              manual="Convention"
              TimeTrue={true}
              date={'July 7, 2023'}
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
              source={require('../assets/images/event_3.png')}
              title="West Coast 1 Regional"
              resize={'cover'}
              manual="Convention"
              PlaceTrue={true}
              TimeTrue={true}
              date={'July 21, 2023'}
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
              source={require('../assets/images/EventScreenImage1.png')}
              title="Abuja Special Holy Ghost"
              resize={'cover'}
              manual="Congress"
              PlaceTrue={true}
              // Place="Ghana"
              TimeTrue={true}
              date={'November 09, 2023'}
              time={'4PM'}
              MainBoxRestyle={{
                paddingBottom: 0,
                marginTop: verticalScale(12),
              }}
            /> */}
          </View>
        </View>
        <View style={{height: verticalScale(10)}} />
      </ScrollView>
    </View>
  );
};

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
  },

  BooksTitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(13),
    fontFamily: Font.Poppins600,
  },
});
export default HomeScreen;
