import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Kiristalogo = () => {
  const zoomIn = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  const Theme = useColorScheme() === 'dark';
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(75),
        width: w >= 768 && h >= 1024 ? '40%' : '60%',
        alignSelf: 'center',
      }}>
      <Animatable.Image
        iterationDelay={700}
        duration={500}
        animation={zoomIn}
        resizeMode={'contain'}
        
        source={ Theme ? require('../assets/images/krista_main_dark.png') : require('../assets/images/krista_main.png')  }
        style={{
          width: '100%',
          height: '100%',
        }}
      />

    </View>
  );
};

export default Kiristalogo;
