import {StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import {Color} from '../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomNavigator = props => {
  return (
    <View style={{height:verticalScale(80),justifyContent:'center'}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: w >= 768 && h >= 1024 ? '30%' : '55%',
          alignSelf: 'center',


          // paddingHorizontal:verticalScale(30),

          marginVertical: verticalScale(20),
        }}>
        <View style={styles.ArrowStyle}>
          <Ionicons
            name="chevron-back"
            size={w >= 768 && h >= 1024 ? scale(10) : scale(20)}
            color="black"
          />
        </View>
        <View style={styles.LoadStyle}>
          <AntDesign
            name="reload1"
            size={w >= 768 && h >= 1024 ? scale(10) : scale(20)}
            color="black"
          />
        </View>
        <View style={styles.ArrowStyle}>
          <Ionicons
            name="chevron-forward"
            size={w >= 768 && h >= 1024 ? scale(10) : scale(20)}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

export default CustomNavigator;

const styles = StyleSheet.create({
  LoadStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(10),
    borderColor: Color.Black,
    borderWidth: 2,
    height: w >= 768 && h >= 1024 ? verticalScale(19) : verticalScale(35),
    width: w >= 768 && h >= 1024 ? verticalScale(19) : verticalScale(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ArrowStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(10),
    borderColor: Color.Black,
    borderWidth: 2,
    height: w >= 768 && h >= 1024 ? verticalScale(17) : verticalScale(30),
    width: w >= 768 && h >= 1024 ? verticalScale(17) : verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
