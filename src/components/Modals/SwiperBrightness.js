import React from 'react'
import {StyleSheet, Text, View, useWindowDimensions,Platform} from 'react-native'
import Slider from 'react-native-custom-slider'
import {verticalScale, scale} from 'react-native-size-matters'
import {Color} from '../../utils/Colors'
import { useSelector } from 'react-redux'

const Lalit = () => {
  const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions().width
  const h = useWindowDimensions().height

  

  
  return (
    <View>
      <Slider
        style={{width: '100%'}}
        minimumValue={0}
        maximumValue={100}
        step={1}
        // value={data.value}
        //  onValueChange={setSliderValue}
        minimumTrackTintColor={Color.Main}
        maximumTrackTintColor={Theme === 'dark' ? Color.FontBoxColorDark : '#F5F8FE'}
        thumbTintColor={Color.Main}
        thumbStyle={{
          borderWidth: scale(1),
          borderColor: Color.Main,
          height: w >= 768 && h >= 1024 ? scale(10) : scale(16),
          width: w >= 768 && h >= 1024 ? scale(10) : scale(15),
          borderRadius: scale(10),
        }}
        trackStyle={{
          height: w >= 768 && h >= 1024 ? verticalScale(7) : verticalScale(9),
          borderRadius: scale(100),
        }}
      />
    </View>
  )
}

export default Lalit

const styles = StyleSheet.create({})
