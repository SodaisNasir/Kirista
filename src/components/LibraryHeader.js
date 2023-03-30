import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,

} from 'react-native';
import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale,moderateScale} from 'react-native-size-matters';
import {Font} from './../utils/font';
import {Color} from './../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import FilterList from '../assets/icons/filter_list.svg';
import FilterModal from './Modals/FilterModal';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const LibraryHeader = (props) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.AuthHeaderStyle}>
      <View style={styles.NavigatorStyle}>
        <Text style={styles.WelcomeText}>Library</Text>

        <View
          style={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(16),
            width:
              w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(25),
            alignSelf: 'center',
          }}>
          <TouchableOpacity
          onPress={props.onPress}>
            <FilterList width={'100%'} height={'100%'} />
          </TouchableOpacity>
        </View>
         
      </View>
     
    </View>
  );
};

export default LibraryHeader;

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    backgroundColor: Color.HeaderColor,
    height: w >= 768 && h >= 1024 ? verticalScale(70) : verticalScale(90),
    justifyContent: 'flex-end',
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(19),
    fontFamily: Font.Poppins500,
    color: Color.Black,
    paddingHorizontal: verticalScale(15),
  },
  NavigatorStyle: {
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),
    // justifyContent: 'center',

    // marginTop: scale(10),
  },
});
