import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../../utils/Colors';
import { Font } from '../../utils/font';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const BooksCard = (props) => {
  const iosTab = w >= 820 && h >= 1180;
  const fourInchPotrait = w <= 350 && h <= 600
  const Theme = useSelector(state => state.mode)

  const navigation = useNavigation();
  return (
    <View style={styles.MainContainer}>
      <View style={{flex: 1,paddingVertical: verticalScale(20)}}>
        <View style={{
          height: verticalScale(70),
          width: fourInchPotrait ? '50%' : scale(60),
          alignSelf: 'center',
          overflow: 'hidden',
        }}>
          <Image 
          // resizeMethod='scale'
           resizeMode='contain'
            style={{
          height: '100%',
          width: '100%',
        }} source={{uri: props.uri}}/>
          </View>
      </View>
      <View style={{flex: 1.6,paddingVertical: verticalScale(20)}}>
        <View style={{flex:1,justifyContent: 'center'}}>
        <Text numberOfLines={2} style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.TitleStyle,
            ]}>{props.title}</Text>
        <Text  style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.TitleStyle,
            ]}>{props.manual}</Text>
        </View>
        {/* <View style={{flex:1,justifyContent: 'flex-start'}}>
        </View> */}
        <View style={{flex:0.5,justifyContent: 'flex-end'}}>
        <Text style={styles.DateStyle}>{props.year}</Text>
        </View>
       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    height: verticalScale(110),
    borderBottomColor: Color.BorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    // paddingVertical: verticalScale(10)
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(7) : w <= 350 && h <= 600 ? scale(13) : scale(15),
    fontFamily: Font.Poppins700,
    // top:verticalScale(1),
    maxWidth: '90%'

  },
  DateStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins600,
    // top:verticalScale(3),
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
    
  },
})
export default BooksCard
