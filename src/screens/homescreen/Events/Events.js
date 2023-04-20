import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from 'react-native'
import React, {useCallback} from 'react'
import {Color} from '../../../utils/Colors'
import {SafeAreaView} from 'react-native-safe-area-context'
import {scale, verticalScale} from 'react-native-size-matters'
import {Font} from '../../../utils/font'
import HomeHeader from '../../../components/HomeHeader'
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import DetailsCard from '../../../components/Card/DetailsCard'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const Events = (props) => {
  const navigation = useNavigation()
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: verticalScale(80),
          justifyContent: 'space-around',
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
      })
    }),
  )

  const Theme = useColorScheme() === 'dark'

  // const data = [
  //   {
  //     id: 1,
  //     title: 'West Coast 2 Regional ',
  //     manual: 'Convention',
  //     image: require('../../../assets/images/event_1.png'),
  //     date: 'June 22, 2023.',
  //     time: '4PM',
  //   },

  //   {
  //     id: 2,
  //     title: 'West Coast 3 Regional ',
  //     manual: 'Convention',
  //     image: require('../../../assets/images/event_2.png'),
  //     date: 'July 7, 2023.',
  //     time: '4PM',
  //   },

  //   {
  //     id: 3,
  //     title: 'West Coast 1 Regional ',
  //     manual: 'Convention',
  //     image: require('../../../assets/images/event_3.png'),
  //     date: 'July 21, 2023.',
  //     time: '4PM',
  //   },

  //   {
  //     id: 4,
  //     title: 'Abuja Special Holy Ghost',
  //     manual: 'Congress',
  //     image: require('../../../assets/images/event_4.png'),
  //     date: 'November 09, 2023',
  //     time: '4PM',
  //   },
  //   {
  //     id: 5,
  //     title: 'West Coast 1 Regional ',
  //     manual: 'Convention',
  //     image: require('../../../assets/images/event_1.png'),
  //     date: 'July 21, 2023',
  //     time: '4PM',
  //   },
  // ]

  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <HomeHeader
        EventRestyle={{color: Color.Main, fontFamily: Font.Poppins700}}
        EventUnderLineStyle={{
          width: '55%',
          backgroundColor: Color.Main,
          height: verticalScale(2),
          bottom: scale(4),
  
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),marginTop:verticalScale(10)}}>
            <DetailsCard
              source={require('../../../assets/images/event_1.png')}
              title="West Coast 2 Regional"
              manual="Convention"
              resize={'cover'}
              TimeTrue={true}
              date={'November 09, 2023'}
              time={'4PM'}
              MainBoxRestyle={{
                paddingBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth:1
              }}
            />
            <DetailsCard
              source={require('../../../assets/images/event_2.png')}
              title="West Coast 3 Regional"
              resize={'cover'}
              manual="Convention"
              TimeTrue={true}
              date={'November 09, 2023'}
              time={'4PM'}
              MainBoxRestyle={{
                paddingBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth:1
              }}
            />
            <DetailsCard
              source={require('../../../assets/images/event_3.png')}
              title="West Coast 3 Regional"
              resize={'cover'}
              manual="Convention"
              PlaceTrue={true}
              TimeTrue={true}
              date={'November 09, 2023'}
              time={'4PM'}
              MainBoxRestyle={{
                paddingBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth:1
              }}
            />
            <DetailsCard
              source={require('../../../assets/images/EventScreenImage1.png')}
              title="Abuja Special Holy Ghost"
              resize={'cover'}
              manual="Congress"
              PlaceTrue={true}
              // Place="Ghana"
              TimeTrue={true}
              date={'November 09, 2023'}
              time={'4PM'}
              MainBoxRestyle={{
                paddingBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth:1
              }}
            />
             <DetailsCard
              source={require('../../../assets/images/event_2.png')}
              title="West Coast 3 Regional"
              resize={'cover'}
              manual="Convention"
              TimeTrue={true}
              date={'November 09, 2023'}
              time={'4PM'}
              MainBoxRestyle={{
                paddingBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth:1
              }}
            />
          </View>
      
      <View style={{height: verticalScale(75)}} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Events

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
  DateStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins600,

    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
})
