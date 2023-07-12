import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {scale, verticalScale} from 'react-native-size-matters'
import Modal from 'react-native-modal'
import LottieView from 'lottie-react-native'
import { useSelector } from 'react-redux'
import { Color } from '../../utils/Colors'
import { Font } from '../../utils/font'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const NoInternetModal = (props) => {
    const Theme = useSelector(state => state.mode)
  return (
    <Modal
    backdropOpacity={0}
    onBackdropPress={props.onBackdropPress}
    isVisible={props.isVisible}
    animationIn="lightSpeedIn" // Set the animationIn property to slideInDown
    animationInTiming={400} // Adjust the animationInTiming value as needed
    animationOut="lightSpeedOut" // Set the animationOut property to slideOutUp
    animationOutTiming={400} // Adjust the animationOutTiming value as needed
    style={{
      flex: 1,
      justifyContent: 'flex-end',
    }}>
        <View style={{
            height: verticalScale(50),
            backgroundColor: Theme === 'dark' ? Color.White : Color.DarkTheme,
            borderRadius:scale(25),
            bottom: scale(20),
            justifyContent: 'center',
            alignItems: 'center'
            }}>
        <Text style={{
            color: Theme === 'dark' ? Color.DarkBorderColor : Color.White,
            fontSize: scale(17),
            fontFamily: Font.Inter700
        }}>
            No Internet Connection
        </Text>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    ModalMain: {
      height: verticalScale(70),
      // backgroundColor: '#435CA8',
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: scale(20),
      flexDirection: 'row',
    },
  })
export default NoInternetModal
