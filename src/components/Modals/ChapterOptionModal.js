import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from '../SelectDropdown';
import LeftRight from '../../assets/icons/left-right.svg';
import UpDown from '../../assets/icons/up-down.svg';
import ReadNavigator from '../ReadNavigator';
import FontModal from './FontModal';

const ChapterOptionModal = props => {
 
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [selected, setSelected] = useState();
  const navigation = useNavigation();

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
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            },
            styles.modalView,
          ]}>
          <View style={styles.BrightnessView}></View>

          <View
            style={[
              {
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),
              },
              styles.ColorsView,
            ]}>
            <TouchableOpacity
            onPress={props.HandlePressOne}
              style={[
                {
                  width: w >= 768 && h >= 1024 ? scale(65) : scale(60),
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(26)
                      : verticalScale(45),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(15),
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
                      ? verticalScale(26)
                      : verticalScale(45),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(15),
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
                      ? verticalScale(26)
                      : verticalScale(45),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(15),
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
                      ? verticalScale(26)
                      : verticalScale(45),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(15),
                  backgroundColor: '#DBE7E3',
                },
              ]}></TouchableOpacity>
          </View>

          <View>
            <SelectDropdown
              
              RestyleSelectBox={{
                backgroundColor: Color.FontOptionInput,
              }}
              RestyleGeneralText={{
                color: Color.DarkTextColor,
                fontFamily: Font.Poppins600,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
              }}
              title={'Arial'}
              onPress={props.toggleModalTwo}
            />
          </View>
          
        
          <View
            style={{
              justifyContent:w >= 768 && h >= 1024 ? 'space-around'  : 'space-between',
              flexDirection: 'row',
              borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(18),
              height:
                w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(60),
              alignItems: 'center',
              paddingHorizontal: moderateScale(10),
              width:  w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}>
            <View
              style={{
                borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                backgroundColor: '#F5F5F5',
                flexDirection: 'row',
                height:
                  w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(40),
                alignItems: 'center',
                width: w >= 768 && h >= 1024 ? '45%' : '45%',
               
              }}>
              <TouchableOpacity onPress={decrementCount}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(15),
                    fontFamily: Font.Poppins600,
                    color: Color.DarkTextColor,
                    paddingHorizontal: moderateScale(10),
                  }}>
                  A⁻
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#E2E9F3',
                  paddingHorizontal: moderateScale(10),
                  borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(16),
                    fontFamily: Font.Poppins600,
                    color: Color.DarkTextColor,

                    textAlignVertical: 'center',
                  }}>
                  {count}
                </Text>
              </View>
              <TouchableOpacity onPress={incrementCount}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(15),
                    fontFamily: Font.Poppins600,
                    color: Color.DarkTextColor,
                    paddingHorizontal: moderateScale(10),
                  }}>
                  A⁺
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height:
                  w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(40),
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                backgroundColor: '#F5F5F5',
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
                  borderRightColor: Color.BorderColor,
                  borderRightWidth: 1,
                  marginVertical: verticalScale(5),
                }}>
                <LeftRight
                  height={
                    w >= 768 && h >= 1024
                      ? verticalScale(25)
                      : verticalScale(30)
                  }
                  width={w >= 768 && h >= 1024 ? scale(20) : scale(24)}
                />
              </View>

              <View
                style={{
                  paddingHorizontal: moderateScale(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 5,
                }}>
                <UpDown
                  height={
                    w >= 768 && h >= 1024
                      ? verticalScale(25)
                      : verticalScale(30)
                  }
                  width={w >= 768 && h >= 1024 ? scale(20) : scale(24)}
                />
              </View>
            </View>
          </View>
        </View>
       
        <ReadNavigator
          onPress={() => setModalVisible(false)}/>
      
   
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
    backgroundColor: Color.White,
  },
  BrightnessView: {
    height: verticalScale(60),
    // backgroundColor: 'red',
  },

  ColorsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(5),
  },

  ColorsStyle: {},
});

export default ChapterOptionModal;
