import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';

const ChapterScreen = (props) => {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useColorScheme() === 'dark';
  const color_condition = Theme ? Color.White : Color.Black;
  const [colors, setColors] = useState([
    {title: 'Chapter 1', color: color_condition},
    {title: 'Chapter 2', color: color_condition},
    {title: 'Chapter 3', color: color_condition},
    {title: 'Chapter 4', color: color_condition},
  ]);
  const handlePress = index => {
    const newColors = [...colors];
    newColors.forEach((Btn, i) => {
      Btn.color = i === index ? '#387DE5' : Theme ? Color.White : Color.Black;
    });
    setColors(newColors);
  };

  return (
    <View>
      {colors.map((Btn, index) => (
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
          onPress={() => handlePress(index)}
          OnpressTwo = {props.onPressTwo}>
         
          <Text
            style={[
              styles.text,
              {fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12)},
              {color: Btn.color},
            ]}>
            {Btn.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
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
