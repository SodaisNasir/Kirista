import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
// import Color from '../Assets/Color';

const CustomButton = ({text, onPress, stylz, BGColor, Textalig, restyle}) => {
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
    height: scale(50),
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    flexDirection: 'row',
  },
  ButtonText: {
    color: 'white',
    // textTransform: 'capitalize',
    fontSize: moderateScale(18),
    fontWeight: '900',
    fontFamily: 'open sans',
  },
})

export default CustomButton
