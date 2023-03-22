import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import { Font } from '../assets/fonts/PoppinsFont';
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import { Color } from '../utils/Colors';
import  FontAwesome from 'react-native-vector-icons/FontAwesome'


const CustomHeader = (props) => {
  return (
  
   <View style={{
    height: '8%',
    flexDirection: 'row'
   }}>
    <View style={{
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
         <AntDesign name="arrowleft" size={35} color="black"/>
    </View>
    <View style={{
        height: '100%',
        width: '45%',
        justifyContent: 'center',
    }}>
    <Text style={{
        fontFamily:Font.Poppins500,
        fontSize:scale(22),
        color:Color.TextColor,
     }}>
       {props.text}
     </Text>

    </View>
    <View style={{
        height: '100%',
        width: '40%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection:'row'
    }}>
        <TouchableOpacity>
        <View style={{
        width:25,
        height:25,
     }}>
        <Image resizeMode='cover' source={props.image1} style={{
            width:'100%',
            height:'100%'
        }}/>
     </View>
        </TouchableOpacity>
        <TouchableOpacity  >
          <View style={{
        width:25,
        height:25,
     }}>
        <Image resizeMode='cover' source={props.image2} style={{
            width:'100%',
            height:'100%'
        }}/>
     </View>
     </TouchableOpacity>
     <FontAwesome name="share-square-o" size={26} color={Color.Main}  style={{
        
     }}/>
    </View>
   </View>
 
  )
}

export default CustomHeader

const styles = StyleSheet.create({})