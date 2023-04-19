import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React, {useState} from 'react'
import LibraryHeader from '../../components/LibraryHeader'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import {Font} from '../../utils/font'
import {Color} from '../../utils/Colors'
import FilterModal from '../../components/Modals/FilterModal'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const LibraryHome = ({navigation}) => {
  // for modal
  const [showModal, setShowModal] = useState(false)
  const Theme = useColorScheme() === 'dark'
  const [isModalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      detail: '2023',
      path: 'PopularBooks',
    },

    {
      id: 2,
      title: 'RCCG',
      manual: 'Central Parish',
      image: require('../../../src/assets/images/parishsmall_1.png'),
      detail: 'Ghana',
      path: 'FeaturedParishes',
    },

    {
      id: 3,
      title: 'West Coast 3 Regional',
      manual: 'Convention',
      image: require('../../../src/assets/images/event_4.png'),
      detail: 'July 7, 2023.   .   4PM',
      path: 'EventScreen',
    },
    {
      id: 4,
      title: 'RCCG His Grace Assembly',
      manual: '',
      image: require('../../../src/assets/images/rcg_centralparish.png'),
      detail: 'Banjul',
      path: 'FeaturedParishes',
    },
    {
      id: 5,
      title: 'Sunday School',
      manual: 'Teachers Man..',
      image: require('../../../src/assets/images/book2.png'),
      detail: '2023',
      path: 'PopularBooks',
    },
  ]

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <LibraryHeader
        onPress={() => {
          setShowModal(toggleModal(true))
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(0),
        }}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.path)}
                style={{
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(95)
                      : verticalScale(120),
                  flexDirection: 'row',
                  marginHorizontal: verticalScale(20),
                  overflow: 'hidden',
                  borderBottomWidth: 0.3,

                  borderColor: Color.BorderColor,
                }}>
                <View
                  style={{
                    flex: w >= 768 && h >= 1024 ? 0.9 : 1.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'red',
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
                    flex: w >= 768 && h >= 1024 ? 3 : 2,
                    paddingHorizontal:
                      w >= 768 && h >= 1024
                        ? verticalScale(0)
                        : verticalScale(15),
                    marginVertical: verticalScale(25),
                    // backgroundColor:'red'
                  }}>
                  <View
                    style={{
                      // height: verticalScale(30),

                      // backgroundColor: 'yellow',
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
                          bottom: scale(3),
                          color: Theme ? Color.White : Color.DarkTextColor,
                        },
                        styles.TitleStyle,
                      ]}>
                      {item.manual}
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
                    <Text style={[styles.DateStyle]}>
                      {' '}
                      {item.detail}
                      {'   '}
                      {'   '}
                      {item.time}{' '}
                    </Text>
                  </View>
                </View>
                
              </TouchableOpacity>
              
            )
          }}
        />
    

        <FilterModal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          swipeDirection="down"
          onSwipeComplete={() => setModalVisible(false)}
        />
      </View>
      </ScrollView>
      <View  style={{height:verticalScale(75)}}/>
    </SafeAreaView>
  )
}

export default LibraryHome

const styles = StyleSheet.create({
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
    left : w >= 768 && h >= 1024 ? scale(5) : scale(0)
  },
  TitleStyle: {
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',
    left : w >= 768 && h >= 1024 ? scale(5) : scale(0)

    // paddingHorizontal: verticalScale(50),
  },
})
