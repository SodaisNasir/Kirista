import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  useColorScheme,
} from 'react-native'
import React from 'react'
import {Color} from '../../utils/Colors'
import {SafeAreaView} from 'react-native-safe-area-context'
import {scale, verticalScale} from 'react-native-size-matters'
import {Font} from '../../utils/font'
import Header from '../../components/Header'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const FeaturedParishes = (props) => {
  const Theme = useColorScheme() === 'dark'

  const data = [
    {
      id: 1,
      title: 'RCCG',
      manual: 'Central Parish',
      image: require('../../../src/assets/images/parishsmall_1.png'),
      country: 'Abuja',
    },

    {
      id: 2,
      title: 'RCCG',
      manual: 'Precious Ambassadors',
      image: require('../../../src/assets/images/parishsmall_2.png'),
      country: 'Ghana',
    },

    {
      id: 3,
      title: 'RCCG',
      manual: 'Salvation Centre',
      image: require('../../../src/assets/images/parishsmall_3.png'),
      country: 'Togo',
    },

    {
      id: 4,
      title: 'RCCG',
      manual: 'Salvation Centre',
      image: require('../../../src/assets/images/parishsmall_3.png'),
      country: 'Togo',
    },
    {
      id: 5,
      title: 'RCCG',
      manual: 'Precious Ambassadors',
      image: require('../../../src/assets/images/parishsmall_2.png'),
      country: 'Ghana',
    },
    {
      id: 6,
      title: 'RCCG',
      manual: 'Salvation Centre',
      image: require('../../../src/assets/images/parishsmall_3.png'),
      country: 'Togo',
    },
  ]

  return (
    <SafeAreaView
      style={[
        styles.Container,
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
      ]}>
      <Header text={'Featured Parishes'} />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(95)
                    : verticalScale(120),
                flexDirection: 'row',
                marginHorizontal: verticalScale(20),
                overflow: 'hidden',
                borderBottomWidth: 1,
                borderColor: Color.BorderColor,
              }}>
              <View
                style={{
                  flex: w >= 768 && h >= 1024 ? 0.9 : 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: w >= 768 && h >= 1024 ? '60%' : '100%',
                    width: scale(90),
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={item.image}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: w >= 768 && h >= 1024 ? 3 : 2.1,
                  paddingHorizontal:
                    w >= 768 && h >= 1024
                      ? verticalScale(15)
                      : verticalScale(15),
                  marginVertical: verticalScale(25),
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      styles.TitleStyle,
                      {
                        color: Theme ? Color.White : Color.DarkTextColor,
                      },
                    ]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      {
                        color: Theme ? Color.White : Color.DarkTextColor,
                        bottom: scale(3),
                      },
                      styles.TitleStyle,
                    ]}>
                    {item.manual}
                  </Text>
                </View>
                <View
                  style={{
                    height:
                      w >= 768 && h >= 1024 ? verticalScale(20) : scale(40),
                    justifyContent: 'center',
                    right: scale(2),
                  }}>
                  <Text
                    style={[
                      styles.CountryStyle,
                      {
                        color: Theme
                          ? Color.BoldTextColor
                          : Color.BoldTextColor,
                      },
                    ]}>
                    {' '}
                    {item.country}
                  </Text>
                </View>
              </View>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default FeaturedParishes

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  CountryStyle: {
    // color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
  },
})
