import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  useColorScheme,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
  // Modal
} from 'react-native'
import Modal from 'react-native-modal'
import ChapterScreen from './ChapterScreen'
import BookmarkScreen from './BookmarkScreen'
import {verticalScale, scale, moderateScale} from 'react-native-size-matters'
import {Color} from '../utils/Colors'
import {Font} from '../utils/font'
import { useSelector } from 'react-redux'

const DrawerScreen = (props) => {
  const Theme = useSelector(state => state.mode)
  const color_condition = Theme === 'dark' ? Color.DarkThemeGreyText : Color.Black
  const w = useWindowDimensions().width
  const h = useWindowDimensions().height

const bookData = props.data
const chapterData = props.chapterData

  const [chapter, setChapter] = useState(true)
  const [bookmark, setBookmark] = useState(false)

  const [chapterColor, setChapterColor] = useState(Color.Main)
  const [bookmarkColor, setBookmarkColor] = useState(color_condition)
  const HandleChapter = () => {
    setChapter(true)
    setBookmark(false)
    setChapterColor(Color.Main)
    setBookmarkColor(color_condition)
  }     
  const HandleBookmark = () => {
    setBookmark(true)
    setChapter(false)
    setChapterColor(color_condition)
    setBookmarkColor(Color.Main)
  }



  return (
    // <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>

      <Modal
        style={styles.modalStyling}
        backdropOpacity={0.8}
        onBackdropPress={props.onBackdropPress}
        isVisible={props.isVisible}
        animationIn={'slideInLeft'}
        animationOut={'fadeOut'}
        // swipeDirection={'left'}
        >
        <SafeAreaView
          style={[
            styles.modalView,
            {
              backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
                marginTop: verticalScale(5),
    
            }}>
            <View
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(65)
                    : verticalScale(100),
                width: w >= 768 && h >= 1024 ? scale(70) : scale(110),
                // backgroundColor: 'red',
                overflow: 'hidden',
                borderRadius:5
              }}>
              <Image
                source={{uri: bookData?.cover_image}}
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View
              style={{
                flex: 1,
                top: scale(1),
               
              }}>
              <Text
                style={[
                  styles.topText,
                  {fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14)},
                  {color: Theme === 'dark' ? Color.White : Color.DarkTheme,top: 5},
                ]}>
                {/* Sunday School */}
                {bookData?.title}
              </Text>
              <Text
                style={[
                  styles.topText,
                  {fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14)},
                  {color: Theme === 'dark' ? Color.White : Color.DarkTheme,lineHeight : verticalScale(18)},
                  
                ]}>
                {/* Student Manual */}
                {bookData?.category}
              </Text>
              <Text
                style={[
                  styles.topText,
                  {fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12)},
                  {color: Theme === 'dark' ? Color.White : Color.DarkTheme,lineHeight : verticalScale(18)},
                  
                ]}>
                {bookData?.release_year}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(35),
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(15),
            }}>
            <TouchableOpacity
              style={{
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              }}
              onPress={() => HandleChapter()}>
              <Text
                style={[
                  {
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                  },
                  styles.Chapter,
                  {color: chapterColor},
                ]}>
                Chapters
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{paddingHorizontal: moderateScale(5)}}
              onPress={() => HandleBookmark()}>
              <Text
                style={[
                  styles.Chapter,
                  {
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                    color: bookmarkColor,
                  },
                ]}>
                Bookmarks
              </Text>
            </TouchableOpacity>
          </View>
          {chapter && <ChapterScreen data={chapterData} select={props.select}
            setSelect={props.setSelect} />}
          {bookmark && <BookmarkScreen book_id={chapterData[0]?.books_id} />}
        </SafeAreaView>
      </Modal>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modalStyling: {margin: 0},
  modalView: {
    width: '80%',
    height: '100%',

    paddingVertical: verticalScale(10),
  },
  topText: {
    color: '#071A36',
    fontFamily: Font.Poppins600,
  },
  Chapter: {
    color: Color.Main,
    fontFamily: Font.Poppins600,
  },
})

export default DrawerScreen
