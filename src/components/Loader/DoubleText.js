import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Font } from '../../utils/font';
import { Color } from '../../utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const width = Dimensions.get('screen').width

const DoubleText = (props) => {
    const navigation = useNavigation();
    const Theme = useSelector(state => state.mode);
    const applanguage = useSelector(state => state.applanguage);
  
    const tabPotrait = w >= 768 && h >= 1024;
    const [forImage, setForImage] = useState([]);
    const [data, setData] = useState([]);
    const [event, setEvent] = useState([]);
    const [myData, setMyData] = useState([]);
  
    const iosTab = w >= 820 && h >= 1180;
    const fourInchPotrait = w <= 380 && h <= 630;
  return (
    <SkeletonPlaceholder borderRadius={4} marginTop={10}>
    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
      <SkeletonPlaceholder.Item 
                            width={'100%'} 
                            height={props.height}
                              />
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
  )
}

export default DoubleText

const styles = StyleSheet.create({})