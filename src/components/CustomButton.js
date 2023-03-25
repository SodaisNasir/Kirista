import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../assets/fonts/PoppinsFont';
// import Color from '../Assets/Color';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomButton = props => {
  return (
    <View
      style={[
        styles.ButtonContainer,
        props.stylz,
        props.ButtonContainerRestytle,
      ]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.ButtonStyles, props.BGColor, props.restyle]}>
        <Text style={[styles.ButtonText, props.Textalig]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: verticalScale(15),
  },
  ButtonStyles: {
    height: w >= 768 && h >= 1024 ? verticalScale(32) : verticalScale(50),
    width: '100%',
    backgroundColor: 'rgba(56, 125, 229, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    flexDirection: 'row',
  },
  ButtonText: {
    color: 'white',
    // textTransform: 'capitalize',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(16),
    fontFamily: Font.Poppins700,
  },
});

export default CustomButton;
