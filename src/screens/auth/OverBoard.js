import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View ,Dimensions ,SafeAreaView} from 'react-native'
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


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


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
            marginTop:w >= 768 && h >= 1024 ? '6%' : '10%',
            marginHorizontal:'5%'
          }}>
          <TouchableOpacity style={{
            width:w >= 768 && h >= 1024 ? scale(38)  : scale(50),
            height:w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(38),
            backgroundColor:'rgba(56, 125, 229, 1)',
            borderRadius:scale(15),
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            
           
          }}>

            <View
            style={{flexDirection:'row',
          
         
            
          }}
            >

        
                <Text style={[ 
                  
                 {fontSize : w >= 768 && h >= 1024 ? scale(10) : scale(13)
                  ,
                  fontFamily:Font.Poppins600,
                  color:'white',
                  marginRight:scale(2)
               }

                  ]
                }>
                  EN
                </Text>
                <AntDesign name='down' size={w >= 768 && h >= 1024 ? scale(11)  : scale(16)} color={'white'} style={{
                   alignSelf:'center'
                  
                }}/>
                    </View>

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
        marginTop:'10%'
       }}>
        <Kiristalogo/>
       </View>
      

       <View style={{
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
        marginTop: 768 && h >= 1024 ? '10%' :'18%',
        paddingHorizontal: 768 && h >= 1024 ? scale(50)  : scale(30),
      
       }}>
        <View style={{
          width:w >= 768 && h >= 1024 ? scale(90)  : scale(85),
          height:w >= 768 && h >= 1024 ? verticalScale(80)  : verticalScale(80),
         
        }}>
        <Image source={require('../../assets/images/second.png')} style={{
          width:'100%',
          height:'100%'
        }} 
        resizeMode={'contain'}
        /></View> 
        <View style={{
          width:w >= 768 && h >= 1024 ? scale(45)  : scale(45),
          height:w >= 768 && h >= 1024 ? scale(50)  : scale(60),
        }}>
        <Image source={require('../../assets/images/third.png')} style={{
          width:'100%',
          height:'100%'
        }} 
        resizeMode={'contain'}
        /></View> 
        <View style={{
          width:w >= 768 && h >= 1024 ? scale(85)  : scale(85),
          height:w >= 768 && h >= 1024 ? scale(55)  : scale(60),
        }}>
        <Image source={require('../../assets/images/fourth.png')} style={{
          width:'100%',
          height:'100%'
        }}
        resizeMode={'contain'}
        /></View> 

       </View>

       <View style={{
        
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:w >= 768 && h >= 1024 ? scale(50)  : scale(40),
       }}>
        <CustomSmallButton text={'#Parishes'}/>
        <CustomSmallButton text={'#Books'}/>
        <CustomSmallButton text={'#Event'}/>
        <CustomSmallButton text={'#More'}/>
         </View>
         <View style={{
            alignItems:'center',
            justifyContent:'center',
            marginTop:w >= 768 && h >= 1024 ? '23%' :'22%',
         }}>
     <Text style={{
        
        fontFamily:Font.Poppins700,
        fontSize:768 && h >= 1024 ? scale(14)  : scale(23),
        color:'black'
      }}>
      Welcome,Brethern
      </Text>
     </View>
     <View style={{
        marginHorizontal:'5%',
        marginTop:'3%'
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
            <Text style={{top : verticalScale(2),alignSelf:'center', color:'rgba(56, 125, 229, 1)',fontFamily:Font.Poppins400,
            fontSize:14,
            textAlign:'center'}}>
            Privacy Policy
            </Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default OverBoard

