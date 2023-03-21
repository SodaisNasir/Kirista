import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import { Font } from '../assets/fonts/PoppinsFont'
// import Color from '../Assets/Color';

const CustomButton = (props) => {
  return (
    <View style={[styles.ButtonContainer, props.stylz,props.ButtonContainerRestytle]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.ButtonStyles, props.BGColor, props.restyle]}>
          
        <Text style={[styles.ButtonText, props.Textalig]}>{props.text}</Text>
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
    backgroundColor: 'rgba(56, 125, 229, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    flexDirection: 'row',
  },
  ButtonText: {
    color: 'white',
    // textTransform: 'capitalize',
    fontSize: moderateScale(18),
    fontWeight: '900',
    fontFamily: Font.Poppins700,
  },
})

export default CustomButton
