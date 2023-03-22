import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Kiristalogo = () => {
  return (
    <View style={{
        alignItems:'center',
        justifyContent:'center',
        height:verticalScale(70),
        width:w >= 768 && h >= 1024 ? '38%'  : '50%',
        alignSelf:'center',
      
    }}>
      <Image 
      resizeMode = {'contain'}
      source={require('../assets/images/logo.png')} 
      style={{
       width: '100%',
       height:'100%',
       
      }}/>
    </View>
  )
}

export default Kiristalogo

