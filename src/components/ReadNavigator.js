import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  useColorScheme,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import SettingsDark from '../assets/icons/settings.svg';
import Settings from '../assets/icons/settings_light.svg';
import SettingsPress from '../assets/icons/settings_press.svg';
import Sun from '../assets/icons/sun.svg';
import SunBlack from '../assets/icons/sun_black.svg';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ReadNavigator = props => {
  const Theme = useColorScheme() === 'dark';

  const [showSvg, setShowSvg] = useState(false);

  const toggleIcon = () => {
    setShowSvg(!showSvg);
  };

  return (
    <View
      style={[
        styles.container,
        props.reStyle,
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
      ]}>
      <View style={styles.BoxStyle}>
        <TouchableOpacity onPress={props.onPressTab} style={styles.tabButton}>
          <FontAwesome5 name="list-ul" size={24} color="#8E8E93" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleIcon} style={styles.tabButton}>
          {showSvg ? (
            Theme ? (
              <Sun
                height={
                  w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(26)
                }
                width={scale(24)}
              />
            ) : (
              <SunBlack
                height={
                  w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(24)
                }
                width={scale(24)}
              />
            )
          ) : (
            <Feather
              name="moon"
              size={w >= 768 && h >= 1024 ? scale(12) : scale(24)}
              color="#374957"
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressModal} style={styles.tabButton}>
          {Theme ? (
            <SettingsDark
              height={
                w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(24)
              }
              width={scale(24)}
            />
          ) : (
            <Settings
              height={
                w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(24)
              }
              width={scale(24)}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(85),
  },
  BoxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'baseline',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(40),
    marginTop: verticalScale(10),
    // backgroundColor:'red'
  },
  tabButton: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
});

export default ReadNavigator;
