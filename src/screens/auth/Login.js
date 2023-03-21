import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Kiristalogo from '../../constant/Kiristalogo'
import { Font } from '../../assets/fonts/PoppinsFont'
import { scale } from 'react-native-size-matters'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color } from '../../utils/Colors'
import Password from '../../components/Password'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{
       flex:1,
       backgroundColor:'white'
    }}>
     <View style={{
        marginTop:'10%'
       }}>
        <Kiristalogo/>
     </View>

     <View style={{
          alignItems:'center',
            justifyContent:'center',
            marginTop:'10%',
           }}>
     <Text style={{
        fontFamily:Font.Poppins700,
        fontSize:scale(22),
        color:'black',
       }}>
     Welcome Back,
     </Text>
      <Text style={{
          fontFamily:Font.Poppins700,
        fontSize:scale(22),
        color:'black',
        alignSelf:'center',
        marginTop:'-3%'
      }}> Brethren.
    </Text>
    </View >
    <CustomInput  text={'Email Address'} placeholder
      ={'Email Address'}/>
      <Password/>

<View style={{
        marginHorizontal:'5%',
        marginTop:'3%'
     }}>
        <CustomButton text={'Sign up'}/>
   </View >

   <TouchableOpacity style={{
    alignItems:'center',
    marginTop:'3%'
   }}>
   <Text style={{
        fontFamily:Font.Poppins700,
        fontSize:scale(15),
        color:Color.TextColor,
       }}>
     Forgot Password?
     </Text>
   </TouchableOpacity>
   <View style={{
    alignItems:'center',
    justifyContent:'center',
    marginTop:'30%'
   }}>
    <Text style={{
      fontFamily:Font.Poppins500,
      fontSize:scale(15),
      color:Color.TextColor
    }}>
   Don’t have an account? 
    <Text onPress={()=>navigation.navigate('SignUp')} style={{
      fontFamily:Font.Poppins700,
      fontSize:scale(15),
      color:Color.TextColor,
     
    }}> Sign up</Text>
    
    </Text>
   </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})