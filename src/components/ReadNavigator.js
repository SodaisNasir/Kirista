import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  useColorScheme,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ReadNavigator = props => {
  const heyTheme = useSelector(state => state.mode)
  const Theme = props.newTheme != '' ? props.newTheme : heyTheme



console.log('props.background', props.background)
  return (
    <View
      style={[
        styles.container,
        props.reStyle,
        {
          backgroundColor: props.background ? props.background  : Theme === 'dark' ? Color.DarkTheme : Color.White,
        },
      ]}>
      <View style={styles.BoxStyle}>
        {/* {props.DontShowMenu ? null : ( */}
          <TouchableOpacity onPress={props.onPressTab} style={[styles.tabButton,props.tabButtonRestyle]}>
            <FontAwesome5
              name="list-ul"
              size={w >= 768 && h >= 1024 ? scale(15) : scale(18)}
              color={props.background ? '#374957' : Theme === 'dark' ? '#fff' : '#374957'}
            />
          </TouchableOpacity>
        {/* )} */}

        {/* {props.DontShowMoon ? null : ( */}
          <TouchableOpacity onPress={props.moonPress} style={styles.tabButton}>
            {props.show ? (
              <Feather
                name="sun"
                size={w >= 768 && h >= 1024 ? scale(15) : scale(24)}
                color={props.background ? '#374957' : Theme === 'dark' ? '#fff' : '#374957'}
              />
            ) : (
              <Feather
                name="moon"
                size={w >= 768 && h >= 1024 ? scale(15) : scale(24)}
                color={props.background  ? '#374957' : Theme === 'dark' ? '#fff' : '#374957'}
              />
            )}
          </TouchableOpacity>
        {/* )} */}

        <TouchableOpacity
          onPress={props.onPressModal}
          style={[styles.tabButton, props.tabButtonStyle]}>
          <Feather
            name="settings"
            size={w >= 768 && h >= 1024 ? scale(15) : scale(18)}
            color={props.background  ? '#374957' : props.ChangeColor ? props.color : Theme === 'dark' ? '#fff' : '#374957'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(85),
  },
  BoxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'baseline',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(40),
    marginTop: verticalScale(10),
    // backgroundColor:'red'
  },
  tabButton: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
});

export default ReadNavigator;
