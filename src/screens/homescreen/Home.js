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
  useWindowDimensions
} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {Color} from '../../utils/Colors'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import HomeHeader from '../../components/HomeHeader'
import {Font} from '../../utils/font'
import Swiper from 'react-native-swiper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {HorizontalFlatList} from '@idiosync/horizontal-flatlist'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const Home = ({navigation}) => {

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const fourInchPotrait = w <= 350 && h <= 600;
  const Theme = useColorScheme() === 'dark'

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
      text: 'rccg        structure.',
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
      text: 'rccg        continent 2',
      text2: 'Read More  ',
      color: '#e43f40',
      type: 'ye',
      screen_name: 'RccgContinent',
    },
  ]
  const swiper_data = [
    {id: 1, image: require('../../../src/assets/images/swipertwo.png')},
    {id: 2, image: require('../../../src/assets/images/swiperone.png')},
  ]
  const parish_data = [
    {
      id: 1,
      title: 'RCCG',
      manual: 'Central Parish',
      image: require('../../../src/assets/images/parishsmall_1.png'),
      country: 'Abuja',
    },

    {
      id: 2,
      title: 'RCCG',
      manual: 'Precious Ambassadors',
      image: require('../../../src/assets/images/parishsmall_2.png'),
      country: 'Ghana',
    },

    {
      id: 3,
      title: 'RCCG',
      manual: 'Salvation Centre',
      image: require('../../../src/assets/images/parishsmall_3.png'),
      country: 'Togo',
    },
  ]
  const books_data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      year: '2023',
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
  ]
  const event_data = [
    {
      id: 1,
      title: 'West Coast 2 Regional ',
      manual: 'Convention',
      image: require('../../../src/assets/images/event_1.png'),
      date: 'June 22, 2023.',
      time: '4PM',
    },

    {
      id: 2,
      title: 'West Coast 3 Regional ',
      manual: 'Convention',
      image: require('../../../src/assets/images/event_2.png'),
      date: 'July 7, 2023.',
      time: '4PM',
    },

    {
      id: 3,
      title: 'West Coast 1 Regional ',
      manual: 'Convention',
      image: require('../../../src/assets/images/event_3.png'),
      date: 'July 21, 2023.',
      time: '4PM',
    },

    {
      id: 4,
      title: 'Abuja Special Holy Ghost',
      manual: 'Congress',
      image: require('../../../src/assets/images/event_4.png'),
      date: 'November 09, 2023',
      time: '4PM',
    },
  ]

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader
          HomeRestyle={{color: Color.Main, fontFamily: Font.Poppins700}}
          HomeUnderLineStyle={{
            width: '55%',
            backgroundColor: Color.Main,
            height: verticalScale(2),
            bottom: scale(4),
          }}
        />
        <View
          style={[
            {backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor},
            styles.SwiperViewOne,
          ]}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={swiper_data}
            horizontal
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                onPress={()=>navigation.navigate('ViewBanner')}
                  style={{
                    height:
                      w >= 768 && h >= 1024
                        ? verticalScale(95)
                        : verticalScale(135),
                    width: w >= 768 && h >= 1024 ? scale(160) : scale(270),
                    // marginVertical: verticalScale(10),
                    marginRight: verticalScale(12),
                  }}>
                  <Image
                    resizeMode="stretch"
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={item.image}
                  />
                </TouchableOpacity>
              )
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
              <View style={{}}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(12) : scale(16)}
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
              numColumns={Math.ceil(books_data.length / 2)}
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
                            source={item.image}
                          />
                        </View>
                      </View>
                      <View style={{marginVertical: verticalScale(20)}}>
                        <View
                          style={{
                            // height: verticalScale(30),

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
                            {item.title}
                          </Text>
                          <Text
                            style={[
                              {lineHeight: fourInchPotrait ? verticalScale(18) : verticalScale(15)},
                              styles.BooksTitleStyle,
                              {
                                color: Theme
                                  ? Color.White
                                  : Color.DarkTextColor,
                              },
                            ]}>
                            {item.manual}
                          </Text>
                        </View>
                        <View
                          style={{
                            height:
                              w >= 768 && h >= 1024
                                ? verticalScale(20)
                                : verticalScale(40),
                            justifyContent: 'center',
                          }}>
                          <Text style={styles.YearStyle}> {item.year}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
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
                    // height: verticalScale(120),
                    // width: scale(190),
                    justifyContent: 'center',
                    paddingVertical: verticalScale(10),
                    height:
                      w >= 768 && h >= 1024
                        ? verticalScale(100)
                        : verticalScale(140),
                    width: w >= 768 && h >= 1024 ? scale(100) : scale(195),
                    // marginVertical: verticalScale(18),
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
                      }}></View>
                    <View
                      style={{
                        // height: '90%',
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          height: '100%',
                          width: '40%',
                          // justifyContent: 'center',
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
                              maxWidth: '90%',
                              top: item.type == 'ye' ? scale(15) : scale(10),
                              textAlignVertical: 'center',
                              fontSize:
                                w >= 768 && h >= 1024 ? scale(9) : scale(16),
                              elevation: 5,
                            }}>
                            {item.text}
                          </Text>
                        </View>
                        <View
                          style={{
                            height: '25%',
                            width: '100%',
                            // backgroundColor:'red',
                            marginVertical: verticalScale(2),
                          }}>
                          <TouchableOpacity
                            onPress={() => navigation.navigate('Rccg')}
                            style={{
                              flexDirection: 'row',
                              // backgroundColor:'yellow'
                            }}>
                            <Text
                              style={{
                                fontFamily: Font.Poppins400,
                                color: Color.White,
                                // textTransform: 'uppercase',
                                fontSize:
                                  w >= 768 && h >= 1024 ? scale(9) : scale(10),
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
              )
            }}
          />
        </View>

        {/* <View
          style={{
            height: verticalScale(20),
            backgroundColor: Color.HeaderColor,
          }}
        /> */}

        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            // backgroundColor: Theme ? Color.DarkTheme : Color.White,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              flexDirection: 'row',
              marginTop: verticalScale(15),
            }}>
            <View style={{}}>
              <Text style={styles.BooksText}>Featured Parishes</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FeaturedParishes')
              }}
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.MoreText}>More</Text>
              <View style={{}}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(12) : scale(16)}
                  color={Color.Main}
                />
              </View>
            </TouchableOpacity>
          </View>

          <FlatList
            data={parish_data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ViewParish')}>
                  <View
                    style={{
                      height:
                        w >= 768 && h >= 1024
                          ? verticalScale(95)
                          : verticalScale(120),

                      flexDirection: 'row',

                      overflow: 'hidden',
                    }}>
                    <View
                      style={{
                        flex: w >= 768 && h >= 1024 ? 0.9 : 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          height: w >= 768 && h >= 1024 ? '60%' : '100%',
                          width: scale(90),
                        }}>
                        <Image
                          resizeMode="contain"
                          style={{
                            height: '100%',
                            width: '100%',
                          }}
                          source={item.image}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: w >= 768 && h >= 1024 ? 3 : 2.1,
                        paddingHorizontal:
                          w >= 768 && h >= 1024
                            ? verticalScale(15)
                            : verticalScale(15),
                        marginVertical: verticalScale(25),
                      }}>
                      <View
                        style={{
                          // height: verticalScale(30),

                          justifyContent: 'center',
                        }}>
                        <Text
                          style={[
                            {color: Theme ? Color.White : Color.DarkTextColor},
                            styles.ParishTitleStyle,
                          ]}>
                          {item.title}
                        </Text>
                        <Text
                          style={[
                            {bottom: scale(3)},
                            {color: Theme ? Color.White : Color.DarkTextColor},
                            styles.ParishTitleStyle,
                          ]}>
                          {item.manual}
                        </Text>
                      </View>
                      <View
                        style={{
                          height:
                            w >= 768 && h >= 1024
                              ? verticalScale(20)
                              : scale(40),
                          justifyContent: 'center',
                          right: scale(2),
                        }}>
                        <Text style={styles.CountryStyle}> {item.country}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
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
                navigation.navigate('Events')
              }}
              style={{flexDirection: 'row'}}>
              <Text style={styles.MoreText}>See All</Text>
              <View style={{}}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(12) : scale(16)}
                  color={Color.Main}
                />
              </View>
            </TouchableOpacity>
          </View>
          <FlatList
            data={event_data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Events')}
                  style={{
                    height:
                      w >= 768 && h >= 1024
                        ? verticalScale(95)
                        : verticalScale(120),

                    // paddingRight:moderateScale(40),
                    flexDirection: 'row',

                    overflow: 'hidden',
                  }}>
                  <View
                    style={{
                      flex: w >= 768 && h >= 1024 ? 0.9 : 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // backgroundColor:'yellow',
                      // height:150
                    }}>
                    <View
                      style={{
                        height: w >= 768 && h >= 1024 ? '55%' : '100%',
                        width: scale(90),
                      }}>
                      <Image
                        resizeMode="contain"
                        style={{
                          height: '100%',
                          width: '100%',
                        }}
                        source={item.image}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: w >= 768 && h >= 1024 ? 3 : 2.1,
                      paddingHorizontal:
                        w >= 768 && h >= 1024
                          ? verticalScale(0)
                          : verticalScale(15),
                      marginVertical: verticalScale(25),
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={[
                          {color: Theme ? Color.White : Color.DarkTextColor},
                          styles.EventTtitleStyle,
                        ]}>
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          {bottom: scale(3)},
                          {color: Theme ? Color.White : Color.DarkTextColor},
                          styles.EventTtitleStyle,
                        ]}>
                        {item.manual}
                      </Text>
                    </View>
                    <View
                      style={{
                        // height:
                        //   w >= 768 && h >= 1024 ? verticalScale(20) : scale(40),
                        justifyContent: 'space-around',
                        right: scale(2),
                        //   flexDirection:'row',
                      }}>
                      <Text style={[styles.DateStyle]}>
                        {' '}
                        {item.date}
                        {'   '}
                        <Text
                          style={{
                            color: Color.BoldTextColor,
                            fontFamily: Font.Poppins700,

                            fontSize:
                              w >= 768 && h >= 1024 ? scale(10) : scale(14),
                          }}>
                          .
                        </Text>
                        {'   '}
                        {item.time}{' '}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View
          style={{
            height: verticalScale(85),
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  MainView: {
    paddingHorizontal: moderateScale(20),
  },
  BooksText: {
    // color: Color.DarkTextColor,
    fontFamily: Font.Poppins700,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  UpcomingText: {
    // color: Color.DarkTextColor,
    fontFamily: Font.Poppins600,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
  },
  MoreText: {
    color: Color.Main,
    fontFamily: Font.Poppins600,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
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
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins600,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
  slide: {
    flex: 1,
  },
  SwiperImage: {
    width: '100%',
    height: '80%',
    // marginTop: verticalScale(10),
    alignSelf: 'center',
  },
  SwiperImage2: {
    width: '75%',
    height: '75%',
    marginTop: verticalScale(10),
    alignSelf: 'center',
  },
  SwiperView: {
    // backgroundColor: Color.HeaderColor,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: moderateScale(20),
    // height:w >= 768 && h >= 1024 ? verticalScale(120) : verticalScale(120),
  },
  SwiperViewOne: {
    // backgroundColor: Color.HeaderColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    height: w >= 768 && h >= 1024 ? verticalScale(110) : verticalScale(150),
    // width:'100%'
  },
  SwiperViewTwo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    height: w >= 768 && h >= 1024 ? verticalScale(105) : verticalScale(140),
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
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
    fontFamily: Font.Poppins600,
  },
  EventTtitleStyle: {
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
    fontFamily: Font.Poppins700,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
  ParishTitleStyle: {
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
  },
})
