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
const BookmarkScreen = () => {
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const DATA = [
    {Number: '5', Date: 'Feb 16th , 2023.'},
    {Number: '6', Date: 'Feb 16th , 2023.'},
  ];
  const Item = ({Number, Date}) => (
    <View
      style={[
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          marginLeft:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            paddingVertical:
            w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(10),
        },

        styles.Main,
      ]}>
      <Text
        style={{
          fontFamily: Font.Poppins600,
          color: Theme ? Color.White : Color.Black,
          fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
        }}>
        {Number}
      </Text>
      <Text  style={{
          fontFamily: Font.Poppins500,
          color: Theme ? Color.GreyText : Color.Black,
          fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
        }} >{Date}</Text>
    </View>
  );
  return (
    <SwipeListView
      data={DATA}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      style={{height: '100%'}}
      renderItem={({item}) => <Item Number={item.Number} Date={item.Date} />}
      renderHiddenItem={() => (
        <View style={styles.rowBack}>
          <TouchableOpacity style={[styles.IconBox]}>
            <MaterialCommunityIcons
              name="delete"
              size={w >= 768 && h >= 1024 ? scale(18) : scale(38)}
              color={'#F5F5F5'}
            //   style={{left:scale(10)}}
             
            />
          </TouchableOpacity>
        </View>
      )}
      swipeDirection={'right'}
      disableRightSwipe={true}
      leftOpenValue={0}
      rightOpenValue={-70}
    />
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

  },
  IconBox: {
    width: scale(90),
    backgroundColor: '#FF4242',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#F1F2F2',

  },
});

export default BookmarkScreen;
