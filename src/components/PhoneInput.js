import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  useColorScheme
} from 'react-native';
import React from 'react';
import {Font} from '../assets/fonts/PoppinsFont';
import {Color} from '../utils/Colors';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const PhoneInput = props => {
  const Theme = useColorScheme();
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          fontFamily: Font.Poppins400,
          color: Color.TextColor,
          fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
        }}>
        {props.text}
      </Text>
      <View
        style={{
          height: w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(45),
          backgroundColor:  Theme?  Color.DarkThemeInputBox : Color.InputBoxColor,
          borderRadius: w >= 768 && h >= 1024 ? scale(8) : scale(12),
          paddingHorizontal: verticalScale(20),
          marginTop: verticalScale(2),
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Countrycode')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: w >= 768 && h >= 1024 ? scale(15) : scale(25),
              height:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              flexDirection: 'row',
              marginTop: '-3%',
            }}>
            <Image
              source={require('../assets/images/nig.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
          <View style={{paddingHorizontal: moderateScale(5)}}>
            <Text
              style={{
                color: Theme?  Color.White : Color.TextColor,
                fontFamily: Font.Poppins400,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
              }}>
              {' '}
              +234
            </Text>
          </View>
          <AntDesign
            name="down"
            size={w >= 768 && h >= 1024 ? scale(11) : scale(18)}
            color={Theme?  Color.White : Color.Black}
            style={{
             
            }}
          />
        </TouchableOpacity>

        <TextInput
          placeholder={props.placeholder}
          keyboardType='numeric'
          placeholderTextColor={'UnderInputColor'}
          style={{
            fontSize:w >= 768 && h >= 1024 ? scale(9) : scale(15),
            fontFamily: Font.Poppins400,
            paddingLeft:moderateScale(5),
            // width: '80%',

            flex:1
            
          }}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({});
