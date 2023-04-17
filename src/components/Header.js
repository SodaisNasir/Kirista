import {StyleSheet, Text, View, Dimensions, useColorScheme} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {scale, verticalScale} from 'react-native-size-matters'
import {Font} from './../utils/font'
import {Color} from './../utils/Colors'
import {useNavigation} from '@react-navigation/native'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

export default function Header(props) {
  const Theme = useColorScheme() === 'dark'
  const navigation = useNavigation()
  return (
    <View
      style={[
        {backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor},
        styles.AuthHeaderStyle,
      ]}>
      <View
        style={{
          flexDirection: 'row',

          marginBottom:
            w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(10),
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
        }}>
        <View style={styles.NavigatorStyle}>
          <AntDesign
            name="arrowleft"
            size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
            color={Theme ? Color.White : Color.Black}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            // height: '12%',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {color: Theme ? Color.White : Color.Black},
              styles.WelcomeText,
            ]}>
            {props.text}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    height: verticalScale(80),
    justifyContent: 'flex-end',
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(11) : scale(18),
    fontFamily: Font.Poppins500,
    // color: Color.Black,
    // marginBottom: scale(5),
    // backgroundColor: 'red',
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(10),
  },
  NavigatorStyle: {
    //

    justifyContent: 'center',
    // marginTop: scale(10),
  },
})
