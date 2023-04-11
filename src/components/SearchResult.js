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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Font} from '../utils/font';
import { useNavigation } from '@react-navigation/native';
import Search from '../assets/icons/search.svg'
import NoResult from './NoResult';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const SearchResult = props => {

  const navigation = useNavigation()
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const Theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
        
          height: verticalScale(90),
          
          backgroundColor: Color.HeaderColor,
          
          justifyContent:'flex-end',
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
              <Search
                
                height={ w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(18)}
                width = { w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(18)}
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

          <TouchableOpacity
            onPress={()=> navigation.navigate('Searchbar')}
                
          >
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
          // paddingHorizontal: moderateScale(35),
          marginBottom:verticalScale(10),
          backgroundColor:Color.HeaderColor,
          paddingTop:verticalScale(10)
        }}>
        <TouchableOpacity
          style={{}}
          // onPress={() => {
          //   navigation.navigate('Home');
          // }}
        >
          <Text
            style={[styles.TextStyle, props.BooksRestyle, styles.BooksStyle]}>
            Books
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        // onPress={() => {
        //   navigation.navigate('ParishFinder');
        // }}
        >
          <Text style={[styles.TextStyle, props.ParishRestyle]}>Parishes</Text>
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
      <View
      style={{backgroundColor: Color.Main,
        height: verticalScale(2),
        bottom: scale(4),
        width:'33%'
      }}
      />

      <View style={{flex:1,justifyContent:'center'}}>

        <NoResult/>
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
    // paddingHorizontal: moderateScale(10),
    width: '80%',
  },
  searchInput: {
    height: '100%',
    fontSize: 16,
    width: '85%',
    paddingHorizontal: moderateScale(10),
  },
  BooksUnderlineStyle: {
    // width: '100%',
    backgroundColor: Color.Main,
    height: verticalScale(2),
    bottom: scale(4),
  },
  TextStyle: {
    fontFamily: Font.Poppins500,
    color: Color.HomeHeaderText,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
  },
  closeButton: {
    paddingHorizontal: moderateScale(10),
  },
  closeButtonText: {
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    fontFamily: Font.Poppins500,
    color:'#4D5C72'
  },
});
