import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  useColorScheme,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import ChapterScreen from './ChapterScreen';
import BookmarkScreen from './BookmarkScreen';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';

const DrawerScreen = (props) => {
  const Theme = useColorScheme() === 'dark';
  const color_condition = Theme ? Color.DarkThemeGreyText : Color.Black;
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [chapter, setChapter] = useState(true);
  const [bookmark, setBookmark] = useState(false);

  const [chapterColor, setChapterColor] = useState(Color.Main);
  const [bookmarkColor, setBookmarkColor] = useState(color_condition);
  const HandleChapter = () => {
    setChapter(true);
    setBookmark(false);
    setChapterColor(Color.Main);
    setBookmarkColor(color_condition);
  };
  const HandleBookmark = () => {
    setBookmark(true);
    setChapter(false);
    setChapterColor(color_condition);
    setBookmarkColor(Color.Main);
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}

      <Modal
        // swipeDirection={'left'}
        // onSwipeComplete={props.onSwipeComplete}
        style={styles.modalStyling}
        backdropOpacity={0.8}
        onBackdropPress={props.onBackdropPress}
        isVisible={props.isVisible}
        animationIn={'slideInLeft'}
        animationOut={'slideInRight'}
        >
        <View
          style={[
            styles.modalView,
            {
              backgroundColor: Theme ? Color.DarkTheme : Color.White,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',

              //   paddingVertical: verticalScale(10),
            }}>
            <View
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(65)
                    : verticalScale(100),
                width: w >= 768 && h >= 1024 ? scale(70) : scale(110),
                // backgroundColor: 'red',
              }}>
              <Image
                source={require('../assets/images/one.png')}
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
                  {color: Theme ? Color.White : Color.DarkTheme},
                ]}>
                Sunday School
              </Text>
              <Text
                style={[
                  styles.topText,
                  {fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14)},
                  {color: Theme ? Color.White : Color.DarkTheme},
                ]}>
                Student Manual
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
          {chapter && <ChapterScreen />}
          {bookmark && <BookmarkScreen />}
        </View>
      </Modal>
    </View>
  );
};

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
});

export default DrawerScreen;
