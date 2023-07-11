import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale, verticalScale } from 'react-native-size-matters';
import { Font } from '../utils/font';
import { Color } from '../utils/Colors';

const CusWebView = ({ route, navigation }) => {
  const { link } = route.params;
  const [isLoading, setLoading] = useState(true);

  const handleLoadEnd = () => {
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} />
      <View style={styles.row}>
        <AntDesign name='arrowleft' size={scale(18)} color='#fff' onPress={() => navigation.goBack()} />
      </View>
      <WebView
        source={{ uri: link }}
        onLoadEnd={handleLoadEnd}
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
