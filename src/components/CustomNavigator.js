import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  useColorScheme,
} from 'react-native'
import React from 'react'
import {Color} from '../utils/Colors'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const CustomNavigator = (props) => {
  const Theme = useColorScheme() === 'dark'
  return (
    <View
      style={{
        height: verticalScale(90),
        backgroundColor: Theme ? Color.DarkThemeCustomNavigator : Color.White,
        justifyContent: 'center',
        borderColor: Theme ? '#091E3B'  : Color.BorderColor,
        borderTopWidth:1
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: w >= 768 && h >= 1024 ? '30%' : '55%',
          alignSelf: 'center',

          // paddingHorizontal:verticalScale(30),
          paddingBottom: verticalScale(5),
          marginVertical: verticalScale(20),
        }}>
        <View
          style={[
            styles.ArrowStyle,
            {
              borderColor: Theme ? Color.White : Color.Black,
            },
          ]}>
          <Ionicons
            name="chevron-back"
            size={w >= 768 && h >= 1024 ? scale(10) : scale(20)}
            color={Theme ? Color.White : Color.Black}
          />
        </View>
        <View
          style={[
            styles.LoadStyle,
            {
              borderColor: Theme ? Color.White : Color.Black,
            },
          ]}>
          <AntDesign
            name="reload1"
            size={w >= 768 && h >= 1024 ? scale(10) : scale(20)}
            color={Theme ? Color.White : Color.Black}
          />
        </View>
        <View
          style={[
            styles.ArrowStyle,
            {
              borderColor: Theme ? Color.White : Color.Black,
            },
          ]}>
          <Ionicons
            name="chevron-forward"
            size={w >= 768 && h >= 1024 ? scale(10) : scale(20)}
            color={Theme ? Color.White : Color.Black}
          />
        </View>
      </View>
    </View>
  )
}

export default CustomNavigator

const styles = StyleSheet.create({
  LoadStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(10),
    borderWidth: 2,
    height: w >= 768 && h >= 1024 ? verticalScale(19) : verticalScale(35),
    width: w >= 768 && h >= 1024 ? verticalScale(19) : verticalScale(35),
    justifyContent: 'center',
    alignItems: 'center',

  },
  ArrowStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(8),
    borderWidth: scale(1.5),
    height: w >= 768 && h >= 1024 ? verticalScale(17) : verticalScale(30),
    width: w >= 768 && h >= 1024 ? verticalScale(17) : verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
