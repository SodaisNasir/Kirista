import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  useColorScheme,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Font} from '../assets/fonts/PoppinsFont';
import {moderateVerticalScale, scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import Time from '../assets/icons/time.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomHeader = props => {
  const navigation = useNavigation();
  const Theme = useColorScheme() === 'dark';
  const [isChecked, setIsChecked] = useState(false);
  const iosTab = w >= 820 && h >= 1180;

  return (
    <View
      style={[
        styles.AuthHeaderStyle,
        props.AuthHeaderStyle,
        {
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        },
      ]}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
         

          marginBottom:
            w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(8),
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
           marginTop: Platform.OS == 'ios' && w >= 768 && h >= 1024
            ? verticalScale(20) : 0
        }}>
        <View style={styles.NavigatorStyle}>
          <AntDesign
            name="arrowleft"
            size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
            color={Theme ? Color.White : Color.Black}
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(10),
            }}>
            <Text
              style={[
                styles.WelcomeText,
                {
                  color: Theme ? Color.White : Color.DarkTextColor,
                },
              ]}>
              {props.text}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
         
            // 
          }}>
          <TouchableOpacity style={styles.IconStyle}>
            {props.timeicon ? (
              <Time
                height={
                  w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(20)
                }
                width={scale(24)}
              />
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity style={styles.IconStyle}>
            {props.saveicon ? (
              <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                <MaterialCommunityIcons
                  name={isChecked ? 'bookmark-plus' : 'bookmark-plus-outline'}
                  size={w >= 768 && h >= 1024 ? scale(15) : scale(25)}
                  color={Color.Main}
                  style={{  right: Platform.OS === 'ios' ? iosTab? 4 : 0 : 0}}
                />
              </TouchableOpacity>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity style={styles.IconStyle}>
            {props.shareicon ? (
             <FontAwesome name='share-square-o'   size={w >= 768 && h >= 1024 ? scale(13) : scale(21)}
             color={Color.Main}
             />
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(50) : w <= 450 && h <= 750 ? verticalScale(60) : verticalScale(30),
    justifyContent: Platform.OS == 'android' ? 'center' : w <= 450 && h <= 750 ? 'flex-end' : null,
    paddingTop:Platform.OS == 'android' ? moderateVerticalScale(25) : 0
  },

  NavigatorStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  IconStyle: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(6),
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(11) : scale(18),
    fontFamily: Font.Poppins500,
    color: Color.Black,
  },
});
