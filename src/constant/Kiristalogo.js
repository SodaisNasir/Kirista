import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';


const Kiristalogo = () => {
  return (
    <View style={{
        alignItems:'center',
        justifyContent:'center',
        height:verticalScale(70),
        width:'50%',
        alignSelf:'center'
    }}>
      <Image source={require('../assets/images/logo.png')} 
      style={{
       width:'100%',
       height:'100%'
      }}/>
    </View>
  )
}

export default Kiristalogo

