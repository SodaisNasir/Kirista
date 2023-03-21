import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Font } from '../assets/fonts/PoppinsFont'
import { Color } from '../utils/Colors'
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
const PhoneInput = (props) => {
  return (
 
       <View>
      <Text style={{
        fontFamily:Font.Poppins400,
        color:Color.TextColor,
        marginLeft:'8%',
        fontSize:16,
        marginTop:'5%'
      }}> Phone Number</Text>
    <View style={{
      height:verticalScale(45),
      backgroundColor:Color.InputColor,
      borderRadius:23,
      marginHorizontal:'7%',
      marginTop:'1%',
      paddingLeft:'5%',
      flexDirection:'row'
    }}>
        <View style={{
            marginTop:'5%',
            width:25,
            height:15
        }}>
        <Image source={require('../assets/images/flg.png')} style={{
            width:'100%',
            height:'100%'
        }} />
        </View>
    
      
    <TextInput
    placeholder={props.placeholder}
    placeholderTextColor={'UnderInputColor'}
    style={{
      fontSize:16,
      fontFamily:Font.Poppins400,
      width:'80%'
    }}
    />
    </View>
    </View>
 
  )
}

export default PhoneInput

const styles = StyleSheet.create({})