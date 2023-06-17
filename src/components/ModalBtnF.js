import React, {useState, useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
} from 'react-native'
import Modal from 'react-native-modal'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import {Font} from '../utils/font'
import {Color} from '../utils/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomButton from './CustomButton'
import {useNavigation} from '@react-navigation/native'
import { useSelector } from 'react-redux'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const ModalBtnF = (props) => {
    const width = useWindowDimensions().width
    const height = useWindowDimensions().height
    const [selected, setSelected] = useState(props.selected)
    const [selectedId, setSelectedId] = useState(props.selectedId)

    const navigation = useNavigation()
    const Theme = useSelector(state => state.mode)
  return (
    <View style={{}}>
    <TouchableOpacity
      style={{marginBottom: verticalScale(10)}}
      onPress={props.selectPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <Text
            style={[
              styles.SmallTextStyle,
              styles.BigTextStyle,
              {
                color: Theme === 'dark' ? Color.White : Color.Black,
              },
            ]}>
              {props.text}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
          }}>
          <View
            style={{
              height:
                width >= 768 && height >= 1024
                  ? verticalScale(15)
                  : verticalScale(20),
              width:
                width >= 768 && height >= 1024
                  ? verticalScale(15)
                  : verticalScale(20),
              backgroundColor: Color.White,
              borderRadius: scale(50),
              borderColor: Color.Black,
              borderWidth: scale(1.5),
              marginBottom: verticalScale(15),
            }}>
            {selectedId == selected   ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: scale(80),
                }}>
                <View
                  style={{
                    height:
                      width >= 768 && height >= 1024
                        ? verticalScale(7)
                        : verticalScale(10),
                    width:
                      width >= 768 && height >= 1024
                        ? verticalScale(7)
                        : verticalScale(10),
                    backgroundColor:  Color.Black,
                    borderRadius: scale(50),
                  }}
                />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    modalStyling: {
      justifyContent: 'flex-end',
      margin: 0,
    },
  
    modalView: {
      justifyContent: 'center',
      // alignItems: 'center',
      paddingVertical: moderateScale(20),
      width: '100%',
      borderTopRightRadius: w >= 768 && h >= 1024 ? scale(20) : scale(22),
      borderTopLeftRadius: w >= 768 && h >= 1024 ? scale(20) : scale(22),
      backgroundColor: Color.White,
    },
    BigTextStyle: {
      color: Color.DarkTextColor,
      fontFamily: Font.Poppins500,
      fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(18),
      textAlign: 'left',
    },
    SmallTextStyle: {
      color: Color.DarkTextColor,
      fontFamily: Font.Poppins400,
      fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(16),
      textAlign: 'left',
    },
  })
export default ModalBtnF
