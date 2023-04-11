import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
import NoResults from '../assets/icons/no_result.svg'
import { verticalScale ,scale,moderateScale} from 'react-native-size-matters'
import { Font } from '../utils/font'
import { Color } from '../utils/Colors'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const NoResult = () => {
  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <View>
      <NoResults
      
        height = {verticalScale(150)}
        width = {scale(100)}
      />
    </View>
    <View style={{bottom:scale(5)}}>
      <Text style={styles.TextStyle}>No result found</Text>
    </View>

    </View>
  )
}

export default NoResult

const styles = StyleSheet.create({

  TextStyle:{
    fontFamily:Font.Poppins700,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
    color:Color.Black
  }
})