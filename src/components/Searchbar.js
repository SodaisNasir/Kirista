import React, {useState, useLayoutEffect} from 'react';
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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DarkTheme, useNavigation} from '@react-navigation/native';
import SearchSuggestion from './SearchSuggestion';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import Search from '../assets/icons/search.svg';
import SearchContent from './SearchContent';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Searchbar = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  const Theme = useColorScheme() === 'dark';
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  // Slide animation for the search bar
  const slideAnimation = new Animated.Value(0);
  const slideInSearchBar = () => {
    setIsSearchBarVisible(true);
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const slideOutSearchBar = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsSearchBarVisible(false));
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
      ]}>
      {!isSearchBarVisible ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                height: verticalScale(90),
                backgroundColor: Theme
                  ? Color.ExtraViewDark
                  : Color.HeaderColor,
                justifyContent: 'flex-end',
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
                paddingBottom:
                  w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(8),
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  marginBottom:
                    w >= 768 && h >= 1024
                      ? verticalScale(12)
                      : verticalScale(8),
                }}>
                <View style={styles.NavigatorStyle}>
                  <AntDesign
                    name="arrowleft"
                    size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
                    color={Theme ? Color.White : Color.Black}
                    onPress={() => navigation.goBack()}
                  />
                </View>

                <TouchableOpacity
                  onPress={slideInSearchBar}
                  style={[
                    styles.searchContainer,
                    {
                      backgroundColor: Theme
                        ? Color.DarkThemeInputBox
                        : Color.White,
                    },
                  ]}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: moderateScale(10),
                      }}>
                      <Search
                        height={
                          w >= 768 && h >= 1024
                            ? verticalScale(14)
                            : verticalScale(18)
                        }
                        width={
                          w >= 768 && h >= 1024
                            ? verticalScale(16)
                            : verticalScale(24)
                        }
                      />
                      <TextInput
                        style={[
                          styles.searchInput,
                          {
                            color: Theme ? '#fff' : '#000',
                            fontSize:
                              w >= 768 && h >= 1024 ? scale(8) : scale(14),
                          },
                        ]}
                        placeholder="Search"
                        placeholderTextColor={Theme ? '#555E68' : '#CDD1D7'}
                        onSubmitEditing={() => console.log(searchInputValue)}
                        onChangeText={text => setSearchQuery(text)}
                        // onChange={ setIsSearchBarVisible(true)}
                        value={searchQuery}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: Theme ? Color.DarkTheme : Color.White,
              }}>
              <View
                style={{
                  paddingHorizontal:
                    w >= 768 && h >= 1024
                      ? moderateScale(30)
                      : moderateScale(25),
                  paddingVertical:
                    w >= 768 && h >= 1024
                      ? moderateScale(20)
                      : moderateScale(15),
                }}>
                <Text
                  style={{
                    color: Theme ? Color.White : Color.DarkTextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                    fontFamily: Font.Poppins500,
                  }}>
                  Popular Searches
                </Text>
              </View>
              <SearchContent />
              <View
                style={{
                  height: verticalScale(30),
                  backgroundColor: Theme ? Color.DarkTheme : Color.White,
                }}
              />
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <View
            style={{
              height: verticalScale(90),

              backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,

              justifyContent: 'flex-end',
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              paddingBottom:
                w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(8),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom:
                  w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(8),
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchResult')}
                style={[
                  styles.searchContainerAfter,
                  {
                    backgroundColor: Theme
                      ? Color.DarkThemeInputBox
                      : Color.White,
                  },
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Search
                    height={
                      w >= 768 && h >= 1024
                        ? verticalScale(16)
                        : verticalScale(18)
                    }
                    width={
                      w >= 768 && h >= 1024
                        ? verticalScale(16)
                        : verticalScale(24)
                    }
                  />

                  <TextInput
                    style={[
                      styles.searchInput,
                      {
                        color: Theme ? '#fff' : '#000',
                        fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                      },
                    ]}
                    placeholder="Search"
                    placeholderTextColor={Theme ? '#555E68' : '#CDD1D7'}
                    onSubmitEditing={() => console.log(searchInputValue)}
                    onChangeText={text => setSearchQuery(text)}
                    value={searchQuery}
                  />
                </View>

                <View style={{marginRight: scale(5)}}>
                  {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchQuery('')}>
                      <Ionicons
                        name="close-circle"
                        size={24}
                        color={Theme ? '#B4B5B7' : 'black'}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={slideOutSearchBar}>
                <View style={styles.closeButton}>
                  <Text
                    style={[
                      styles.closeButtonText,
                      {color: Theme ? '#B5BCC6' : 'black'},
                    ]}>
                    Cancel
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              backgroundColor: Theme ? Color.DarkTheme : Color.White,
              flex: 1,
            }}>
            <SearchSuggestion />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NavigatorStyle: {
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scale(16),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    // paddingRight: 10,
    marginHorizontal: verticalScale(10),
    width: '80%',
  },
  searchContainerAfter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    // paddingRight: 10,
    marginHorizontal: verticalScale(10),
    paddingHorizontal: moderateScale(20),
    width: '80%',
  },
  searchInput: {
    height: '100%',
    width: '85%',
  },
  closeButton: {
    paddingHorizontal: moderateScale(10),
  },

  closeButtonText: {
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    fontFamily: Font.Poppins500,
    color: '#4D5C72',
  },
  X: {
    backgroundColor: '#B4B5B7',
    borderRadius: 100,
    aspectRatio: 1 / 1,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Searchbar;
