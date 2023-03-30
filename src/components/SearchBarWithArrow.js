import React, {useState} from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../assets/fonts/PoppinsFont';
import {Color} from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

// const data = [
//   {key: 'item1', value: 'Item 1'},
//   {key: 'item2', value: 'Item 2'},
//   {key: 'item3', value: 'Item 3'},
//   {key: 'item4', value: 'Item 4'},
//   {key: 'item5', value: 'Item 5'},
// ];

const SearchBarWithArrow = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCancelIcon, setShowCancelIcon] = useState(false);

  // const filteredData = data.filter(item =>
  //   item.value.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  const handleClearSearch = () => {
    setSearchTerm('');
    setShowCancelIcon(false);
  };

  const handleSearchBarFocus = () => {
    if (searchTerm !== '') {
      setShowCancelIcon(true);
    }
  };

  return (
    <View
      style={{backgroundColor: Color.HeaderColor,
      justifyContent:'center', 
      height: w >= 768 && h >= 1024 ? verticalScale(70) : verticalScale(90)}}>
      <View
        style={{
          flexDirection: 'row',
        //   backgroundColor: 'red',
        //   justifyContent: 'center',
          marginTop:w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(10)

        }}>
        <View style={styles.ArrowStyle}>
          <AntDesign
            name="arrowleft"
            size={w >= 768 && h >= 1024 ? scale(16) : scale(26)}
            color="black"
          />
        </View>
        <View
          style={{
            backgroundColor: Color.White,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius:w >= 768 && h >= 1024 ? scale(10) : scale(20),
            width: '75%',
            // alignSelf: 'center',
            marginHorizontal: verticalScale(15),
            // justifyContent:'center'
            height:
              w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(45),
            //   backgroundColor:'yellow'
          }}>
          <AntDesign
            name="search1"
            size={w >= 768 && h >= 1024 ? scale(14) : scale(18)}
            style={{color: '#B8B8B8', paddingHorizontal: verticalScale(10)}}
          />
          <TextInput
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Search"
            style={{
              flex: 1,
              color: Color.DarkTextColor,
              fontFamily: Font.Poppins500,
              
        
            //   alignItems: 'center',
              fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
            }}
            onFocus={handleSearchBarFocus}
            onBlur={() => setShowCancelIcon(false)}
            placeholderTextColor={Color.DarkTextColor}
            placeholderS
            
          />
          {showCancelIcon || searchTerm !== '' ? (
            <Ionicons
              name="close-circle"
              size={w >= 768 && h >= 1024 ? scale(14) : scale(18)}
              style={{paddingHorizontal: verticalScale(10), color: '#B4B5B7'}}
              onPress={handleClearSearch}
            />
          ) : null}
        </View>

        {/* <TouchableOpacity
          style={{
            justifyContent: 'center',
            // marginHorizontal: verticalScale(18),
          }}
          onPress={handleClearSearch}>
          <Text
            style={{
              color: 'black',
              fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
              fontFamily: Font.Poppins500,
            }}>
            Cancel
          </Text>
        </TouchableOpacity> */}
      </View>

      {/* <FlatList
        data={filteredData}
        renderItem={({item}) => <Text>{item.value}</Text>}
        keyExtractor={item => item.key}
      /> */}
    </View>
  );
};

export default SearchBarWithArrow;

const styles = StyleSheet.create({
  ArrowStyle: {
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
    
  },
});
