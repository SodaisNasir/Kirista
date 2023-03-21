import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Font } from '../assets/fonts/PoppinsFont'
import { Color } from '../utils/Colors'
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
const PhoneInput = (props) => {
  const navigation = useNavigation()
  return (
 
       <View>
      <Text style={{
        fontFamily:Font.Poppins400,
        color:Color.TextColor,
        marginLeft:'8%',
        fontSize:16,
        marginTop:'8%'
      }}> Phone Number</Text>
    <View style={{
      height:verticalScale(45),
      backgroundColor:Color.InputColor,
      borderRadius:20,
      marginHorizontal:'5%',
    
      paddingLeft:'5%',
      flexDirection:'row',
    }}>
      <View style={{
        flexDirection:'row',
        alignItems:'center'
      }}>
        <View style={{
            
            width:25,
            height:15,
            flexDirection:'row',
            marginTop:'-3%'
       
             }}>
        <Image source={require('../assets/images/flg.png')} style={{
            width:'100%',
            height:'100%'
        }} />
        </View>
        <Text style={{
          color:Color.TextColor,
        fontFamily:Font.Poppins400,
        fontSize:scale(15),
       }}> +234</Text>
         <AntDesign name='down' size={20} color={'black'} onPress={()=>navigation.navigate('Countrycode')} style={{
          marginLeft:'5%'
         }}/>
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