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
} from 'react-native';
import React from 'react';
import {Color} from '../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import HomeHeader from '../../components/HomeHeader';
import {Font} from '../../utils/font';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HorizontalFlatList} from '@idiosync/horizontal-flatlist';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const Home = ({navigation}) => {
  const image_data = [
    {id: 1, image: require('../../../src/assets/images/rcg_1.png')},
    {id: 2, image: require('../../../src/assets/images/rcg_2.png')},
    {id: 3, image: require('../../../src/assets/images/rcg_3.png')},
  ];

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
  ];
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
  ];
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
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.HeaderColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <View style={styles.SwiperView}>
          <Swiper
            style={{
              marginTop: verticalScale(12),
              // marginBottom: verticalScale(45),
              height: verticalScale(150),
            }}
            showsPagination={false}
            showsButtons={false}>
            <View style={styles.slide}>
              <Image
                style={styles.SwiperImage}
                resizeMode={`stretch`}
                source={require('../../assets/images/swiperone.png')}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.SwiperImage}
                resizeMode={`stretch`}
                source={require('../../assets/images/swipertwo.png')}
              />
            </View>
          </Swiper>
        </View>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            backgroundColor: Color.White,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              flexDirection: 'row',
              marginTop: verticalScale(15),
            }}>
            <View>
              <Text style={styles.BooksText}>Popular Books</Text>
            </View>

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
                    <TouchableOpacity onPress={() => navigation.navigate('ViewManual')}>
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
                          flex: 1,
                          // backgroundColor: 'blue',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: w >= 768 && h >= 1024 ? '65%' : '100%',
                            width: scale(100),
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
                        style={{flex: 2.3, marginVertical: verticalScale(25)}}>
                        <View
                          style={{
                            // height: verticalScale(30),

                            // backgroundColor: 'yellow',
                            justifyContent: 'center',
                          }}>
                          <Text style={styles.TitleStyle}>{item.title}</Text>
                          <Text
                            style={[
                              {lineHeight: verticalScale(15)},
                              styles.TitleStyle,
                            ]}>
                            {item.manual}
                          </Text>
                        </View>
                        <View
                          style={{
                            // backgroundColor: 'red',
                            height:
                              w >= 768 && h >= 1024
                                ? verticalScale(20)
                                : scale(40),
                            justifyContent: 'center',
                          }}>
                          <Text style={styles.YearStyle}> {item.year}</Text>
                        </View>
                      </View>
                    </View>
                    </TouchableOpacity>
                  );
                }}
              />
           
          </ScrollView>
        </View>
        <View style={styles.SwiperViewTwo}>
          <FlatList
            data={image_data}
            horizontal
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    height: verticalScale(120),
                    width: scale(190),
                    marginTop: verticalScale(5),
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
              );
            }}
          />
        </View>

        <View
          style={{
            height: verticalScale(20),
            backgroundColor: Color.HeaderColor,
          }}
        />

        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            backgroundColor: Color.White,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              flexDirection: 'row',
              marginTop: verticalScale(15),
              // backgroundColor:'red'
            }}>
            <View style={{}}>
              <Text style={styles.BooksText}>Featured Parishes</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FeaturedParishes');
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
                  <TouchableOpacity onPress={() => navigation.navigate('ViewParish')}>
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

                          // backgroundColor: 'yellow',
                          justifyContent: 'center',
                        }}>
                        <Text style={styles.TitleStyle}>{item.title}</Text>
                        <Text style={[{bottom: scale(3)}, styles.TitleStyle]}>
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
                );
              }}
            />
         
        </View>

        <View
          style={{
            height: verticalScale(20),
            backgroundColor: Color.HeaderColor,
          }}
        />
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            backgroundColor: Color.White,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              width: '100%',
              flexDirection: 'row',
              marginTop: verticalScale(15),
            }}>
            <View>
              <Text style={styles.BooksText}>Upcoming Events</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Events');
              }}
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
          <FlatList
            data={event_data}
            renderItem={({item}) => {
              return (
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
                          ? verticalScale(0)
                          : verticalScale(15),
                      marginVertical: verticalScale(25),
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                      }}>
                      <Text style={styles.TitleStyle}>{item.title}</Text>
                      <Text style={[{bottom: scale(3)}, styles.TitleStyle]}>
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
                </View>
              );
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
  );
};

export default Home;

const styles = StyleSheet.create({
  MainView: {
    paddingHorizontal: moderateScale(20),
  },
  BooksText: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins600,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
  },
  MoreText: {
    color: Color.Main,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(12),
  },
  ImageView: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  YearStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(10),
  },
  TitleStyle: {
    color: Color.DarkTextColor,
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
    backgroundColor: Color.HeaderColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    // height:w >= 768 && h >= 1024 ? verticalScale(120) : verticalScale(120),
  },
  SwiperViewTwo: {
    backgroundColor: Color.HeaderColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    height: w >= 768 && h >= 1024 ? verticalScale(120) : verticalScale(140),
  },
  DateStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins600,

    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
  CountryStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
});
