import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import { Font } from '../assets/fonts/PoppinsFont';
const CoustomSmallButton = (props) => {
  return (
    <View>
     <TouchableOpacity style={{
        width:80,
        height:40,
        backgroundColor:"rgba(56, 125, 229, 0.1)",
        borderRadius:scale(20),
        alignItems:'center',
        justifyContent:'center',
     }}>
      <Text style={{
        
        fontFamily:Font.Poppins600,
        fontSize:13,
        color:'#387DE5'
      }}>
      {props.text}
      </Text>
     </TouchableOpacity>
     
    </View>
  )
}

export default CoustomSmallButton

