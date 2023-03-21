import { StyleSheet, Text, View,SafeAreaView, TextComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import Kiristalogo from '../../constant/Kiristalogo'
import { Font } from '../../assets/fonts/PoppinsFont';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'
import { Color } from '../../utils/Colors';
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import PhoneInput from '../../components/PhoneInput';
import Countrycode from '../../../Countrycode';
const SignUp = ({navigation}) => {
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
            marginTop:'5%'
         }}>
     <Text style={{
        fontFamily:Font.Poppins700,
        fontSize:32,
        color:'black'
      }}>
     Create Account
      </Text>
      </View>

       <CustomInput  text={'Full Name'} placeholder
      ={'Full Name'}/>
      <View>

      <PhoneInput/>
      </View>
      
       <CustomInput  text={'Email Address'} placeholder
      ={'Email Address'}/>
      <CustomInput  text={'Password'} placeholder
      ={'Password'} image={require('../../assets/images/Eye.png')}/>
       <View style={{
        marginHorizontal:'5%',
        marginTop:'2%'
     }}>
        <CustomButton text={'Sign up'}/>
   </View >
   <View style={{
    alignItems:'center',
    justifyContent:'center',
    marginTop:'10%'
   }}>
    <Text style={{
      fontFamily:Font.Poppins700,
      fontSize:16,
      color:Color.TextColor
    }}>
    If you have an account, 
    <Text onPress={()=>navigation.navigate('Login')} style={{
      fontFamily:Font.Poppins700,
      fontSize:16,
      color:Color.TextColor,
     
    }}> Sign in</Text>
    
    </Text>
   </View>
      
    </SafeAreaView>
  )
}

export default SignUp

