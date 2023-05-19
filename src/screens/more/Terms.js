import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useCallback} from 'react';
import {Color} from '../../utils/Colors';
import {verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import CustomNavigator from '../../components/CustomNavigator';
import {useFocusEffect} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Terms = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';

  useLayoutEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
        <StatusBar backgroundColor={Theme ? Color.ExtraViewDark : Color.HeaderColor }/>
      <View
        style={{
          flex: 1,
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        }}>
        <StatusBar
          backgroundColor={Theme ? Color.ExtraViewDark : Color.HeaderColor}
          barStyle={Theme ? 'light-content' : 'dark-content'}
        />
        <Header
          text={'Terms'}
          AuthHeaderStyle={{
            height:
              Platform.OS == 'android'
                ? verticalScale(80)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w >= 768 && h >= 1024
                ? verticalScale(65)
                : w <= 450 && h <= 750
                ? verticalScale(50)
                : verticalScale(45),
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.Container,
              {
                backgroundColor: Theme ? Color.DarkTheme : Color.White,
              },
            ]}>
            <View style={{marginVertical: verticalScale(12)}}>
              <Text
                style={[
                  styles.TextStyle,
                  {color: Theme ? Color.White : Color.DarkTextColor},
                ]}>
                Terms of Use
              </Text>
            </View>
            <Text
              style={[
                styles.TextStyle,
                {
                  color: Theme ? Color.White : Color.Black,
                },
              ]}>
              This platform is powered by RCCG Africa Continent 2 and developed
              by IDC Platforms Limited ("we", "us" or "our"). The use, content
              and information available on this Mobile App shall be subject to
              acceptance of and compliance with the terms and conditions set
              forth in these terms of use and elsewhere on this Mobile App. The
              terms "you," "your", "yours", "member" "members" and "yourself"
              refer to all visitors/members to this Mobile App. Your agreement
              to comply with and be bound by these Terms of Use is deemed to
              occur upon your first use of the Mobile App.
            </Text>
            <Text
              style={[
                styles.TextStyle,
                {
                  color: Theme ? Color.White : Color.Black,
                },
              ]}>
              If you do not agree to these Terms of Use, you should not review
              information from this Mobile App. We have the total right to edit
              or delete any content in this Mobile Platform, including this
              Agreement, without notifying you.
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            backgroundColor: Color.White,
          }}>
          <CustomNavigator />
        </View>
      </View>
    </>
  );
};

export default Terms;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
  },
  TextStyle: {
    fontFamily: Font.Libre400,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
});
