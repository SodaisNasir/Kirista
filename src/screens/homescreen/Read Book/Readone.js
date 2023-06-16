import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  StatusBar,
} from 'react-native';
import React, {useCallback} from 'react';
import ReadHeader from '../../../components/ReadHeader';
import {Color} from '../../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {  getChaptersByID } from '../../../redux/actions/UserAction';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Readone = ({route}) => {

  const {id,item} = route.params
  const [data,setData] = useState([])



  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      getChaptersByID(setData,id)
    }, []),
  );
  const Theme = useSelector(state => state.mode)
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        }}>
        <StatusBar
          backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}
          barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
        />
          <ReadHeader textshown={true} text={data?.title} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Readtwo',{
                id:data?.id,
                bookData:item
              });
            }}
            style={styles.Container}>
            <View style={{marginVertical: verticalScale(20)}}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.Black},
                  styles.Title,
                ]}>
                {data?.title}
              </Text>
            </View>
            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(10),
              }}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.Black},
                  styles.TextStyle,
                ]}>
                {/* A book is a medium for recording information in the form of
                writing or images, typically composed of many pages (made of
                papyrus, parchment, vellum, or paper) bound together and
                protected by a cover. */}
                {data?.description}
              </Text>
              {/* <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.Black},
                  styles.TextStyle,
                ]}>
                The technical term for this physical arrangement is codex
                (plural, codices). In the history of hand-held physical supports
                for extended written compositions or records, the codex replaces
                its predecessor, the scroll. A single sheet in a codex is a leaf
                and each side of a leaf is a page.
              </Text>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.Black},
                  styles.TextStyle,
                ]}>
                As an intellectual object, a book is prototypically a
                composition of such great length that it takes a considerable
                investment of time to compose and still considered as an
                investment of time to read. In a restricted sense, a book is a
                self-sufficient section or part of a longer composition, a usage
                reflecting that, in antiquity, long works had to be written on
                several scrolls and each scroll had to be identified by the book
                it contained. Each part of Aristotle's Physics is called a book.
                In an unrestricted sense, a book is the compositional whole of
                which such sections, whether called books or chapters or parts,
                are parts.
              </Text>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.Black},
                  styles.TextStyle,
                ]}>
                A book is a medium for recording information in the form of
                writing or images, typically composed of many pages (made of
                papyrus, parchment, vellum, or paper) bound together and
                protected by a cover.
              </Text> */}
            </View>
          </TouchableOpacity>
          <View style={{height: verticalScale(80)}} />
        </ScrollView>
        <View
          style={{
            flex: 1,

            borderTopColor:
              w >= 768 && h >= 1024 ? Color.BorderColor : Color.White,
            borderTopWidth: w >= 768 && h >= 1024 ? 1 : 0,
            paddingHorizontal: moderateScale(10),
            // paddingVertical: 24,
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}>
          <View
            style={[
              {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
              styles.ChapterPageStyle,
            ]}>
            <View
              style={[
                {color: Theme === 'dark' ? Color.ExtraViewDark : Color.White},
                styles.BoxStyle,
              ]}>
              <Text
                style={[
                  styles.ChapterPageText,
                  {color: Theme === 'dark' ? Color.White : Color.Black},
                ]}>
                1 / 11
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Readone;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
  },
  Title: {
    fontFamily: Font.Libre400,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(20),
  },
  TextStyle: {
    // color: Color.TextColor2,
    fontFamily: Font.Libre400,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
    marginBottom: verticalScale(20),
  },
  ChapterPageStyle: {
    height: verticalScale(85),
  },
  BoxStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'baseline',
    // paddingVertical: verticalScale(),
    paddingHorizontal: moderateScale(10),
    marginTop: verticalScale(10),
  },
  ChapterPageText: {
    color: Color.Black,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
    marginVertical:
      w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(20),
  },
});
