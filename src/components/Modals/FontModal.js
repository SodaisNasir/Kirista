import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

const FontModal = props => {

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [selected, setSelected] = useState();
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      label: 'Arial',
    },
    {
      id: '2',
      label: 'Courier',
    },
    {
      id: '2',
      label: 'Georgia',
    },
    {
      id: '3',
      label: 'Lata',
    },
    {
      id: '5',
      label: 'Papyrus',
    },
    {
      id: '6',
      label: 'Times New Romans',
    },
  ];

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Modal
        testID={'modal'}
        style={styles.modalStyling}
        backdropOpacity={0.7}
        onBackdropPress={props.onBackdropPress}
        onRequestClose={props.onRequestClose}
        onPress={() => setModalVisible(false)}
        isVisible={props.isVisible}
        swipeDirection="down"
        onSwipeComplete={props.onSwipeComplete}>
        <View
          style={[
            {
              borderTopRightRadius:
                w >= 768 && h >= 1024 ? scale(20) : scale(22),
              borderTopLeftRadius:
                w >= 768 && h >= 1024 ? scale(20) : scale(22),
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            },
            styles.modalView,
          ]}>
          <View
            style={{
              marginVertical: verticalScale(20),
            }}>
            <Text
              style={[
                ,
                {fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18)},
                styles.BigTextStyle,
              ]}>
              Font Type
            </Text>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={{}}>
                  <TouchableOpacity
                    style={{marginBottom: verticalScale(20)}}
                    onPress={props.OptionSelect}>
                    <View
                      style={{
                        // flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomColor:Color.BorderColor,
                        borderBottomWidth:0.5,
                       
                      }}>
                      <View style={{  }}>
                        <Text
                          style={[
                            {
                              fontSize:
                                w >= 768 && h >= 1024 ? scale(8) : scale(16)
                            },
                            styles.SmallTextStyle,
                          ]}>
                          {item.label}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
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
    // alignItems: 'center',
    paddingVertical: moderateScale(20),
    width: '100%',
   
    backgroundColor: Color.White,

    height: '65%',
  },
  BigTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins700,
    textAlign: 'left',
  },
  SmallTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins400,
    textAlign: 'left',
  },
});

export default FontModal;
