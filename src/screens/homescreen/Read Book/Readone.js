import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback} from 'react';
import ReadHeader from '../../../components/ReadHeader';
import {Color} from '../../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getChapters} from '../../../redux/actions/UserAction';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import DoubleText from '../../../components/Loader/DoubleText';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Readone = ({route}) => {

  const dispatch = useDispatch()
  const chapters = useSelector(state => state.chapters)
  const { width } = useWindowDimensions();

  
  const systemFonts = [...defaultSystemFonts, 'Poppins-Medium'];
  const {id,item} = route.params
  const [data,setData] = useState()
  console.log('data', data)

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      dispatch(getChapters(setData,id))
    }, []),
  );
  const Theme = useSelector(state => state.mode)
  const navigation = useNavigation();
  let text = data?.title;
  let text2 = data?.description;

  let result = text?.replace("class='chap_title'", `style='color:${Theme === 'dark' ? Color.White : Color.Black}; font-family: ${Font.Poppins500}; font-size: ${w >= 768 && h >= 1024 ? '22px' : '20px'};'`);
  let result2 = text?.replace("class='chap_title'", `style='color:${Theme === 'dark' ? Color.White : Color.Black}; font-family: ${Font.Poppins500}; font-size: ${w >= 768 && h >= 1024 ? '17px' : '15px'};'`);
  let result3 = text2?.replace("class='chap_description'", `style='color:${Theme === 'dark' ? Color.White : Color.Black}; font-family: ${Font.Poppins500}; font-size: ${w >= 768 && h >= 1024 ? '17px' : '15px'};'`);
  
  const heading = {
    html: result2
  };


  const title = {
    html: result
  };

  const description = {
    html: result3
  };


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
          <ReadHeader textshown={true} text={ 
            data ?
          <RenderHtml
          contentWidth={width}
          source={heading}
          systemFonts={systemFonts}
           /> :  <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(15)} />} />
          {data ?
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Readtwo',{
                id:id,
                bookData:item,
                chapterOne: data.id
              });
            }}
            style={styles.Container}>
            <View style={{marginVertical: verticalScale(20)}}>
              <Text
                style={[
                  {color: Theme === 'dark' ? Color.White : Color.Black},
                  styles.Title,
                ]}>
                 <RenderHtml
                  contentWidth={width}
                  source={title}
                  />
              </Text>
            </View>
            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(10),
              }}>
               <RenderHtml
                  contentWidth={width}
                  source={description}
                  />
            
            </View>
          </TouchableOpacity>
          <View style={{height: verticalScale(80)}} />
        </ScrollView> 
        : 
        <>
        <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(40)} />
        <View style={{height: 0,marginVertical:verticalScale(5)}} />
        <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(400) : verticalScale(350)} />
        </>
          }
        {/* <View
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
        </View> */}
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
