import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  useColorScheme,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import {Color} from '../utils/Colors'

const ReadNavigator = (props) => {
  const Theme = useColorScheme() === 'dark'

  return (
    <View
      style={[
        styles.container,
        props.reStyle,
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
      ]}>
      <View style={styles.BoxStyle}>
        <TouchableOpacity onPress={props.onPressTab} style={styles.tabButton}>
          <FontAwesome5 name="list-ul" size={24} color="#8E8E93" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Feather name="moon" size={24} color="#374957" />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressModal} style={styles.tabButton}>
          <MaterialCommunityIcons name="nut" size={scale(24)} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(85),
  },
  BoxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(40),
    marginTop: verticalScale(10),
  },
  tabButton: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
})

export default ReadNavigator
