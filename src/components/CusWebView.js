import React, { useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ActivityIndicator,Image } from 'react-native';
import { WebView } from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale, verticalScale } from 'react-native-size-matters';
import { Font } from '../utils/font';
import { Color } from '../utils/Colors';
import CustomNavigator from './CustomNavigator';

const CusWebView = ({ route, navigation }) => {
  const { link } = route.params;
  const [isLoading, setLoading] = useState(true);
const {data, setData} = useState()
console.log('link', link)
const webviewRef = useRef(null);

  const handleLoadEnd = () => {
    setLoading(false);
  };


  const onShouldStartLoadWithRequest = (request) => {
    const { url, navigationType } = request;

    if (navigationType === 'click') {
      // Handle link clicks within the WebView
      webviewRef.current.loadRequest(request); // Load the clicked URL within the WebView
      return false; // Prevent the URL from loading externally
    }

    return true; // Allow the WebView to handle other types of navigation
  };

  const refresh = () => {
    webviewRef.current.reload();
  };

  const goBack = () => {
    webviewRef.current.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={Color.DarkTheme} />
      <View style={styles.row}>
        <AntDesign name='arrowleft' size={scale(18)} color='#fff' onPress={() => navigation.goBack()} />
        <Image resizeMode='contain' style={{width:100,height:100}} source={require('../assets/images/krista_main_dark.png')}/>
      </View>
      <WebView
        source={{ uri: link }}
        ref={webviewRef}
        onLoadEnd={handleLoadEnd}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        setSupportMultipleWindows={false}
        originWhitelist={['*']} // Whitelist all URLs
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            color={Color.Main}
            size="large"
            style={styles.loading}
          />
        </View>
      )}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: Color.White,
          }}>
          <CustomNavigator
          onPressLeft={goBack}
          onPressFresh={refresh}
           forwrd={true}/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(50),
    backgroundColor: Color.UnderInputColor,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  loading: {
    marginVertical: 20,
  },
});

export default CusWebView;
