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
  Platform,
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

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const HomeScreen = () => {
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
  const image_data = [
    {
      id: 1,
      image: require('../assets/images/list.jpg'),
      image2: require('../assets/images/redeemImgradiant.png'),
      image3: require('../assets/images/rccg_logo.png'),
      text: 'the redeemed christian church of god.',
      text2: applanguage.ReadMore + '  ',
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
      text2: applanguage.ReadMore + '  ',
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
      text2: applanguage.ReadMore + '  ',
      color: '#e43f40',
      type: 'ye',
      screen_name: 'RccgContinent',
    },
  ];


  useFocusEffect(
    useCallback(() => {
      show_all_banner(setForImage);
      parish(setData);
      active_event(setEvent);
      getBooks(setMyData);
      dispatch(getSearchData());
    }, []),
  );
  const imageUrl =
    'https://images.unsplash.com/photo-1526045612212-70caf35c14df';

    const onSubmit = (item) => {
      navigation.navigate('AdvWebView', {
        link: item?.app_page,
      })
    }


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
              backgroundColor:
                Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
            },
            styles.SwiperViewOne,
          ]}>
          <Swiper
          key={forImage?.length}
            autoplayTimeout={5}
            autoplay={true}
            showsButtons={false}
            showsPagination={false}>
              {forImage?.length > 0 ? (
              forImage?.map((item, index) => {
                return (
                  <>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => onSubmit(item)}>
                    <SwiperCard
                      key={item.id}
                      source={{uri: item.image}}
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
              marginTop: verticalScale(15),
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
                // style={{top:verticalScale(1)}}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}>
              {myData.length > 0
              ?
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={myData?.slice(0, 5)}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ViewManual', {
                          item: item,
                        })
                      }>
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
                          // marginLeft: index == 0 ? scale(10) : 0,
                          paddingLeft: 10,
                          margin:scale(-1)
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                          }}>
                          <View
                            style={{
                              height:
                                w >= 768 && h >= 1024 ? scale(60) : scale(80),
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
                        <View
                          style={{
                            marginVertical: verticalScale(20),
                            marginLeft: scale(10),
                          }}>
                          <View
                            style={{
                              justifyContent: 'center',
                            }}>
                            <Text
                            numberOfLines={2}
                              style={[
                                {
                                  color:
                                    Theme === 'dark'
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
                                  color:
                                    Theme === 'dark'
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
                            <Text style={styles.YearStyle}>
                              {item?.release_year}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
                // ListEmptyComponent={() => {
                //   return (
                //     <View
                //       style={{
                //         height: verticalScale(60),
                //         width: scale(350),
                //         justifyContent: 'center',
                //         alignItems: 'center',
                //       }}>
                //     <ActivityIndicator
                //     color={Color.Main}
                //     size="large"
                //   />
                //     </View>
                //   );
                // }}
                key={Math.ceil(myData?.length / 2).toString()}
                numColumns={Math.ceil(myData?.length / 2)}
              />
              : 
                <>
              <SkeletonLoader />
              <SkeletonLoader />
                </>
            }
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
                              fontFamily: Font.Poppins600,
                              color: Color.White,
                              textTransform: 'uppercase',
                              // maxWidth: '90%',
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
          {data?.length > 0 ? (
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
            <View style={{marginBottom:5}}>
            <SkeletonLoader />
            <View style={{height: 0,marginVertical:5}} />
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
                        // manual={item?.address}
                        resize={'contain'}
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
              <View style={{
                // flexDirection: ''
              }}>
              <SkeletonLoader />
              <View style={{height: 0,marginVertical:5}} />
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
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
    fontFamily: Font.Poppins600,
    maxWidth: '80%',
  },
  BigTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(13),
  },
});
export default HomeScreen;
