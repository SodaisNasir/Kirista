import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
  useColorScheme,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import SearchSuggestion from './SearchSuggestion';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import Search from '../assets/icons/search.svg';

const Searchbar = props => {


  const data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      detail: '2023',
    },

    {
      id: 2,
      title: 'RCCG',
      manual: 'Central Parish',
      image: require('../../../src/assets/images/parishsmall_1.png'),
      detail: 'Ghana',
    },

    {
      id: 3,
      title: 'West Coast 3 Regional',
      manual: 'Convention',
      image: require('../../../src/assets/images/event_4.png'),
      detail: 'July 7, 2023.   .   4PM',
    },
    {
      id: 4,
      title: 'RCCG His Grace Assembly',
      manual: '',
      image: require('../../../src/assets/images/rcg_centralparish.png'),
      detail: 'Banjul',
    },
    {
      id: 5,
      title: 'Sunday School',
      manual: 'Teachers Man..',
      image: require('../../../src/assets/images/book2.png'),
      detail: '2023',
    },
  ];

  const navigation = useNavigation();
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
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
          backgroundColor: Theme ? '#F1F6FD' : Color.White,
        },
      ]}>
      {!isSearchBarVisible ? (
        <View
          style={{
            height: verticalScale(90),
            backgroundColor: Color.HeaderColor,
            justifyContent: 'flex-end',
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(8),
            }}>
            <View style={styles.NavigatorStyle}>
              <AntDesign
                name="arrowleft"
                size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
                color="black"
                onPress={() => navigation.goBack()}
              />
            </View>

            <TouchableOpacity
              onPress={slideInSearchBar}
              style={[
                styles.searchContainer,
                {backgroundColor: Theme ? '#2B3642' : '#f0f0f0'},
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
                      {color: Theme ? '#fff' : '#000'},
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
      ) : (
        <>
          <View
            style={{
              height: verticalScale(90),

              backgroundColor: Color.HeaderColor,

              justifyContent: 'flex-end',
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
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
                  {backgroundColor: Theme ? '#2B3642' : '#f0f0f0'},
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
                      {color: Theme ? '#fff' : '#000'},
                    ]}
                    placeholder="Search"
                    placeholderTextColor={Theme ? '#555E68' : '#CDD1D7'}
                    onSubmitEditing={() => console.log(searchInputValue)}
                    onChangeText={text => setSearchQuery(text)}
                    value={searchQuery}
                  />
                </View>

                <View>
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
    justifyContent: 'center',
    borderRadius: 20,
    // paddingRight: 10,
    marginHorizontal: verticalScale(10),
    paddingHorizontal: moderateScale(20),
    width: '80%',
  },
  searchInput: {
    height: '100%',
    fontSize: 16,
    width: '85%',
  },
  closeButton: {
    paddingHorizontal: moderateScale(10),
  },

  closeButtonText: {
    // fontFamily:Font.Poppins700,
    // fontSize:50
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
