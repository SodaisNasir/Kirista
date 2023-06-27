import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import SelectDropdown from '../SelectDropdown';
import LeftRight from '../../assets/icons/left-right.svg';
import LeftRightDark from '../../assets/icons/leftright_dark.svg';
import UpDown from '../../assets/icons/up-down.svg';
import UpDownDark from '../../assets/icons/upright_dark.svg';
import ReadNavigator from '../ReadNavigator';
import Sun from '../../assets/icons/sun_light.svg';
import Sun_light from '../../assets/icons/sun_one.svg';
import SwiperBrightness from './SwiperBrightness';
import { useSelector } from 'react-redux';

const ChapterOptionModal = props => {
  const [count, setCount] = useState(0);
  const heyTheme = useSelector(state => state.mode)
  const Theme = props.newTheme != '' ? props.newTheme : heyTheme


  const incrementCount = () => {
    setCount(count + 1);
    props.newCount(count + 1)
  };
  const decrementCount = () => {
    if(count <= 0 ){
        console.log('first')
    }else{
      setCount(count - 1);
      props.newCount(count - 1)
    }
  };

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  const iosTab = w >= 820 && h >= 1180;
  return (
    <View style={{flex: 1, width: '100%'}}>
      <Modal
        testID={'modal'}
        style={styles.modalStyling}
        backdropOpacity={0.7}
        onRequestClose={props.onRequestClose}
        onBackdropPress={props.onBackdropPress}
        isVisible={props.isVisible}
        swipeDirection="down"
        onSwipeComplete={props.onSwipeComplete}>
        <View
          style={[
            {
              backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            },
            styles.modalView,
          ]}>
          <View style={styles.BrightnessView}>
            <Sun_light
              height={
                w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(22)
              }
              width={scale(24)}
            />

            <View
              style={{
                height: '100%',
                width: '70%',
                justifyContent: 'center',
              }}>
              <SwiperBrightness />
            </View>

            <Sun
              height={
                w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(24)
              }
              width={scale(24)}
            />
          </View>

          <View
            style={
              styles.ColorsView}>
            <TouchableOpacity
              onPress={props.HandlePressOne}
              style={[
                {
                  width: w >= 768 && h >= 1024 ? scale(65) : scale(60),
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(45)
                      : verticalScale(45),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(17),
                  backgroundColor: '#F5F5F5',
                },
              ]}></TouchableOpacity>

            <TouchableOpacity
              onPress={props.HandlePressTwo}
              style={[
                {
                  width: w >= 768 && h >= 1024 ? scale(65) : scale(60),
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(45)
                      : verticalScale(45),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(17),
                  backgroundColor: '#F5EDD8',
                },
              ]}></TouchableOpacity>

            <TouchableOpacity
              onPress={props.HandlePressThree}
              style={[
                {
                  width: w >= 768 && h >= 1024 ? scale(65) : scale(60),
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(45)
                      : verticalScale(45),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(17),
                  backgroundColor: '#E5F1FD',
                },
              ]}></TouchableOpacity>

            <TouchableOpacity
              onPress={props.HandlePressFour}
              style={[
                {
                  width: w >= 768 && h >= 1024 ? scale(65) : scale(60),
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(45)
                      : verticalScale(45),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(17),
                  backgroundColor: '#DBE7E3',
                },
              ]}></TouchableOpacity>
          </View>

            <SelectDropdown
              RestyleSelectBox={{
                backgroundColor: Theme === 'dark' ? '#748194' : Color.FontOptionInput,
              }}
              RestyleGeneralText={{
                color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                fontFamily: Font.Poppins600,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
              }}
              title={props.fontTitle}
              onPress={props.toggleModalTwo}
            />

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(18),
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(18),
              height:
                w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(60),
              alignItems: 'center',
              paddingHorizontal: moderateScale(10),
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
              backgroundColor: Theme === 'dark'
                ? Color.FontBoxColorDark
                : Color.FontBoxColor,
            }}>
            <View
              style={{
                borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(15),
                backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : '#F5F5F5',
                flexDirection: 'row',
                height:
                  w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(45),
                alignItems: 'center',
                width: w >= 768 && h >= 1024 ? '90%' : '90%',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity onPress={decrementCount}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(14) : scale(17),
                    fontFamily: Font.Poppins600,
                    color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    paddingHorizontal: moderateScale(10),
                  }}>
                  A⁻
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: Theme === 'dark' ? '#243d63' : '#E2E9F3',
                  // paddingHorizontal: moderateScale(10),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:scale(30),
                  aspectRatio: iosTab? null :  1/1,
                  height : iosTab? verticalScale(25) : null,
                  // height:
                  // w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(40),
                  //  width: iosTab? scale(25) : scale(30)
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(14) : scale(18),
                    fontFamily: Font.Inter700,
                    color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    
                  }}>
                  {count}
                </Text>
              </View>
              <TouchableOpacity onPress={incrementCount}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(14) : scale(17),
                    fontFamily: Font.Poppins600,
                    color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    paddingHorizontal: moderateScale(10),
                  }}>
                  A⁺
                </Text>
              </TouchableOpacity>
            </View>

            {/* <View
              style={{
                flexDirection: 'row',
                height:
                  w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(40),
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : '#F5F5F5',
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(18),
                // height:
                //   w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(65),
                width: w >= 768 && h >= 1024 ? '45%' : '45%',
              }}>
              <View
                style={{
                  paddingHorizontal: moderateScale(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRightColor: Theme === 'dark'
                    ? Color.ExtraViewDark
                    : Color.BorderColor,
                  borderRightWidth: 1,
                  marginVertical: verticalScale(5),
                }}>
                {Theme === 'dark' ? (
                  <LeftRightDark
                    height={
                      w >= 768 && h >= 1024
                        ? verticalScale(18)
                        : verticalScale(30)
                    }
                    width={w >= 768 && h >= 1024 ? scale(20) : scale(24)}
                  />
                ) : (
                  <LeftRight
                    height={
                      w >= 768 && h >= 1024
                        ? verticalScale(18)
                        : verticalScale(30)
                    }
                    width={w >= 768 && h >= 1024 ? scale(20) : scale(24)}
                  />
                )}
              </View>

              <View
                style={{
                  paddingHorizontal: moderateScale(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 5,
                }}>
                {Theme === 'dark' ? (
                  <UpDownDark
                    height={
                      w >= 768 && h >= 1024
                        ? verticalScale(18)
                        : verticalScale(30)
                    }
                    width={w >= 768 && h >= 1024 ? scale(20) : scale(24)}
                  />
                ) : (
                  <UpDown
                    height={
                      w >= 768 && h >= 1024
                        ? verticalScale(18)
                        : verticalScale(30)
                    }
                    width={w >= 768 && h >= 1024 ? scale(20) : scale(24)}
                  />
                )}
              </View>
            </View> */}
          </View>
        </View>

        <ReadNavigator
        ChangeColor={true}
        color={Color.Main}
        onPressModal={props.CloseBtn}
        DontShowMoon={true}
        DontShowMenu={true}
        // tabButtonStyle={{alignItems:'flex-end',width:'100%'}}
        onPressTab={props.onPressTab}
        moonPress={props.moonPress}
        show={props.show}
        newTheme={props.newTheme}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalStyling: {
    justifyContent: 'flex-end',
    margin: 0,
    // flex:1,
  },

  modalView: {
    // height: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: moderateScale(20),
    width: '100%',
  },
  BrightnessView: {
    height: verticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ColorsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(5),
  },

  ColorsStyle: {},
});

export default ChapterOptionModal;
