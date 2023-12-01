import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import {WebView} from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../utils/font';
import {Color} from '../utils/Colors';
import CustomNavigator from './CustomNavigator';
import {useSelector} from 'react-redux';

const CusWebView = ({route, navigation}) => {
  const {link} = route.params;
  const [isLoading, setLoading] = useState(true);
  const {data, setData} = useState();
  console.log('link', link);
  const Theme = useSelector(state => state.mode);
  const webviewRef = useRef(null);

  const handleLoadEnd = () => {
    setLoading(false);
  };

  const onShouldStartLoadWithRequest = (request) => {
    const {url, navigationType} = request;

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
          styles.row,
          {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
        ]}>
        <View style={{flex: 1}}>
          <AntDesign
            name="arrowleft"
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
      <WebView
        source={{uri: link}}
        ref={webviewRef}
        onLoadEnd={handleLoadEnd}
        // onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        // setSupportMultipleWindows={false}
        originWhitelist={['*']} // Whitelist all URLs
        onLoad={console.log('loading')} 
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
          forwrd={true}
        />
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
    // justifyContent:'space-between',
    height: verticalScale(50),
    backgroundColor: Color.UnderInputColor,
    paddingHorizontal: 20,
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
