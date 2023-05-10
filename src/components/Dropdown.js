import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Color} from '../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Font} from '../utils/font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const Tab =  w >= 768 && h >= 1024 ;

const Dropdown = (data) => {
  const Theme = useColorScheme() === 'dark';

  const [Dropdown, setDropdown] = useState(false);

  const ShowDropdown = () => {
    setDropdown(!Dropdown);
  };
  console.log('data ===>', data)

  return (
    <>
      <Text
        style={{
          fontFamily: Font.Poppins400,
          color: '#838C9B',
          fontSize:Tab ? scale(9) : scale(14),
        }}>
        {data.text}
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={ShowDropdown}
        style={[
          {
            backgroundColor: Theme
              ? Color.DarkThemeInputBox
              : Color.InputBoxColor,
          },
          styles.SelectBox,
          data.RestyleSelectBox,
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.GeneralText, data.RestyleGeneralText]}>
            {data.title}
          </Text>
        </View>
        <Entypo
          name={Dropdown == false ? 'chevron-down' : `chevron-up`}
          size={Tab ? scale(17) : scale(24)}
          color={Theme ? Color.White : Color.Black}
        />
      </TouchableOpacity>
      {Dropdown && (
        <View style={[styles.DropDownBox,{borderColor: Theme ? Color.White : Color.Black,}]}>
          <View style={[styles.DropdownInsideBox,{ borderColor:Theme ? '#fff' : Color.Black,}]}>
            <TextInput style={styles.TextInput} placeholder="Type here..." />
            <Ionicons
              name="search"
              size={Tab ? scale(15) : scale(20)}
              color={Theme ? Color.White : Color.Black}
            />
          </View>
          <View style={{paddingHorizontal: moderateScale(15),}}>
            <Text style={[styles.Please,{ color:Theme ? Color.White : Color.Black,}]}>Please select</Text>
            <Text style={[styles.Heading,{color:Theme ? Color.InputBoxColor : '#202125'}]}>{data.Heading1}</Text>
            <Text style={[styles.Heading,{color:Theme ? Color.InputBoxColor : '#202125'}]}>{data.Heading2}</Text>
            <Text style={[styles.Heading,{color:Theme ? Color.InputBoxColor : '#202125'}]}>{data.Heading3}</Text>

            {/* <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {data.itemOne1}</Text> */}
           {/*  <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {props.itemOne2}</Text>
            <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {props.itemOne3}</Text> */}

            {/* <Text style={[styles.Heading,{color:Theme ? Color.InputBoxColor : '#202125'}]}>{props.Heading2}</Text>
            <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {props.ItemTwo1}</Text>
            <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {props.ItemTwo2}</Text>
            <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {props.ItemTwo3}</Text>

            <Text style={[styles.Heading,{color:Theme ? Color.InputBoxColor : '#202125'}]}>{props.Heading3}</Text>
            <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {props.ItemThree1}</Text>
            <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {props.ItemThree2}</Text>
            <Text style={[styles.Title,{color:Theme ? Color.White : Color.BlackText}]}>• {props.ItemThree3}</Text> */}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  GeneralText: {
    fontSize: Tab ? scale(9) : scale(13),
    fontFamily: Font.Poppins400,
    color: Color.DropDownText,
  },
  SelectBox: {
    height: Tab ? verticalScale(35) : verticalScale(45),
    borderRadius: Tab ? scale(8) : scale(16),
    paddingHorizontal: verticalScale(20),
    flexDirection: 'row',
    marginTop: verticalScale(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextInput: {
    width: '90%',
    fontSize: Tab ? scale(10) : scale(14),
    fontFamily:Font.Poppins500,
    top: Tab ? verticalScale(3) :verticalScale(1.3)
  },
  DropDownBox: {
    width: '100%',
    paddingVertical: moderateVerticalScale(10),
    marginTop: verticalScale(10),
    borderRadius: scale(10),
    paddingHorizontal: moderateScale(10),
    borderWidth: scale(1),
    
  },
  DropdownInsideBox: {
    borderWidth: scale(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    borderRadius: scale(10),
    paddingVertical: Tab ? moderateVerticalScale(5) : 0
  },
  Please:{
    fontSize: Tab ? scale(10) : scale(14),
    fontFamily:Font.Poppins700,
    marginTop:verticalScale(10)
  },
  Heading:{
    fontSize: Tab ? scale(10) : scale(14),
    fontFamily:Font.Poppins700,
    textDecorationLine:'underline',
    marginVertical:verticalScale(5)
  },
  Title:{
    fontSize: Tab ? scale(8) : scale(12),
    fontFamily:Font.Poppins500,
  }
});
export default Dropdown;
