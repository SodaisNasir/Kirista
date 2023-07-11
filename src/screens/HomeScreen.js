import React, {useCallback, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  Platform,
  Linking,
  RefreshControl,
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
  getSearchData,
  parish,
  show_all_banner,
} from '../redux/actions/UserAction';
import SwiperCard from '../components/Card/SwiperCard';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import SkeletonLoader from '../components/Loader/SkeletonLoader';
import BannerLoader from '../components/Loader/BannerLoader';
import {get_rccgData} from '../redux/actions/AuthAction';
import DoubleText from '../components/Loader/DoubleText';
import FastImage from 'react-native-fast-image';
import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const HomeScreen = ({scrollViewRef}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const Theme = useSelector(state => state.mode);
  const applanguage = useSelector(state => state.applanguage);
  const language = useSelector(state => state.language);
  const bannerData = useSelector(state => state.bannerData);
  const parishData = useSelector(state => state.parishData);
  const activeEvents = useSelector(state => state.activeEvents);
  const activeBooks = useSelector(state => state.activeBooks);
  const rccgData = useSelector(state => state.rccgData);
  const loader = useSelector(state => state.loader);
  const tabPotrait = w >= 768 && h >= 1024;
  const iosTab = w >= 820 && h >= 1180;
  const fourInchPotrait = w <= 380 && h <= 630;
  const [isConnected, setIsConnected] = useState(false);
  const [refreshing, setRefreshing] = useState(false);



  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  
    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(show_all_banner());
  //     dispatch(parish());
  //     dispatch(active_event());
  //     dispatch(getBooks());
  //     dispatch(get_rccgData(language));
  //     dispatch(getSearchData());
  //   }, [isConnected]),
  // );
  const onSubmit = async item => {

    const url = item?.app_page;
    const supported = await Linking.canOpenURL(url);

    // if (supported) {
      navigation.navigate('CusWebView', {
        link: url,
      });
    // } else {
    //   console.log(`Cannot open URL: ${url}`);
    // }
  };
  const handleClick =  item => {
      navigation.navigate('ViewManual', {
        item: item,
      });
  };
  const handleSubmit = type => {
    if (type === 'RCCG') {
      navigation.navigate('Rccg');
    } else if (type === 'RCCG Continent 2') {
      navigation.navigate('RccgContinent');
    } else {
      navigation.navigate('RccgStructure');
    }
  };
  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(show_all_banner());
    dispatch(parish());
    dispatch(active_event());
    dispatch(getBooks());
    dispatch(get_rccgData(language));
    dispatch(getSearchData());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
      }}>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <View
          style={[
            {
              backgroundColor:
                Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
            },
            styles.SwiperViewOne,
          ]}>
          <Swiper
            key={bannerData?.length}
            autoplayTimeout={5}
            autoplay={true}
            showsButtons={false}
            showsPagination={false}>
            {!loader ? (
              bannerData?.map((item, index) => {
                return (
                  <>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => onSubmit(item)}>
                      <SwiperCard
                        key={item.id}
                        source={item.image}
                        // live
                      />
                    </TouchableOpacity>
                  </>
                );
              })
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <BannerLoader />
              </View>
            )}
          </Swiper>
        </View>

        <View style={{}}>
          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              flexDirection: 'row',
              marginVertical: verticalScale(12),
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            }}>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                styles.BooksText,
              ]}>
              {applanguage.PopularBooks}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PopularBooks');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.MoreText}>{applanguage.More}</Text>
              <Entypo
                name="chevron-small-right"
                size={w >= 768 && h >= 1024 ? scale(12) : scale(18)}
                color={Color.Main}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}>
            {activeBooks.length > 0 && !loader ? (
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={activeBooks?.slice(0, 20)}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleClick(item)}
                    >
                      <View
                        style={{
                          height:
                            w >= 768 && h >= 1024
                              ? verticalScale(80)
                              : verticalScale(100),
                          flexDirection: 'row',
                          overflow: 'hidden',
                          width:
                            w >= 768 && h >= 1024 ? scale(200) : scale(250),
                          // marginLeft: index == 0 ? scale(10) : 0,
                          paddingLeft: 10,
                          margin: scale(-1),
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                          }}>
                          <View
                            style={{
                              height:
                                w >= 768 && h >= 1024 ? scale(50) : scale(80),
                              width:
                                w >= 768 && h >= 1024 ? scale(60) : scale(100),
                            }}>
                            <FastImage
                              style={{height: '100%', width: '100%'}}
                              source={{
                                uri: item?.cover_image,
                                priority: FastImage.priority.normal,
                              }}
                              resizeMode={FastImage.resizeMode.contain}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            // marginVertical: verticalScale(20),
                            marginTop: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(13),
                            marginLeft: scale(10),
                          }}>
                          <View
                            style={{
                              // justifyContent: 'center',
                              flex:1
                            }}>
                            <Text
                              numberOfLines={2}
                              style={[
                                {
                                  color:
                                    Theme === 'dark'
                                      ? Color.White
                                      : Color.DarkTextColor,
                                      paddingTop: fourInchPotrait ? 0 : scale(5)
                                },
                                styles.BooksTitleStyle,
                              ]}>
                              {item?.title}
                              {/* Sunday School Teachers Manual */}
                            </Text>
                            {/* <Text
                              style={[
                                styles.BooksTitleStyle,
                                {
                                  color:
                                    Theme === 'dark'
                                      ? Color.White
                                      : Color.DarkTextColor,
                                  marginTop:
                                    Platform.OS == 'ios'
                                      ? 0
                                      : verticalScale(-5),
                                },
                              ]}>
                              {item?.category}
                            </Text> */}
                          </View>
                          <View
                            style={{
                              flex:0.5,
                              // marginTop: tabPotrait
                              //   ? verticalScale(1)
                              //   : fourInchPotrait
                              //   ? verticalScale(0.5)
                              //   : verticalScale(2),
                            }}>
                            <Text style={styles.YearStyle}>
                              {item?.release_year}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
                key={Math.ceil(activeBooks?.length / 2).toString()}
                numColumns={Math.ceil(activeBooks?.length / 2)}
              />
            ) : (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            )}
          </ScrollView>
        </View>
        <View
          style={[
            {
              backgroundColor:
                Theme === 'dark' ? Color.ExtraViewDark : Color.White,
            },
            styles.SwiperViewTwo,
          ]}>
          {rccgData.length > 0  && !loader ? (
            <FlatList
              data={rccgData}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => handleSubmit(item.type)}>
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
                      {/* <Image
                        resizeMode="cover"
                        style={{
                          height: '100%',
                          width: '100%',
                          position: 'absolute',
                          zIndex:99
                        }}
                        source={{uri: item.image}}
                      /> */}
                      <FastImage
                        style={{
                          height: '100%',
                          width: '100%',
                          position: 'absolute',
                          zIndex: 99,
                        }}
                        source={{
                          uri: item.image,
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                      {/* <Image
                        resizeMode="cover"
                        style={{
                          height: '100%',
                          width: '100%',
                          position: 'absolute',
                        }}
                        source={item.image2}
                      /> */}
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
                              {/* <Image
                                resizeMode="contain"
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                                source={item.image3}
                              /> */}
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
                                  fontFamily: Font.Poppins600,
                                  color: Color.White,
                                  textTransform: 'uppercase',
                                  maxWidth: '90%',
                                  top: item.type == 'ye' ? scale(15) : scale(8),
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
                                  // fontWeight: '800',
                                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                  textShadowOffset: {width: -1, height: 1},
                                  textShadowRadius: 10,
                                }}>
                                {item.text}
                              </Text>
                              <Text
                                style={{
                                  fontFamily: Font.Poppins600,
                                  color: Color.White,
                                  textTransform: 'uppercase',
                                  top:
                                    item.type == 'ye' ? scale(15) : scale(10),
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
                                  // fontWeight: '800',
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
                              <View
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
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <View
              style={{
                width: '90%',
                paddingVertical: verticalScale(10),
                // paddingLeft: scale(15),
                flexDirection: 'row',
                // justifyContent: 'space-between',
                overflow: 'hidden',
                // backgroundColor:'red',
                // marginVertical: w >= 768 && h >= 1024 ? verticalScale(30) : 0
              }}>
              <DoubleText
                height={
                  w >= 768 && h >= 1024 ? verticalScale(110) : verticalScale(90)
                }
                nwidth={w >= 768 && h >= 1024 ? scale(115) : scale(190)}
              />
              <View style={{height: '100%', width: '3%'}} />
              <DoubleText
                height={
                  w >= 768 && h >= 1024 ? verticalScale(110) : verticalScale(90)
                }
                nwidth={w >= 768 && h >= 1024 ? scale(115) : scale(190)}
              />
              {/* <DoubleText height={w >= 768 && h >= 1024
                            ? verticalScale(110)
                            : verticalScale(90)}
                            nwidth={ w >= 768 && h >= 1024 ? scale(115) : scale(190)}
                            /> */}
            </View>
          )}
        </View>

        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              marginBottom: scale(4)
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
                  styles.BooksText,
                ]}>
                {applanguage.FeaturedParishes}
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
              <Text style={styles.MoreText}>{applanguage.More}</Text>
              <Entypo
                name="chevron-small-right"
                size={w >= 768 && h >= 1024 ? scale(12) : scale(18)}
                color={Color.Main}
                // style={{top:verticalScale(1)}}
              />
            </TouchableOpacity>
          </View>
          {parishData?.length > 0 && !loader  ? (
            <>
              {parishData?.map((item, index) => {
                return (
                  index < 3 && (
                    <DetailsCard
                      key={item.id}
                      data={item}
                      onPress={() => {
                        navigation.navigate('ViewParish', {
                          id: item.id,
                          item: item
                        });
                      }}
                      source={item?.image}
                      title={item.title}
                      manual={item.country}
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
            <View style={{marginBottom: 5}}>
              <SkeletonLoader />
              <View style={{height: 0, marginVertical: 5}} />
              <SkeletonLoader />
            </View>
          )}
        </View>

        <View
          style={{
            height: verticalScale(20),
            backgroundColor:
              Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
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
                {applanguage.UpcomingEvents}
              </Text>
            </View>
          </View>
          <View>
            {activeEvents.length > 0 && !loader ? (
              <>
                {activeEvents?.map((item, index) => {
                  return (
                    index < 4 && (
                      <DetailsCard
                        key={item.id}
                        data={item}
                        onPress={() => {
                          navigation.navigate('EventScreen', {id: item.id,item:item});
                        }}
                        source={item?.image}
                        title={item.title}
                        // title="West Coast 2 Regional"
                        // manual={item?.address}
                        // resize={'contain'}
                        TimeTrue={true}
                        time={item.start_time}
                        date={moment(item.start_date).format('MMM Do YY')}
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
                style={
                  {
                    // flexDirection: ''
                  }
                }>
                <SkeletonLoader />
                <View style={{height: 0, marginVertical: 5}} />
                <SkeletonLoader />
              </View>
            )}
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
    height:
      w >= 768 && h >= 1024
        ? verticalScale(200)
        : w <= 450 && h <= 750
        ? verticalScale(190)
        : verticalScale(150),
  },
  SwiperViewTwo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(160),
  },

  YearStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(11),
    right: w >= 768 && h >= 1024 ? scale(1) : 0,
  },

  BooksTitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(7) : w <= 380 && h <= 630 ? scale(13) : scale(15),
    fontFamily: Font.Poppins600,
    maxWidth: '90%',
  },
  BigTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(13),
  },
});
export default HomeScreen;
