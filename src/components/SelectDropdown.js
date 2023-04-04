import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useColorcheme,
  Dimensions,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const SelectDropdown = props => {
  //   const Theme = useColorcheme();
  //   useEffect(() => {}, [Theme]);
  return (
    <View>
      <Text
        style={{
          fontFamily: Font.Poppins400,
          color: '#838C9B',
          fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
          paddingHorizontal:w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20)
        }}>
        {props.text}
      </Text>

      <TouchableOpacity
        onPress={props.onPress}
        style={[
          styles.SelectBox,
          props.SelectBox,
          // Theme === 'dark'
          //   ? {
          //       backgroundColor: Color.inputBackColorDark,
          //       borderColor: Color.ThemeGrey,
          //       borderWidth: scale(1),
          //     }
          //   : {
          //       backgroundColor: Color.inputBackColor,
          //     },
        ]}>
        <View style={{flexDirection: 'row'}}>
          {props.image ? (
            <Image style={styles.flag} source={props.source} />
          ) : null}
          <Text
            style={[
              styles.GeneralText,
              props.GeneralText,
              // Theme === 'dark' ? {color: Color.White} : {color: Color.Grey},
            ]}>
            {props.title}
          </Text>
        </View>
        <Entypo
          name="chevron-down"
          size={w >= 768 && h >= 1024 ? scale(17) : scale(24)}
          color={Color.Black}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  GeneralText: {
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
    fontFamily: Font.Poppins400,
    color: Color.DropDownText
  },
  SelectBox: {
    height: w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(45),
    backgroundColor: Color.InputColor,
    borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(16),
    marginHorizontal: '5%',
    paddingHorizontal: verticalScale(20),
    flexDirection: 'row',
    marginTop: verticalScale(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  flag: {
    width: w >= 768 && h >= 1024 ? scale(20) : scale(20),
    height: w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(16),
    marginRight: scale(10),
    top: w >= 768 && h >= 1024 ? verticalScale(3) : 0,
  },
});

export default SelectDropdown;
