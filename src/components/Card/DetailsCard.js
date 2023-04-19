import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
  Image,
} from 'react-native'
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters'
import {Color} from '../../utils/Colors'
import {Font} from '../../utils/font'

const DetailsCard = (props, {data}) => {
  const Theme = useColorScheme() === 'dark'

  const w = Dimensions.get('window').width
  const h = Dimensions.get('window').height

  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('EventScreen')}
      style={[
        props.MainBoxRestyle,
        {
          flexDirection: 'row',
          marginHorizontal: verticalScale(20),
          marginTop: verticalScale(15),
          borderBottomWidth: 2,
          paddingBottom: verticalScale(15),
          borderBottomColor: '#fff',
        },
      ]}>
      {/* <View
        style={{
          flex: w >= 768 && h >= 1024 ? 0.9 : 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}> */}
      <View
        style={{
          height: w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(80),
          width: scale(100),
          borderRadius: scale(10),
          //
        }}>
        <Image
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            borderRadius: scale(10),
          }}
          source={props.source}
        />
        {/* </View> */}
      </View>

      <View
        style={{
          flex: w >= 768 && h >= 1024 ? 3 : 2.1,
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(15),
          //   marginVertical: verticalScale(25),
        }}>
        <View
          style={{
            // height: verticalScale(30),

            // backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {color: Theme ? Color.White : Color.DarkTextColor},
              styles.TitleStyle,
            ]}>
            {props.title}
          </Text>
          <Text style={[{bottom: scale(3)}, styles.TitleStyle]}>
            {props.manual}
          </Text>
        </View>
        <View
          style={{
            // height:
            //   w >= 768 && h >= 1024 ? verticalScale(20) : scale(40),
            justifyContent: 'space-around',
            right: scale(2),
            //   flexDirection:'row',
          }}>
          {props.TimeTrue ? (
            <Text style={[styles.DateStyle]}>
              {' '}
              {props.date}
              {'   '}
              <Text
                style={{
                  color: Color.BoldTextColor,
                  fontFamily: Font.Poppins700,

                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                }}>
                .
              </Text>
              {'   '}
              {props.time}{' '}
            </Text>
          ) : null}
          {props.PlaceTrue ? (
            <Text style={[styles.DateStyle]}>{props.Place}</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default DetailsCard

const styles = StyleSheet.create({})
