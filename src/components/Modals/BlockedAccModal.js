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


const BlockedAccModal = (props) => {
  return (
    <Modal
    backdropOpacity={0.3}
    onBackdropPress={props.onBackdropPress}
    isVisible={props.isVisible}
    animationIn="slideInDown" // Set the animationIn property to slideInDown
    animationInTiming={400} // Adjust the animationInTiming value as needed
    animationOut="slideOutUp" // Set the animationOut property to slideOutUp
    animationOutTiming={400} // Adjust the animationOutTiming value as needed
    style={{
        flex: 1,
        justifyContent: 'flex-start',
      }}>
           <View style={[styles.ModalMain,{
        backgroundColor: Color.White
      }]}>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            // alignItems: 'center',
            paddingLeft: scale(7)
          }}>
          <Text
            style={{
                fontSize: w >= 768 && h >= 1024 ? scale(20) : scale(16),
              color:  Color.Red ,
              textTransform: 'capitalize',
              fontFamily: Font.Poppins600
            }}>
            {props.text}
          </Text>
          <Text
            style={{
                fontSize: w >= 768 && h >= 1024 ? scale(20) : scale(16),
              color:  Color.Red ,
              textTransform: 'capitalize',
              fontFamily: Font.Poppins600
            }}>
            {props.text2}
          </Text>
        </View>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              height: '50%',
              width: '50%',
              backgroundColor: 'white',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              style={{
                height: verticalScale(25),
              }}
              source={require('../Lootie/close.json')}
              autoPlay
              loop
              speed={0.7}
            />
          </TouchableOpacity>
        </View> */}
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
      borderWidth:0.5,
      borderColor: 'black'
    },
  })
export default BlockedAccModal
