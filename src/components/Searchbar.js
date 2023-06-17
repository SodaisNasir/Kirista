import React, {useState, useCallback} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
  useColorScheme,
  Dimensions,
  SafeAreaView,
  FlatList,
  Keyboard,
  useWindowDimensions,
  Platform,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import Search from '../assets/icons/search.svg';
import DetailsCard from './Card/DetailsCard';
import BookSvg from '../assets/icons/book-1.svg';
import BookDark from '../assets/icons/book_dark.svg';
import HouseSvg from '../assets/icons/house-2.svg';
import CalendarSvg from '../assets/icons/calendar-2.svg';
import PersonSvg from '../assets/icons/person_outline.svg';
import NoResult from './NoResult';
import ParishFinderSearch from './ParishFinderSearch';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import EventsResult from './EventsResult';
import BookResult from './BookResult';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const tabPotrait = w >= 768 && h >= 1024;
const fourInchPotrait = w <= 370 && h <= 650;


const Searchbar = () => {
  const searchData = useSelector(state => state.search_data)
  const layout = useWindowDimensions();
  const iosTab = w >= 820 && h >= 1180;
  const navigation = useNavigation();
  const Theme = useSelector(state => state.mode)
  const [index, setIndex] = useState(0);



  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [searchQuery2, setSearchQuery2] = useState('');
  const [filteredData2, setFilteredData2] = useState(searchData);
  const [Book, setBook] = useState(null);
  const [Parishes, setParishes] = useState(null);
  const [Event, setEvent] = useState(null);


  const handleSearch2 = text2 => {
      const formattedQuery = text2.toLowerCase();
      const filteredData = searchData.filter(item => {
        return item.title.toLowerCase().includes(formattedQuery);
      });
      setFilteredData2(filteredData);
      setSearchQuery2(text2);
  };
  const showData = (item) => {
   
    if(item.type == 'parish'){
      setParishes(item)
      setShow(true);
      setIsSearchBarVisible(true);
      setBook(null)
      setEvent(null)
    }else if(item.type == 'event'){
      setEvent(item)
      setShow(true);
      setIsSearchBarVisible(true);
      setBook(null)
      setParishes(null)
    }else{
      setBook(item)
      setShow(true);
      setIsSearchBarVisible(true);
      setEvent(null)
      setParishes(null)
    }
  };

  const resetStatus = () => {
    setShow(false);
    setIsSearchBarVisible(false);
    Keyboard.dismiss();
    setSearchQuery2('')
  };
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  const ThirdRoute = () => <BookResult data={Book} />;
const FourthRoute = () => <ParishFinderSearch data={Parishes} />;
const FifthRoute = () => <EventsResult data={Event} />;

const renderScene = SceneMap({
  Bedrooms: ThirdRoute,
  DiningRoom: FourthRoute,
  LivingRoom: FifthRoute,
});

  const [routes] = useState([
    {key: 'Bedrooms', title: 'Books ', type: 'home'},
    {key: 'DiningRoom', title: 'Parishes ', type: 'finder'},
    {key: 'LivingRoom', title: 'Events '},
  ]);

  const renderTabBar = props => (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: Color.Main}}
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
          elevation: 0,
          width: '100%',
          // paddingTop: verticalScale(10),
        }}
        renderLabel={({route, focused, color}) => (
          <>
            <Text
              style={{
                fontFamily: focused ? Font.Poppins600 : Font.Poppins500,
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                color: focused ? Color.Main : Color.HomeHeaderText,
              }}>
              {route.title}
            </Text>
          </>
        )}
        activeColor={{color: Color.Main}}
        inactiveColor={{color: Color.HomeHeaderText}}
        tabStyle={{width: scale(117)}}
        bounces={true}
        scrollEnabled={true}
      />
    </View>
  );
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? '#0A2142' : Color.HeaderColor,
        }}>
        <View
          style={{
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(100)
                  : verticalScale(100)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(60)
                : verticalScale(60),
            paddingTop:
              Platform.OS == 'ios'
                ? 0
                : w >= 768 && h >= 1024
                ? moderateVerticalScale(25)
                : moderateVerticalScale(35),
            flexDirection: 'row',
            paddingHorizontal: moderateScale(10),
          }}>
          {!isSearchBarVisible && searchQuery2 == '' ? (
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
                marginRight: scale(5),
              }}>
              <AntDesign
                name="arrowleft"
                size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
                color={Theme === 'dark' ? Color.White : Color.Black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ) : null}
          <View
            style={{
              width: isSearchBarVisible ? '83%' : '90%',
              height:
                w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(37),
              backgroundColor: Theme === 'dark' ? '#2B3642' : Color.White,
              borderRadius: scale(25),
              flexDirection: 'row',
              paddingHorizontal: moderateScale(20),
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Search
              height={
                w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(20)
              }
              width={
                w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(26)
              }
            />
            <TextInput
              onFocus={() => setIsSearchBarVisible(true)}
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(37)
                    : fourInchPotrait
                    ? verticalScale(45)
                    : w <= 450 && h <= 700
                    ? '100%'
                    : verticalScale(37),
                width: '100%',
                color: Theme === 'dark' ? '#fff' : '#000',
                fontSize:
                  w >= 768 && h >= 1024
                    ? scale(8)
                    : w >= 450 && h >= 700
                    ? scale(10)
                    : w <= 400 && h <= 650
                    ? scale(10)
                    : scale(14),
                // fontFamily: Font.Inter500,
                // top: fourInchPotrait ?  verticalScale(1.3) : 0, //fourInchPotrait ? verticalScale(20) :0,
                left: iosTab ? scale(2) : 0,
              }}
              placeholder="Search"
              placeholderTextColor={Theme === 'dark' ? '#555E68' : '#CDD1D7'}
              onChangeText={text => handleSearch2(text)}
              value={searchQuery2}
            />
            {searchQuery2.length >= 1 && isSearchBarVisible ? (
              <View
                style={{
                  alignSelf: 'center',
                  position: 'absolute',
                  right: scale(10),
                }}>
                <TouchableOpacity onPress={() => setSearchQuery2('')}>
                  <Ionicons
                    name="close-circle"
                    size={tabPotrait ? scale(15) : 22}
                    color={Theme === 'dark' ? '#B4B5B7' : '#B4B5B7'}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
    
          {isSearchBarVisible ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // alignItems: 'center',
                // alignItems:'flex-end'
                // flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => resetStatus()}>
                <Text
                  style={{
                    color: Theme === 'dark' ? '#B5BCC6' : '#4D5C72',
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                    fontFamily: Font.Poppins600,
                    letterSpacing: 0.3,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        {isSearchBarVisible != true && searchQuery2 == '' ? (
          <View
            style={[
              styles.SecondView,
              {
                backgroundColor: Theme === 'dark' ? '#071A36' : 'white',
              },
            ]}>
            <Text
              style={{
                color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                fontFamily: Font.Poppins500,
              }}>
              Popular Searches
            </Text>
            <View style={{flex: 1}}>
              <FlatList
              showsVerticalScrollIndicator={false}
              data={searchData}
              renderItem={({item}) => {
                return(
                    item?.type === 'parish' ? 
                    <DetailsCard
                    onPress={() => {
                      navigation.navigate('ViewParish', {
                        id: item.id,
                      });
                    }}
                    source={{uri: item?.image}}
                    title={item?.title}
                    resize={'contain'}
                    // manual="Central Parish"
                    PlaceTrue={true}
                    Place={item?.country}
                    MainBoxRestyle={{
                      paddingBottom:
                        w >= 768 && h >= 1024
                          ? verticalScale(10)
                          : verticalScale(15),
                      marginTop:
                        w >= 768 && h >= 1024
                          ? verticalScale(10)
                          : verticalScale(15),
                      // backgroundColor:'red'
                      borderBottomColor: Theme === 'dark'
                      ? Color.DarkBorder
                      : Color.BorderColor,
                    borderBottomWidth: 1,
                    }}
                  /> :  item.type === 'event' ? 
                  <DetailsCard
                  onPress={() => {
                    navigation.navigate('EventScreen', {id: item.id});
                  }}
                  source={{uri: item?.image}}
                  title={item?.title}
                  resize={'cover'}
                  // manual="Convention"
                  TimeTrue={true}
                  date={format(new Date(item?.start_date), 'MMMM d, yyyy')}
                  time={item?.start_time}
                  MainBoxRestyle={{
                    paddingBottom:
                      w >= 768 && h >= 1024
                        ? verticalScale(10)
                        : verticalScale(15),
                    marginTop:
                      w >= 768 && h >= 1024
                        ? verticalScale(10)
                        : verticalScale(15),
                    // backgroundColor:'red'
                    borderBottomColor: Theme === 'dark'
                      ? Color.DarkBorder
                      : Color.BorderColor,
                    borderBottomWidth: 1,
                  }}
                /> :    <DetailsCard
                onPress={() => navigation.navigate('ViewManual',{
                  item:item
                })}
                source={{uri: item?.cover_image}}
                title={item?.title}
                resize={'contain'}
                // manual="Teachers Man.."
                PlaceTrue={true}
                Place={item?.release_year}
                MainBoxRestyle={{
                  paddingBottom:
                    w >= 768 && h >= 1024
                      ? verticalScale(10)
                      : verticalScale(15),
                  marginTop:
                    w >= 768 && h >= 1024
                      ? verticalScale(10)
                      : verticalScale(15),
                  // backgroundColor:'red'
                  borderBottomColor: Theme === 'dark'
                    ? Color.DarkBorder
                    : Color.BorderColor,
                  borderBottomWidth: 1,
                }}
              />
                )
              }}
              />
              <View style={{height: verticalScale(10)}} />
            </View>
          </View>
        ) :  !show ? (
          <View
            style={{
              flex: 1,
              backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            }}>
            <FlatList
              data={filteredData2}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => showData(item)}
                  style={{
                    paddingHorizontal:
                      w >= 768 && h >= 1024
                        ? moderateScale(25)
                        : moderateScale(20),

                    flex: 1,
                  }}>
                  <View
                    style={[
                      {
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop:
                          item.id == 1
                            ? verticalScale(15)
                            : w >= 768 && h >= 1024
                            ? verticalScale(10)
                            : verticalScale(10),
                      },
                      // {item.id == 1 ? {marginTop:verticalScale(10)} : {  marginVertical:

                      //,}}
                    ]}>
                    {/* {Theme === 'dark' ? (
                      <BookDark
                        height={
                          w >= 768 && h >= 1024
                            ? verticalScale(18)
                            : verticalScale(20)
                        }
                        width={25}
                      />
                    ) : item.type === 'light' ? (
                      <BookSvg
                        height={
                          w >= 768 && h >= 1024
                            ? verticalScale(18)
                            : verticalScale(20)
                        }
                        width={25}
                      />
                    ) : item.type === 'light3' ? (
                      <HouseSvg
                        height={
                          w >= 768 && h >= 1024
                            ? verticalScale(18)
                            : verticalScale(20)
                        }
                        width={25}
                      />
                    ) : item.type == 'light4' ? (
                      <PersonSvg
                        height={
                          w >= 768 && h >= 1024
                            ? verticalScale(18)
                            : verticalScale(20)
                        }
                        width={25}
                      />
                    ) : item.type == 'light6' ? (
                      <CalendarSvg
                        height={
                          w >= 768 && h >= 1024
                            ? verticalScale(18)
                            : verticalScale(18)
                        }
                        width={25}
                      />
                    ) : null} */}

                    <View style={{paddingHorizontal: moderateScale(10)}}>
                      <Text
                        style={[
                          {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                          styles.TextStyle,
                        ]}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            }}>
            <View style={{flex: 1}}>
              <TabView
                renderTabBar={renderTabBar}
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  SecondView: {
    flex: 1,

    paddingHorizontal: scale(20),
    paddingTop: scale(10),
  },
  searchContainerAfter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // paddingRight: 10,
    marginHorizontal: verticalScale(10),
    // paddingHorizontal: moderateScale(10),
    width: '80%',
  },
  searchInput: {
    height: '100%',
    fontSize: 16,
    width: '85%',
    paddingHorizontal: moderateScale(10),
  },

  TextStyle: {
    fontFamily: Font.Poppins500,
    fontSize: tabPotrait ? scale(8) : scale(12),
  },
  Text2Style: {
    fontFamily: Font.Poppins600,
    fontSize: tabPotrait ? scale(8) : scale(12),
  },
  closeButtonText: {
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    fontFamily: Font.Poppins500,
    color: '#4D5C72',
  },
});
export default Searchbar;
