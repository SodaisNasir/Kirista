import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from './../utils/font';
import {Color} from './../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import FilterList from '../assets/icons/filter_list.svg';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const LibraryHeader = props => {
  const navigation = useNavigation();
  const Theme = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.AuthHeaderStyle,
        {
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        },
      ]}>
      <StatusBar
        backgroundColor={Theme ? Color.ExtraViewDark : Color.HeaderColor}
        barStyle={Theme ? 'light-content' : 'dark-content'}
      />
      <View style={styles.NavigatorStyle}>
        <Text
          style={[
            styles.WelcomeText,
            {
              color: Theme ? Color.White : Color.DarkTheme,
            },
          ]}>
          Library
        </Text>

        <View
          style={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(16),
            width:
              w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(25),
            alignSelf: 'center',
          }}>
          <TouchableOpacity onPress={props.onPress}>
            <FilterList width={'100%'} height={'100%'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LibraryHeader;

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(50) : w <= 450 && h <= 750 ? verticalScale(60) : verticalScale(40),
    justifyContent: w <= 450 && h <= 750 ? 'flex-end' : null,
    paddingTop: verticalScale(10),
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(19),
    fontFamily: Font.Poppins500,
    color: Color.Black,
    paddingHorizontal: verticalScale(15),
  },
  NavigatorStyle: {
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),
    // justifyContent: 'center',

    // marginTop: scale(10),
  },
});
