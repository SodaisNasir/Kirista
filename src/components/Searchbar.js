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
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
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

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const tabPotrait = w >= 768 && h >= 1024;
const fourInchPotrait = w <= 350 && h <= 600;



const ThirdRoute = () => <NoResult />;
const FourthRoute = () => <ParishFinderSearch/>;
const FifthRoute = () => <NoResult />;

const renderScene = SceneMap({
  Bedrooms: ThirdRoute,
  DiningRoom: FourthRoute,
  LivingRoom: FifthRoute,
});
const Searchbar = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'Bedrooms', title: 'Books', type: 'home'},
    {key: 'DiningRoom', title: 'Parishes', type: 'finder'},
    {key: 'LivingRoom', title: 'Events'},
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
          backgroundColor: 'transparent',
          elevation: 0,
          // width:'90%',
          marginTop:verticalScale(10),
        }}
        renderLabel={({route, focused, color}) => (
          <>
            <Text
              style={{
                fontFamily: Font.Poppins600,
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                color: focused ? Color.Main : Color.HomeHeaderText,
              }}>
              {route.title}
            </Text>
          </>
        )}
        activeColor={{color: Color.Main}}
        inactiveColor={{color: Color.HomeHeaderText}}
        tabStyle={{ width: scale(117)}}
        bounces={true}
        scrollEnabled={true}
      />
    </View>
  );

  const iosTab = w >= 820 && h >= 1180;
  const navigation = useNavigation();
  const Theme = useColorScheme() === 'dark';
  
  const searchList = [
    {
      id: 1,
      title: 'Sunday Student Manual',
      type: 'light',
    },
    {
      id: 2,
      title: 'School of Disciple',
      type: 'light',
    },
    {
      id: 3,
      title: 'RCCG Central Parish',
      type: 'light3',
    },
    {
      id: 4,
      title: 'Pastor E.A Adeboye',
      type: 'light4',
    },
    {
      id: 5,
      title: 'Pastor E.A Odeyemi',
      type: 'light4',
    },
    {
      id: 6,
      title: 'Abuja Special Holy Ghost Service',
      type: 'light6',
    },
  ];
  const data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../assets/images/book1.png'),
      detail: '2023',
    },
  
    {
      id: 2,
      title: 'RCCG',
      manual: 'Central Parish',
      image: require('../assets/images/parishsmall_1.png'),
      detail: 'Ghana',
    },
  
    {
      id: 3,
      title: 'West Coast 3 Regional',
      manual: 'Convention',
      image: require('../assets/images/event_4.png'),
      detail: 'July 7, 2023.   .   4PM',
    },
    {
      id: 4,
      title: 'RCCG His Grace Assembly',
      manual: '',
      image: require('../assets/images/rcg_centralparish.png'),
      detail: 'Banjul',
    },
    {
      id: 5,
      title: 'Sunday School',
      manual: 'Teachers Manual',
      image: require('../assets/images/book2.png'),
      detail: '2023',
    },
  ];

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchInputValue2, setSearchInputValue2] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [Book, setBook] = useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [filteredData2, setFilteredData2] = useState(searchList);
  const [Parishes, setParishes] = useState(false);
  const [Event, setEvent] = useState(false);

  console.log('searchQuery.length > 0', searchQuery2);
  const handleSearch2 = text2 => {
    const formattedQuery = text2.toLowerCase();
    const filteredData = searchList.filter(item => {
      return item.title.toLowerCase().includes(formattedQuery);
    });
    setFilteredData2(filteredData);
    setSearchQuery2(text2);
  };
  const showData = () => {
    setShow(true);
    setIsSearchBarVisible(true);
  };

  const HandelBook = () => {
    setBook(true);
    setParishes(false);
    setEvent(false);
  };
  const HandelParishes = () => {
    setBook(false);
    setParishes(true);
    setEvent(false);
  };
  const HandelEvent = () => {
    setBook(false);
    setParishes(false);
    setEvent(true);
  };

  const resetStatus = () => {
    setShow(false);
    setIsSearchBarVisible(false);
    Keyboard.dismiss();
  };
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
      <View style={{flex: 1, backgroundColor: Theme ? '#0A2142' : Color.White}}>
        <View
          style={{
            height: verticalScale(50),
            backgroundColor: Theme ? '#0A2142' : '#f1f6fd',
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
                color={Theme ? Color.White : Color.Black}
                onPress={() => navigation.goBack()}
              />
            </View>
          ) : null}
          {/*  this ti for Searchbarr */}
          <View
            style={{
              width: isSearchBarVisible ? '85%' : '90%',
              height:
                w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(35),
              backgroundColor: Theme ? '#2B3642' : Color.White,
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
                color: Theme ? '#fff' : '#000',
                fontSize:
                  w >= 768 && h >= 1024
                    ? scale(8)
                    : w >= 450 && h >= 700
                    ? scale(10)
                    : w <= 400 && h <= 650
                    ? scale(10)
                    : scale(14),
                fontFamily: Font.Inter500,
                top: fourInchPotrait ? verticalScale(2) : verticalScale(1.5),
                left: iosTab ? scale(2) : 0,
              }}
              placeholder="Search"
              placeholderTextColor={Theme ? '#555E68' : '#CDD1D7'}
              onSubmitEditing={() => console.log(searchInputValue2)}
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
                    color={Theme ? '#B4B5B7' : '#B4B5B7'}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          {/*  this ti for Searchbarr */}
          {isSearchBarVisible ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => resetStatus()}>
                <Text
                  style={{
                    color: Theme ? '#B5BCC6' : '#4D5C72',
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
                backgroundColor: Theme ? '#071A36' : 'white',
              },
            ]}>
            <Text
              style={{
                color: Theme ? Color.White : Color.DarkTextColor,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                fontFamily: Font.Poppins500,
              }}>
              Popular Searches
            </Text>
            <View style={{flex: 1}}>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <DetailsCard
                    // onPress={() => navigation.navigate('SearchResult')}
                    source={item.image}
                    title={item.title}
                    resize={'contain'}
                    manual={item.manual}
                    PlaceTrue={true}
                    Place={item.detail}
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
                      borderBottomColor: Theme
                        ? Color.DarkBorder
                        : Color.BorderColor,
                      borderBottomWidth: 1,
                    }}
                  />
                )}
                keyExtractor={item => item.id.toString()}
              />
              <View style={{height: verticalScale(10)}} />
            </View>
          </View>
        ) : !show ? (
          <View
            style={{
              flex: 1,
              backgroundColor: Theme ? Color.DarkTheme : Color.White,
            }}>
            <FlatList
              data={filteredData2}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => showData()}
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
                    {Theme ? (
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
                    ) : null}

                    <View style={{paddingHorizontal: moderateScale(10)}}>
                      <Text
                        style={[
                          {color: Theme ? Color.White : Color.DarkTextColor},
                          styles.TextStyle,
                        ]}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                  {/* <SearchSuggestion /> */}
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        ) : (

          <View
            style={{
              flex: 1,
              backgroundColor: Theme ? Color.DarkTheme : Color.White,
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
