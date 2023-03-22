import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { scale, verticalScale } from 'react-native-size-matters'
import { Font } from '../../utils/font'
import { Color } from '../../utils/Colors'

const EventScreen = () => {
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:'white'
    }}>
        <CustomHeader text={'View Event'}image1={(require('../../assets/images/vector1.png'))}image2={(require('../../assets/images/bookmark.png'))} />
       
        <View style={{
            width:'90%',
            height:'20%',
            alignSelf:'center',
            overflow: 'hidden',
            borderRadius: 10,
            marginTop:'6%'

        }}>
            <Image source={require('../../assets/images/EventScreenImage1.png')} style={{
            width:'100%',
            height:'100%',
             }}
             resizeMode='cover'
             />
        
        </View>
        <View style={{
           
        }}>
        <Text  style={{
      fontFamily:Font.Poppins700,
      fontSize:scale(20),
      color:Color.TextColor,
      marginTop:'8%',
      marginLeft:'5%'
     }}>
        Abuja Special Holy Ghost Congress
     </Text>
</View>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
      }}>
        <Text style={styles.textStyle}> June 22, 2023 - June 24, 2023</Text>
        <Text style={styles.textStyle}>.</Text>
        <Text style={styles.textStyle}>4PM -7PM WAT</Text>
      </View>
    <View style={{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'5%'
    }}>
       <Text style={{
         fontFamily:Font.Poppins400,
         fontSize:scale(15),
         color:Color.TextLightColor,
         marginLeft:'2%'
       }}>
       The Abuja Special Holy Ghost Service is an annual gathering of the church in the FCT and environs where prayers are offered for the country and the church in particular. Ministering is Pastor E.A. Adeboye and other anointed ministers of God.
       </Text>
    </View>
   
   <View style={{
    width:'100%',
    marginTop:'4%',
    height:'4%',
    backgroundColor:'rgba(56, 125, 229, 0.07)'
   }}>

   </View>
   <View style={{
    marginLeft:'5%',
    marginTop:'2%'
   }}>
   <Text  style={{
      fontFamily:Font.Poppins600,
      fontSize:scale(22),
      color:Color.TextColor,
    }}> Location
    </Text>
  </View>
 <View  style={{
    marginLeft:'6%'
 }}>
 <Text  style={{
      fontFamily:Font.Poppins700,
      fontSize:scale(15),
      color:Color.TextLightColor,
    }}>Keffi 
    </Text>
    <Text  style={{
      fontFamily:Font.Poppins400,
      fontSize:scale(15),
      color:Color.TextLightColor,
     }}>KM 23, Auta-Gurku Village, Abuja-Keffi Expressway, Nasarawa State, Nigeria. 
    </Text>
 </View>
 <View style={{
            width:'90%',
            height:'8%',
            alignSelf:'center',
            overflow: 'hidden',
            borderRadius: 10,
            marginTop:'6%',
            
             }}>
            <Image source={require('../../assets/images/EventScreenImage2.png')} style={{
            width:'100%',
            height:'100%',
             }}
             resizeMode='contain'
             />
        
        </View>
      
        
      
    </SafeAreaView>
  )
}

export default EventScreen

const styles = StyleSheet.create({

    textStyle:{
       
            fontFamily:Font.Poppins300,
            fontSize:scale(12),
            color:Color.TextColor,
        marginTop:'3%'}
})