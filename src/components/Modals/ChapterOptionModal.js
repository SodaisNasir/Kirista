import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
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

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ChapterOptionModal = props => {
  const [selected, setSelected] = useState();
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      label: 'Title',

    },
    {
      id: '2',
      label: 'Recent Activity',
    
    },
  ];

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
        <View style={[styles.modalView]}>
          <View
            style={{
              marginVertical:verticalScale(20 )
            }}>
            <Text style={styles.BigTextStyle}>Sort By</Text>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                   
                  }}>
                  <TouchableOpacity
                    style={{marginBottom:verticalScale(10)}}
                    onPress={() => setSelected(item.id)}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                      <View style={{}}>
                        <Text style={styles.SmallTextStyle}>{item.label}</Text>
                      </View>

                      <View
                        style={{
                          justifyContent: 'center',
                          // backgroundColor: 'yellow',
                      
                        }}>
                        <View
                          style={{
                            height: scale(20),
                            width: scale(20),
                            backgroundColor: Color.White,
                            borderRadius: scale(50),
                            borderColor: Color.Black,
                            borderWidth: scale(1.5),
                            marginBottom: verticalScale(15),
                          }}>
                          {selected == item.id ? (
                            <View
                              style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: scale(80),
                              }}>
                              <View
                                style={{
                                  height: scale(10),
                                  width: scale(10),
                                  backgroundColor: Color.Black,
                                  borderRadius: scale(50),
                                }}
                              />
                            </View>
                          ) : null}
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <View style={{marginVertical:verticalScale(15)}}>
          <CustomButton text={"Apply"}/>

          </View>
          
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
    borderTopRightRadius: w >= 768 && h >= 1024 ? scale(20) : scale(22),
    borderTopLeftRadius: w >= 768 && h >= 1024 ? scale(20) : scale(22),
    backgroundColor: Color.White,
    paddingHorizontal:  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
  },
  BigTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(18),
    textAlign: 'left',
  },
  SmallTextStyle:{color: Color.DarkTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(16),
    textAlign: 'left',}
});

export default ChapterOptionModal;
