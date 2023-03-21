import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import Kiristalogo from '../../constant/Kiristalogo'
import { Font } from '../../assets/fonts/PoppinsFont';
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo'
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton';
import CustomSmallButton from '../../components/CustomSmallButton';
import InvertCustomButton from '../../components/InvertCustomButtom';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Color } from '../../utils/Colors';
const OverBoard = ({navigation}) => {
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'EN', value: 'EN'},
    {label: 'UR', value: 'UR'}
  ]);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:'8%',
            marginHorizontal:'5%'
          }}>
          <TouchableOpacity style={{
            width:'18%',
            height:'120%',
            backgroundColor:'rgba(56, 125, 229, 1)',
            borderRadius:30,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
           
          }}>
                <Text style={{
                  fontFamily:Font.Poppins600,
                  color:'white',
              
                }}>
                  EN
                </Text>
                <AntDesign name='down' size={20} color={'white'} style={{
                  marginTop:'-3%'
                }}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
                  fontFamily:Font.Poppins700,
                  color:'rgba(56, 125, 229, 1)',
                  textDecorationLine:'underline',
                  fontSize:scale(15)
              }}>
                  Skip
                </Text></TouchableOpacity>
          </View>
          
      <View style={{
        marginTop:'15%'
       }}>
        <Kiristalogo/>
       </View>
       <View style={{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'10%'
       }}>
        <Image source={require('../../assets/images/first.png')}/>
       </View>

       <View style={{
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        marginTop:'10%',
        paddingHorizontal:15,
      
       }}>
        <Image source={require('../../assets/images/second.png')} />
        <Image source={require('../../assets/images/third.png')}  />
        <Image source={require('../../assets/images/fourth.png')} />
       </View>

       <View style={{
        marginTop:'5%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:'2%'
       }}>
        <CustomSmallButton text={'#Parishes'}/>
        <CustomSmallButton text={'#Books'}/>
        <CustomSmallButton text={'#Event'}/>
        <CustomSmallButton text={'#More'}/>
         </View>
         <View style={{
            alignItems:'center',
            justifyContent:'center',
            marginTop:'15%'
         }}>
     <Text style={{
        
        fontFamily:Font.Poppins700,
        fontSize:24,
        color:'black'
      }}>
      Welecome,Brethern
      </Text>
     </View>
     <View style={{
        marginHorizontal:'5%'
     }}>
        <CustomButton text={'Create an account'} onPress={()=>navigation.navigate('SignUp')}/>
   </View >
     <View style={{
        marginHorizontal:'5%',
        marginTop:'-4%'
     }}>
     <InvertCustomButton text={'Sign In'} onPress={()=>navigation.navigate('Login')}/>
     </View>

        <Text style={{
            width: '90%',
            alignSelf: 'center',
            fontFamily:Font.Poppins500,
            fontSize:14,
            textAlign:'center',
            color:Color.TextColor
        }}>
        By continuing, you agree the 
        <TouchableOpacity>
               <Text style={{top : verticalScale(3),color:'rgba(56, 125, 229, 1)',}}> Terms of Use</Text> 
        </TouchableOpacity> and
        </Text>
        <TouchableOpacity 
        style={{}}
        >
            <Text style={{top : verticalScale(2),alignSelf:'center', color:'rgba(56, 125, 229, 1)',fontFamily:Font.Poppins400,marginTop:'-2%',
            fontSize:14,
            textAlign:'center'}}>
            Privacy Policy
            </Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default OverBoard

