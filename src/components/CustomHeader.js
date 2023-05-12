import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Font} from '../assets/fonts/PoppinsFont';
import {scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import Time from '../assets/icons/time.svg';
import Share from '../assets/icons/share.svg';
import ShareDark from '../assets/icons/share_dark.svg';
import Save from '../assets/icons/save.svg';
import SaveDark from '../assets/icons/save_dark.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomHeader = props => {
  const navigation = useNavigation();
  const Theme = useColorScheme() === 'dark';
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
    if (props.onPress) {
      props.onPress(!isChecked);
    }
  };

  const Bookmark = isChecked ? 'bookmark-plus' : 'bookmark-plus-outline';
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
                  w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(20)
                }
                width={scale(24)}
              />
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity style={styles.IconStyle}>
            {props.saveicon ? (
              // Theme ? (
              //   <SaveDark
              //     height={
              //       w >= 768 && h >= 1024
              //         ? verticalScale(14)
              //         : verticalScale(20)
              //     }
              //     width={scale(24)}
              //   />
              // ) : (
              //   <Save
              //     height={
              //       w >= 768 && h >= 1024
              //         ? verticalScale(14)
              //         : verticalScale(20)
              //     }
              //     width={scale(24)}
              //   />
              // )
              <TouchableOpacity onPress={handlePress}>
                <MaterialCommunityIcons
                  name={Bookmark}
                  size={w >= 768 && h >= 1024 ? scale(15) : scale(23)}
                  color={Color.Main}
                />
              </TouchableOpacity>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity>
            {props.shareicon ? (
             <FontAwesome name='share-square-o'   size={w >= 768 && h >= 1024 ? scale(14) : scale(22)}
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
    height: w >= 768 && h >= 1024 ? verticalScale(70) : verticalScale(80),
    justifyContent: 'center',
    paddingTop: verticalScale(10),
  },

  NavigatorStyle: {
    //
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    // marginTop: scale(10),
    flexDirection: 'row',
  },
  IconStyle: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(4) : verticalScale(8),
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(11) : scale(18),
    fontFamily: Font.Poppins500,
    color: Color.Black,
    // marginBottom: scale(5),
    // // backgroundColor: 'red',
  },
});
