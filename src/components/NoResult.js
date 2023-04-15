import { StyleSheet, Text, View,Image,Dimensions, useColorScheme } from 'react-native'
import React from 'react'
import NoResults from '../assets/icons/no_result.svg'
import { verticalScale ,scale,moderateScale} from 'react-native-size-matters'
import { Font } from '../utils/font'
import { Color } from '../utils/Colors'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const NoResult = () => {
  const Theme = useColorScheme() === 'dark';
  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <View>
      <NoResults
      
        height = {w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(170)}
        width = {w >= 768 && h >= 1024 ? scale(100) : scale(150)}
      />
    </View>
    <View style={{}}>
      <Text style={[{color : Theme ? Color.White : Color.Black},styles.TextStyle]}>No result found</Text>
    </View>

    </View>
  )
}

export default NoResult

const styles = StyleSheet.create({

  TextStyle:{
    fontFamily:Font.Poppins700,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
    
  }
})