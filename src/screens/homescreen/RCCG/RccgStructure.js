import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
  Image,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import React, {useCallback} from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/Header';
import CustomNavigator from '../../../components/CustomNavigator';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getRCCData } from '../../../redux/actions/UserAction';
import { useState } from 'react';
import RenderHtml from 'react-native-render-html';
import { useEffect } from 'react';

const RccgStructure = ({navigation}) => {
  const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const language = useSelector(state => state.language);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const type = 'RCCG Structure';

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  useEffect(() => {
    getRCCData(setData,type,language,setLoader)
  },[show])


  const onSubmit = () => {
    setShow(!show)
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }
  let result = data?.length > 0 && data?.replace("<p>",`<p style='color: ${Theme === 'dark' ? Color.White : Color.Black};'>`)
  const source = {
    html: result,
  };
  return (
    <>
    <SafeAreaView style={{ backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,}} />
       <View
      style={[
        {
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
        <StatusBar backgroundColor={ Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}/>
      <Header text={'RCCG Structure'} />   
    {loader ? 
     <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
     <ActivityIndicator
          size="large"
          color={Theme === 'dark' ? Color.White : Color.Main}
          />   
          </View>
        :    <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(22),
          }}>
          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(100),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(30),
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(5),
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/rccg_logo.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <RenderHtml contentWidth={w} source={source} />

          <View
            style={{
              borderColor: Theme === 'dark' ? Color.DarkBorderColor : Color.BorderColor,
              borderWidth: 1,
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              alignItems: 'center',
              marginVertical: verticalScale(15),
              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(20),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                fontFamily: Font.Poppins500,
                color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
              }}>
              Pastor E.A. Adeboye
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                fontFamily: Font.Poppins700,
                color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
              }}>
              General Overseer, RCCG World Wide
            </Text>
          </View>

          {/* <View
            style={{
              borderColor: Theme === 'dark' ? Color.DarkBorderColor : Color.BorderColor,
              borderWidth: 1,
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          /> */}
          {/* <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(15),
            }}>
            <CustomButton restyle={{width: '95%'}} text={'Read More'} />
          </View> */}
        </View>
        <View style={{height: verticalScale(55)}} />
      </ScrollView>}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: Color.White,
        }}>
        <CustomNavigator 
          onPressLeft={() => navigation.navigate('Rccg')}
          onPressFresh={() => onSubmit()}
          onPressRight={() => navigation.navigate('RccgContinent')}
        />
      </View>
    </View>
    </>
 
  );
};

export default RccgStructure;

const styles = StyleSheet.create({});
