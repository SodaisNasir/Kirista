import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Platform,
  useWindowDimensions,
  ActivityIndicator,

} from 'react-native';
import React from 'react';
import {Color} from '../../utils/Colors';
import {verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import {useLayoutEffect} from 'react';
import RenderHtml from 'react-native-render-html';
import { useState } from 'react';
import { base_Url } from '../../utils/Url';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Terms = ({navigation}) => {
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const language = useSelector(state => state.language)
  const [Loading, setLoading] = useState(false);

  const [data,setData] = useState('')
  const { width } = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
    getTerms()
  }, []);
  const type = 'Terms'
  const getTerms = async () => {
    setLoading(true)
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
        setLoading(false)
      }
      
    } catch (error) {
      console.log('error', error)
      setLoading(false)
    }
  }

  const source = {
    html: data
  };
  return (
    < >
<SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
        <StatusBar backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor }/>

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
          text={applanguage.TermsPlain}
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
         {Loading ? (
          <ActivityIndicator style={{marginTop:'70%'}} color={Color.Main} size="large" />
        ) : (
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
        </View>
  
          </ScrollView>
        )}
       


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
