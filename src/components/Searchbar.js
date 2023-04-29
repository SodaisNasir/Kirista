import React, {useState, useLayoutEffect} from 'react'
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
  ScrollView,
  FlatList,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {verticalScale, scale, moderateScale} from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {DarkTheme, useNavigation} from '@react-navigation/native'
import SearchSuggestion from './SearchSuggestion'
import {Color} from '../utils/Colors'
import {Font} from '../utils/font'
import Search from '../assets/icons/search.svg'
import SearchContent from './SearchContent'
import DetailsCard from './Card/DetailsCard'
import BookSvg from '../assets/icons/book-1.svg'
import BookDark from '../assets/icons/book_dark.svg'
import HouseSvg from '../assets/icons/house-2.svg'
import HouseDark from '../assets/icons/house_dark.svg'
import CalendarSvg from '../assets/icons/calendar-2.svg'
import CalendarDark from '../assets/icons/calendar_dark.svg'
import PersonSvg from '../assets/icons/person_outline.svg'
import PersonDark from '../assets/icons/person_dark.svg'
import NoResult from './NoResult'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const Searchbar = () => {
  const navigation = useNavigation()
  const Theme = useColorScheme() === 'dark'
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
      manual: 'Teachers Man..',
      image: require('../assets/images/book2.png'),
      detail: '2023',
    },
  ]
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
  ]

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  const [show, setShow] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchInputValue2, setSearchInputValue2] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchQuery2, setSearchQuery2] = useState('')
  const [Book, setBook] = useState(true)
  const [filteredData, setFilteredData] = useState(data)
  const [filteredData2, setFilteredData2] = useState(searchList)
  const [Parishes, setParishes] = useState(false)
  const [Event, setEvent] = useState(false)

  console.log('searchQuery.length > 0', searchQuery2)

  // Slide animation for the search bar
  const slideAnimation = new Animated.Value(0)
  const slideInSearchBar = () => {
    setIsSearchBarVisible(true)
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }
  const slideOutSearchBar = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsSearchBarVisible(false))
  }

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase()
    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(formattedQuery)
    })
    setFilteredData(filteredData)
    setSearchQuery(text)
  }
  const handleSearch2 = (text2) => {
    const formattedQuery = text2.toLowerCase()
    const filteredData = searchList.filter((item) => {
      return item.title.toLowerCase().includes(formattedQuery)
    })
    setFilteredData2(filteredData)
    setSearchQuery2(text2)
  }
  const showData = () => {
    setShow(true)
    setIsSearchBarVisible(true)
  }

  const HandelBook = () => {
    setBook(true)
    setParishes(false)
    setEvent(false)
  }
  const HandelParishes = () => {
    setBook(false)
    setParishes(true)
    setEvent(false)
  }
  const HandelEvent = () => {
    setBook(false)
    setParishes(false)
    setEvent(true)
  }

  const resetStatus = () => {
    setShow(false)
    setIsSearchBarVisible(false)
  }

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <View
        style={{
          height: verticalScale(70),
          backgroundColor: '#f1f6fd',
          flexDirection: 'row',
          paddingHorizontal: scale(20),
          borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
          borderBottomWidth: 1,
        }}>
        {!isSearchBarVisible && searchQuery2 == '' ? (
          <View
            style={{
              height: '100%',
              width: '12%',
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <AntDesign
              name="arrowleft"
              size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
              color={Theme ? Color.White : Color.Black}
              onPress={() => navigation.goBack()}
            />
          </View>
        ) : null}
        <View
          style={{
            height: '100%',
            width: isSearchBarVisible ? '80%' : '88%',
            justifyContent: 'center',
            // backgroundColor: 'pink',
          }}>
          <View
            style={{
              height: '50%',
              backgroundColor: 'white',
              borderRadius: 30,
              elevation: 2,
              overflow: 'hidden',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Search
                height={
                  w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(20)
                }
                width={
                  w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(26)
                }
              />
            </View>
            <View
              style={{
                height: '100%',
                width:
                  isSearchBarVisible != true && searchQuery2 == ''
                    ? '85%'
                    : '70%',
              }}>
              <TextInput
                onFocus={() => setIsSearchBarVisible(true)}
                style={{
                  height: '100%',
                  width: '100%',
                  color: Theme ? '#fff' : '#000',
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                }}
                placeholder="Search"
                placeholderTextColor={Theme ? '#555E68' : '#CDD1D7'}
                onSubmitEditing={() => console.log(searchInputValue2)}
                onChangeText={(text) => handleSearch2(text)}
                value={searchQuery2}
              />
            </View>
            {isSearchBarVisible ? (
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setSearchQuery2('')}>
                  <Ionicons
                    name="close-circle"
                    size={24}
                    color={Theme ? '#B4B5B7' : '#B4B5B7'}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
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
        <View style={styles.SecondView}>
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
              keyExtractor={(item) => item.id.toString()}
            />
            <View style={{height: verticalScale(55)}} />
          </View>
        </View>
      ) : !show ? (
        <View>
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
                  backgroundColor: Theme ? Color.DarkTheme : Color.White,
                  flex: 1,
                }}>
                <View
                  style={{
                    marginVertical:
                      w >= 768 && h >= 1024
                        ? verticalScale(5)
                        : verticalScale(8),
                    flexDirection: 'row',
                  }}>
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
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
              paddingTop: verticalScale(10),
            }}>
            <TouchableOpacity
              style={{marginBottom: verticalScale(10)}}
              onPress={HandelBook}>
              <Text
                style={[
                  {
                    color: Theme
                      ? Book
                        ? Color.Main
                        : '#9DA6B3'
                      : Book
                      ? Color.Main
                      : '#C1C5CA',
                  },
                  styles.TextStyle,
                  // props.BooksRestyle,
                  styles.BooksStyle,
                ]}>
                Books
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{marginBottom: verticalScale(10)}}
              onPress={HandelParishes}>
              <Text
                style={[
                  {
                    color: Theme
                      ? Parishes
                        ? Color.Main
                        : '#9DA6B3'
                      : Parishes
                      ? Color.Main
                      : '#C1C5CA',
                  },
                  styles.TextStyle,
                  // props.ParishRestyle,
                ]}>
                Parishes
              </Text>
              {/* <View style={props.ParishUnderLineStyle} /> */}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={HandelEvent}
              style={{marginBottom: verticalScale(10)}}>
              <Text
                style={[
                  {
                    color: Theme
                      ? Event
                        ? Color.Main
                        : '#9DA6B3'
                      : Event
                      ? Color.Main
                      : '#C1C5CA',
                  },
                  styles.TextStyle,
                  // props.EventRestyle,
                ]}>
                Events
              </Text>
              {/* <View style={props.EventUnderLineStyle} /> */}
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            {Book && (
              <View
                style={{
                  borderBottomColor: Color.Main,
                  borderBottomWidth: 1.5,
                  backgroundColor: Theme ? Color.Main : Color.HeaderColor,
                  width: '33%',
                  // marginLeft: '33%',
                }}
              />
            )}
            {Parishes && (
              <View
                style={{
                  borderBottomColor: Color.Main,
                  borderBottomWidth: 1.5,
                  backgroundColor: Theme ? Color.Main : Color.HeaderColor,
                  width: '33%',
                  marginLeft: '33%',
                }}
              />
            )}
            {Event && (
              <View
                style={{
                  borderBottomColor: Color.Main,
                  borderBottomWidth: 1.5,
                  backgroundColor: Theme ? Color.Main : Color.HeaderColor,
                  width: '33%',
                  marginLeft: '66%',
                }}
              />
            )}
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            {Book && <NoResult />}
            {Parishes && (
              <View style={{flex: 1, paddingHorizontal: scale(20)}}>
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
                  keyExtractor={(item) => item.id.toString()}
                  ListEmptyComponent={() => <NoResult />}
                />
              </View>
            )}
            {Event && <NoResult />}
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SecondView: {
    flex: 1,
    backgroundColor: 'white',
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
  },
  closeButtonText: {
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    fontFamily: Font.Poppins500,
    color: '#4D5C72',
  },
})
export default Searchbar
