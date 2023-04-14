import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  useColorScheme
} from 'react-native'
import React from 'react'
import {Color} from '../../utils/Colors'
import {SafeAreaView} from 'react-native-safe-area-context'
import {scale, verticalScale} from 'react-native-size-matters'
import {Font} from '../../utils/font'
import Header from '../../components/Header'
import {useNavigation} from '@react-navigation/native'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const PopularBooks = (props) => {
  const Theme = useColorScheme() === 'dark';
  const navigation = useNavigation()
  const data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      year: '2023',
    },

    {
      id: 2,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },

    {
      id: 3,
      title: 'Sunday School Teachers',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      year: '2023',
    },

    {
      id: 4,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },
    {
      id: 5,
      title: 'Sunday School Teachers',
      manual: 'Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },
  ]

  return (
    <SafeAreaView style={[{backgroundColor: Theme? Color.DarkTheme : Color.White},styles.Container]}>
      <Header text={'Popular Books'} />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ViewManual')
              }}>
              <View
                style={{
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(95)
                      : verticalScale(120),

                  flexDirection: 'row',
                  marginHorizontal: verticalScale(20),

                  overflow: 'hidden',
                  borderBottomWidth: 0.5,

                  borderColor: Color.BorderColor,
                }}>
                <View
                  style={{
                    flex: 1,

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: w >= 768 && h >= 1024 ? '65%' : '100%',
                      width: scale(100),
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
                <View style={{flex: 2.3, marginVertical: verticalScale(25)}}>
                  <View
                    style={{
                      // height: verticalScale(30),

                      // backgroundColor: 'yellow',
                      justifyContent: 'center',
                    }}>
                    <Text style={[{color: Theme? Color.White : Color.DarkTextColor},styles.TitleStyle]}>{item.title}</Text>
                    <Text
                      style={[
                        {lineHeight: verticalScale(15)},
                        styles.TitleStyle,
                      ]}>
                      {item.manual}
                    </Text>
                  </View>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height:
                        w >= 768 && h >= 1024 ? verticalScale(20) : scale(40),
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.YearStyle}> {item.year}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default PopularBooks

const styles = StyleSheet.create({
  Container: {
    flex: 1,
   
  },
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    // borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  YearStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(10),
  },
  TitleStyle: {
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins600,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
})
