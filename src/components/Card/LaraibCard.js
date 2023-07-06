import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Color } from '../../utils/Colors';
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html';
import { verticalScale } from 'react-native-size-matters';

const LaraibCard = ({item,backgroundColor,show,fontData,count,Theme,handleSingleTap}) => {
    const { width,height } = useWindowDimensions();
    const systemFonts = [...defaultSystemFonts, 'times-new-roman', 'Arial','Lato-Regular','papyrus','Georgia-Regular-font.ttf','CourierPrime-Regular'];

    let text = item?.title;
    let text2 = item?.description;
    let result = text?.replace(
      "class='chap_title'",
      `style='color:${
        backgroundColor != '' && show
          ? 'black'
          : Theme === 'dark'
          ? Color.White
          : Color.Black
      };font-family:${fontData?.name}; font-size:${
        count + 20
      }px; font-weight:600;'`,
    );
    let result3 = text2?.replace(
      "class='chap_description'",
      `style='color:${
        backgroundColor != '' && show
          ? 'black'
          : Theme === 'dark'
          ? Color.White
          : Color.Black
      };font-family:${fontData?.name};  font-size:${
        count + 15
      }px; font-weight:600;'`,
    );

    const title = {
      html: result,
    };
    const description ={
      html: result3,
    };
    return (
      <>
        <TouchableOpacity
        // activeOpacity={0.6}
          // onPress={() => setBottomModal(!bottomModal)}
          onPress={() => handleSingleTap()}
          >
          <View style={{marginVertical: verticalScale(20)}}>
            <RenderHtml
              contentWidth={width}
              source={title}
              systemFonts={systemFonts}
            />
          </View>
          <View style={{marginVertical: verticalScale(0)}}>
            <RenderHtml
              contentWidth={width}
              source={description}
              systemFonts={systemFonts}
            
            />
          </View>
        </TouchableOpacity>
      </>
    );
}

export default LaraibCard

const styles = StyleSheet.create({})