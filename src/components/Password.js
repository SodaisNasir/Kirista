import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../utils/font'
import { scale, verticalScale } from 'react-native-size-matters'
import { Color } from '../utils/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Password = ({navigation}) => {
    const [isVisible,setVisible] = useState(false)
  return (
    <View>
     <View style={{
      marginTop:'8%'
    }}>
      <Text style={{
        fontFamily:Font.Poppins400,
        color:"#071A36",
        marginLeft:'8%',
        fontSize:scale(12),
       }}>Password</Text>
    <View style={{
      height:verticalScale(45),
      backgroundColor:Color.InputColor,
      borderRadius:23,
      marginHorizontal:'5%',
      paddingLeft:'5%',
      flexDirection:'row'
    }}>
     
      
    <TextInput
    placeholder={'Password'}
    placeholderTextColor={'UnderInputColor'}
    secureTextEntry={isVisible}
    style={{
      fontSize:16,
      fontFamily:Font.Poppins400,
      width:'80%'
    }}
    />
  
   
    {
      isVisible ? (
<MaterialCommunityIcons name={"eye-outline"} size={25} color={Color.Main}
    onPress={()=> setVisible(!isVisible)}
    style={{
      alignSelf:'center',
     marginLeft:'5%'
    }}/>
      ) : (
        <MaterialCommunityIcons name={"eye-off-outline"} size={25} color={Color.Main}
    onPress={()=> setVisible(!isVisible)}
    style={{
      alignSelf:'center',
     marginLeft:'5%'
    }}/>
      )
      
      }
    </View>
    </View>
    </View>
  )
}

export default Password

const styles = StyleSheet.create({})