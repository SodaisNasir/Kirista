import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar,Text, View,Image} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { WebView } from 'react-native-webview';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Font } from '../utils/font';
import { Color } from '../utils/Colors';
const AdvWebView = ({route,navigation}) => {
    const { link } = route.params;
 return(
    <SafeAreaView  style={{ flex: 1 }}>
      <StatusBar translucent={false} backgroundColor={Color.DarkTheme} />
      <View style={styles.Row}>
      <Fontisto name='close-a' size={scale(18)} color='#fff' onPress={() => navigation.goBack()}/>
      <Image resizeMode='contain' style={{width:100,height:100}} source={require('../assets/images/krista_main_dark.png')}/>
      {/* <Text style={styles.Text}>{link}</Text> */}
      </View>
     <WebView source={{ uri: link }} onLoad={console.log('loading')}/>
     </SafeAreaView>
     )
}

const styles = StyleSheet.create({
   Row:{
      flexDirection:'row',
      alignItems:'center',
      height:verticalScale(50),
      backgroundColor:Color.UnderInputColor,
      paddingHorizontal:20,
      justifyContent: 'space-between',
   },
   Text:{
      color:'#fff',
   marginHorizontal:scale(20),
   fontFamily:Font.Poppins500
}
})

export default AdvWebView
