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

const data = [
  {key: 'item1', value: 'Item 1'},
  {key: 'item2', value: 'Item 2'},
  {key: 'item3', value: 'Item 3'},
  {key: 'item4', value: 'Item 4'},
  {key: 'item5', value: 'Item 5'},
];

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCancelIcon, setShowCancelIcon] = useState(false);

  const filteredData = data.filter(item =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
    <View style={{flex: 1, backgroundColor: Color.Main}}>
      <View style={{flexDirection:'row'}}>

   
      <View
        style={{
          backgroundColor: Color.White,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: scale(20),
          width: '70%',
          // alignSelf: 'center',
          marginLeft:verticalScale(20),
          // justifyContent:'center'
        }}>
        <AntDesign name="search1" size={scale(20)} style={{color:'#B8B8B8',paddingHorizontal:verticalScale(10)}} />
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search"
          style={{flex: 1,color:Color.DarkTextColor,fontFamily:Font.Poppins500}}
          onFocus={handleSearchBarFocus}
          onBlur={() => setShowCancelIcon(false)}
          placeholderTextColor={Color.DarkTextColor}
          
        />
        {showCancelIcon || searchTerm !== '' ? (
          <Ionicons 
            name="close-circle"
            size={24}
            style={{paddingHorizontal:verticalScale(10),color:"#B4B5B7"}}
            
            onPress={handleClearSearch}
          />
        ) : null}
      </View>
      
       <TouchableOpacity
        style={{justifyContent:'center',marginHorizontal:verticalScale(18)}}
         onPress={handleClearSearch}
       >
        <Text style={{color:'black',fontSize:scale(14),fontFamily:Font.Poppins500}}>
          Cancel
        </Text>
        </TouchableOpacity>
        </View>
     
      <FlatList
        data={filteredData}
        renderItem={({item}) => <Text>{item.value}</Text>}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
