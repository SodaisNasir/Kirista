import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  use,
  Image,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {WebView} from 'react-native-webview';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Font} from '../utils/font';
import {Color} from '../utils/Colors';
import {useSelector} from 'react-redux';
const AdvWebView = ({route, navigation}) => {
  const {link} = route.params;
  const Theme = useSelector(state => state.mode);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
      }}>
      <StatusBar
        translucent={false}
        backgroundColor={Theme === 'dark' ? Color.DarkTheme : Color.White}
      />
      <View
        style={[
          styles.Row,
          {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
        ]}>
        <View style={{flex: 1}}>
          <Fontisto
            name="close-a"
            size={scale(18)}
            color={Theme === 'dark' ? Color.White : Color.DarkTheme}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            flex: 1.2,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              width: Theme === 'dark' ? scale(35) : scale(30),
              height: Theme === 'dark' ? scale(35) : scale(23),
            }}>
            <Image
              source={
                Theme === 'dark'
                  ? require('../assets/icons/Kirista-Logo.png')
                  : require('../assets/icons/krista_main_dark.png')
              }
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </View>
      </View>
      <WebView source={{uri: link}} onLoad={console.log('loading')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between',
    height: verticalScale(50),
    backgroundColor: Color.UnderInputColor,
    paddingHorizontal: 20,
  },
  Text: {
    color: '#fff',
    marginHorizontal: scale(20),
    fontFamily: Font.Poppins500,
  },
});

export default AdvWebView;
