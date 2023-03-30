import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const FilterModal = props => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Modal
        testID={'modal'}
        style={styles.modalStyling}
        backdropOpacity={0.7}
        onBackdropPress={props.onBackdropPress}
        isVisible={props.isVisible}
        swipeDirection="down"
        onSwipeComplete={props.onSwipeComplete}>
        <View style={[styles.modalView, {backgroundColor: Color.Main}]}>
          <View
            style={{
              width: scale(50),
              height: scale(4),
              borderRadius: scale(10),
              backgroundColor: '#c6c6c6',
            }}
          />

          <Text style={{color: 'black'}}>HELLO FIRE</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalStyling: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(20),
    width: '100%',
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    paddingHorizontal: moderateScale(30),
    backgroundColor: Color.Main,
  },
});

export default FilterModal;
