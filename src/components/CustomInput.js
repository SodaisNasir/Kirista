import React, {forwardRef} from 'react'
import {useController} from 'react-hook-form'
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import {scale, verticalScale} from 'react-native-size-matters'
// import Icon from 'react-native-vector-icons/FontAwesome5'

const CustomInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  })
  return (
    <View style={[styles.field, props.style, props.Hello]}>
      {props.image ? <Image style={styles.image} source={props.image} /> : null}

      <TextInput
        textContentType={props.textContentType}
        value={field.value}
        ref={ref}
        onChangeText={field.onChange}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={'#747688'}
        style={[styles.InputStyles, props.Gapp, props.restyle]}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        textAlignVertical={props.textAlignVertical}
        pattern={props.pattern}
        label={props.label}
        placeholderStyle={props.placeholderStyle}
        fontSize={props.fontSize}
        maxLength={props.maxLength}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        inlineImageLeft={props.inlineImageLeft}
      />
      <TouchableOpacity>
        {/* <Icon
          onPress={props.onPress}
          style={props.PIstylye}
          name={props.PIname}
          size={props.PIsize}
          color={props.PIcolor}
        /> */}
      </TouchableOpacity>
    </View>
  )
})

const styles = StyleSheet.create({
  Inputcontainer: {
    height: scale(150),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  InputStyles: {
    height: scale(55),
    borderWidth: 0.8,
    borderColor: '#E4DFDF',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: verticalScale(20),
    backgroundColor: '#FFF',
    color: 'black',
    elevation: 1,
    marginHorizontal: scale(4),
    shadowColor: 'rgba(0,0,0)',
    shadowOffset: [1, 1],
    shadowRadius: 5,
    shadowOpacity: 0.7,
  },
  Circle: {
    height: scale(10),
    width: scale(10),
    backgroundColor: 'red',
  },
})
export default CustomInput
