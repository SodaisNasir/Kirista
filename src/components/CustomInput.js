import { StyleSheet, Text, View ,TextInput, Image } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { Font } from '../assets/fonts/PoppinsFont'
import { Color } from '../utils/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const CustomInput = (props) => {
  return (
    <View>
      <Text style={{
        fontFamily:Font.Poppins400,
        color:Color.TextColor,
        marginLeft:'8%',
        fontSize:16,
        marginTop:'8%'
      }}>{props.text}</Text>
    <View style={{
      height:verticalScale(45),
      backgroundColor:Color.InputColor,
      borderRadius:23,
      marginHorizontal:'7%',
      
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
    <View style={{
      width:'7%',
      height:'30%',
      alignSelf:'center',
      marginLeft:'5%'
    }}>
    <Image source={props.image} style={{
      width:'100%',
      height:'100%'
    }}/>
    </View>
   
    {/* <MaterialCommunityIcons name={props.icon} size={25} color={Color.Main} style={{
      alignSelf:'center',
     marginLeft:'5%'
    }}/> */}
    </View>
    </View>
  )
}

export default CustomInput

