import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
  StatusBar,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Color} from '../../utils/Colors';
import {verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import CustomNavigator from '../../components/CustomNavigator';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Privacy = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <StatusBar
        backgroundColor={Theme ? Color.ExtraViewDark : Color.HeaderColor}
        barStyle={Theme ? 'light-content' : 'dark-content'}
      />
      <Header text={'Privacy'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.Container,
            {
              backgroundColor: Theme ? Color.DarkTheme : Color.White,
            },
          ]}>
          <View style={{marginVertical: verticalScale(20)}}>
            <Text
              style={[
                styles.TextStyle,
                {
                  color: Theme ? Color.White : Color.Black,
                },
              ]}>
              Privacy Policy
            </Text>
            <Text
              style={[
                styles.TextStyle,
                {
                  color: Theme ? Color.White : Color.Black,
                },
              ]}>
              INTRODUCTION
            </Text>
          </View>
          <Text
            style={[
              styles.TextStyle,
              {
                color: Theme ? Color.White : Color.Black,
              },
            ]}>
            Kirista is dedicated to protecting your personal information and
            informing you about how we use your information. This privacy policy
            applies to your use of our services including our Mobile App and
            services (collectively “Platform”). We operate this mobile
            application, a digital reading platform that enables brethren read
            RCCG books using a variety of electronic devices, software
            applications, and other services.
          </Text>
          <Text
            style={[
              {
                marginTop: verticalScale(10),
                color: Theme ? Color.White : Color.Black,
              },
              styles.TextStyle,
            ]}>
            This Privacy Policy should be read in conjunction with the Terms of
            Use and is integrated into the Terms of Use. All capitalized proper
            nouns not defined in this Agreement will have the same definitions
            and meanings as defined by the Terms of If you do not agree to these
            Terms of Use, you should not review information from this Mobile
            App. We have the total right to edit or delete any content in this
            Mobile Platform, including this Agreement, without notifying you.
          </Text>
          <Text
            style={[
              {
                marginTop: verticalScale(10),
                color: Theme ? Color.White : Color.Black,
              },
              styles.TextStyle,
            ]}>
            Kirista is dedicated to protecting your personal information and
            informing you about how we use your information. This privacy policy
            applies to your use of our services including our Mobile App and
            services (collectively “Platform”). We operate this mobile
            application, a digital reading platform that enables brethren read
            RCCG books using a variety of electronic devices, software
            applications, and other services.
          </Text>
          <Text
            style={[
              {
                marginTop: verticalScale(10),
                color: Theme ? Color.White : Color.Black,
              },
              styles.TextStyle,
            ]}>
            This Privacy Policy should be read in conjunction with the Terms of
            Use and is integrated into the Terms of Use. All capitalized proper
            nouns not defined in this Agreement will have the same definitions
            and meanings as defined by the Terms of Use. This Privacy Policy
            should be read in conjunction with the Terms of Use and is
            integrated into the Terms of Use. All capitalized proper nouns not
            defined in this Agreement will have the same definitions and
            meanings as defined by the Terms of If you do not agree to these
            Terms of Use, you should not review information from this Mobile
            App. We have the total right to edit or delete any content in this
            Mobile Platform, including this Agreement, without notifying you.
          </Text>
        </View>
        <View style={{height: verticalScale(90)}} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: Color.White,
          justifyContent: 'center',
        }}>
        <CustomNavigator />
      </View>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
  },
  TextStyle: {
    // color: Color.DarkTextColor,
    fontFamily: Font.Libre400,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
});
