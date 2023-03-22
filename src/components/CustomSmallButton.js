import { StyleSheet, Text, TouchableOpacity, View , Dimensions} from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import { Font } from '../assets/fonts/PoppinsFont';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CoustomSmallButton = (props) => {
  return (
    <View style={{
      paddingHorizontal:768 && h >= 1024 ? '-30%' : scale(5),
      // justifyContent:'space-around' 
    }}>
     <TouchableOpacity style={{
        width: w >= 768 && h >= 1024 ? scale (50) :scale(50) ,
        height:verticalScale(30),
        backgroundColor:"rgba(56, 125, 229, 0.1)",
        borderRadius:w >= 768 && h >= 1024 ? scale (50) :scale(20),
        alignItems:'center',
        justifyContent:'center',
     }}>
      <Text style={{
        
        fontFamily:Font.Poppins600,
         fontSize : w >= 768 && h >= 1024 ? scale(7) : scale(8),
        color:'#387DE5'
      }}>
      {props.text}
      </Text>
     </TouchableOpacity>
     
    </View>
  )
}

export default CoustomSmallButton

