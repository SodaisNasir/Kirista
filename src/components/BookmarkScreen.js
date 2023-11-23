import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import { Color } from '../utils/Colors';
import { Font } from '../utils/font';
import SwipeableList from './CustomSwipeList/SwipeableList';
import ListData from './CustomSwipeList/ListData';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKMARK } from '../redux/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderHtml from 'react-native-render-html';

const BookmarkScreen = ({ book_id, bookMarkPress }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch()
  const bookmark = useSelector(state => state.bookmark)
  const id = useSelector((state) => state.id)
  const applanguage = useSelector(state => state.applanguage)
  const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [data, setData] = useState([])
  console.log('data', data)
  console.log('bookmark', bookmark)

  useEffect(() => {
    getNewData()
  }, [bookmark])

  const getNewData = () => {
    const filterMatchIdData = bookmark.filter((item) => item.books_id == id)
    setData(filterMatchIdData)
  }

  const deleteBookmark = async (elm) => {
    const updatedData = bookmark.filter((item) => item.scroll_id !== elm.scroll_id);
    dispatch({ type: BOOKMARK, payload: updatedData })
    await AsyncStorage.setItem('bookmark', JSON.stringify(updatedData));
  }

  return (
    <View style={{ flex: 1 }}>
      {
        data?.length > 0 ?
          <SwipeListView
            data={data}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            // style={{height: '100%'}}
            renderItem={({ item, index }) => {
              // const result = item?.title?.replace("class='chap_title'",`style='color:${Theme === 'dark' ? Color.White : Color.Black }; font-family:lato; font-size:${w >= 768 && h >= 1024 ? "8px" : '12px'};'`)
              // const title = {
              //     html: result
              //     }
              return (
                <TouchableOpacity onPress={() => bookMarkPress(item.scroll_id)} activeOpacity={0.8}>
                  <View
                    style={{
                      width: '100%',
                      paddingVertical:
                        w >= 768 && h >= 1024 ? verticalScale(20) : verticalScale(10),
                      backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                      borderTopWidth: 1,
                      borderBottomColor: '#F1F2F2',
                      borderTopColor: '#F1F2F2'
                      ,
                      borderBottomWidth: 1,

                    }}>
                    {/* <View style={{
              marginLeft:
              w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            }}>
                  <RenderHtml
                  contentWidth={width}
                  source={title}
                  />
                  </View> */}
                    <Text
                      style={{
                        fontFamily: Font.Poppins600,
                        color: Theme === 'dark' ? Color.White : Color.Black,
                        fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                        marginLeft:
                          w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
                      }}>
                      {item?.mark_name ? item?.mark_name : index + 1}
                    </Text>
                    <Text
                      style={{
                        fontFamily: Font.Poppins500,
                        color: Theme === 'dark' ? Color.GreyText : Color.Black,
                        fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                        marginLeft:
                          w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
                      }}>
                      {item?.created_at}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            }
            }
            renderHiddenItem={({ item }) => (
              // <View style={styles.rowBack}>
              //   <TouchableOpacity style={[styles.IconBox]}>
              // <MaterialCommunityIcons
              //   name="delete"
              //   size={w >= 768 && h >= 1024 ? scale(20) : scale(28)}
              //   color={'#F5F5F5'}
              //   //   style={{left:scale(10)}}
              // />
              //   </TouchableOpacity>
              // </View>
              <View style={styles.rowBack}>
                <TouchableOpacity style={styles.IconBox}
                  onPress={() => deleteBookmark(item)}
                >
                  <MaterialCommunityIcons
                    name="delete"
                    size={w >= 768 && h >= 1024 ? scale(20) : scale(28)}
                    color={'#F5F5F5'}
                  //   style={{left:scale(10)}}
                  />
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
            disableRightSwipe={true}
          // leftOpenValue={0}
          // rightOpenValue={scale(-60)}
          />
          :
          <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[
              styles.BigTextStyle,
              {
                color: Theme === 'dark' ? Color.White : Color.Black,
              },
            ]}>{applanguage.NoBookMark}</Text>
          </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    // paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#F1F2F2',
  },
  rowBack: {
    alignItems: 'flex-end',
    zIndex: 99
  },
  IconBox: {
    width: scale(60),
    backgroundColor: '#FF4242',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#F1F2F2',
  },
});

export default BookmarkScreen;
