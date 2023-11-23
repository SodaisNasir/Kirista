import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import { Color } from '../utils/Colors';
import { Font } from '../utils/font';
import { useDispatch, useSelector } from 'react-redux';
import { CHAPTERS } from '../redux/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderHtml from 'react-native-render-html';

const ChapterScreen = (props) => {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  // const Theme = useColorScheme() === 'dark';
  const id = useSelector((state) => state.id)
  const { width } = useWindowDimensions();
  const Theme = useSelector(state => state.mode)
  const myData = props.data
  const dispatch = useDispatch()
  const chapters = useSelector(state => state.chapters)
  const singleArray = chapters.flat();
  const getData = singleArray.filter((item) => item.books_id == id)
  // const updatedData = chapters.flatMap(item => item);
  // console.log('updatedData', updatedData)
  // const newvv = chapters.map(item => item.books_id)
  // console.log('newvv', newvv)
  // const extractData = chapters?.find((item) => item.id == props.select)
  // const objects = chapters.filter(item => typeof item === 'object');
  // console.log('larasib ===>',  objects);

  const onSubmit = async (item) => {
    props.setSelect(item.id)
    props.goToLoc(item.ref)
    // setTimeout(() => {
    props.selectOff(false)
    //   }, 1000);
  }

  // useEffect(() => {
  //   dispatch({type: CHAPTERS, payload: extractData})
  // }, [props.select])



  return (
    <ScrollView>
      {getData?.map((Btn, index) => {
        const result = Btn?.title?.replace("class='chap_title'", `style='color:${Btn.id == props.select ? '#387DE5' : Theme === 'dark' ? Color.White : Color.Black}; font-family:lato; font-size:10px;'`)
        const title = {
          html: result
        }
        return (

          <TouchableOpacity
            style={[
              {
                marginHorizontal:
                  w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
                paddingVertical: w >= 768 && h >= 1024 ? verticalScale(8) : verticalScale(12),
              },
              styles.Box,
            ]}
            key={index}
            onPress={() => onSubmit(Btn)}
            OnpressTwo={props.onPressTwo}
          >

            <RenderHtml
              contentWidth={width}
              source={title}
            />

            {/* <Text
            style={[
              styles.text,
              {fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12)},
              {color:  Btn.id == props.select ? '#387DE5' : Theme === 'dark' ? Color.White : Color.Black },
            ]}>
            {Btn.title}
          </Text> */}
          </TouchableOpacity>
        )
      }
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Font.Poppins400,
  },
  Box: {
    borderTopWidth: 0.5,
    borderColor: '#F1F2F2',
  },
});

export default ChapterScreen;
