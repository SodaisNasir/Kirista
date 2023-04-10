import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../utils/font';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const SearchResult = (props) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const Theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          //   height: verticalScale(90),
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
          <View
            style={[
              styles.searchContainerAfter,
              {backgroundColor: Theme ? '#2B3642' : '#f0f0f0'},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialIcons
                name="search"
                size={scale(24)}
                color={Theme ? '#4E545A' : '#387DE5'}
              />

              <TextInput
                style={[styles.searchInput, {color: Theme ? '#fff' : '#000'}]}
                placeholder="Search"
                placeholderTextColor={Theme ? '#555E68' : '#CDD1D7'}
                // onSubmitEditing={() => console.log(searchInputValue)}
                // onChangeText={text => setSearchQuery(text)}
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
          </View>

          <TouchableOpacity>
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate('Home');
            // }}
            >
            <Text style={[styles.TextStyle, props.BooksRestyle,styles.BooksStyle]}>Books</Text>
            <View style={[props.BooksUnderlineStyle,styles.BooksUnderlineStyle]} />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate('ParishFinder');
            // }}
            >
            <Text style={[styles.TextStyle, props.ParishRestyle]}>
              Parishes
            </Text>
            <View style={props.ParishUnderLineStyle} />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate('Events');
            // }}
            >
            <Text style={[styles.TextStyle, props.EventRestyle]}>Events</Text>
            <View style={props.EventUnderLineStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
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
  BooksUnderlineStyle:{ 
    width: '100%',
    backgroundColor: Color.Main,
    height: verticalScale(2),
    bottom: scale(4),

  },
  TextStyle:{
    fontFamily: Font.Poppins500,
    color: Color.HomeHeaderText,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
  },
  closeButton: {
    paddingHorizontal: moderateScale(10),
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
