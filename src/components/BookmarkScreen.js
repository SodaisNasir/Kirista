import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import SwipeableList from './CustomSwipeList/SwipeableList';
import ListData from './CustomSwipeList/ListData';
const BookmarkScreen = () => {
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const DATA = [
    {Number: '5', Date: 'Feb 16th , 2023.'},
    {Number: '6', Date: 'Feb 16th , 2023.'},
  ];

  
 
  return (
    <SwipeListView
      data={DATA}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      // style={{height: '100%'}}
      renderItem={({item}) =>{ return(
        <View
        style={{
          width: '100%',
          paddingVertical:
            w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(10),
            backgroundColor: Theme ? Color.DarkTheme : Color.White,
            borderTopWidth: 1,
            borderBottomColor: '#F1F2F2',
            borderTopColor:'#F1F2F2'
            ,
            borderBottomWidth:1,

        }}>
        <Text
          style={{
            fontFamily: Font.Poppins600,
            color: Theme ? Color.White : Color.Black,
            fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
            marginLeft:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
          }}>
          {item.Number}
        </Text>
        <Text
          style={{
            fontFamily: Font.Poppins500,
            color: Theme ? Color.GreyText : Color.Black,
            fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
            marginLeft:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
          }}>
          {item.Date}
        </Text>
      </View>
      )}
        }
      renderHiddenItem={() => (
        // <View style={styles.rowBack}>
        //   <TouchableOpacity style={[styles.IconBox]}>
            // <MaterialCommunityIcons
            //   name="delete"
            //   size={w >= 768 && h >= 1024 ? scale(20) : scale(28)}
            //   color={'#F5F5F5'}
            //   //   style={{left:scale(10)}}
            // />
        //   </TouchableOpacity>
        // </View>
        <View style={styles.rowBack}>
        <TouchableOpacity style={styles.IconBox}>
            <MaterialCommunityIcons
              name="delete"
              size={w >= 768 && h >= 1024 ? scale(20) : scale(28)}
              color={'#F5F5F5'}
              //   style={{left:scale(10)}}
            />
        </TouchableOpacity>
        </View>
      )}
      leftOpenValue={75}
          rightOpenValue={-75}
      disableRightSwipe={true}
      // leftOpenValue={0}
      // rightOpenValue={scale(-60)}
    />
    // <SwipeableList style={styles.Main} data={ListData} />
  );
};

const styles = StyleSheet.create({
  Main: {
    // paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#F1F2F2',
  },
  rowBack: {
    alignItems: 'flex-end',
    zIndex:99
  },
  IconBox: {
    width: scale(60),
    backgroundColor: '#FF4242',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#F1F2F2',
  },
});

export default BookmarkScreen;
