import { StyleSheet, Text, TouchableOpacity, View , Dimensions} from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import { Font } from '../assets/fonts/PoppinsFont';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

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
         fontSize : w >= 768 && h >= 1024 ? scale(10) : scale(12),
        color:'#387DE5'
      }}>
      {props.text}
      </Text>
     </TouchableOpacity>
     
    </View>
  )
}

export default CoustomSmallButton

