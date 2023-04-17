import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  useColorScheme,
} from 'react-native'
import React, {useState,useLayoutEffect} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import CustomHeader from '../../components/CustomHeader'
import {Color} from '../../utils/Colors'
import {verticalScale, scale} from 'react-native-size-matters'
import {Font} from '../../utils/font'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import ImageModal from '../../components/Modals/ImageModal'
import {useFocusEffect} from '@react-navigation/native'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const EventScreen = ({navigation}) => {
  const [showModal, setShowModal] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const Theme = useColorScheme() === 'dark'

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
  }, [])


  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }
  return (
    <SafeAreaView
      style={[
        styles.Container,
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader
          text={'View Event'}
          shareicon={true}
          saveicon={true}
          timeicon={true}
        />
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
          }}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(toggleModal(true))
            }}
            style={styles.ImageViewStyle}>
            <Image
              resizeMode="contain"
              source={require('../../assets/images/EventScreenImage1.png')}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(5),
            }}>
            <Text
              style={[
                styles.TextStyle,
                {
                  color: Theme ? Color.White : Color.DarkTextColor,
                },
              ]}>
              Abuja Special Holy Ghost Congress
            </Text>
          </View>

          <View style={styles.DetailsViewStyle}>
            <Text style={styles.DateText}>June 22, 2023 - June 24, 2023</Text>
            <Text
              style={{
                fontFamily: Font.Poppins800,
                color: Color.ContinentText,
                textAlign: 'center',
                fontSize: w >= 768 && h >= 1024 ? scale(11) : scale(10),
              }}>
              .
            </Text>
            <Text style={styles.DateText}>4PM -7PM WAT</Text>
          </View>

          <View
            style={{
              marginVertical: verticalScale(10),
            }}>
            <Text style={styles.AboutText}>
              The Abuja Special Holy Ghost Service is an annual gathering of the
              church in the FCT and environs where prayers are offered for the
              country and the church in particular. Ministering is Pastor E.A.
              Adeboye and other anointed ministers of God.
            </Text>
          </View>
        </View>
        <View
          style={{
            height: verticalScale(25),
            backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
          }}></View>

        <View
          style={{
            // backgroundColor: 'purple',
            justifyContent: 'center',
            // marginVertical: verticalScale(15),
            marginTop: verticalScale(15),
          }}>
          <Text
            style={[
              {
                color: Theme ? Color.White : Color.Black,
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              },
              styles.LocationBigText,
            ]}>
            Location
          </Text>
        </View>
        <View
          style={{
            marginTop: verticalScale(5),
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              },
              styles.LocationText,
            ]}>
            Keiffi
          </Text>
          <Text
            style={[
              {
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              },
              styles.LocationDetailsText,
            ]}>
            KM 23, Auta-Gurku Village, Abuja-Keffi Expressway, Nasarawa State,
            Nigeria.
          </Text>
        </View>
        <View style={styles.LocationImageViewStyle}>
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 9.0765,
              longitude: 7.3986,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>
        </View>

        <View style={{height:verticalScale(40)}}/>
        {showModal == false ? (
          <ImageModal
          blurRadius={14}
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            swipeDirection="left"
            onSwipeComplete={() => setModalVisible(false)}
            onRequestClose={() => setModalVisible(false)}
            OptionSelect={() => setModalVisible(false)}
            onPress={() => setModalVisible(false)}
          />
        ) : (
          setShowModal(false)
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  ImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(200),
    marginTop: w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(15),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(5),
  },
  TextStyle: {
    fontFamily: Font.Poppins700,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
  },
  DetailTextStyle: {
    fontFamily: Font.Poppins400,
    color: Color.TextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
    textAlign: 'center',
  },
  BoldDetailTextStyle: {
    fontFamily: Font.Poppins700,
    color: Color.TextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
    lineHeight: verticalScale(30),
    // backgroundColor:'green',
    textAlign: 'center',
  },

  About: {
    fontFamily: Font.Poppins600,
    color: Color.TextColor2,
    textAlign: w >= 768 && h >= 1024 ? 'center' : 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(15),
  },
  AboutText: {
    fontFamily: Font.Poppins500,
    color: Color.TextColor2,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10),
  },
  DetailsViewStyle: {
    //   height:
    //   w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(70),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  LocationText: {
    fontFamily: Font.Poppins600,
    color: Color.TextColor2,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
  },
  LocationDetailsText: {
    fontFamily: Font.Poppins500,
    color: Color.TextColor2,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
  },
  LocationBigText: {
    fontFamily: Font.Poppins600,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(17),
  },
  LocationImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(180),
    // paddingHorizontal:
    //   w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
    marginVertical: verticalScale(15),
    borderRadius: scale(14),
    marginBottom: verticalScale(20),
    overflow: 'hidden',
    marginHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
  },
  DateText: {
    fontFamily: Font.Poppins500,
    color: Color.ContinentText,
    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
})
