import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native'
import React from 'react'
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import { Font } from '../assets/fonts/PoppinsFont';
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import { Color } from '../utils/Colors';
import  FontAwesome from 'react-native-vector-icons/FontAwesome'


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomHeader = (props) => {
  return (
  
   <View style={{
    height: 768 && h >= 1024 ? '10%' : '15%',
    flexDirection: 'row'
   }}>
    <View style={{
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:w >= 768 && h >= 1024 ? scale(10) : scale(10),  
    }}>
         <AntDesign name="arrowleft" size={30} color="black"/>
    </View>
    <View style={{
        height: '100%',
        width: '45%',
        justifyContent: 'center',
        
    }}>
    <Text style={{
        fontFamily:Font.Poppins500,
        fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),  
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
        flexDirection:'row',
        paddingHorizontal: w >= 768 && h >= 1024 ? scale(25) : scale(8),
        marginLeft:'5%'
        
    }}>
        <TouchableOpacity>
        <View style={{
        width:22,
        height:22,
     }}>
        <Image resizeMode='cover' source={props.image1} style={{
            width:'100%',
            height:'100%'
        }}/>
     </View>
        </TouchableOpacity>
        <TouchableOpacity  >
          <View style={{
        width:22,
        height:22,
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