import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, moderateScale, verticalScale} from 'react-native-size-matters';


const Kiristalogo = () => {
  return (
    <View style={{
        alignItems:'center',
        justifyContent:'center'
    }}>
      <Image source={require('../assets/images/logo.png')} 
      style={{ width:'50%',
        height:verticalScale(70)
      }}/>
    </View>
  )
}

export default Kiristalogo

