import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../assets/fonts/PoppinsFont';
// import Color from '../Assets/Color';

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
    marginVertical: verticalScale(15),
  },
  ButtonStyles: {
    height: verticalScale(50),
    width: '100%',
    backgroundColor: 'rgba(56, 125, 229, 1)',
    alignItems: 'center',
    justifyContent: 'center',
<<<<<<< Updated upstream
    borderRadius: 18,
=======
    borderRadius: scale(15),
>>>>>>> Stashed changes
    flexDirection: 'row',
  },
  ButtonText: {
    color: 'white',
    // textTransform: 'capitalize',
    fontSize: scale(16),
    fontWeight: '900',
    fontFamily: Font.Poppins700,
  },
});

export default CustomButton;
