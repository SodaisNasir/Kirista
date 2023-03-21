import { StyleSheet, Text, View ,TextInput, Image } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'
import { Font } from '../assets/fonts/PoppinsFont'
import { Color } from '../utils/Colors'

const CustomInput = (props) => {
  return (
    <View>
      <Text style={{
        fontFamily:Font.Poppins400,
        color:Color.TextColor,
        marginLeft:'8%',
        fontSize:16,
        marginTop:'5%'
      }}>{props.text}</Text>
    <View style={{
      height:verticalScale(45),
      backgroundColor:Color.InputColor,
      borderRadius:23,
      marginHorizontal:'7%',
      marginTop:'1%',
      paddingLeft:'5%',
      flexDirection:'row'
    }}>
     
      
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

export default CustomInput

