import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import React, {useState} from 'react'
import {verticalScale, scale, moderateScale} from 'react-native-size-matters'
import {Color} from '../utils/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {Font} from '../utils/font'
import {useNavigation} from '@react-navigation/native'
import Search from '../assets/icons/search.svg'
import NoResult from './NoResult'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const SearchResult = (props) => {
  const navigation = useNavigation()

  const [Book, setBook] = useState(true)
  const [Parishes, setParishes] = useState(false)
  const [Event, setEvent] = useState(false)

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

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const Theme = useColorScheme() === 'dark'

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
      }}>
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
          <View
            style={[
              styles.searchContainerAfter,
              {backgroundColor: Theme ? Color.DarkThemeInputBox : Color.White},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Search
                height={
                  w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(18)
                }
                width={
                  w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(18)
                }
              />

              <TextInput
                style={[styles.searchInput, {color: Theme ? '#fff' : '#000'}]}
                placeholder="Search"
                placeholderTextColor={Theme ? '#555E68' : '#CDD1D7'}
                // onSubmitEditing={() => console.log(searchInputValue)}
                // onChangeText={text => setSearchQuery(text)}
                // value={searchQuery}
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
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Searchbar')}>
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
              {color: Theme ? '#9DA6B3' : '#C1C5CA'},
              styles.TextStyle,
              props.BooksRestyle,
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
              {color: Theme ? '#9DA6B3' : '#C1C5CA'},
              styles.TextStyle,
              props.ParishRestyle,
            ]}>
            Parishes
          </Text>
          <View style={props.ParishUnderLineStyle} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={HandelEvent}
          style={{marginBottom: verticalScale(10)}}>
          <Text
            style={[
              {color: Theme ? '#9DA6B3' : '#C1C5CA'},
              styles.TextStyle,
              props.EventRestyle,
            ]}>
            Events
          </Text>
          <View style={props.EventUnderLineStyle} />
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {Book && <NoResult />}
        {Parishes && <NoResult />}
        {Event && <NoResult />}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
    fontFamily: Font.Poppins400,
  },
  closeButtonText: {
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    fontFamily: Font.Poppins500,
    color: '#4D5C72',
  },
})
export default SearchResult
