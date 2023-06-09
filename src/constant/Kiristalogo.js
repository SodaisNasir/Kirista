import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {verticalScale} from 'react-native-size-matters';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Kiristalogo = () => {
  const Theme = useSelector(state => state.mode)
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(75),
        width: w >= 768 && h >= 1024 ? '40%' : '60%',
        alignSelf: 'center',
      }}>
      <Image
        resizeMode={'contain'}
        source={
          Theme === 'dark'
            ? require('../assets/images/krista_main_dark.png')
            : require('../assets/images/krista_main.png')
        }
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
};

export default Kiristalogo;
