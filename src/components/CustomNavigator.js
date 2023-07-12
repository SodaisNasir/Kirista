import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  useColorScheme,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import {Color} from '../utils/Colors'
import {scale, verticalScale, moderateScale, moderateVerticalScale} from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const CustomNavigator = (props) => {
  const Theme = useSelector(state => state.mode)
  return (
    <View
      style={{
        height: verticalScale(70),
        backgroundColor: Theme === 'dark' ? Color.DarkThemeCustomNavigator : Color.White,
        justifyContent: 'center',
        borderColor: Theme === 'dark' ? '#091E3B'  : Color.BorderColor,
        borderTopWidth:1
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: w >= 768 && h >= 1024 ? '30%' : '55%',
          alignSelf: 'center',
          paddingBottom: moderateVerticalScale(5),
          marginVertical: verticalScale(20),
        }}>


          <TouchableOpacity onPress={props.onPressLeft}>
        <View
          style={[
            styles.ArrowStyle,
            {
              borderColor: Theme === 'dark' ? Color.White : Color.Black,
            },
          ]}>
          <Ionicons
            name="chevron-back"
            size={w >= 768 && h >= 1024 ? scale(12) : scale(17)}
            color={Theme === 'dark' ? Color.White : Color.Black}
          />
        </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={props.onPressFresh}>
        <View
          style={[
            styles.LoadStyle,
            {
              borderColor: Theme === 'dark' ? Color.White : Color.Black,
            },
          ]}>
          <AntDesign
            name="reload1"
            size={w >= 768 && h >= 1024 ? scale(12) : scale(17)}
            color={Theme === 'dark' ? Color.White : Color.Black}
          />
        </View>
          </TouchableOpacity>

{
  !props.forwrd ?

  <TouchableOpacity onPress={props.onPressRight}>
        <View
          style={[
            styles.ArrowStyle,
            {
              borderColor: Theme === 'dark' ? Color.White : Color.Black,
            },
          ]}>
          <Ionicons
            name="chevron-forward"
            size={w >= 768 && h >= 1024 ? scale(12) : scale(17)}
            color={Theme === 'dark' ? Color.White : Color.Black}
            />
        </View>
          </TouchableOpacity>
          :  <View
          style={{
            borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(8),
    height: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30),
    width: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
          }}>
          {/* <Ionicons
            name="chevron-forward"
            size={w >= 768 && h >= 1024 ? scale(12) : scale(17)}
            color={Theme === 'dark' ? Color.White : Color.Black}
            /> */}
        </View>
          }


      </View>
    </View>
  )
}

export default CustomNavigator

const styles = StyleSheet.create({
  LoadStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(10),
    borderWidth: scale(1.2),
    height: w >= 768 && h >= 1024 ? verticalScale(22) : verticalScale(35),
    width: w >= 768 && h >= 1024 ? verticalScale(22) : verticalScale(35),
    justifyContent: 'center',
    alignItems: 'center',

  },
  ArrowStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(8),
    borderWidth: scale(1.2),
    height: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30),
    width: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
