import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native'
import React from 'react'
import LibraryHeader from '../../components/LibraryHeader'
import {scale, verticalScale} from 'react-native-size-matters'
import {Font} from '../../utils/font'
import {Color} from '../../utils/Colors'
import CustomButton from '../../components/CustomButton'
import Empty from '../../assets/icons/empty.svg'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const LibraryHomeTwo = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <LibraryHeader onPress={() => alert('jhghjgh')} />

      <View
        style={{
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
        }}>
        <View
          style={{
            height: '60%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '65%',
              width: '90%',
              marginRight: verticalScale(10),
            }}>
            <Empty
              width={'100%'}
              height={'100%'}
              style={{justifyContent: 'center'}}
            />
          </View>
        </View>

        <View
          style={{
            marginTop:
              w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30),
          }}>
          <Text style={styles.TextStyle}>
            You don't have any items saved yet.
          </Text>
        </View>
        <View
          style={{
            marginTop:
              w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(30),
          }}>
          <CustomButton text={'Search'} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LibraryHomeTwo

const styles = StyleSheet.create({
  TextStyle: {
    color: Color.BoldTextColor,
    textAlign: 'center',
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
  },
})
