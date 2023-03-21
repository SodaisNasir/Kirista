import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import { Font } from '../assets/fonts/PoppinsFont'
// import Color from '../Assets/Color';

const InvertCoustomButton = ({text, onPress, stylz, BGColor, Textalig, restyle}) => {
  return (
    <View style={[styles.ButtonContainer, stylz]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.ButtonStyles, BGColor, restyle]}>
        <Text style={[styles.ButtonText, Textalig]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  ButtonContainer: {
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(15),
  },
  ButtonStyles: {
    height: scale(40),
    width: '100%',
    borderColor: 'rgba(56, 125, 229, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth:2
  },
  ButtonText: {
    color: 'rgba(56, 125, 229, 1)',
    // textTransform: 'capitalize',
    fontSize: moderateScale(18),
    fontWeight: '900',
    fontFamily: Font.Poppins700,
  },
})

export default InvertCoustomButton
