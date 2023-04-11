import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import BookSvg from '../assets/icons/book-1.svg';
import HouseSvg from '../assets/icons/house-2.svg';
import CalendarSvg from '../assets/icons/calendar-2.svg';
import PersonSvg from '../assets/icons/person_outline.svg';
import { Font } from '../utils/font';
import { Color } from '../utils/Colors';

const w = Dimensions.get('window').width;
    const h = Dimensions.get('window').height;

const SearchSuggestion = () => {
    
    

  return (
    <SafeAreaView style={{paddingHorizontal:w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(0)}}>
      <ScrollView>
        <View style={{marginTop:verticalScale(10)}}>
          <View style={{marginVertical:moderateScale(5),flexDirection: 'row'}}>
            <BookSvg height={w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(20)} width={(25)} />

            <View style={{paddingHorizontal:moderateScale(10)}}>
              <Text style={styles.TextStyle}>Sunday Student Manual</Text>
            </View>
          </View>

          <View style={{marginVertical:moderateScale(5),flexDirection: 'row'}}>
            <BookSvg height={w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(20)} width={25} />

            <View style={{paddingHorizontal:moderateScale(10)}}>
              <Text style={styles.TextStyle}>Sunday Student Manual</Text>
            </View>
          </View>

          <View style={{marginVertical:moderateScale(5),flexDirection: 'row'}}>
            <HouseSvg height={w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(18)} width={25} />

            <View style={{paddingHorizontal:moderateScale(10)}}>
              <Text style={styles.TextStyle}>School of Disciple</Text>
            </View>
          </View>

          <View style={{marginVertical:moderateScale(5),flexDirection: 'row'}}>
            <PersonSvg height={w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(18)} width={25} />

            <View style={{paddingHorizontal:moderateScale(10)}}>
              <Text style={styles.TextStyle}>RCCG Central Parish </Text>
            </View>
          </View>

          <View style={{marginVertical:moderateScale(5),flexDirection: 'row'}}>
            <PersonSvg height={w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(18)} width={25} />

            <View style={{paddingHorizontal:moderateScale(10)}}>
              <Text style={styles.TextStyle}>Pastor E.A. Adeboye</Text>
            </View>
          </View>

          <View style={{marginVertical:moderateScale(5),flexDirection: 'row'}}>
            <CalendarSvg height={w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(18)} width={25} />

            <View style={{paddingHorizontal:moderateScale(10)}}>
              <Text style={styles.TextStyle}>Sunday Student Manual</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchSuggestion;

const styles = StyleSheet.create({

    TextStyle:{
        fontFamily:Font.Poppins500,
        fontSize:  w >= 768 && h >= 1024 ? scale(8) : scale(13),
        color:Color.DarkTextColor
    }
});
