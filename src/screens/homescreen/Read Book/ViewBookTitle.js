import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../../utils/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { scale } from 'react-native-size-matters'
import { Font } from '../../../utils/font'
import { useEffect } from 'react'
import { ID } from '../../../redux/reducer'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ViewBookTitle = ({route,navigation}) => {
    const dispatch = useDispatch()
    const {
      id,
    bookData,
    chapterOne,
    url
  } = route.params
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const is_guest = useSelector(state => state.is_guest)
  const user_details = useSelector(state => state.user_details)
  const allbookmark = useSelector(state => state.allbookmark)
  const [data,setData] = useState()
  useEffect(() => {
    dispatch({type: ID, payload: bookData?.id});
  },[])
  return (
    <>
        <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
            <StatusBar barStyle={Theme === 'dark' ? 'light-content' : 'dark-content' } backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}/>

    <SafeAreaView style={{flex: 1,backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,}}>
        <ScrollView contentContainerStyle={{flex:1}}>
        <TouchableOpacity 
        activeOpacity={0.6}
          onPress={() => navigation.navigate('Readtwo',{
              id:bookData?.id,
              bookData:bookData,
              chapterOne: 1,
              url: bookData.ebook_url
            })}
             style={{flex:1}}>

      <View style={{
          flex: 1.6,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
            <View style={{
                height: '65%',
                width: '45%',
                // backgroundColor: 'pink',
                bottom: scale(15),
                borderRadius: scale(8),
                // elevation:2,
                overflow: 'hidden',
            }}>
               <Image
            resizeMode="cover"
            source={{uri: bookData?.cover_image}}
            style={{height: '100%', width: '100%'}}
          />
            </View>
        </View>
        <View style={{flex: 2,top: scale(20)}}>
            <Text style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.TextStyle,
            ]}>{bookData?.title}</Text>
            <Text style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.TextStyle2,
            ]}>{bookData?.author}</Text>
        </View>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    TextStyle: {
        fontFamily: Font.Poppins700,
        textAlign: 'center',
        fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(24),
        width: '90%',
        alignSelf: 'center',
      },
    TextStyle2: {
        fontFamily: Font.Poppins500,
        textAlign: 'center',
        fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(18),
        width: '90%',
        alignSelf: 'center',
        top: scale(20)
      },
})
export default ViewBookTitle
