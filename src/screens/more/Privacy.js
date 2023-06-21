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
  useWindowDimensions,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Color} from '../../utils/Colors';
import {verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import CustomNavigator from '../../components/CustomNavigator';
import { base_Url } from '../../utils/Url';
import { useState } from 'react';
import RenderHtml from 'react-native-render-html';
import { useSelector } from 'react-redux';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Privacy = ({navigation}) => {
  const Theme = useSelector(state => state.mode)
  const [data,setData] = useState('')
  const { width } = useWindowDimensions();
  const applanguage = useSelector(state => state.applanguage)
  const language = useSelector(state => state.language)

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    getPrivacy()
  }, []);


const type = 'Privacy'
  const getPrivacy = async () => {
    try {

      let base_url = `${base_Url}show-about`;
      let myData = new FormData();
      
      myData.append('type',type);
      myData.append('language',language);

      const response = await fetch(base_url, {
        body: myData,
        method: 'post',
      });

      const responseData = await response.json();

      if (responseData.success.status === 200) {
        setData(responseData.success.data.description)
      }
      
    } catch (error) {
      console.log('error', error)
    }
  }
  const source = {
    html: data
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        }}>
        <StatusBar
          backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}
          barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Header
          text={applanguage.PrivacyPlain}
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
                backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
              },
            ]}>
              <RenderHtml
      contentWidth={width}
      source={source}
    />
            {/* <View style={{marginVertical: verticalScale(20)}}>
              <Text
                style={[
                  styles.TextStyle,
                  {
                    color: Theme === 'dark' ? Color.White : Color.Black,
                  },
                ]}>
                Privacy Policy
              </Text>
              <Text
                style={[
                  styles.TextStyle,
                  {
                    color: Theme === 'dark' ? Color.White : Color.Black,
                  },
                ]}>
                INTRODUCTION
              </Text>
            </View>
            <Text
              style={[
                styles.TextStyle,
                {
                  color: Theme === 'dark' ? Color.White : Color.Black,
                },
              ]}>
              Kirista is dedicated to protecting your personal information and
              informing you about how we use your information. This privacy
              policy applies to your use of our services including our Mobile
              App and services (collectively “Platform”). We operate this mobile
              application, a digital reading platform that enables brethren read
              RCCG books using a variety of electronic devices, software
              applications, and other services.
            </Text>
            <Text
              style={[
                {
                  marginTop: verticalScale(10),
                  color: Theme === 'dark' ? Color.White : Color.Black,
                },
                styles.TextStyle,
              ]}>
              This Privacy Policy should be read in conjunction with the Terms
              of Use and is integrated into the Terms of Use. All capitalized
              proper nouns not defined in this Agreement will have the same
              definitions and meanings as defined by the Terms of If you do not
              agree to these Terms of Use, you should not review information
              from this Mobile App. We have the total right to edit or delete
              any content in this Mobile Platform, including this Agreement,
              without notifying you.
            </Text>
            <Text
              style={[
                {
                  marginTop: verticalScale(10),
                  color: Theme === 'dark' ? Color.White : Color.Black,
                },
                styles.TextStyle,
              ]}>
              Kirista is dedicated to protecting your personal information and
              informing you about how we use your information. This privacy
              policy applies to your use of our services including our Mobile
              App and services (collectively “Platform”). We operate this mobile
              application, a digital reading platform that enables brethren read
              RCCG books using a variety of electronic devices, software
              applications, and other services.
            </Text>
            <Text
              style={[
                {
                  marginTop: verticalScale(10),
                  color: Theme === 'dark' ? Color.White : Color.Black,
                },
                styles.TextStyle,
              ]}>
              This Privacy Policy should be read in conjunction with the Terms
              of Use and is integrated into the Terms of Use. All capitalized
              proper nouns not defined in this Agreement will have the same
              definitions and meanings as defined by the Terms of Use. This
              Privacy Policy should be read in conjunction with the Terms of Use
              and is integrated into the Terms of Use. All capitalized proper
              nouns not defined in this Agreement will have the same definitions
              and meanings as defined by the Terms of If you do not agree to
              these Terms of Use, you should not review information from this
              Mobile App. We have the total right to edit or delete any content
              in this Mobile Platform, including this Agreement, without
              notifying you.
            </Text> */}
          </View>
          
        </ScrollView>
        <View
          style={{
            width: '100%',
            backgroundColor: Color.White,
            justifyContent: 'center',
          }}>
          <CustomNavigator />
        </View>
      </View>
    </>
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
