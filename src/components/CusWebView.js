import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar,Text, View,use, ActivityIndicator} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { WebView } from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Font } from '../utils/font';
import { Color } from '../utils/Colors';

const CusWebView = ({route,navigation}) => {
    const { link } = route.params;
    const [isLoadong, setLoading] = useState(false);

 return(
    <SafeAreaView  style={{ flex: 1 }}>
      <StatusBar translucent={false}/>
      <View style={styles.Row}>
      <AntDesign name='arrowleft' size={scale(18)} color='#fff' onPress={() => navigation.goBack()}/>
      {/* <Text style={styles.Text}>{link}</Text> */}
      </View>
     <WebView source={{ uri: link }} onLoad={console.log('loading')} onLoadStart={(syntheticEvent) => {
                    setLoading(true);
                }}  onLoadEnd={(syntheticEvent) => {
                    setLoading(false);
                }}/>
     {isLoadong && (
      <View style={{
         height: '100%',
         width: '100%',
         position: 'absolute',
         justifyContent: 'center',
         alignItems: 'center',
         zIndex: 99
      }}>
         <ActivityIndicator
         color="#234356"
         size="large"
         style={styles.loading}
         />
      </View>
            )}
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
       // paddingBottom:moderateScale(10)
    },
    Text:{
       color:'#fff',
    marginHorizontal:scale(20),
    fontFamily:Font.Poppins500
 }
 })
export default CusWebView
