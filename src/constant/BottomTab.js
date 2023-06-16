import React from 'react';
import {View, Text, Dimensions, StyleSheet,useColorScheme,Pressable,Image, Platform} from 'react-native';

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import {Color} from '../utils/Colors';
import { Font } from '../utils/font';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const tabPotrait = w >= 768 && h >= 1024;
const fourInch = w <= 450 && h <= 750;
const BottomTab = props => {
  const Theme = useSelector(state => state.mode)
    const Navigation = useNavigation()
    return (
    <View
      style={[
        styles.Row,
        {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
        props.BottomTabRestyle
      ]}>
      <Pressable onPress={() => Navigation.navigate('Home')} style={styles.Boxes}>
        <Image
          style={styles.Img}
        source={
          props.activeHome ? require('../assets/btmimg/home.png') : require('../assets/btmimg/home_non.png')
        }
        />
        <Text
          style={[
            styles.Name,
            {color: props.activeHome ? Color.Main : Color.NonActive},
          ]}>
          Home
        </Text>
      </Pressable>
      <Pressable onPress={() => Navigation.navigate('Library')} style={styles.Boxes}>
      <Image
        style={styles.Img}
        source={
          props.activeLibary ? require('../assets/btmimg/book.png') : require('../assets/btmimg/book_non.png')
        }
        />
        <Text
          style={[
            styles.Name,
            {color: props.activeLibary ? Color.Main : Color.NonActive,left:scale(1)},
          ]}>
          Library
        </Text>
      </Pressable>
      <Pressable onPress={() => Navigation.navigate('More')} style={styles.Boxes}>
      <Image
      style={styles.Img}
        source={
          props.activeMore ? require('../assets/btmimg/more.png') : require('../assets/btmimg/more_non.png')
        }
        />
        <Text
          style={[
            styles.Name,
            {color: props.activeMore ? Color.Main : Color.NonActive,left:scale(1)},
          ]}>
          More
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: verticalScale(65),
    width:'100%',
    borderTopColor:Color.NonActive,
    borderTopWidth:scale(0.5)
  },
  Boxes:{
    justifyContent:'center',
    alignItems:'center'
  },
  Name:{
    fontFamily: Font.Poppins600,
    fontSize:tabPotrait ? scale(7.5) : scale(10),
    textAlign:'center',
    bottom:Platform.OS == 'ios' ? verticalScale(3) : 0
  },
  Img:{
    resizeMode:'contain',
    width: tabPotrait ? scale(20) : fourInch? scale(25) : scale(33),
    height: tabPotrait ? scale(20) : fourInch? scale(25) : scale(33),
    bottom:Platform.OS == 'ios' ? verticalScale(3) : 0
  }
});

export default BottomTab;
